import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";

import { PwaRegister } from "@/components/pwa/PwaRegister";
import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "English to be",
  description: "Learn English in English. Words, idioms, sentences, grammar and games for A2+ learners. Free to start.",
  applicationName: "English to be",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "English to be"
  },
  formatDetection: {
    telephone: false
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* Google Consent Mode v2 - Initialize with denied consent */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });`}
        </Script>
        
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DNR5F704KM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DNR5F704KM');`}
        </Script>
        
        <PwaRegister />
        {children}
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  );
}
