import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/home/TopBar";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardTopbar from "../components/dashboard/DashboardTopbar";
import { SidebarProvider } from "../context/SidebarContext";

export default function RootLayout() {
  // Disable the browser's default scroll restoration. Left on "auto"
  // (the default), the browser will sometimes silently re-apply a
  // remembered scroll position on client-side route changes — even
  // after a page's own useLayoutEffect explicitly scrolls to top.
  // Setting this once, app-wide, means WE fully control scroll
  // position on every navigation from here on.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-[#f6f7fb] flex flex-col">
        <TopBar />

        <div className="flex flex-1">
          <Sidebar />

          <div className="flex flex-1 flex-col overflow-hidden">
            <DashboardTopbar />

            <main className="flex-1 min-w-0">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
