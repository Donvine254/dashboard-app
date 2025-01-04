"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavItems({
  items,
}: {
  items: {
    name: string;
    url: string;
    title: string;
    icon: LucideIcon;
  }[];
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu className="space-y-2">
        {items.map((item) => (
          <SidebarMenuItem
            key={item.name}
            className="hover:bg-blue-100 hover:text-blue-600">
            <SidebarMenuButton asChild>
              <a href={item.url} title={item.title}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
