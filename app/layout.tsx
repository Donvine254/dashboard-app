import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sendit Admin Dashboard",
  description:
    "Sendit is a courier service provider that enables individuals to send parcels from the comfort of their homes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster richColors closeButton theme="light" />
        <SidebarProvider>
          <AppSidebar />
          <SidebarGroup className="bg-[#F8F9FA] !p-0">
            <SidebarHeader className="fixed top-0 h-16 z-10 bg-white w-full  border-b">
              <div className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4 h-full">
                  <SidebarTrigger className="-ml-1" title="collapse menu" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <p className="tracking-tight leading-tight inline-flex flex-col py-2 ">
                    <span className="font-semibold leading-tight">
                      Good morning Mary!
                    </span>
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {new Date().toLocaleDateString(undefined, {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </p>
                </div>
              </div>
            </SidebarHeader>
            <div className="space-y-2 mt-20 sm:mt-16 md:mt-14">{children}</div>
          </SidebarGroup>
        </SidebarProvider>
      </body>
    </html>
  );
}
