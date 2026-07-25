import { FileText, UploadCloud } from "lucide-react";
import { documents } from "../../data/dashboardData";

const statusStyle = {
  Verified: "text-emerald-600 bg-emerald-50",
  Pending: "text-amber-600 bg-amber-50",
};

export default function MyDocuments() {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-4 card-shadow">
      <div className="flex items-center justify-between">
        <p className="text-[15px] font-bold text-slate-900">My Documents</p>
        <button className="text-xs font-semibold text-indigo-600">View All</button>
      </div>

      <ul className="mt-3 space-y-2.5">
        {documents.map((doc) => (
          <li key={doc.id} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                <FileText size={16} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-slate-800">{doc.name}</span>
                <span className="block text-xs text-slate-400">Uploaded on {doc.date}</span>
              </span>
            </div>
            <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyle[doc.status]}`}>
              {doc.status}
            </span>
          </li>
        ))}
      </ul>

      <label className="mt-4 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-slate-200 py-6 text-center transition hover:border-indigo-300 hover:bg-indigo-50/30">
        <UploadCloud size={20} className="text-slate-400" />
        <span className="text-xs font-semibold text-slate-600">Drag & drop files here or click to upload</span>
        <span className="text-[11px] text-slate-400">PDF, JPG, PNG (Max. 10MB)</span>
        <input type="file" className="hidden" />
      </label>
    </div>
  );
}
