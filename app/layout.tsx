import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
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
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 ">
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
            <div className="space-y-2">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
