import { GraduationCap, Building2, Users, Trophy } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "10,000+", label: "Students Enrolled" },
  { icon: Building2, value: "25+", label: "Top Universities" },
  { icon: Users, value: "50+", label: "Expert Counsellors" },
  { icon: Trophy, value: "98%+", label: "Visa Success Rate" },
];

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 -mt-px">
      <div className="grid grid-cols-2 gap-6 rounded-2xl bg-navy px-8 py-9 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
              <s.icon size={20} />
            </span>
            <span>
              <span className="block text-xl font-extrabold text-white sm:text-2xl">{s.value}</span>
              <span className="block text-xs font-medium text-slate-300">{s.label}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
