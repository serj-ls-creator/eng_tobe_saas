import { ThemedAppShell } from "@/components/layout/ThemedAppShell";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemedAppShell>{children}</ThemedAppShell>
  );
}
