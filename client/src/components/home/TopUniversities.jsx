import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { universities } from "../../data/universities";
import UniversityCard from "./UniversityCard";

export default function TopUniversities() {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">Top Universities</p>
          <h2 className="mt-1.5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Top <span className="text-indigo-600">NMC Approved</span> Universities in Russia
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">Choose from Russia's best medical universities</p>
        </div>
        <Link
          to="/universities"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-indigo-600 sm:flex"
        >
          View All Universities <ArrowRight size={15} />
        </Link>
      </div>

      <div className="relative mt-8">
        <button
          onClick={() => scroll(-1)}
          className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 shadow-md lg:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory scroll-px-6"
        >
          {universities.map((uni) => (
            <UniversityCard key={uni.id} uni={uni} />
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 shadow-md lg:flex"
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
