import { useState } from "react";
import {
  ShieldCheck,
  Wallet,
  ClipboardCheck,
  MessageCircle,
  Star,
} from "lucide-react";
import BookingForm from "./BookingForm";
import HeroBackground from "./HeroBackground";
import CounsellingBookingModal from "./CounsellingBooking";

const highlights = [
  { icon: ShieldCheck, label: "NMC Approved", sub: "Universities" },
  { icon: Wallet, label: "Affordable", sub: "Fees Structure" },
  { icon: ClipboardCheck, label: "100% Admission", sub: "Assistance" },
];

export default function Hero() {
  const [isCounsellingOpen, setIsCounsellingOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <span className="inline-block rounded-full bg-indigo-100 px-3.5 py-1.5 text-xs font-semibold text-indigo-600">
            Dream Big. We Make It Happen.
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl">
            Study MBBS in <span className="text-indigo-600">Russia</span>
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-500">
            Your journey to become a doctor starts here. Affordable fees,
            world-class education, bright future.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={highlight.label}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-3.5 py-2.5 card-shadow"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <Icon size={16} />
                  </span>

                  <span className="text-xs leading-tight">
                    <span className="block font-semibold text-slate-800">
                      {highlight.label}
                    </span>
                    <span className="block text-slate-400">
                      {highlight.sub}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsCounsellingOpen(true)}
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700"
            >
              Book Free Counselling
            </button>

            <a
              href="https://wa.me/919151641222"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600"
            >
              <MessageCircle size={16} className="text-emerald-500" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-2 flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={15}
                className="fill-amber-400 text-amber-400"
              />
            ))}

            <span className="ml-1 text-sm font-semibold text-slate-700">
              4.9/5
            </span>
            <span className="text-sm text-slate-400">(1000+ Reviews)</span>
          </div>
        </div>

        <div id="booking-form" className="scroll-mt-24">
          <BookingForm />
        </div>
      </div>

      <CounsellingBookingModal
        isOpen={isCounsellingOpen}
        onClose={() => setIsCounsellingOpen(false)}
      />
    </section>
  );
}
