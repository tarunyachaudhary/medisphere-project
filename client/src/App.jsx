import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Placeholder from "./pages/Placeholder";
import Universities from "./pages/Universities";
import AboutRussia from "./pages/AboutRussia";
import Process from "./pages/Process";
import Profile from "./pages/Profile";
import Applications from "./pages/Applications";
import Shortlist from "./pages/Shortlist";
import Counselling from "./pages/Counselling";
import Payments from "./pages/Payments";
import AdminDashboard from "./pages/AdminDashboard";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import ManageUsers from "./pages/ManageUsers";
import ManageUniversities from "./pages/ManageUniversities";
import ManageAllApplications from "./pages/ManageAllApplications";

const marketingRoutes = ["fees", "services", "About us", "contact"];

const dashboardRoutes = [
  "documents",
  "visa",
  "travel",
  "edit-profile",
  "password",
  "notifications",
  "support",
  "guides",
  "blog",
  "admin/universities",
  "admin/applications",
  "admin/counsellors",
  "admin/payments",
  "admin/reports",
];

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/dashboard/about-russia" element={<AboutRussia />} />
        <Route path="/process" element={<Process />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/applications" element={<Applications />} />
        <Route path="/dashboard/shortlist" element={<Shortlist />} />
        <Route path="/dashboard/counselling" element={<Counselling />} />
        <Route path="/dashboard/payments" element={<Payments />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/admin/users" element={<ManageUsers />} />
        <Route
          path="/dashboard/admin/universities"
          element={<ManageUniversities />}
        />
        <Route
          path="/dashboard/admin/applications"
          element={<ManageAllApplications />}
        />

        {marketingRoutes.map((path) => (
          <Route key={path} path={`/${path}`} element={<Placeholder />} />
        ))}
        <Route path="/dashboard" element={<Dashboard />} />
        {dashboardRoutes.map((path) => (
          <Route
            key={path}
            path={`/dashboard/${path}`}
            element={<Placeholder />}
          />
        ))}
        <Route path="*" element={<Placeholder />} />
      </Route>
    </Routes>
  );
}
