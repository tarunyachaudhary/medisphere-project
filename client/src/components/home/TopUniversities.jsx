import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { universities } from "../../data/universities";
import UniversityCard from "./UniversityCard";

export default function TopUniversities() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">
            Top Universities
          </p>
          <h2 className="mt-1.5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Top <span className="text-indigo-600">NMC Approved</span>{" "}
            Universities in Russia
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Choose from Russia's best medical universities
          </p>
        </div>
        <Link
          to="/universities"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-indigo-600 sm:flex"
        >
          View All Universities <ArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {universities.slice(0, 10).map((uni) => (
          <UniversityCard key={uni.id} uni={uni} />
        ))}
      </div>
    </section>
  );
}
