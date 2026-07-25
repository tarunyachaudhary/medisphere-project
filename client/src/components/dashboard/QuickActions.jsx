import { FilePlus2, CalendarClock, UploadCloud, Activity, Wallet2, ShieldCheck, ArrowRight } from "lucide-react";

const actions = [
  { icon: FilePlus2, title: "Apply to University", desc: "Start New Application", color: "bg-indigo-50 text-indigo-600" },
  { icon: CalendarClock, title: "Book Counselling", desc: "Talk to Expert", color: "bg-pink-50 text-pink-600" },
  { icon: UploadCloud, title: "Upload Documents", desc: "Submit Required Docs", color: "bg-emerald-50 text-emerald-600" },
  { icon: Activity, title: "Track Application", desc: "Check Status", color: "bg-orange-50 text-orange-600" },
  { icon: Wallet2, title: "Payment History", desc: "View Transactions", color: "bg-sky-50 text-sky-600" },
  { icon: ShieldCheck, title: "Visa Guidance", desc: "Track Visa Process", color: "bg-violet-50 text-violet-600" },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 card-shadow">
      <div className="flex items-center justify-between">
        <p className="text-[15px] font-bold text-slate-900">Quick Actions</p>
        <button className="flex items-center gap-1 text-xs font-semibold text-indigo-600">
          View All <ArrowRight size={13} />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions.map((a) => (
          <button
            key={a.title}
            className="flex items-center gap-3 rounded-xl border border-slate-100 p-3.5 text-left transition hover:border-indigo-200 hover:bg-indigo-50/40"
          >
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${a.color}`}>
              <a.icon size={18} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-800">{a.title}</span>
              <span className="block text-xs text-slate-400">{a.desc}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
