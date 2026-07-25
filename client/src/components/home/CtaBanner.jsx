import { Link } from "react-router-dom";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-9 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-xl font-extrabold text-white">Your Dream, Our Mission</p>
          <p className="mt-1 text-sm text-indigo-100">
            We make your MBBS journey in Russia simple, secure and successful.
          </p>
        </div>
        <Link
          to="/dashboard"
          className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
        >
          Book Free Counselling
        </Link>
      </div>
    </section>
  );
}
