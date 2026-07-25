import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Placeholder from "./pages/Placeholder";
import Universities from "./pages/Universities";
import Profile from "./pages/Profile";
import Applications from "./pages/Applications";
import Shortlist from "./pages/Shortlist";
import Counselling from "./pages/Counselling";
import Payments from "./pages/Payments";
import AdminDashboard from "./pages/AdminDashboard";

const marketingRoutes = [
  "about-russia",
  "fees",
  "process",
  "services",
  "blog",
  "contact",
];

const dashboardRoutes = [
  "documents",
  "visa",
  "travel",
  "edit-profile",
  "password",
  "notifications",
  "support",
  "guides",
  "faqs",
  "blog",
  "admin/users",
  "admin/universities",
  "admin/applications",
  "admin/counsellors",
  "admin/payments",
  "admin/reports",
  "admin/settings",
];

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/applications" element={<Applications />} />
        <Route path="/dashboard/shortlist" element={<Shortlist />} />
        <Route path="/dashboard/counselling" element={<Counselling />} />
        <Route path="/dashboard/payments" element={<Payments />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />

        {marketingRoutes.map((path) => (
          <Route key={path} path={`/${path}`} element={<Placeholder />} />
        ))}

        <Route path="/dashboard" element={<Dashboard />} />
        {dashboardRoutes.map((path) => (
          <Route key={path} path={`/dashboard/${path}`} element={<Placeholder />} />
        ))}

        <Route path="*" element={<Placeholder />} />
      </Route>
    </Routes>
  );
}
