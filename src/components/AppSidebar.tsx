import { Book, Droplets, Heart, Home, MessageSquare, Calendar } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "হোম", url: "/", icon: Home },
  { title: "ওজুর নিয়ম", url: "/wudu", icon: Droplets },
  { title: "নামাজের দোয়া", url: "/prayers", icon: MessageSquare },
  { title: "সূরা পরিকল্পনা", url: "/surahs", icon: Book },
  { title: "উপকারিতা", url: "/benefits", icon: Heart },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="bg-sidebar">
        <div className="px-4 py-6">
          {open && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl">💧</span>
              <div>
                <h2 className="text-lg font-bold text-sidebar-foreground">
                  প্রার্থনা গাইড
                </h2>
                <p className="text-xs text-sidebar-foreground/70">
                  Islamic Prayer Guide
                </p>
              </div>
            </div>
          )}
          {!open && (
            <div className="flex justify-center">
              <span className="text-2xl">💧</span>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">
            {open ? "মেনু" : ""}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
