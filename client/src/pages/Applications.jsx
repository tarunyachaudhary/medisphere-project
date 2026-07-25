import { useMemo, useState } from "react";
import {
  CheckCircle2,
  CircleDot,
  EllipsisVertical,
  FileText,
  Filter,
  Hourglass,
  Lightbulb,
  Plus,
  Search,
  Send,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";

const applications = [
  { university: "Kazan Federal University", city: "Kazan, Russia", program: "MBBS", intake: "Sept 2025", season: "Fall Intake", status: "Under Review", date: "20 May 2025", icon: "K" },
  { university: "Bashkir State Medical University", city: "Ufa, Russia", program: "MBBS", intake: "Sept 2025", season: "Fall Intake", status: "In Progress", date: "18 May 2025", icon: "B" },
  { university: "Perm State Medical University", city: "Perm, Russia", program: "MBBS", intake: "Sept 2025", season: "Fall Intake", status: "Submitted", date: "15 May 2025", icon: "P" },
  { university: "Orenburg State Medical University", city: "Orenburg, Russia", program: "MBBS", intake: "Jan 2026", season: "Spring Intake", status: "Saved", date: "10 May 2025", icon: "O" },
];

const statusStyles = {
  "Under Review": "bg-amber-50 text-amber-600", "In Progress": "bg-sky-50 text-sky-600",
  Submitted: "bg-emerald-50 text-emerald-600", Saved: "bg-slate-100 text-slate-600",
};

function SummaryCard({ icon: Icon, value, label, color }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100"><div className="flex items-center gap-4"><span className={`rounded-2xl p-3 ${color}`}><Icon size={22} /></span><p className="text-2xl font-extrabold text-slate-900">{value}</p></div><p className="mt-3 text-xs font-medium leading-5 text-slate-500">{label}</p></div>;
}

export default function Applications() {
  const [query, setQuery] = useState("");
  const filteredApplications = useMemo(() => applications.filter(({ university, city, status }) => `${university} ${city} ${status}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><h1 className="text-2xl font-extrabold tracking-tight text-slate-900">Applications</h1><p className="mt-1 text-sm text-slate-500">Track and manage all your university applications in one place.</p></div><button className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:from-indigo-700 hover:to-violet-700"><Plus size={16} /> New Application</button></div>

      <section className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5"><SummaryCard icon={FileText} value="4" label={<>Total Applications<br />All time</>} color="bg-violet-100 text-violet-600" /><SummaryCard icon={Send} value="2" label={<>In Progress<br />Applications</>} color="bg-sky-50 text-sky-500" /><SummaryCard icon={CheckCircle2} value="1" label={<>Submitted<br />Applications</>} color="bg-emerald-50 text-emerald-500" /><SummaryCard icon={Hourglass} value="1" label={<>Under Review<br />Applications</>} color="bg-amber-50 text-amber-500" /><SummaryCard icon={XCircle} value="0" label={<>Rejected<br />Applications</>} color="bg-rose-50 text-rose-500" /></section>

      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100 sm:p-5"><div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><h2 className="text-lg font-bold text-slate-900">My Applications</h2><div className="flex flex-col gap-2 sm:flex-row"><label className="flex min-w-0 items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-slate-400 sm:w-60"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" placeholder="Search applications..." /></label><button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"><Filter size={15} /> Filter</button><button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"><SlidersHorizontal size={15} /> Sort</button></div></div>

        <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[850px] border-separate border-spacing-y-2 text-left"><thead><tr className="bg-indigo-50/70 text-[10px] font-bold uppercase tracking-wide text-slate-500"><th className="rounded-l-xl px-4 py-3">University</th><th className="px-4 py-3">Program</th><th className="px-4 py-3">Intake</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Applied On</th><th className="rounded-r-xl px-4 py-3">Actions</th></tr></thead><tbody>{filteredApplications.map((application) => <tr key={application.university} className="text-xs text-slate-700"><td className="rounded-l-xl border-y border-l border-slate-200 px-4 py-3"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50 font-bold text-indigo-600">{application.icon}</span><div><p className="font-bold text-slate-800">{application.university}</p><p className="mt-1 text-[11px] text-slate-500">{application.city}</p></div></div></td><td className="border-y border-slate-200 px-4 py-3"><p className="font-bold">{application.program}</p><p className="mt-1 text-[11px] text-slate-500">Medicine</p></td><td className="border-y border-slate-200 px-4 py-3"><p className="font-bold">{application.intake}</p><p className="mt-1 text-[11px] text-slate-500">{application.season}</p></td><td className="border-y border-slate-200 px-4 py-3"><span className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[11px] font-semibold ${statusStyles[application.status]}`}><CircleDot size={10} /> {application.status}</span></td><td className="border-y border-slate-200 px-4 py-3 font-medium text-slate-600">{application.date}</td><td className="rounded-r-xl border-y border-r border-slate-200 px-4 py-3"><div className="flex items-center gap-3"><button className="rounded-lg border border-violet-300 px-3 py-1.5 text-[11px] font-semibold text-violet-600 hover:bg-violet-50">View Details</button><button className="text-slate-500 hover:text-slate-800" aria-label={`More options for ${application.university}`}><EllipsisVertical size={18} /></button></div></td></tr>)}</tbody></table></div>
        {filteredApplications.length === 0 && <p className="py-10 text-center text-sm text-slate-500">No applications match your search.</p>}
        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-violet-100 bg-violet-50/70 p-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><span className="rounded-xl bg-violet-100 p-2.5 text-violet-600"><Lightbulb size={20} /></span><div><p className="text-sm font-bold text-slate-800">Start a New Application</p><p className="mt-1 text-xs text-slate-500">Haven't applied to any university yet? Start your application now and take the first step toward your dream career.</p></div></div><button className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm"><Plus size={14} /> New Application</button></div>
      </section>
    </div>
  );
}
