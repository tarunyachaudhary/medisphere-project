import { Outlet } from "react-router-dom";
import TopBar from "../components/home/TopBar";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardTopbar from "../components/dashboard/DashboardTopbar";
import { SidebarProvider } from "../context/SidebarContext";

export default function RootLayout() {
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
