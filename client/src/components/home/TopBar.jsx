import { ShieldCheck, ClipboardCheck, Award, Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:flex items-center justify-between bg-navy text-white text-xs px-6 py-2">
      <div className="flex items-center gap-5">
        <span className="flex items-center gap-1.5 text-slate-300">
          <ShieldCheck size={13} /> NMC Approved Universities
        </span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <ClipboardCheck size={13} /> 100% Admission Assistance
        </span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <Award size={13} /> Visa Success Rate 98%+
        </span>
      </div>
      <div className="flex items-center gap-5 text-slate-300">
        <span className="flex items-center gap-1.5">
          <Phone size={13} /> +91 91516 41222
        </span>
        <span className="flex items-center gap-1.5">
          <Mail size={13} /> medisphereconnect@gmail.com
        </span>
      </div>
    </div>
  );
}
