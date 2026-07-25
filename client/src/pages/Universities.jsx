import { Building2 } from "lucide-react";
import UniversityCard from "../components/home/UniversityCard";
import { universities } from "../data/universities";

export default function Universities() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">
          Study MBBS in Russia
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Explore Russian Universities
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
          Browse all {universities.length} universities available for your MBBS journey.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {universities.map((uni) => (
          <UniversityCard key={uni.id} uni={uni} />
        ))}
      </div>

      {universities.length === 0 && (
        <div className="mt-8 flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
          <Building2 size={28} />
          <p className="mt-3 text-sm">No universities are available yet.</p>
        </div>
      )}
    </section>
  );
}
