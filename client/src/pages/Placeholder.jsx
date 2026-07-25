import { useLocation, Link } from "react-router-dom";
import { Construction } from "lucide-react";

function titleFromPath(pathname) {
  const last = pathname.split("/").filter(Boolean).pop() || "home";
  return last
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Placeholder() {
  const { pathname } = useLocation();
  const title = titleFromPath(pathname);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center m-4 sm:m-6">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
        <Construction size={26} />
      </span>
      <p className="mt-4 text-lg font-bold text-slate-900">{title}</p>
      <p className="mt-1.5 max-w-sm text-sm text-slate-500">
        This page is on our roadmap and will be available soon. In the meantime, explore the
        dashboard or head back home.
      </p>
      <Link
        to="/"
        className="mt-5 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
