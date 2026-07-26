import {
  ClipboardList,
  NotebookPen,
  Landmark,
  FileCheck2,
  Mail,
  Globe2,
  Plane,
  FileText,
  GraduationCap,
  IdCard,
  BriefcaseMedical,
  MoreHorizontal,
  User,
  MessageCircle,
  MapPin,
} from "lucide-react";

const steps = [
  {
    icon: NotebookPen,
    title: "Counseling & Profile Evaluation",
    desc: "We understand your goals and suggest the best universities.",
  },
  {
    icon: Landmark,
    title: "University Selection & Application",
    desc: "Choose your preferred university and we assist you with the application.",
  },
  {
    icon: FileCheck2,
    title: "Document Preparation & Submission",
    desc: "We help you prepare and submit all the required documents.",
  },
  {
    icon: Mail,
    title: "Admission Letter Received",
    desc: "After evaluation, you will receive the admission letter from the university.",
  },
  {
    icon: Globe2,
    title: "Visa Processing",
    desc: "We guide you through the visa application process.",
  },
  {
    icon: Plane,
    title: "Travel & Arrival Support",
    desc: "We assist you with your travel and provide support even after arrival.",
  },
];

const documents = [
  {
    icon: IdCard,
    title: "Valid Passport",
    desc: "Minimum 18 months validity required.",
  },
  {
    icon: FileText,
    title: "10th & 12th Marksheet",
    desc: "Scanned copy of original mark sheets.",
  },
  {
    icon: GraduationCap,
    title: "Academic Certificates",
    desc: "All previous academic certificates.",
  },
  {
    icon: User,
    title: "Passport Size Photos",
    desc: "Recent photographs with white background.",
  },
  {
    icon: BriefcaseMedical,
    title: "Medical Certificate",
    desc: "HIV-negative medical certificate.",
  },
  {
    icon: MoreHorizontal,
    title: "Others (if required)",
    desc: "Additional documents as per university/embassy.",
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
          <ClipboardList size={22} />
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Process
        </h1>
      </div>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
        We make your journey to study in Russia simple and hassle-free. Follow
        these easy steps from application to arrival.
      </p>

      {/* Steps timeline */}
      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative flex flex-col items-center px-1 text-center"
          >
            {i < steps.length - 1 && (
              <span className="absolute left-1/2 top-[11px] hidden h-px w-full border-t-2 border-dashed border-indigo-200 lg:block" />
            )}
            <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">
              {i + 1}
            </span>
            <span className="mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <step.icon size={26} />
            </span>
            <p className="mt-4 text-sm font-bold text-slate-900">
              {step.title}
            </p>
            <p className="mt-1.5 max-w-[170px] text-xs leading-relaxed text-slate-500">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Documents required */}
      <div className="mt-12 rounded-2xl border border-slate-100 bg-white p-6 card-shadow sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
            <FileText size={18} />
          </span>
          <div>
            <p className="text-base font-extrabold text-slate-900">
              Documents Required
            </p>
            <p className="text-xs text-slate-500">
              Keep the following documents ready for a smooth application
              process.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="rounded-xl border border-slate-100 p-4"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <doc.icon size={16} />
              </span>
              <p className="mt-3 text-xs font-bold text-slate-900">
                {doc.title}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                {doc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Need help CTA */}
      <div className="relative mt-8 flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-indigo-50 px-8 py-8 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white card-shadow">
            <ClipboardList size={26} className="text-indigo-600" />
          </span>
          <div>
            <p className="text-lg font-extrabold text-slate-900">
              Need Help with the Process?
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Our expert team is here to guide you at every step of your
              journey.
            </p>
            <a
              href="#booking-form"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700"
            >
              <MessageCircle size={16} />
              Book a Free Consultation
            </a>
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <span className="h-px w-16 border-t-2 border-dashed border-indigo-300" />
          <Plane size={32} className="-rotate-3 text-indigo-300" />
          <MapPin size={22} className="text-indigo-300" />
        </div>
      </div>
    </section>
  );
}
