export const UI_COLORS = {
  background: "#050505",
  cyan: "#00E5FF",
  pink: "#FF3D71",
  yellow: "#FFD93D",
  purple: "#A855F7"
} as const;

export const PHRASAL_VERB_TOPIC_STYLES = {
  "work-career": { icon: "BriefcaseBusiness", color: "#22C55E" },
  "relationships-social": { icon: "Handshake", color: "#A855F7" },
  "mind-emotions": { icon: "Brain", color: "#3B82F6" },
  "daily-life": { icon: "CalendarDays", color: "#F97316" }
} as const;

export const UI_TEXT = {
  appName: "English to be",
  homeSubtitle: "Small steps. Real progress!",
  homeTitle: "Choose a Section & Start Learning!",
  dailyProgress: "Daily Progress",
  premiumCta: "Unlock Premium",
  premiumTitle: "Go Premium",
  premiumSubtitle: "Unlock everything · from $3.99/month.",
  premiumButton: "Go to Store",
  comingSoon: "Coming Soon",
  loginTitle: "Welcome back",
  signupTitle: "Create your account",
  loginSubtitle: "Sign in to continue your English progress.",
  signupSubtitle: "Start your learning path with synced progress and premium access.",
  emailLabel: "Email",
  passwordLabel: "Password",
  fullNameLabel: "Full name",
  authLoginButton: "Sign in",
  authSignupButton: "Sign up",
  authSignupSuccess: "Sign up successful.",
  authSwitchToSignup: "Create account",
  authSwitchToLogin: "Back to login",
  lockedLabel: "Premium",
  freeLabel: "Free",
  wordOfDayTitle: "Word of the Day",
  wordOfDayBefore: "Very tired",
  wordOfDayAfter: "Exhausted",
  wordOfDayDescription: "Completely drained of energy",
  allGamesLocked: "Games are included in Premium",
  webhooksOk: "Webhook processed"
} as const;

export const STREAK_DAYS = ["M", "T", "W", "T", "F", "S", "S"] as const;

export const PREMIUM_FEATURES = [
  "All Words categories",
  "All Idioms categories",
  "All Sentences categories",
  "All Grammar + Tenses categories",
  "My Vocabulary (unlimited words)",
  "Streaks & progress tracking",
  "All Games",
  "Future premium updates"
] as const;
