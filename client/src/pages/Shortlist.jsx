import { useMemo, useState } from "react";
import {
  BadgeIndianRupee,
  BookOpen,
  Bookmark,
  Building2,
  ChevronDown,
  EllipsisVertical,
  Filter,
  Globe2,
  GraduationCap,
  Heart,
  MapPin,
  Plus,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Star,
} from "lucide-react";

const shortlistedUniversities = [
  { name: "Kazan Federal University", city: "Kazan, Russia", fees: "₹3.2 – 4.0 Lakh / Year", intake: "Sept 2025", tag: "Highly Recommended", tagStyle: "bg-violet-50 text-violet-600", emblem: "K", saved: true },
  { name: "Bashkir State Medical University", city: "Ufa, Russia", fees: "₹2.4 – 3.2 Lakh / Year", intake: "Sept 2025", tag: "Budget Friendly", tagStyle: "bg-emerald-50 text-emerald-600", emblem: "B" },
  { name: "Perm State Medical University", city: "Perm, Russia", fees: "₹2.6 – 3.6 Lakh / Year", intake: "Jan 2026", tag: "Highly Recommended", tagStyle: "bg-violet-50 text-violet-600", emblem: "P" },
  { name: "Orenburg State Medical University", city: "Orenburg, Russia", fees: "₹2.3 – 3.1 Lakh / Year", intake: "Sept 2025", tag: "Budget Friendly", tagStyle: "bg-emerald-50 text-emerald-600", emblem: "O" },
  { name: "People's Friendship University (RUDN)", city: "Moscow, Russia", fees: "₹4.0 – 5.2 Lakh / Year", intake: "Sept 2025", tag: "Top Rated", tagStyle: "bg-sky-50 text-sky-600", emblem: "R" },
];

function Stat({ icon: Icon, value, label, color }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100"><div className="flex items-center gap-4"><span className={`rounded-2xl p-3 ${color}`}><Icon size={22} /></span><div><p className="text-2xl font-extrabold text-slate-900">{value}</p><p className="mt-1 text-xs leading-5 text-slate-500">{label}</p></div></div></div>;
}

export default function Shortlist() {
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState(() => new Set(["Kazan Federal University"]));
  const visibleUniversities = useMemo(() => shortlistedUniversities.filter((university) => `${university.name} ${university.city}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const toggleSaved = (name) => setSaved((current) => {
    const next = new Set(current);
    if (next.has(name)) next.delete(name);
    else next.add(name);
    return next;
  });

  return <div className="mx-auto w-full max-w-[1440px] px-4 py-5 sm:px-6 lg:px-8"><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><div className="flex items-center gap-3"><span className="rounded-xl bg-violet-100 p-2.5 text-violet-600"><Bookmark size={22} /></span><h1 className="text-2xl font-extrabold tracking-tight text-slate-900">University Shortlist</h1></div><p className="mt-2 text-sm text-slate-500">Browse and shortlist universities that match your preferences.</p></div><button className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200"><Plus size={16} /> Add University</button></div>
    <section className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><Stat icon={Building2} value="5" label={<>Universities<br />Shortlisted</>} color="bg-violet-100 text-violet-600" /><Stat icon={Star} value="3" label={<>Highly<br />Recommended</>} color="bg-emerald-50 text-emerald-500" /><Stat icon={BadgeIndianRupee} value="4" label={<>Budget<br />Friendly</>} color="bg-amber-50 text-amber-500" /><Stat icon={Globe2} value="2" label={<>Countries<br />Explored</>} color="bg-sky-50 text-sky-500" /></section>
    <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-100 sm:p-4"><div className="flex flex-col gap-2 lg:flex-row"><label className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-slate-400"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" placeholder="Search universities, country or program..." /></label>{[[Globe2, "Country"], [BookOpen, "Program"], [GraduationCap, "Intake"]].map(([Icon, label]) => <button key={label} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-600"><Icon size={15} /> {label} <ChevronDown size={14} /></button>)}<button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-600"><Filter size={15} /> Filter</button></div>
      <div className="mt-4 space-y-2">{visibleUniversities.map((university) => <article key={university.name} className="grid gap-4 rounded-xl border border-slate-200 p-4 lg:grid-cols-[minmax(0,1fr)_185px_115px_120px]"><div className="flex min-w-0 gap-4"><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-xl font-extrabold text-indigo-600">{university.emblem}</span><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h2 className="text-sm font-bold text-slate-800">{university.name}</h2><span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${university.tagStyle}`}>{university.tag}</span></div><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><MapPin size={12} /> {university.city}</p><div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500"><span className="flex items-center gap-1"><BookOpen size={12} /> MBBS</span><span className="flex items-center gap-1"><Globe2 size={12} /> English Medium</span><span className="flex items-center gap-1"><ShieldCheck size={12} /> NMC & WHO Approved</span></div></div></div><div><p className="text-[10px] text-slate-400">Tuition Fees</p><p className="mt-1 text-xs font-bold text-slate-700">{university.fees}</p></div><div><p className="text-[10px] text-slate-400">Intake</p><p className="mt-1 text-xs font-bold text-slate-700">{university.intake}</p></div><div className="flex items-center gap-2 lg:flex-col lg:items-end"><div className="flex gap-2"><button onClick={() => toggleSaved(university.name)} className={`rounded-lg border border-slate-200 p-2 ${saved.has(university.name) ? "bg-rose-50 text-rose-500" : "text-slate-400 hover:bg-slate-50"}`} aria-label={`Save ${university.name}`}><Heart size={17} fill={saved.has(university.name) ? "currentColor" : "none"} /></button><button className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50" aria-label={`More options for ${university.name}`}><EllipsisVertical size={17} /></button></div><button className="rounded-lg border border-violet-300 px-3 py-2 text-xs font-semibold text-violet-600 hover:bg-violet-50">View Details</button></div></article>)}</div>
      {visibleUniversities.length === 0 && <p className="py-10 text-center text-sm text-slate-500">No shortlisted universities match your search.</p>}<p className="mt-4 flex items-center justify-center gap-1 text-xs text-slate-500"><SlidersHorizontal size={13} /> You can shortlist up to 20 universities.</p>
    </section></div>;
}
