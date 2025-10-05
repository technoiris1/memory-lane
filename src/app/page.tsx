import Playground from "./components/playground";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import AppSidebar from "./components/app-sidebar";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="min-w-0">
          <main className="flex flex-col h-full">
            <SidebarTrigger />
            <div className="flex-1">
              <Playground />
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
