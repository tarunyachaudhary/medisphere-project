import {
  Menu,
  Bell,
  MessageSquare,
  ChevronDown,
  GraduationCap,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

export default function DashboardTopbar() {
  const { toggleMobile } = useSidebar();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-100 bg-white/95 px-4 py-3 backdrop-blur sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleMobile}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {isHome ? (
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <GraduationCap size={18} strokeWidth={2.2} />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-slate-900 sm:text-base">
                MedBridge
              </p>
              <p className="hidden text-xs text-slate-400 sm:block">
                Study MBBS in Russia
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm font-bold text-slate-900 sm:text-base">
              Welcome back, Arjun 👋
            </p>
            <p className="hidden text-xs text-slate-400 sm:block">
              Track your MBBS journey in Russia
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>
        <button
          className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
          aria-label="Messages"
        >
          <MessageSquare size={18} />
        </button>

        <div className="flex items-center gap-2 border-l border-slate-100 pl-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
            AV
          </span>
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold leading-tight text-slate-800">
              Arjun Verma
            </p>
            <p className="text-xs leading-tight text-slate-400">Student</p>
          </div>
          <ChevronDown size={15} className="hidden text-slate-400 sm:block" />
        </div>
      </div>
    </header>
  );
}
