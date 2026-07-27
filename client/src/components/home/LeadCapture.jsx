import { ChevronsRight, GraduationCap, Award, ScrollText } from "lucide-react";
import studentImg from "/student-home-img.avif"
import { useState } from "react";
import ApplyNowForm from "./ApplyNowForm";

export default function LeadCapture() {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <section className="bg-navy m-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative mx-auto flex h-60 w-60 shrink-0 items-center justify-center sm:h-72 sm:w-72">
          <img
            className="object-cover h-[400px] w-[300px] rounded-xl "
            src={studentImg}
            alt=""
          />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Leave us your contact details here!
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70">
            Medisphere is dedicated to helping young aspirers turn their dream
            of becoming a doctor into reality through the MBBS program in
            Russia. Our counselling team works with you at every step, from
            university selection to visa processing, so your journey stays
            simple, transparent and stress-free.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-7 cursor-pointer inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-navy transition hover:bg-slate-100"
          >
            Apply Now
            <ChevronsRight size={16} />
          </button>

          <ApplyNowForm isOpen={showForm} onClose={() => setShowForm(false)} />
          {showForm && <ApplyNowForm />}
        </div>
      </div>
    </section>
  );
}