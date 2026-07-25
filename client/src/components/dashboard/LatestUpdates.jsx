import { Newspaper } from "lucide-react";
import { updates } from "../../data/dashboardData";

const gradients = [
  "from-indigo-500 to-blue-600",
  "from-rose-500 to-orange-500",
  "from-emerald-500 to-teal-600",
  "from-fuchsia-500 to-purple-600",
];

export default function LatestUpdates() {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-4 card-shadow">
      <div className="flex items-center justify-between">
        <p className="text-[15px] font-bold text-slate-900">Latest Updates</p>
        <button className="text-xs font-semibold text-indigo-600">View All</button>
      </div>

      <ul className="mt-3 space-y-3">
        {updates.map((u, i) => (
          <li key={u.id} className="flex items-center gap-3">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${gradients[i % gradients.length]} text-white`}>
              <Newspaper size={16} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-xs font-semibold text-slate-800">{u.title}</span>
              <span className="block text-[11px] text-slate-400">{u.date}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
