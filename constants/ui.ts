export const UI_COLORS = {
  background: "#050505",
  cyan: "#00E5FF",
  pink: "#FF3D71",
  yellow: "#FFD93D",
  purple: "#A855F7"
} as const;

export const UI_TEXT = {
  appName: "English to be",
  homeSubtitle: "Keep your streak alive!",
  homeTitle: "Quick Start",
  dailyProgress: "Daily Progress",
  premiumCta: "Unlock Premium",
  premiumTitle: "Go Premium",
  premiumSubtitle: "Unlock all categories, games, and advanced levels.",
  premiumButton: "Continue with LemonSqueezy",
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
  authSignupSuccess: "Email sent! Please confirm it in your inbox",
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
  "Sentences A1-C2 (coming soon)",
  "All Games",
  "Future premium updates"
] as const;
