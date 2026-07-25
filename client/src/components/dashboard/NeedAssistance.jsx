import { Headset } from "lucide-react";

export default function NeedAssistance() {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-indigo-50 p-5">
      <div>
        <p className="text-sm font-bold text-slate-900">Need Assistance?</p>
        <p className="mt-1 text-xs text-slate-500">Our expert counsellors are here to help you!</p>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-600"
        >
          Chat on WhatsApp
        </a>
      </div>
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-indigo-500 card-shadow">
        <Headset size={26} />
      </span>
    </div>
  );
}
