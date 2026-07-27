import { useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  Building2,
  CheckCircle2,
  FileCheck,
  Home,
  Utensils,
  Wifi,
  BookOpen,
  Dumbbell,
  IndianRupee,
} from "lucide-react";
import { universities } from "../data/universities";
import { getUniversityImage } from "../data/getUniversityImage";

const QUICK_LINKS = [
  { id: "overview", label: "Overview" },
  { id: "quick-facts", label: "Quick Facts" },
  { id: "fee-structure", label: "Fee Structure" },
  { id: "eligibility", label: "Eligibility" },
  { id: "admission-process", label: "Admission Process" },
  { id: "documents", label: "Documents Required" },
  { id: "campus-life", label: "Hostel & Campus Life" },
  { id: "recognitions", label: "Recognitions" },
  { id: "faqs", label: "FAQs" },
  { id: "similar", label: "Similar Universities" },
];

// Maps common accreditation shorthand to its full name so the
// Recognitions sidebar reads clearly even though the data file only
// stores compact strings like "NMC, WHO, ECFMG".
const RECOGNITION_LABELS = {
  NMC: "National Medical Commission (NMC), India",
  "NMC (erstwhile MCI)":
    "National Medical Commission (NMC), India (erstwhile MCI)",
  WHO: "World Health Organization (WHO)",
  WDOMS: "World Directory of Medical Schools (WDOMS)",
  ECFMG: "Educational Commission for Foreign Medical Graduates (ECFMG)",
  FAIMER:
    "Foundation for Advancement of International Medical Education and Research (FAIMER)",
  WFME: "World Federation for Medical Education (WFME)",
  AMSE: "Association for Medical Education in Europe (AMSE)",
  "GMC PLAB": "UK General Medical Council (GMC) PLAB pathway",
};

const AMENITY_ICONS = {
  hostel: { icon: Home, label: "On-campus hostel" },
  food: { icon: Utensils, label: "Indian mess/food available" },
  security: { icon: ShieldCheck, label: "24/7 security" },
  wifi: { icon: Wifi, label: "Wi-Fi & internet" },
  library: { icon: BookOpen, label: "Library & research centers" },
  sports: { icon: Dumbbell, label: "Sports & recreation" },
};

// Fallbacks so every section renders something reasonable even for
// the universities we haven't fully researched yet — same pattern as
// the "Available on request" placeholder already used for tuition fees.
const FALLBACK_FACTS = {
  recognitions: "NMC, WHO",
  medium: "English",
  duration: "6 Years (5 + 1 Internship)",
  eligibility: "50% in PCB (40% reserved category) in Class 12",
  neetRequired: "Yes",
  indianStudents: "Available on request",
  intake: "September",
  hostelFee: "Available on request",
};

function fallbackOverview(uni) {
  return `${uni.name} is an NMC-approved medical university located in ${uni.city}, offering an English-medium MBBS program recognized internationally.\n\nDetailed information about this university — including its recognitions, admission process, and student life — is being added. Check back soon, or contact our counsellors for the latest details.`;
}

const FALLBACK_ELIGIBILITY = [
  "Completed 10+2 (or equivalent) with Physics, Chemistry, and Biology as core subjects",
  "Minimum 50% aggregate in PCB for general category (40% for SC/ST/OBC/EWS)",
  "Minimum age of 17 years by 31st December of the admission year",
  "Valid qualifying NEET-UG score, as per NMC regulations",
];

const FALLBACK_DOCUMENTS = [
  "Class 10 & 12 mark sheets",
  "Valid passport (minimum 18 months validity)",
  "NEET-UG scorecard",
  "Passport-size photographs",
  "Medical fitness certificate (incl. HIV-negative report)",
  "Official invitation letter from the university",
];

const FALLBACK_ADMISSION_STEPS = [
  {
    title: "Apply online",
    description:
      "Submit the application form with your academic documents, passport, and photographs.",
  },
  {
    title: "Document verification",
    description:
      "The university reviews your documents and issues a provisional admission letter.",
  },
  {
    title: "Receive invitation letter",
    description:
      "An official invitation letter is issued, required for your student visa application.",
  },
  {
    title: "Pay initial fees",
    description:
      "Pay the first installment of tuition to confirm and reserve your seat.",
  },
  {
    title: "Apply for a student visa",
    description:
      "Submit your passport and invitation letter at the Russian Embassy.",
  },
  {
    title: "Travel & enroll",
    description:
      "Fly to Russia, complete registration and medical check-up, and begin classes.",
  },
];

function getSimilarUniversities(current, all, count = 3) {
  const others = all.filter((u) => u.id !== current.id);
  const sameCity = others.filter(
    (u) => u.city.split(",")[1]?.trim() === current.city.split(",")[1]?.trim(),
  );
  const byFeeDistance = [...others].sort((a, b) => {
    const feeA = parseFloat(a.fees) || 999;
    const feeB = parseFloat(b.fees) || 999;
    const currentFee = parseFloat(current.fees) || 0;
    return Math.abs(feeA - currentFee) - Math.abs(feeB - currentFee);
  });

  const combined = [...sameCity, ...byFeeDistance];
  const seen = new Set();
  const result = [];
  for (const u of combined) {
    if (!seen.has(u.id)) {
      seen.add(u.id);
      result.push(u);
    }
    if (result.length === count) break;
  }
  return result;
}

export default function UniversityDetails() {
  const { id } = useParams();
  const uni = universities.find((u) => String(u.id) === id);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [id]);

  if (!uni) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-lg font-semibold text-slate-900">
          University not found
        </p>
        <Link
          to="/universities"
          className="mt-3 inline-block text-sm font-semibold text-indigo-600"
        >
          ← Back to all universities
        </Link>
      </div>
    );
  }

  const imageUrl = getUniversityImage(uni);
  const facts = uni.facts || FALLBACK_FACTS;
  const similar = getSimilarUniversities(uni, universities);

  const eligibilityList = uni.eligibilityList || FALLBACK_ELIGIBILITY;
  const documents = uni.documents || FALLBACK_DOCUMENTS;
  const admissionSteps = uni.admissionSteps || FALLBACK_ADMISSION_STEPS;
  const recognitionCodes = (facts.recognitions || "NMC, WHO")
    .split(",")
    .map((s) => s.trim());

  const tableRows = [
    {
      label: "Tuition Fees",
      value: uni.fees ? `₹${uni.fees} Lakh/Year` : "Available on request",
    },
    { label: "University Recognitions", value: facts.recognitions },
    { label: "Medium of Teaching", value: facts.medium },
    { label: "MBBS Course Duration", value: facts.duration },
    { label: "Eligibility Criteria", value: facts.eligibility },
    { label: "NEET Required", value: facts.neetRequired },
    { label: "No. of Indian Students", value: facts.indianStudents },
    { label: "Intake Period", value: facts.intake },
    { label: "Hostel Fee", value: facts.hostelFee },
  ];

  return (
    <div
      className="mx-auto max-w-7xl px-6 pb-16"
      style={{ overflowAnchor: "none" }}
    >
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 py-5 text-xs text-slate-400">
        <Link to="/" className="hover:text-indigo-600">
          Home
        </Link>
        <ChevronRight size={12} />
        <Link to="/universities" className="hover:text-indigo-600">
          Universities
        </Link>
        <ChevronRight size={12} />
        <span className="text-slate-600">{uni.name}</span>
      </nav>

      {/* Hero banner */}
      <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-64">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={uni.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${uni.color}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 flex items-end gap-4 p-6">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${uni.color} text-2xl font-extrabold text-white shadow-lg ring-4 ring-white/20`}
          >
            {uni.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-white sm:text-2xl">
              {uni.name}
            </h1>
            <p className="mt-1 flex items-center gap-1 text-sm text-white/80">
              <MapPin size={14} /> {uni.city} • NMC Approved
            </p>
          </div>
        </div>

        {uni.website && (
          <a
            href={uni.website}
            target="_blank"
            rel="noreferrer"
            className="absolute right-4 top-4 flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur transition hover:bg-white"
          >
            Visit Website <ExternalLink size={12} />
          </a>
        )}
      </div>

      {/* 3-column layout */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[200px_1fr_280px]">
        {/* Quick links nav */}
        <aside className="hidden lg:sticky lg:top-6 lg:block lg:self-start">
          <div className="max-h-[calc(100vh-3rem)] overflow-y-auto rounded-2xl border border-slate-100 bg-white p-4 card-shadow">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">
              Quick Links
            </p>
            <ul className="space-y-1">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="block rounded-lg px-2 py-1.5 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="space-y-6">
          {/* Overview */}
          <section
            id="overview"
            className="rounded-2xl border border-slate-100 bg-white p-6 card-shadow sm:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">
              Overview
            </p>
            <h2 className="mt-1 text-xl font-extrabold text-slate-900">
              {uni.name}
            </h2>

            <div className="mt-5 space-y-4">
              {(uni.overview || fallbackOverview(uni))
                .split("\n\n")
                .map((para, i) =>
                  i === 0 ? (
                    <p
                      key={i}
                      className="border-l-4 border-indigo-500 pl-4 text-[15px] font-medium leading-relaxed text-slate-700"
                    >
                      {para}
                    </p>
                  ) : (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-slate-500"
                    >
                      {para}
                    </p>
                  ),
                )}
            </div>
          </section>

          {/* Quick Facts table */}
          <section
            id="quick-facts"
            className="overflow-hidden rounded-2xl border border-slate-100 bg-white card-shadow"
          >
            <div className="p-6 pb-0">
              <h2 className="text-lg font-extrabold text-indigo-600">
                Quick Facts
              </h2>
            </div>
            <div className="mt-4 divide-y divide-slate-100 border-t border-slate-100">
              {tableRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-1 gap-1 px-6 py-3.5 sm:grid-cols-[220px_1fr] sm:gap-4 ${
                    i % 2 === 0 ? "bg-slate-50/60" : "bg-white"
                  }`}
                >
                  <p className="text-sm font-bold text-slate-900">
                    {row.label}
                  </p>
                  <p className="text-sm text-slate-600">{row.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fee Structure */}
          {uni.feeStructure && (
            <section
              id="fee-structure"
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white card-shadow"
            >
              <div className="p-6 pb-0">
                <h2 className="text-lg font-extrabold text-indigo-600">
                  Fee Structure
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Approximate figures — always confirm current rates with the
                  university.
                </p>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 p-6 pt-0 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                  <IndianRupee size={16} className="text-indigo-500" />
                  <p className="mt-2 text-base font-extrabold text-slate-900">
                    {uni.feeStructure.tuitionPerYear}
                  </p>
                  <p className="text-xs text-slate-400">Tuition / Year</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                  <Home size={16} className="text-indigo-500" />
                  <p className="mt-2 text-base font-extrabold text-slate-900">
                    {uni.feeStructure.hostelPerYear}
                  </p>
                  <p className="text-xs text-slate-400">Hostel / Year</p>
                </div>
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4">
                  <FileCheck size={16} className="text-indigo-500" />
                  <p className="mt-2 text-base font-extrabold text-slate-900">
                    {uni.feeStructure.totalSixYear}
                  </p>
                  <p className="text-xs text-slate-400">Total (6 Years)</p>
                </div>
              </div>
              <div className="border-t border-slate-100 px-6 py-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  One-Time Costs
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {uni.feeStructure.oneTimeCosts}
                </p>
              </div>
            </section>
          )}

          {/* Eligibility Criteria */}
          <section
            id="eligibility"
            className="rounded-2xl border border-slate-100 bg-white p-6 card-shadow"
          >
            <h2 className="text-lg font-extrabold text-indigo-600">
              Eligibility Criteria
            </h2>
            <ul className="mt-4 space-y-3">
              {eligibilityList.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-600"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-emerald-500"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Admission Process — timeline */}
          <section
            id="admission-process"
            className="rounded-2xl border border-slate-100 bg-white p-6 card-shadow"
          >
            <h2 className="text-lg font-extrabold text-indigo-600">
              Admission Process
            </h2>
            <ol className="relative mt-6 space-y-7 border-l-2 border-indigo-100 pl-6">
              {admissionSteps.map((step, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Documents Required */}
          <section
            id="documents"
            className="rounded-2xl border border-slate-100 bg-white p-6 card-shadow"
          >
            <h2 className="text-lg font-extrabold text-indigo-600">
              Documents Required
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {documents.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 p-3 text-sm text-slate-600"
                >
                  <FileCheck
                    size={16}
                    className="mt-0.5 shrink-0 text-indigo-500"
                  />
                  {doc}
                </div>
              ))}
            </div>
          </section>

          {/* Hostel & Campus Life */}
          <section
            id="campus-life"
            className="rounded-2xl border border-slate-100 bg-white p-6 card-shadow"
          >
            <h2 className="text-lg font-extrabold text-indigo-600">
              Hostel & Campus Life
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {uni.campusLife?.description ||
                "Hostel accommodation is available on or near campus, with mess facilities, security, and a multicultural student community. Contact our counsellors for specific details on this university's facilities."}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {(
                uni.campusLife?.amenities || ["hostel", "food", "security"]
              ).map((key) => {
                const amenity = AMENITY_ICONS[key];
                if (!amenity) return null;
                const Icon = amenity.icon;
                return (
                  <div
                    key={key}
                    className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-center"
                  >
                    <Icon size={18} className="text-indigo-500" />
                    <p className="text-xs font-semibold text-slate-600">
                      {amenity.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* FAQs — native accordion, no extra JS state needed */}
          {uni.faqs && uni.faqs.length > 0 && (
            <section
              id="faqs"
              className="rounded-2xl border border-slate-100 bg-white p-6 card-shadow"
            >
              <h2 className="text-lg font-extrabold text-indigo-600">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 divide-y divide-slate-100">
                {uni.faqs.map((faq, i) => (
                  <details key={i} className="group py-3.5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-slate-900">
                      {faq.q}
                      <ChevronDown
                        size={16}
                        className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Right sidebar */}
        <aside className="space-y-6">
          <section
            id="recognitions"
            className="rounded-2xl border border-slate-100 bg-white p-5 card-shadow lg:sticky lg:top-6"
          >
            <h3 className="text-sm font-extrabold text-slate-900">
              Recognitions & Approvals
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {recognitionCodes.map((code) => (
                <li key={code} className="flex items-start gap-2">
                  <ShieldCheck
                    size={14}
                    className="mt-0.5 shrink-0 text-emerald-500"
                  />
                  {RECOGNITION_LABELS[code] || code}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-100 bg-white p-5 card-shadow">
            <h3 className="text-sm font-extrabold text-slate-900">
              Similar Universities
            </h3>
            <div className="mt-3 space-y-3">
              {similar.map((s) => {
                const sImg = getUniversityImage(s);
                return (
                  <Link
                    key={s.id}
                    to={`/universities/${s.id}`}
                    className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-slate-50"
                  >
                    {sImg ? (
                      <img
                        src={sImg}
                        alt={s.name}
                        className="h-11 w-11 shrink-0 rounded-lg object-cover"
                      />
                    ) : (
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${s.color}`}
                      >
                        <Building2 size={16} className="text-white/90" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold text-slate-900">
                        {s.name}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {s.fees ? `₹${s.fees} Lakh/Year` : "On request"}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
