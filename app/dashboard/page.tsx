import { AppSidebar } from "../../components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TrendingDown, TrendingUp } from "lucide-react";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
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
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3 p-2 sm:p-4 md:p-6">
            {/* first card */}
            <div className="rounded-lg border bg-card p-6">
              <div className="text-sm font-medium text-muted-foreground flex justify-between gap-2 items-center">
                <h3 className="font-semibold text-lg">Total Revenue</h3>
                <span className="bg-green-100 text-green-700 text-xs flex items-center gap-1 font-medium px-2 py-1 rounded-md">
                  <TrendingUp />
                  20.1%
                </span>
              </div>
              <div className="my-2 text-2xl md:text-4xl font-bold">
                $45,231.89
              </div>
              <p className="text-xs text-muted-foreground">
                From Jan 1st - Jul 31st
              </p>
            </div>
            {/* second card */}
            <div className="rounded-lg border bg-card p-6">
              <div className="text-sm font-medium text-muted-foreground flex justify-between gap-2 items-center">
                <h3 className="font-semibold text-lg">Deliveries</h3>
                <span className="bg-green-100 text-green-700 text-xs flex items-center gap-1 font-medium px-2 py-1 rounded-md">
                  <TrendingUp />
                  120.1%
                </span>
              </div>
              <div className="my-2 text-2xl md:text-4xl font-bold">2,350</div>
              <p className="text-xs text-muted-foreground">
                From Jan 1st - Jul 31st
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="text-sm font-medium text-muted-foreground flex justify-between gap-2 items-center">
                <h3 className="font-semibold text-lg">Active Users</h3>
                <span className="bg-red-100 text-red-700 text-xs flex items-center gap-1 font-medium px-2 py-1 rounded-md">
                  <TrendingDown />
                  20.1%
                </span>
              </div>
              <div className="my-2 text-2xl md:text-4xl font-bold">64</div>
              <p className="text-xs text-muted-foreground">Previous 365 days</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
