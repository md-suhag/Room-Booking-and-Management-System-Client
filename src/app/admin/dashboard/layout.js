import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-4">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
