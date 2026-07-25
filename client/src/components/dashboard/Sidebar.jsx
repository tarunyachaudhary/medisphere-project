import { NavLink } from "react-router-dom";
import { ChevronsLeft, ChevronsRight, Headset, X } from "lucide-react";

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
    <div className="mb-5">
      {!collapsed && (
        <h3 className="mb-2 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {title}
        </h3>
      )}

      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              end={item.path === "/" || item.path === "/dashboard"}
              onClick={onNavigate}
              title={collapsed ? item.label : ""}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                  collapsed ? "justify-center" : ""
                } ${
                  isActive
                  ? "bg-indigo-50 text-indigo-600 shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && !collapsed && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-indigo-600" />
                  )}

                  <item.icon
                    size={18}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />

                  {!collapsed && <span className="truncate">{item.label}</span>}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar() {
  const { collapsed, toggleCollapsed, mobileOpen, closeMobile } = useSidebar();

  const renderContent = (mobile = false) => (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div
        className={`flex items-center border-b border-slate-100 px-4 py-4 ${
          collapsed && !mobile ? "justify-center" : "justify-between"
        }`}
      >
        {!collapsed || mobile ? <Logo /> : null}

        {mobile ? (
          <button
            onClick={closeMobile}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={18} />
          </button>
        ) : (
          <button
            onClick={toggleCollapsed}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            {collapsed ? (
              <ChevronsRight size={18} />
            ) : (
              <ChevronsLeft size={18} />
            )}
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <NavSection
          title="Main"
          items={mainNav}
          collapsed={collapsed && !mobile}
          onNavigate={mobile ? closeMobile : undefined}
        />

        <NavSection
          title="Explore"
          items={exploreNav}
          collapsed={collapsed && !mobile}
          onNavigate={mobile ? closeMobile : undefined}
        />

        <NavSection
          title="Account"
          items={accountNav}
          collapsed={collapsed && !mobile}
          onNavigate={mobile ? closeMobile : undefined}
        />

        <NavSection
          title="Resources"
          items={resourcesNav}
          collapsed={collapsed && !mobile}
          onNavigate={mobile ? closeMobile : undefined}
        />

        <NavSection
          title="Admin Panel"
          items={adminNav}
          collapsed={collapsed && !mobile}
          onNavigate={mobile ? closeMobile : undefined}
        />
      </div>

      {/* Support */}
      {(!collapsed || mobile) && (
        <div className="m-4 rounded-xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-4 shadow-sm">
          <span className="inline-flex rounded-lg bg-indigo-100 p-2 text-indigo-600">
            <Headset size={16} />
          </span>
          <h4 className="mt-3 text-sm font-bold text-slate-800">Need Help?</h4>
          <p className="mt-1 text-[11px] leading-4 text-slate-500">
            Our support team is always here to help you.
          </p>
          <button className="mt-3 w-full rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 py-2 text-xs font-semibold text-white shadow-sm shadow-indigo-200 transition hover:from-indigo-700 hover:to-violet-700">
            Contact Support
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop */}
      {!collapsed && (
        <aside className="hidden h-screen w-[230px] shrink-0 border-r border-slate-200 bg-white md:flex">
          {renderContent(false)}
        </aside>
      )}

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-[260px] bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {renderContent(true)}
      </aside>
    </>
  );
}
