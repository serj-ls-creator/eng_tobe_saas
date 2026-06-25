import { Webhook } from "@creem_io/nextjs";
import { createSupabaseAdminClient } from "@/lib/supabase";

function resolveCustomerId(customer: string | { id: string } | undefined): string | null {
  if (!customer) return null;
  return typeof customer === "string" ? customer : customer.id;
}

export const POST = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,
  onRefundCreated: async ({ customer, transaction, ...refund }) => {
    const customerId = resolveCustomerId(customer as string | { id: string } | undefined)
      ?? resolveCustomerId((refund.object as { customer?: string | { id: string } }).customer);
    if (!customerId) {
      console.error("No Creem customer found on refund event:", refund);
      return;
    }

    const supabase = createSupabaseAdminClient();
    const { data: profile } = await supabase
      .from("profiles")
      .select("user_id")
      .eq("creem_customer_id", customerId)
      .maybeSingle();

    const userId = profile?.user_id;
    if (!userId) {
      console.error(`No Supabase profile linked to Creem customer ${customerId}`);
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        is_premium: false,
        creem_customer_id: customerId,
        creem_subscription_status: "refunded",
      })
      .eq("user_id", userId);

    if (error) {
      console.error(`Failed to revoke premium access after refund for user ${userId}:`, error);
      throw error;
    }
    console.log(`Successfully revoked premium access after refund for user ${userId}`);
  },
  onGrantAccess: async ({ reason, customer, metadata }) => {
    const userId = metadata?.referenceId as string;
    if (!userId) {
      console.error("No referenceId found in webhook metadata:", metadata);
      return;
    }

    // We only process paid or trialing events.
    // subscription_active is skipped because it is followed immediately by subscription_paid,
    // which would cause duplicate premium extensions.
    if (reason !== "subscription_paid" && reason !== "subscription_trialing") {
      console.log(`Skipping access grant for reason: ${reason} (will be handled by subscription_paid or subscription_trialing)`);
      return;
    }

    const supabase = createSupabaseAdminClient();
    
    // 1. Fetch current profile to check premium_expires_at
    const { data: profile, error: fetchError } = await supabase
      .from("profiles")
      .select("premium_expires_at")
      .eq("user_id", userId)
      .maybeSingle();

    if (fetchError) {
      console.error(`Failed to fetch profile for user ${userId}:`, fetchError);
      throw fetchError;
    }

    const now = new Date();
    let currentExpiresAt: Date | null = null;
    if (profile?.premium_expires_at) {
      currentExpiresAt = new Date(profile.premium_expires_at);
    }

    let newExpiresAt: Date;
    if (currentExpiresAt && currentExpiresAt > now) {
      newExpiresAt = new Date(currentExpiresAt);
      newExpiresAt.setMonth(newExpiresAt.getMonth() + 1);
    } else {
      newExpiresAt = new Date(now);
      newExpiresAt.setMonth(newExpiresAt.getMonth() + 1);
    }

    // 2. Update profiles table with the new expiry date
    const { error: updateError } = await supabase
      .from("profiles")
      .update({ 
        is_premium: true, 
        premium_expires_at: newExpiresAt.toISOString(),
        creem_customer_id: customer?.id ?? null,
        creem_subscription_status: "active",
      })
      .eq("user_id", userId);

    if (updateError) {
      console.error(`Failed to grant premium access to user ${userId}:`, updateError);
      throw updateError;
    }
    console.log(`Successfully granted premium access to user ${userId} until ${newExpiresAt.toISOString()}`);
  },
  onRevokeAccess: async ({ customer, metadata }) => {
    const userId = metadata?.referenceId as string;
    if (!userId) {
      console.error("No referenceId found in webhook metadata:", metadata);
      return;
    }

    const supabase = createSupabaseAdminClient();
    const { error } = await supabase
      .from("profiles")
      .update({ is_premium: false, creem_customer_id: customer?.id ?? null, creem_subscription_status: "canceled" })
      .eq("user_id", userId);

    if (error) {
      console.error(`Failed to revoke premium access from user ${userId}:`, error);
      throw error;
    }
    console.log(`Successfully revoked premium access from user ${userId}`);
  },
  onSubscriptionUpdate: async ({ customer, metadata, ...event }) => {
    const customerId = resolveCustomerId(customer as string | { id: string } | undefined)
      ?? resolveCustomerId((event.object as { customer?: string | { id: string } }).customer);
    const subscriptionStatus = (event.object as { status?: string })?.status;
    if (!subscriptionStatus) {
      return;
    }

    const isPremium = subscriptionStatus === "active" || subscriptionStatus === "trialing" || subscriptionStatus === "scheduled_cancel";

    const supabase = createSupabaseAdminClient();
    const profileQuery = customerId
      ? supabase.from("profiles").select("user_id").eq("creem_customer_id", customerId).maybeSingle()
      : supabase.from("profiles").select("user_id").eq("user_id", metadata?.referenceId as string).maybeSingle();
    const { data: profile } = await profileQuery;
    const userId = profile?.user_id;
    if (!userId) {
      console.error(`No Supabase profile linked to Creem customer ${customerId ?? metadata?.referenceId}`);
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        creem_customer_id: customerId,
        creem_subscription_status: subscriptionStatus,
        is_premium: isPremium,
      })
      .eq("user_id", userId);

    if (error) {
      console.error(`Failed to update subscription status for user ${userId}:`, error);
      throw error;
    }
    console.log(`Successfully updated subscription status for user ${userId} to ${subscriptionStatus}`);
  },
  onSubscriptionCanceled: async ({ customer, metadata, current_period_end_date }) => {
    const customerId = resolveCustomerId(customer as string | { id: string } | undefined);
    if (!customerId) {
      console.error("No Creem customer found for canceled subscription");
      return;
    }

    const supabase = createSupabaseAdminClient();
    const { data: profile } = await supabase
      .from("profiles")
      .select("user_id")
      .eq("creem_customer_id", customerId)
      .maybeSingle();

    const userId = profile?.user_id;
    if (!userId) {
      console.error(`No Supabase profile linked to Creem customer ${customerId}`);
      return;
    }

    const premiumUntil = current_period_end_date ? new Date(current_period_end_date) : null;
    const shouldRemainPremium = premiumUntil ? premiumUntil > new Date() : true;

    const { error } = await supabase
      .from("profiles")
      .update({
        creem_customer_id: customerId,
        creem_subscription_status: "scheduled_cancel",
        is_premium: shouldRemainPremium,
        premium_expires_at: premiumUntil ? premiumUntil.toISOString() : null,
      })
      .eq("user_id", userId);

    if (error) {
      console.error(`Failed to handle canceled subscription for user ${userId}:`, error);
      throw error;
    }
  },
  onSubscriptionExpired: async ({ customer, metadata }) => {
    const customerId = resolveCustomerId(customer as string | { id: string } | undefined);
    if (!customerId) {
      console.error("No Creem customer found for expired subscription");
      return;
    }

    const supabase = createSupabaseAdminClient();
    const { data: profile } = await supabase
      .from("profiles")
      .select("user_id")
      .eq("creem_customer_id", customerId)
      .maybeSingle();

    const userId = profile?.user_id;
    if (!userId) {
      console.error(`No Supabase profile linked to Creem customer ${customerId}`);
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        is_premium: false,
        creem_customer_id: customerId,
        creem_subscription_status: "expired",
      })
      .eq("user_id", userId);

    if (error) {
      console.error(`Failed to handle expired subscription for user ${userId}:`, error);
      throw error;
    }
  },
});
