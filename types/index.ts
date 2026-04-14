import type { ReactNode } from "react";

export type SectionKey = "words" | "sentences" | "idioms" | "games";
export type AccessTier = "free" | "premium";
export type SentenceLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface UserProfile {
  id: string;
  user_id: string;
  is_premium: boolean;
  streak: number;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  section: SectionKey;
  href: string;
  access: AccessTier;
  isFree: boolean;
  order: number;
  badge?: string;
}

export interface SentenceCategory extends Category {
  level?: SentenceLevel;
  topics?: WordTopic[];
}

export interface WordActivity {
  id: string;
  name: string;
  description: string;
  href: string;
}

export interface WordSubcategory {
  id: string;
  name: string;
  description: string;
}

export interface WordTopic {
  id: string;
  name: string;
  description: string;
  href?: string;
  activities?: WordActivity[];
  subcategories?: WordSubcategory[];
  access?: "free" | "premium";
  isFree?: boolean;
}

export interface WordCategory extends Category {
  topics?: WordTopic[];
}

export interface QuickLink {
  id: SectionKey;
  title: string;
  subtitle: string;
  href: string;
  icon: ReactNode;
}

export interface NavItem {
  href: string;
  label: string;
  icon: ReactNode;
  match?: string[];
}

export interface LemonSqueezyWebhookPayload {
  meta?: {
    event_name?: string;
    custom_data?: {
      user_id?: string;
    };
  };
  data?: {
    id?: string;
    attributes?: {
      user_email?: string;
      status?: string;
    };
  };
}
