// Services.jsx
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  FileCheck2,
  GraduationCap,
  Headphones,
  HeartPulse,
  House,
  MessageCircle,
  Plane,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "University Selection",
    description:
      "We help you choose the best universities that match your goals and budget.",
    icon: GraduationCap,
  },
  {
    title: "Application Support",
    description:
      "Complete support in filling applications and ensuring error-free submissions.",
    icon: FileCheck2,
  },
  {
    title: "Document Assistance",
    description:
      "Guidance and verification of all required documents for admission.",
    icon: BookOpenCheck,
  },
  {
    title: "Visa Guidance",
    description:
      "Expert guidance for visa application and documentation process.",
    icon: BadgeCheck,
  },
  {
    title: "Travel Assistance",
    description:
      "Flight booking, travel planning and arrival support in Russia.",
    icon: Plane,
  },
  {
    title: "Accommodation",
    description:
      "We help you find safe, affordable and comfortable accommodation near your university.",
    icon: House,
  },
  {
    title: "Health Insurance",
    description:
      "Assistance in getting reliable health insurance for your stay in Russia.",
    icon: ShieldCheck,
  },
  {
    title: "Post Arrival Support",
    description:
      "We stay with you even after arrival for a smooth and hassle-free experience.",
    icon: Headphones,
  },
];

function ServiceCard({ title, description, icon: Icon }) {
  return (
    <article className="flex min-h-[264px] flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/60">
      <div className="mb-5 grid h-[58px] w-[58px] place-items-center rounded-full bg-gradient-to-br from-violet-100 to-indigo-50 text-indigo-600">
        <Icon size={29} strokeWidth={2} />
      </div>

      <h3 className="mb-3 text-[15.5px] font-bold tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="text-sm leading-6 text-slate-500">{description}</p>

      <a
        href="#contact"
        className="mt-auto flex w-fit items-center gap-1.5 pt-5 text-[13px] font-bold text-indigo-600 transition hover:gap-2.5"
      >
        Learn More <ArrowRight size={17} />
      </a>
    </article>
  );
}

export default function Services() {
  return (
    <main className="min-h-screen bg-white px-5 py-8 font-sans text-slate-950 md:px-10 md:py-11">
      {/* Page heading */}
      <section className="mb-10 flex items-start gap-4 md:ml-2">
        <div className="mt-1 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-100 to-indigo-50 text-indigo-600">
          <HeartPulse size={28} />
        </div>

        <div>
          <h1 className="mt-1 text-4xl font-extrabold tracking-tight md:text-[38px]">
            Services
          </h1>

          <p className="mt-3 text-[15px] leading-6 text-slate-500">
            We provide end-to-end support to make your journey to
            <br className="hidden md:block" /> study in Russia smooth, easy and
            successful.
          </p>
        </div>
      </section>

      {/* Services cards */}
      <section>
        <h2 className="mb-5 text-xl font-bold tracking-tight">Our Services</h2>

        <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative mt-8 flex min-h-[188px] items-center gap-6 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-50 via-white to-indigo-50 px-7 py-7 md:px-10">
        <div className="relative hidden h-28 w-40 shrink-0 place-items-center text-indigo-600 md:grid">
          <MessageCircle
            size={37}
            className="absolute left-3 top-0 fill-violet-500 text-violet-500"
          />
          <Headphones size={64} />
        </div>

        <div className="relative z-10">
          <h2 className="mb-2 text-xl font-bold tracking-tight md:text-[21px]">
            Need Help Choosing the Right Service?
          </h2>

          <p className="mb-4 text-sm text-slate-500">
            Our experts are here to help you at every step of your journey.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02] hover:from-indigo-600 hover:to-indigo-800"
          >
            <MessageCircle size={18} />
            Book a Free Consultation
          </a>
        </div>

        <Plane
          size={60}
          className="absolute bottom-10 right-10 hidden rotate-[20deg] text-indigo-400 md:block"
        />
      </section>
    </main>
  );
}
