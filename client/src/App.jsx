import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Placeholder from "./pages/Placeholder";

const marketingRoutes = [
  "about-russia",
  "universities",
  "fees",
  "process",
  "services",
  "blog",
  "contact",
];

const dashboardRoutes = [
  "profile",
  "applications",
  "documents",
  "shortlist",
  "counselling",
  "payments",
  "visa",
  "travel",
  "edit-profile",
  "password",
  "notifications",
  "support",
  "guides",
  "faqs",
  "blog",
  "admin",
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
