import { CheckCircle2, Circle } from "lucide-react";
import { profileChecklist } from "../../data/dashboardData";

export default function ProfileCompletion() {
  const done = profileChecklist.filter((i) => i.done).length;
  const percent = Math.round((done / profileChecklist.length) * 100);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 card-shadow">
      <div className="flex items-center justify-between">
        <p className="text-[15px] font-bold text-slate-900">Profile Completion</p>
        <span className="text-sm font-bold text-indigo-600">{percent}% Completed</span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <ul className="mt-4 space-y-2.5">
        {profileChecklist.map((item) => (
          <li key={item.label} className="flex items-center gap-2.5 text-sm">
            {item.done ? (
              <CheckCircle2 size={17} className="shrink-0 text-emerald-500" />
            ) : (
              <Circle size={17} className="shrink-0 text-slate-300" />
            )}
            <span className={item.done ? "text-slate-700" : "text-slate-400"}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
