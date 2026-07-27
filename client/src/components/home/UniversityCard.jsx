import { MapPin, ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { getUniversityImage } from "../../data/getUniversityImage";

export default function UniversityCard({ uni }) {
  const imageUrl = getUniversityImage(uni);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white card-shadow">
      <Link to={`/universities/${uni.id}`} className="block">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={uni.name}
            loading="lazy"
            className="h-40 w-full object-cover"
          />
        ) : (
          <div
            className={`flex h-40 w-full items-center justify-center bg-gradient-to-br ${uni.color}`}
          >
            <Building2 size={36} className="text-white/90" />
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="min-h-11 text-[15px] font-bold leading-snug text-slate-900">
          {uni.name}
        </p>
        <p className="mt-1 flex min-h-4 items-center gap-1 text-xs text-slate-400">
          <MapPin size={12} /> {uni.city}
        </p>
        <p className="mt-3 text-xs text-slate-400">Tuition Fees</p>
        <p className="text-base font-extrabold text-slate-900">
          {uni.fees ? `₹${uni.fees} Lakh/Year` : "Available on request"}
        </p>
        <Link
          to={`/universities/${uni.id}`}
          className="mt-auto flex items-center justify-center gap-1.5 rounded-lg border border-indigo-100 bg-indigo-50 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-100"
        >
          View Details <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
