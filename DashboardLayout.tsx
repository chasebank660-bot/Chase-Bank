import { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { Navbar } from "./Navbar";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mesh-gradient min-h-screen flex overflow-hidden">
      <AppSidebar />
      {/* Main content area - offset for sidebar */}
      <div className="flex-1 ml-[260px] transition-all duration-300 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 px-3 md:px-4 py-3 md:py-4 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
