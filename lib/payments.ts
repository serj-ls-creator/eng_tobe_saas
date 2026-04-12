import crypto from "node:crypto";

import { z } from "zod";

import type { LemonSqueezyWebhookPayload } from "@/types";

const checkoutRequestSchema = z.object({
  variantId: z.number().int().positive()
});

export function validateCheckoutRequest(payload: unknown): { variantId: number } {
  return checkoutRequestSchema.parse(payload);
}

function getLemonApiKey(): string {
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;

  if (!apiKey) {
    throw new Error("LEMONSQUEEZY_API_KEY is not configured.");
  }

  return apiKey;
}

function getStoreId(): string {
  const storeId = process.env.NEXT_PUBLIC_LEMONSQUEEZY_STORE;

  if (!storeId) {
    throw new Error("NEXT_PUBLIC_LEMONSQUEEZY_STORE is not configured.");
  }

  return storeId;
}

export async function createCheckoutUrl(payload: { variantId: number; userId: string; email: string }): Promise<string> {
  const response = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
    method: "POST",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${getLemonApiKey()}`
    },
    body: JSON.stringify({
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            email: payload.email,
            custom: {
              user_id: payload.userId
            }
          }
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: getStoreId()
            }
          },
          variant: {
            data: {
              type: "variants",
              id: String(payload.variantId)
            }
          }
        }
      }
    })
  });

  if (!response.ok) {
    throw new Error("Failed to create LemonSqueezy checkout.");
  }

  const json = (await response.json()) as {
    data?: {
      attributes?: {
        url?: string;
      };
    };
  };

  const checkoutUrl = json.data?.attributes?.url;

  if (!checkoutUrl) {
    throw new Error("Checkout URL is missing in LemonSqueezy response.");
  }

  return checkoutUrl;
}

export function verifyWebhookSignature(rawBody: string, signature: string | null): boolean {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

  if (!secret || !signature) {
    return false;
  }

  const digest = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
}

export function parseWebhookPayload(rawBody: string): LemonSqueezyWebhookPayload {
  const schema = z.object({
    meta: z
      .object({
        event_name: z.string().optional(),
        custom_data: z
          .object({
            user_id: z.string().optional()
          })
          .optional()
      })
      .optional(),
    data: z
      .object({
        id: z.string().optional(),
        attributes: z
          .object({
            user_email: z.string().optional(),
            status: z.string().optional()
          })
          .optional()
      })
      .optional()
  });

  return schema.parse(JSON.parse(rawBody));
}
