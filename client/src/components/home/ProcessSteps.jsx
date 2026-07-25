import { Phone, FileCheck2, GraduationCap, Users, Plane } from "lucide-react";

const steps = [
  { icon: Phone, title: "Book Free Counselling", desc: "Talk to our expert counsellors and choose the best university for you" },
  { icon: FileCheck2, title: "Document Verification", desc: "Submit your documents and get them verified by our experts" },
  { icon: GraduationCap, title: "University Admission", desc: "Get admission letter from your chosen university" },
  { icon: Users, title: "Visa Processing", desc: "We assist you in getting your student visa successfully" },
  { icon: Plane, title: "Fly to Russia", desc: "Travel assistance, airport pickup & hostel support" },
];

export default function ProcessSteps() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">Admission Process</p>
        <h2 className="mt-1.5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Your Journey, Step by Step
        </h2>
        <p className="mt-1.5 text-sm text-slate-500">We make the complex process simple and transparent</p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <span className="absolute left-1/2 top-8 hidden h-px w-full border-t-2 border-dashed border-indigo-200 lg:block" />
              )}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white ring-1 ring-slate-100 card-shadow">
                <step.icon size={24} className="text-indigo-600" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 text-sm font-bold text-slate-900">{step.title}</p>
              <p className="mt-1.5 max-w-[190px] text-xs leading-relaxed text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
