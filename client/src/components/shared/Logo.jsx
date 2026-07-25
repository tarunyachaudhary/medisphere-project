import { Link } from "react-router-dom";
import companyLogo from "../../assets/company-logo.png";

export default function Logo({ showText = true }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <img
        src={companyLogo}
        alt="Medisphere logo"
        className="h-10 w-10 shrink-0 rounded-xl object-cover shadow-sm"
      />
      {showText && (
        <span className="leading-tight">
          <span className="block text-[15px] font-extrabold text-slate-900">Medisphere</span>
          <span className="block text-[11px] font-medium text-slate-500">YOUR FUTURE.OUR MISSION</span>
        </span>
      )}
    </Link>
  );
}
