import { ShieldCheck, ClipboardCheck, Award, Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:flex items-center justify-between bg-navy text-white text-xs px-6 py-2">
      <div className="flex items-center gap-5">
        <span className="flex items-center gap-1.5 rounded-full bg-indigo-500/20 px-2.5 py-1 font-semibold text-indigo-200">
          25+ Years of Excellence in Overseas Education
        </span>
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
          <Phone size={13} /> +91 98765 43210
        </span>
        <span className="flex items-center gap-1.5">
          <Mail size={13} /> info@medbridge.in
        </span>
      </div>
    </div>
  );
}
