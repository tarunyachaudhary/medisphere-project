import { BookOpenText, GraduationCap, FlaskConical, HeartPulse, Utensils, ClipboardList } from "lucide-react";

const items = [
  { icon: BookOpenText, label: "English Medium Programs", color: "text-indigo-600 bg-indigo-50" },
  { icon: GraduationCap, label: "Globally Recognized Degrees", color: "text-emerald-600 bg-emerald-50" },
  { icon: FlaskConical, label: "Modern Labs & Hospitals", color: "text-orange-600 bg-orange-50" },
  { icon: HeartPulse, label: "Safe & Student Friendly", color: "text-pink-600 bg-pink-50" },
  { icon: Utensils, label: "Indian Food Availability", color: "text-sky-600 bg-sky-50" },
  { icon: ClipboardList, label: "High FMGE/NExT Success Rate", color: "text-violet-600 bg-violet-50" },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-3 text-center">
            <span className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}>
              <item.icon size={20} />
            </span>
            <span className="max-w-[110px] text-xs font-semibold leading-snug text-slate-600">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
