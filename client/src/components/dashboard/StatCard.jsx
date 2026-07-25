export default function StatCard({ icon: Icon, value, label, bg, color }) {
  return (
    <div className="flex min-h-[94px] items-center justify-between rounded-xl border border-slate-100 bg-white p-4 card-shadow">
      <div>
        <p className="text-[11px] font-medium text-slate-400">{label}</p>
        <p className="mt-1 text-xl font-extrabold text-slate-900">{value}</p>
      </div>
      <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${bg} ${color}`}>
        <Icon size={18} />
      </span>
    </div>
  );
}
