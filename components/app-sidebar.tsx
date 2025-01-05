"use client";

import * as React from "react";
import {
  Box,
  DollarSign,
  FileText,
  LayoutDashboard,
  LucideTruck,
  PieChart,
  Settings,
  Users,
} from "lucide-react";

import { NavItems } from "./nav-items";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

// This is sample data.
const data = {
  user: {
    name: "Mary Mitchell",
    email: "marymitchell@gmail.com",
    avatar:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1735219870/carhub/avatars/oujhowg1chdlguzsnnp1.png",
  },

  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      title: "Overview",
      icon: LayoutDashboard,
    },
    {
      name: "Deliveries",
      url: "/dashboard/deliveries",
      title: "Manage Deliveries",
      icon: Box,
    },
    {
      name: "Invoices",
      url: "/dashboard/invoices",
      title: "Manage Invoices",
      icon: FileText,
    },
    {
      name: "Customers",
      url: "/dashboard/customers",
      title: "Manage Customers",
      icon: Users,
    },
    {
      name: "Riders",
      url: "/dashboard/riders",
      title: "Manage Riders",
      icon: LucideTruck,
    },
    {
      name: "Finance",
      url: "/dashboard/finance",
      title: "Manage Finances",
      icon: DollarSign,
    },
    {
      name: "Sales & Marketing",
      title: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Settings",
      title: "Adjust settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="bg-blue-100  border-b">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent className="overflow-y-scroll bg-gray-100">
        <NavItems items={data.items} />
      </SidebarContent>
      <SidebarFooter className="border-t">
        <Image
          src="/logo.svg"
          width={100}
          height={30}
          priority
          alt="sendit-logo"
          className="mx-auto"
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
