import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function ApplicationFreezingPage() {
  return (
    <>
      <TopBar title="App Performance Issues" backHref="/technical-support" />
      <SupportContent
        title="Application Freezing or Slow Loading"
        description="Solving performance and loading issues with English to be"
        sections={[
          {
            title: "Common Performance Issues & Quick Fixes",
            content: [
              "App freezing during lessons → Refresh page and clear browser cache",
              "Slow loading times → Check internet connection speed",
              "Lag when switching sections → Close other browser tabs",
              "Crashes during games → Update browser to latest version",
              "Memory usage high → Restart browser completely"
            ]
          },
          {
            title: "Browser Optimization Steps",
            content: [
              "1. Clear browser cache: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)",
              "2. Disable unnecessary browser extensions",
              "3. Update browser to latest version",
              "4. Enable hardware acceleration in browser settings",
              "5. Reduce browser memory usage in task manager",
              "6. Try incognito mode to test without extensions"
            ]
          },
          {
            title: "Device-Specific Solutions",
            content: [
              "Mobile devices: Close background apps and free up RAM",
              "Older computers: Lower graphics quality in browser settings",
              "Tablets: Use landscape mode for better performance",
              "Low-end devices: Disable animations in browser accessibility settings",
              "All devices: Ensure at least 2GB free storage space"
            ]
          },
          {
            title: "Network and Connection Issues",
            content: [
              "Slow WiFi: Move closer to router or use ethernet cable",
              "Mobile data: Check signal strength and switch to 4G/5G",
              "Public WiFi: Use VPN for stable connection",
              "Network throttling: Contact ISP about speed issues",
              "DNS problems: Switch to Google DNS (8.8.8.8, 8.8.4.4)"
            ]
          },
          {
            title: "App-Specific Performance Tips",
            content: [
              "Large lessons: Break into smaller study sessions",
              "Multiple games: Play one at a time, not simultaneously",
              "Background audio: Pause other music/videos while using app",
              "Auto-save: Let lessons save completely before switching",
              "Offline mode: Download content when connection is stable"
            ]
          },
          {
            title: "Advanced Troubleshooting",
            content: [
              "Check browser console for error messages (F12 → Console)",
              "Monitor memory usage in browser task manager (Shift+Esc)",
              "Test performance on different browsers (Chrome, Firefox, Safari)",
              "Disable browser hardware acceleration if graphics issues",
              "Reset browser settings to default if all else fails"
            ]
          }
        ]}
      />
    </>
  );
}
