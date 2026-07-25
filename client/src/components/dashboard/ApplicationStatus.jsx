import { Building2, Check } from "lucide-react";
import { applications, applicationSteps } from "../../data/dashboardData";

const statusStyle = {
  "In Review": "bg-amber-50 text-amber-600",
  "Document Pending": "bg-rose-50 text-rose-600",
};

function StepTracker({ step }) {
  return (
    <div className="mt-4 flex items-center">
      {applicationSteps.map((label, i) => (
        <div key={label} className="flex flex-1 flex-col items-center last:flex-none">
          <div className="flex w-full items-center">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                i <= step ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"
              } ${i === step ? "ring-4 ring-emerald-100" : ""}`}
            >
              {i < step ? <Check size={12} /> : i + 1}
            </span>
            {i < applicationSteps.length - 1 && (
              <span className={`h-0.5 flex-1 ${i < step ? "bg-emerald-500" : "bg-slate-100"}`} />
            )}
          </div>
          <span className="mt-2 hidden text-center text-[10px] font-medium leading-tight text-slate-500 sm:block">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ApplicationStatus() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 card-shadow">
      <div className="flex items-center justify-between">
        <p className="text-[15px] font-bold text-slate-900">Application Status</p>
        <button className="text-xs font-semibold text-indigo-600">View All</button>
      </div>

      <div className="mt-4 space-y-5">
        {applications.map((app) => (
          <div key={app.id} className="rounded-xl border border-slate-100 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 text-white">
                  <Building2 size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{app.university}</p>
                  <p className="text-xs text-slate-400">{app.city}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">Applied on: {app.appliedOn}</p>
                </div>
              </div>
              <span className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${statusStyle[app.status]}`}>
                {app.status}
              </span>
            </div>
            <StepTracker step={app.step} />
          </div>
        ))}
      </div>
    </div>
  );
}
