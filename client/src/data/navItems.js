import {
  Home,
  LayoutDashboard,
  User,
  FileText,
  Folder,
  GraduationCap,
  Users,
  Wallet,
  ShieldCheck,
  Plane,
  UserCog,
  Lock,
  Bell,
  HelpCircle,
  BookOpen,
  HelpingHand,
  Newspaper,
  LayoutGrid,
  UserPlus,
  Building2,
  ClipboardList,
  UserCheck,
  Receipt,
  BarChart3,
  Settings,
  Globe,
  Phone,
} from "lucide-react";

export const topNav = [
  { label: "Home", path: "/" },
  { label: "Universities", path: "/universities" },
  { label: "Process", path: "/process" },
  { label: "About us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const mainNav = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "My Profile", icon: User, path: "/dashboard/profile" },
  { label: "Applications", icon: FileText, path: "/dashboard/applications" },
  { label: "University Shortlist", icon: GraduationCap, path: "/dashboard/shortlist" },
  { label: "Counselling Sessions", icon: Users, path: "/dashboard/counselling" },
  { label: "Payments", icon: Wallet, path: "/dashboard/payments" },
  { label: "Visa Guidance", icon: ShieldCheck, path: "/dashboard/visa" },
  { label: "Travel Assistance", icon: Plane, path: "/dashboard/travel" },
];

export const exploreNav = [
  { label: "About Russia", icon: Globe, path: "/dashboard/about-russia" },
  { label: "Universities", icon: Building2, path: "/universities" },
  { label: "Process", icon: ClipboardList, path: "/process" },
  { label: "Services", icon: HelpingHand, path: "/dashboard/services" },
  { label: "Contact", icon: Phone, path: "/contact" },
];

export const adminNav = [
  { label: "Admin Dashboard", icon: LayoutGrid, path: "/dashboard/admin" },
  { label: "Manage Users", icon: UserPlus, path: "/dashboard/admin/users" },
  { label: "Universities", icon: Building2, path: "/dashboard/admin/universities" },
  { label: "All Applications", icon: ClipboardList, path: "/dashboard/admin/applications" },
  // { label: "Counsellor Management", icon: UserCheck, path: "/dashboard/admin/counsellors" },
  // { label: "Payments & Invoices", icon: Receipt, path: "/dashboard/admin/payments" },
  // { label: "Reports & Analytics", icon: BarChart3, path: "/dashboard/admin/reports" },
  // { label: "Settings", icon: Settings, path: "/dashboard/admin/settings" },
];
