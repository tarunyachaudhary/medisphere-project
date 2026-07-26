import {
  BookOpen,
  GraduationCap,
  Wallet,
  Users,
  Landmark,
  MapPin,
  MessageCircle,
  Plane,
} from "lucide-react";

const whyItems = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    desc: "Globally recognized universities with high academic standards.",
  },
  {
    icon: Wallet,
    title: "Affordable Fees",
    desc: "Low tuition fees and cost of living compared to many countries.",
  },
  {
    icon: Users,
    title: "International Community",
    desc: "A diverse environment with students from 100+ countries.",
  },
  {
    icon: Landmark,
    title: "Modern Infrastucture",
    desc: "Advanced labs, research facilities, and modern campuses.",
  },
  {
    icon: MapPin,
    title: "Safe & Welcoming",
    desc: "Safe environment with friendly people and rich cultural experience.",
  },
];

export default function AboutRussia() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* About */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold text-indigo-600">About</p>
            <h2 className="mt-1 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Russia
            </h2>
            <span className="mt-4 block h-1 w-14 rounded-full bg-indigo-600" />
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
              Russia is a land of rich history, world-class education, and
              diverse opportunities. Every year, thousands of international
              students choose Russia for quality education, affordable living,
              and a bright future.
            </p>
            <a
              href="#booking-form"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700"
            >
              <BookOpen size={16} />
              Guide to Russia
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl card-shadow">
            <img
              src="/russia-bg.png"
              alt="Kremlin and Saint Basil's Cathedral, Moscow, Russia"
              className="h-72 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
        </div>

        {/* Why Study in Russia */}
        <div className="mt-16">
          <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
            Why Study in Russia?
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-100 bg-white p-5 card-shadow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <item.icon size={20} />
                </span>
                <p className="mt-4 text-sm font-bold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to start CTA */}
        <div className="relative mt-10 flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-indigo-50 px-8 py-8 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white card-shadow">
              <Landmark size={26} className="text-indigo-600" />
            </span>
            <div>
              <p className="text-lg font-extrabold text-slate-900">
                Ready to Start Your Journey?
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Get free counseling and guidance to study in top Russian
                universities.
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

          <Plane
            size={40}
            className="hidden shrink-0 -rotate-3 text-indigo-300 sm:block"
          />
        </div>
      </div>
    </section>
  );
}
