import { Outlet } from "react-router-dom";
import TopBar from "../components/home/TopBar";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardTopbar from "../components/dashboard/DashboardTopbar";
import { SidebarProvider } from "../context/SidebarContext";

export default function RootLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col bg-surface">
        <TopBar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex min-h-screen flex-1 flex-col overflow-x-hidden">
            <DashboardTopbar />
            <main className="flex-1">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
