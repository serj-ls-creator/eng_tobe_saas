import { BottomNav } from "@/components/layout/BottomNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell bg-background">
      <main className="flex-1">{children}</main>
      <BottomNav />
    </div>
  );
}
