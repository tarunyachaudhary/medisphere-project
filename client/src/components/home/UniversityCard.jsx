import { MapPin, ArrowRight, Building2 } from "lucide-react";

export default function UniversityCard({ uni }) {
  return (
    <div className="flex w-[260px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white card-shadow snap-start">
      <div className={`flex h-32 items-center justify-center bg-gradient-to-br ${uni.color}`}>
        <Building2 size={36} className="text-white/90" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[15px] font-bold leading-snug text-slate-900">{uni.name}</p>
        <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
          <MapPin size={12} /> {uni.city}
        </p>
        <p className="mt-3 text-xs text-slate-400">Tuition Fees</p>
        <p className="text-base font-extrabold text-slate-900">₹{uni.fees} Lakh/Year</p>
        <button className="mt-4 flex items-center justify-center gap-1.5 rounded-lg border border-indigo-100 bg-indigo-50 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-100">
          View Details <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
