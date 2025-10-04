"use client";
import { LucideCircleQuestionMark, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
interface MenuItem {
  title: string;
  url: string;
  icon: React.ComponentType;
  description: string;
}

const items: MenuItem[] = [
  {
    title: "What's this?",
    url: "#",
    icon: LucideCircleQuestionMark,
    description:
      "It's a basic timeline visualiser for users to visualise timelines as nodes and think with a cleared visual picture. ",
  },
  {
    title: "How to use?",
    url: "#",
    icon: LucideCircleQuestionMark,
    description:
      "Just pull some nodes and boom, add descriptions and notes and everything, connect them with other nodes, visualise things.",
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    description: "WIP",
  },
];

export default function AppSidebar() {
  const [dialogContent, setDialogContent] = useState<MenuItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const handleItemClick = (item: MenuItem): void => {
    setDialogContent(item);
    setIsDialogOpen(true);
  };

  return (
    <>
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
                    <SidebarMenuButton
                      onClick={() => handleItemClick(item)}
                      className="cursor-pointer"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="h-12 bg-pink-500"></SidebarFooter>
      </Sidebar>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogContent?.title}</DialogTitle>
            <DialogDescription>{dialogContent?.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
