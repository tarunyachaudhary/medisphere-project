import { NavLink } from "react-router-dom";
import { ChevronsLeft, ChevronsRight, X, Headset } from "lucide-react";
import Logo from "../shared/Logo";
import { useSidebar } from "../../context/SidebarContext";
import {
  mainNav,
  exploreNav,
  accountNav,
  resourcesNav,
  adminNav,
} from "../../data/navItems";

function NavSection({ title, items, collapsed, onNavigate }) {
  return (
    <div className="mb-1">
      {!collapsed && (
        <p className="px-3 pb-2 pt-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {title}
        </p>
      )}
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              onClick={onNavigate}
              end={item.path === "/dashboard" || item.path === "/"}
              title={collapsed ? item.label : undefined}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-colors ${
                  collapsed ? "justify-center" : ""
                } ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              <item.icon size={18} className="shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar() {
  const { collapsed, toggleCollapsed, mobileOpen, closeMobile } = useSidebar();

  const content = (isMobile) => (
    <div className="flex h-full flex-col">
      <div
        className={`flex items-center gap-2 border-b border-slate-100 px-3 py-4 ${collapsed && !isMobile ? "justify-center" : "justify-between"}`}
      >
        {(!collapsed || isMobile) && <Logo showText />}
        {collapsed && !isMobile && <Logo showText={false} />}

        {isMobile ? (
          <button
            onClick={closeMobile}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        ) : (
          <button
            onClick={toggleCollapsed}
            className="hidden shrink-0 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 md:flex"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <ChevronsRight size={16} />
            ) : (
              <ChevronsLeft size={16} />
            )}
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-2.5 pb-4">
        <NavSection
          title="Main"
          items={mainNav}
          collapsed={collapsed && !isMobile}
          onNavigate={isMobile ? closeMobile : undefined}
        />
        <NavSection
          title="Explore"
          items={exploreNav}
          collapsed={collapsed && !isMobile}
          onNavigate={isMobile ? closeMobile : undefined}
        />
        <NavSection
          title="Account"
          items={accountNav}
          collapsed={collapsed && !isMobile}
          onNavigate={isMobile ? closeMobile : undefined}
        />
        <NavSection
          title="Resources"
          items={resourcesNav}
          collapsed={collapsed && !isMobile}
          onNavigate={isMobile ? closeMobile : undefined}
        />
        <NavSection
          title="Admin Panel"
          items={adminNav}
          collapsed={collapsed && !isMobile}
          onNavigate={isMobile ? closeMobile : undefined}
        />
      </div>

      {(!collapsed || isMobile) && (
        <div className="m-3 rounded-xl bg-indigo-600 p-4 text-white">
          <p className="text-sm font-bold">Book Free Counselling</p>
          <p className="mt-1 text-xs text-indigo-100">
            Talk to our expert counsellors and choose the best university for
            you.
          </p>
          <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-white py-2 text-xs font-bold text-indigo-600">
            <Headset size={14} /> Book Now
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={`sticky top-0 hidden h-screen shrink-0 border-r border-slate-100 bg-white transition-all duration-300 md:block ${
          collapsed ? "w-[76px]" : "w-[264px]"
        }`}
      >
        {content(false)}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={closeMobile} />
          <aside className="absolute left-0 top-0 h-full w-[280px] bg-white shadow-2xl">
            {content(true)}
          </aside>
        </div>
      )}
    </>
  );
}
