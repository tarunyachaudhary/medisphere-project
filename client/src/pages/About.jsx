import { useState } from "react";
import {
  BadgeCheck,
  ClipboardList,
  Landmark,
  FileText,
  Globe2,
  GraduationCap,
  HandHeart,
  Headphones,
  IndianRupee,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
  Star,
  Users,
  UserRound,
} from "lucide-react";
import CounsellingBookingModal from "../components/home/CounsellingBooking";

const stats = [
  {
    value: "1000+",
    title: "Students Guided",
    description: "Successfully guided to top Russian universities.",
    icon: Users,
  },
  {
    value: "50+",
    title: "Partner Universities",
    description: "Collaboration with leading medical universities.",
    icon: Landmark,
  },
  {
    value: "98%",
    title: "Visa Success Rate",
    description: "High visa success rate with expert assistance.",
    icon: BadgeCheck,
  },
  {
    value: "24/7",
    title: "Support",
    description: "We're here to help you anytime, anywhere.",
    icon: Headphones,
  },
];

const reasons = [
  {
    title: "Trusted & Reliable",
    description:
      "We are a trusted consultancy with a proven track record of student success.",
    icon: ShieldCheck,
  },
  {
    title: "Personalized Support",
    description:
      "We understand your goals and provide solutions tailored to you.",
    icon: UserRound,
  },
  {
    title: "End-to-End Assistance",
    description:
      "From documentation to departure, we handle everything for you.",
    icon: FileText,
  },
  {
    title: "Affordable Services",
    description:
      "Quality guidance and support at competitive and transparent prices.",
    icon: IndianRupee,
  },
  {
    title: "Global Community",
    description:
      "Join a global community of students and build lifelong connections.",
    icon: Globe2,
  },
];

function IconCircle({ icon: Icon, className = "" }) {
  return (
    <div
      className={`grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-violet-100 to-indigo-50 text-indigo-600 ${className}`}
    >
      <Icon size={27} strokeWidth={2.1} />
    </div>
  );
}

export default function About() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-4 font-sans text-slate-950 md:px-11 md:py-14">
      <div className="mx-auto max-w-[1450px] rounded-2xl bg-white p-7 shadow-sm md:p-12">
        {/* Intro */}
        <section className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-[570px]">
            <p className="mb-4 text-sm font-bold uppercase text-indigo-600">
              About Us
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              About <span className="text-indigo-600">Medisphere</span>
            </h1>

            <div className="my-6 h-1 w-16 rounded-full bg-indigo-600" />

            <p className="max-w-xl text-[16px] leading-8 text-slate-600">
              Medisphere Study Abroad is a trusted education consultancy
              dedicated to helping students achieve their dreams of studying in
              Russia. We provide end-to-end support, from choosing the right
              university to settling in, making your journey smooth, successful,
              and stress-free.
            </p>

            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-4">
                <IconCircle icon={GraduationCap} />
                <div>
                  <h3 className="mb-1 text-sm font-bold">Expert Guidance</h3>
                  <p className="text-[13px] leading-5 text-slate-500">
                    From admission to arrival,
                    <br />
                    we’re with you all the way.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <IconCircle icon={HandHeart} />
                <div>
                  <h3 className="mb-1 text-sm font-bold">Student First</h3>
                  <p className="text-[13px] leading-5 text-slate-500">
                    Your goals, your future,
                    <br />
                    our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Russia image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1400&q=90"
              alt="Saint Basil's Cathedral in Moscow, Russia"
              className="h-[410px] w-full rounded-xl object-cover md:h-[445px]"
            />

            <div className="absolute bottom-3 left-4 flex max-w-[335px] items-center gap-4 rounded-xl bg-white px-5 py-3 shadow-lg md:bottom-3 md:left-10">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                <Star size={23} fill="currentColor" />
              </div>

              <div>
                <h3 className="text-[13px] font-bold">
                  Trusted by 1000+ Students
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-slate-500">
                  Helping students build a brighter future in Russia since 2021.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mt-7 grid gap-5 rounded-2xl bg-gradient-to-r from-violet-50 via-indigo-50 to-violet-50 p-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex min-h-[130px] items-center gap-5 rounded-xl bg-white p-5 shadow-sm"
            >
              <IconCircle icon={Icon} />
              <div>
                <p className="mb-2 text-2xl font-extrabold text-indigo-600">
                  {value}
                </p>
                <h3 className="mb-2 text-[13px] font-bold">{title}</h3>
                <p className="text-[12.5px] leading-5 text-slate-500">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Why choose us */}
        <section className="mt-8">
          <h2 className="mb-5 text-2xl font-extrabold tracking-tight">
            Why Choose Us?
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="min-h-[187px] rounded-xl border border-slate-100 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100"
              >
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-violet-100 to-indigo-50 text-indigo-600">
                  <Icon size={21} />
                </div>

                <h3 className="mb-2 text-sm font-bold">{title}</h3>
                <p className="text-[13px] leading-6 text-slate-500">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Need help CTA */}
        <div className="relative mt-8 flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-indigo-50 px-8 py-8 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
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
              <button
                onClick={() => setIsBookingOpen(true)}
                className="cursor-pointer mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700"
              >
                <MessageCircle size={16} />
                Book a Free Consultation
              </button>
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <span className="h-px w-16 border-t-2 border-dashed border-indigo-300" />
            <Plane size={32} className="-rotate-3 text-indigo-300" />
            <MapPin size={22} className="text-indigo-300" />
          </div>
        </div>
      </div>

      <CounsellingBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
