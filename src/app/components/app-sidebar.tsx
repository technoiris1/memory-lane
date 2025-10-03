import { LucideCircleQuestionMark, Settings } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
const items = [
  {
    title: "What's this?",
    url: "#",
    icon: LucideCircleQuestionMark,
  },
  {
    title: "How to use?",
    url: "#",
    icon: LucideCircleQuestionMark,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="text-xl">
        <Link href="/">Memory Lane</Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="h-12 bg-pink-500"></SidebarFooter>
    </Sidebar>
  );
}
