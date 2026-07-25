import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ showText = true }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shrink-0">
        <GraduationCap size={20} strokeWidth={2.2} />
      </span>
      {showText && (
        <span className="leading-tight">
          <span className="block text-[15px] font-extrabold text-slate-900">MedBridge</span>
          <span className="block text-[11px] font-medium text-slate-500">Study MBBS in Russia</span>
        </span>
      )}
    </Link>
  );
}
