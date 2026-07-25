import { ClipboardList, FileStack, Users2, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "../components/dashboard/StatCard";
import QuickActions from "../components/dashboard/QuickActions";
import ApplicationStatus from "../components/dashboard/ApplicationStatus";
import ProfileCompletion from "../components/dashboard/ProfileCompletion";
import UpcomingReminders from "../components/dashboard/UpcomingReminders";
import NeedAssistance from "../components/dashboard/NeedAssistance";
import MyDocuments from "../components/dashboard/MyDocuments";
import LatestUpdates from "../components/dashboard/LatestUpdates";

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6">
      {/* Hero banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy to-indigo-900 p-6 sm:p-8">
        <div className="relative z-10 max-w-lg">
          <p className="text-xl font-extrabold text-white sm:text-2xl">Welcome back, Arjun 👋</p>
          <p className="mt-2 text-sm text-slate-300">
            Track your application, manage your documents and take the next step towards your MBBS
            journey in Russia.
          </p>
        </div>
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-2xl" />
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={ClipboardList} value="2" label="Applications" bg="bg-indigo-50" color="text-indigo-600" />
        <StatCard icon={FileStack} value="12 / 15" label="Documents Uploaded" bg="bg-emerald-50" color="text-emerald-600" />
        <StatCard icon={Users2} value="1" label="Counselling Sessions" bg="bg-pink-50" color="text-pink-600" />
        <StatCard icon={Wallet} value="₹1,20,000" label="Payments Made" bg="bg-orange-50" color="text-orange-600" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <QuickActions />
          <ApplicationStatus />
          <MyDocuments />
        </div>
        <div className="space-y-6">
          <ProfileCompletion />
          <UpcomingReminders />
          <NeedAssistance />
          <LatestUpdates />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-center sm:flex-row sm:text-left sm:p-8">
        <div>
          <p className="text-lg font-extrabold text-white">Your Dream, Our Mission</p>
          <p className="mt-1 text-sm text-indigo-100">
            We make your MBBS journey in Russia simple, secure and successful.
          </p>
        </div>
        <Link
          to="/dashboard/counselling"
          className="shrink-0 rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
        >
          Book Free Counselling
        </Link>
      </div>
    </div>
  );
}
