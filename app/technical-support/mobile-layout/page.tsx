import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function MobileLayoutPage() {
  return (
    <>
      <TopBar title="Mobile Layout Issues" backHref="/technical-support" />
      <SupportContent
        title="Mobile Layout and UI Responsiveness Issues"
        description="Fixing display and layout problems on mobile devices"
        sections={[
          {
            title: "Common Mobile Layout Issues & Solutions",
            content: [
              "Text too small to read → Use pinch-to-zoom or adjust browser zoom",
              "Buttons overlapping → Rotate device to landscape mode",
              "Bottom navigation not visible → Scroll down or refresh page",
              "Content cut off on sides → Ensure browser is in full-screen mode",
              "Touch targets too small → Use stylus or adjust touch settings"
            ]
          },
          {
            title: "Device-Specific Fixes",
            content: [
              "iPhone/iPad: Use Safari browser, ensure iOS is updated",
              "Android: Use Chrome browser, update Android system",
              "Tablets: Use landscape orientation for better layout",
              "Small phones: Enable desktop site view in browser menu",
              "Large phones: Check if display scaling is set correctly"
            ]
          },
          {
            title: "Browser Settings for Mobile",
            content: [
              "Enable JavaScript in browser settings",
              "Allow pop-ups and redirects for this site",
              "Set browser to desktop mode if mobile layout fails",
              "Clear browser cache and cookies regularly",
              "Update browser app to latest version",
              "Disable ad blockers that might break layout"
            ]
          },
          {
            title: "Screen Resolution and Scaling",
            content: [
              "Check device display settings for proper resolution",
              "Adjust text size in browser accessibility settings",
              "Reset browser zoom level to 100%",
              "Ensure device is not in accessibility mode accidentally",
              "Check if display scaling is set to recommended level"
            ]
          },
          {
            title: "Navigation and Touch Issues",
            content: [
              "Bottom navigation not working → Tap edges of buttons",
              "Swipe gestures not responding → Clean screen and dry fingers",
              "Double-tap issues → Adjust touch sensitivity in settings",
              "Scrolling problems → Use two-finger scroll or refresh page",
              "Menu not opening → Try tapping different areas of button"
            ]
          },
          {
            title: "App Compatibility Solutions",
            content: [
              "Update English to be app to latest version",
              "Reinstall app if layout issues persist",
              "Check device compatibility with minimum requirements",
              "Use browser instead of app if app has issues",
              "Report specific device model for compatibility fixes"
            ]
          },
          {
            title: "Advanced Mobile Troubleshooting",
            content: [
              "Test in different browsers (Chrome, Safari, Firefox)",
              "Check browser console for mobile-specific errors",
              "Enable developer tools in mobile browser for debugging",
              "Test with device rotation lock disabled",
              "Compare layout with desktop version to identify issues"
            ]
          }
        ]}
      />
    </>
  );
}
