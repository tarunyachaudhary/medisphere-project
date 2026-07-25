import { ClipboardList, FileStack, Users2, Wallet } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import ApplicationStatus from "../components/dashboard/ApplicationStatus";
import UpcomingReminders from "../components/dashboard/UpcomingReminders";
import NeedAssistance from "../components/dashboard/NeedAssistance";
import MyDocuments from "../components/dashboard/MyDocuments";
import LatestUpdates from "../components/dashboard/LatestUpdates";
import QuickActions from "../components/dashboard/QuickActions";
import ProfileCompletion from "../components/dashboard/ProfileCompletion";

export default function Dashboard() {
  return (
    <div className="dashboard-page mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-5 lg:px-6">
      <section className="dashboard-welcome relative overflow-hidden rounded-xl border border-indigo-100 px-5 py-5 sm:px-7 sm:py-6">
        <div className="relative z-10 max-w-xl">
          <h1 className="text-xl font-bold tracking-tight text-slate-800">Welcome back, Arjun! <span aria-hidden="true">👋</span></h1>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">Track your application, manage your documents and take the next step towards your MBBS journey in Russia.</p>
        </div>
      </section>

      <section className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-4">
        <StatCard icon={ClipboardList} value="2" label="Applications" bg="bg-indigo-50" color="text-indigo-600" />
        <StatCard icon={FileStack} value="12" label="Documents Uploaded" bg="bg-emerald-50" color="text-emerald-600" />
        <StatCard icon={Users2} value="1" label="Counselling Sessions" bg="bg-pink-50" color="text-pink-600" />
        <StatCard icon={Wallet} value="₹1,20,000" label="Payments Made" bg="bg-orange-50" color="text-orange-600" />
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <QuickActions />
        <ProfileCompletion />
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <ApplicationStatus />
        <div className="space-y-4">
          <UpcomingReminders />
          <NeedAssistance />
        </div>
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <MyDocuments />
        <LatestUpdates />
      </section>

      <section className="mt-4 flex flex-col gap-4 rounded-xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-600 px-5 py-4 text-white shadow-lg shadow-indigo-200 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold">Your Dream, Our Mission</p>
          <p className="mt-0.5 text-xs text-indigo-100">We make your MBBS journey in Russia simple, secure and successful.</p>
        </div>
        <button className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-indigo-700 shadow-sm transition hover:bg-indigo-50">Book Free Counselling</button>
      </section>
    </div>
  );
}
