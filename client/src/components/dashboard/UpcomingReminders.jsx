import { CalendarClock, FileText, GraduationCap } from "lucide-react";
import { reminders } from "../../data/dashboardData";

const icons = [CalendarClock, FileText, GraduationCap];
const colors = ["bg-indigo-50 text-indigo-600", "bg-pink-50 text-pink-600", "bg-sky-50 text-sky-600"];

export default function UpcomingReminders() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 card-shadow">
      <div className="flex items-center justify-between">
        <p className="text-[15px] font-bold text-slate-900">Upcoming Reminders</p>
        <button className="text-xs font-semibold text-indigo-600">View All</button>
      </div>

      <ul className="mt-4 space-y-3.5">
        {reminders.map((r, i) => {
          const Icon = icons[i % icons.length];
          return (
            <li key={r.id} className="flex items-center gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${colors[i % colors.length]}`}>
                <Icon size={16} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-800">{r.title}</span>
                <span className="block text-xs text-slate-400">{r.date}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
