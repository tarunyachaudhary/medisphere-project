# MedBridge - Study MBBS in Russia

A React + Vite + Tailwind CSS website with two parts:

1. **Marketing site** (`/`) — home page with hero, booking form, trust badges,
   stats, top universities carousel, admission process steps and footer.
2. **Student dashboard** (`/dashboard`) — a fully functional app shell with a
   collapsible sidebar (desktop collapse toggle + mobile drawer), stat cards,
   quick actions, application status tracker, profile completion, reminders,
   documents list and latest updates.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Folder structure

```
src/
  components/
    home/         Landing page sections (Navbar, Hero, Footer, etc.)
    dashboard/    Dashboard widgets (Sidebar, StatCard, ApplicationStatus, etc.)
    shared/       Shared components (Logo)
  context/        SidebarContext — collapse/mobile state for the dashboard sidebar
  data/           Static data (universities, nav items, dashboard mock data)
  layouts/        MarketingLayout and DashboardLayout (wrap pages with nav/sidebar)
  pages/          Route-level pages (Home, Dashboard, Placeholder)
  App.jsx         Route definitions
  main.jsx        App entry point (BrowserRouter, root render)
```

## Sidebar hide/show

Click the `«` icon at the top of the sidebar (desktop) to collapse it to icons
only; click the `»` icon to expand it again. On mobile/tablet, tap the menu
icon in the top bar to open the sidebar as a slide-over drawer.

## Notes

- Sidebar links beyond the main Dashboard route (My Profile, Applications,
  Admin Panel, etc.) render a placeholder page — wire up real pages/data as
  your backend becomes available.
- All data (universities, documents, reminders, stats) is mock data in
  `src/data/` — swap in real API calls when ready.
