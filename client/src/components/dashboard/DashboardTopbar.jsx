import { Menu, Bell, MessageSquare, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import { topNav } from "../../data/navItems";
import Logo from "../shared/Logo";

export default function DashboardTopbar() {
  const { toggleMobile, toggleCollapsed, collapsed } = useSidebar();
  const storedUser = localStorage.getItem("medisphere_user");
  let user = null;

  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch {
    user = null;
  }

  const initials = user?.name
    ?.split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const handleSidebarToggle = () => {
    if (window.innerWidth >= 768) {
      toggleCollapsed(); // Desktop
    } else {
      toggleMobile(); // Mobile
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur-md">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSidebarToggle}
          aria-label="Toggle navigation menu"
          className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 shadow-sm transition hover:bg-slate-100 hover:text-indigo-600"
        >
          <Menu size={20} />
        </button>

        {/* Show logo only when sidebar is collapsed */}
        {collapsed && (
          <div className="hidden sm:block">
            <Logo />
          </div>
        )}
      </div>

      {/* Center Navigation */}
      <nav className="hidden items-center gap-1 rounded-xl border border-slate-800 bg-black p-1.5 shadow-[0_10px_26px_-14px_rgba(0,0,0,0.65)] lg:flex">
        {topNav.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200"
                  : "text-white hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.label}

              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Right */}
      <div className="flex m-5 items-center gap-3">
        {user ? (
          <button className="flex items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-slate-100">
            {user.avatar ? (
              <img src={user.avatar} alt="Profile" className="h-10 w-10 rounded-full object-cover" />
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                {initials || "U"}
              </span>
            )}
            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold text-slate-800">{user.name}</p>
              <p className="text-xs text-slate-500">{user.role || "Student"}</p>
            </div>
            <ChevronDown size={16} className="hidden text-slate-400 md:block" />
          </button>
        ) : (
          <Link to="/login" className="rounded-lg mr-8 w-[150px] bg-indigo-600 px-8 py-3 text-sm font-bold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700">
            Login/signup
          </Link>
        )}
      </div>
    </header>
  );
}
