import StatCards from "@/components/stat-cards";
import { AppSidebar } from "../../components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Charts from "@/components/charts";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" title="collapse menu" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">🚀 Good morning Mary!</p>
              <p className="text-muted-foreground text-xs sm:text-sm">
                {new Date().toLocaleDateString(undefined, {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </header>
        <hr />
        <div className="space-y-6">
          <StatCards />
          <Charts />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
