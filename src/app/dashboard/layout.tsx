import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <main className="min-h-screen pb-[calc(4rem+env(safe-area-inset-bottom))] md:ml-[220px] md:pb-0">
        {children}
      </main>
    </div>
  );
}
