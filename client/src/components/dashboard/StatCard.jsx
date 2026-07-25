export default function StatCard({ icon: Icon, value, label, bg, color }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-5 card-shadow">
      <div>
        <p className="text-xs font-medium text-slate-400">{label}</p>
        <p className="mt-1.5 text-2xl font-extrabold text-slate-900">{value}</p>
      </div>
      <span className={`flex h-11 w-11 items-center justify-center rounded-full ${bg} ${color}`}>
        <Icon size={20} />
      </span>
    </div>
  );
}
