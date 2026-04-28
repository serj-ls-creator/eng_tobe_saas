import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function BrowserErrorsPage() {
  return (
    <>
      <TopBar title="Browser Compatibility" backHref="/technical-support" />
      <SupportContent
        title="Page Rendering Errors on Specific Browsers"
        description="Solving browser-specific display and functionality issues"
        sections={[
          {
            title: "Browser-Specific Issues & Quick Fixes",
            content: [
              "Chrome: White screen → Disable hardware acceleration",
              "Firefox: Layout broken → Clear cache and refresh",
              "Safari: Buttons not working → Enable JavaScript",
              "Edge: Slow loading → Reset browser settings",
              "Opera: Content overlapping → Update to latest version"
            ]
          },
          {
            title: "Chrome Browser Solutions",
            content: [
              "Enable JavaScript: Settings → Privacy → Content settings",
              "Clear cache: Ctrl+Shift+Delete → Select 'All time'",
              "Disable extensions: chrome://extensions/ → Disable all temporarily",
              "Reset settings: Settings → Advanced → Reset settings",
              "Update Chrome: Menu → Help → About Google Chrome",
              "Check console: F12 → Console for error messages"
            ]
          },
          {
            title: "Firefox Browser Solutions",
            content: [
              "Enable JavaScript: Options → Content → Enable JavaScript",
              "Clear cache: Ctrl+Shift+Delete → Time range 'Everything'",
              "Disable extensions: about:addons → Extensions → Disable",
              "Reset Firefox: Help → Troubleshooting → Refresh Firefox",
              "Update Firefox: Menu → Help → About Firefox",
              "Check console: Web Developer → Web Console"
            ]
          },
          {
            title: "Safari Browser Solutions",
            content: [
              "Enable JavaScript: Safari → Preferences → Security → Enable JavaScript",
              "Clear cache: Safari → Preferences → Privacy → Manage Website Data",
              "Reset Safari: Safari → Reset Safari",
              "Update Safari: System Preferences → Software Update",
              "Check console: Develop → Show Web Inspector",
              "Disable extensions: Safari → Preferences → Extensions"
            ]
          },
          {
            title: "Edge and Opera Solutions",
            content: [
              "Edge: Clear cache → Settings → Privacy → Clear browsing data",
              "Edge: Reset settings → Settings → Reset settings",
              "Opera: Clear cache → Settings → Privacy & security → Clear browsing data",
              "Opera: Reset settings → Settings → Reset settings",
              "Both: Update to latest version in browser settings",
              "Both: Disable extensions temporarily"
            ]
          },
          {
            title: "Cross-Browser Compatibility",
            content: [
              "Test multiple browsers to identify if issue is browser-specific",
              "Use browser developer tools to debug rendering issues",
              "Check for CSS compatibility problems in older browsers",
              "Ensure JavaScript is enabled in all browsers",
              "Update all browsers to latest versions for best compatibility"
            ]
          },
          {
            title: "Advanced Browser Troubleshooting",
            content: [
              "Check browser console for JavaScript errors (F12)",
              "Test in incognito/private mode to rule out extensions",
              "Disable browser hardware acceleration for graphics issues",
              "Reset browser zoom level to 100%",
              "Try different user agent strings if mobile version loads incorrectly"
            ]
          }
        ]}
      />
    </>
  );
}
