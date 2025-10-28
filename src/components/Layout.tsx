import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 w-full">
          <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
            <div className="container flex h-16 items-center gap-4 px-4">
              <SidebarTrigger className="text-foreground hover:bg-accent" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">💧</span>
                <h1 className="text-lg md:text-xl font-semibold bg-gradient-ocean bg-clip-text text-transparent">
                  ইসলামিক প্রার্থনা গাইড
                </h1>
              </div>
            </div>
          </header>
          <div className="container py-8 px-4 md:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
