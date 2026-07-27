import { useState, useEffect } from "react";
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  Headphones,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

const courses = ["MBBS", "BDS", "Engineering", "MBA", "Nursing", "Other"];
const countries = ["Russia", "Kazakhstan", "Uzbekistan", "Georgia", "China"];

export default function CounsellingBookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    country: "",
    date: "",
    time: "",
  });

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add Firebase/API booking logic here.
    console.log("Counselling booking:", form);

    setSubmitted(true);
  };

  const closeModal = () => {
    setSubmitted(false);
    onClose();
  };

  // Lock page scroll while the modal is open, without losing scroll
  // position. Toggling `overflow: hidden` on/off can snap the page back
  // to the top in some browsers, so instead we freeze the body in place
  // with `position: fixed` and explicitly restore the exact scroll
  // position when the modal closes.
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const { style } = document.body;

    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";

    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";

      // Force an instant jump back to the saved position, overriding any
      // global `scroll-behavior: smooth` CSS — otherwise the browser
      // animates from the top down to scrollY, which looks like the page
      // "jumps to the header, then auto-scrolls back down".
      const html = document.documentElement;
      const previousScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = previousScrollBehavior;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setSubmitted(false);
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/55 p-4 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={closeModal}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="counselling-modal-card relative my-auto w-full max-w-[760px] max-h-[96vh] overflow-y-auto rounded-2xl border border-white/60 bg-white/80 shadow-2xl shadow-indigo-950/20 backdrop-blur-2xl animate-[popIn_0.25s_cubic-bezier(0.34,1.56,0.64,1)]"
      >
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes popIn {
            from { opacity: 0; transform: scale(0.94) translateY(12px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .counselling-modal-card {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .counselling-modal-card::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <button
          type="button"
          onClick={closeModal}
          aria-label="Close counselling modal"
          className="absolute right-4 top-4 z-10 rounded-lg bg-white/60 p-2 text-slate-500 backdrop-blur transition hover:bg-white/90 hover:text-slate-950"
        >
          <X size={21} />
        </button>

        {!submitted ? (
          <div className="grid lg:grid-cols-[1.45fr_0.85fr]">
            {/* Booking form */}
            <section className="p-7 sm:p-8">
              <div className="flex items-start gap-4 pr-8">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/30">
                  <Calendar size={27} />
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
                    Book Free Counselling
                  </h2>
                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    Fill in your details and our expert counsellor will connect
                    with you shortly.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-slate-600">
                    Full Name
                  </span>

                  <div className="relative">
                    <UserRound
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      required
                      value={form.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      placeholder="Enter your full name"
                      className="h-10 w-full rounded-lg border border-slate-200 bg-white/70 py-2 pl-10 pr-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-slate-600">
                    Email Address
                  </span>

                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      placeholder="Enter your email address"
                      className="h-10 w-full rounded-lg border border-slate-200 bg-white/70 py-2 pl-10 pr-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-slate-600">
                    Phone Number
                  </span>

                  <div className="relative">
                    <Phone
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      placeholder="Enter your phone number"
                      className="h-10 w-full rounded-lg border border-slate-200 bg-white/70 py-2 pl-10 pr-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-slate-600">
                    Preferred Course
                  </span>

                  <div className="relative">
                    <select
                      required
                      value={form.course}
                      onChange={(event) =>
                        updateField("course", event.target.value)
                      }
                      className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white/70 px-3 pr-9 text-xs text-slate-600 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course}>{course}</option>
                      ))}
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-slate-600">
                    Preferred Country
                  </span>

                  <div className="relative">
                    <select
                      required
                      value={form.country}
                      onChange={(event) =>
                        updateField("country", event.target.value)
                      }
                      className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white/70 px-3 pr-9 text-xs text-slate-600 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country}>{country}</option>
                      ))}
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                  </div>
                </label>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-semibold text-slate-600">
                      Preferred Date
                    </span>

                    <div className="relative">
                      <Calendar
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={(event) =>
                          updateField("date", event.target.value)
                        }
                        className="h-10 w-full rounded-lg border border-slate-200 bg-white/70 py-2 pl-9 pr-3 text-xs text-slate-600 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-semibold text-slate-600">
                      Preferred Time
                    </span>

                    <div className="relative">
                      <Clock3
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        required
                        type="time"
                        value={form.time}
                        onChange={(event) =>
                          updateField("time", event.target.value)
                        }
                        className="h-10 w-full rounded-lg border border-slate-200 bg-white/70 py-2 pl-9 pr-3 text-xs text-slate-600 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-2 h-11 w-full rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-700 hover:to-violet-700 active:scale-[0.99]"
                >
                  Book Free Counselling
                </button>

                <p className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500">
                  <ShieldCheck size={15} />
                  Your information is safe with us.
                </p>
              </form>
            </section>

            {/* Information panel */}
            <aside className="m-5 ml-0 hidden rounded-xl border border-white/50 bg-white/40 p-6 backdrop-blur-xl lg:block">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/30">
                <Headphones size={39} />
              </div>

              <h3 className="mt-6 text-base font-extrabold text-slate-900">
                What happens next?
              </h3>

              <div className="mt-6 space-y-6">
                <div className="flex gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/70 text-indigo-600">
                    <Phone size={18} />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      We&apos;ll Call You
                    </h4>
                    <p className="mt-1 text-[11px] leading-4 text-slate-500">
                      Our counsellor will call you at your preferred time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/70 text-indigo-600">
                    <MessageCircle size={18} />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Personalized Guidance
                    </h4>
                    <p className="mt-1 text-[11px] leading-4 text-slate-500">
                      Get expert advice tailored to your study goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/70 text-indigo-600">
                    <FileText size={18} />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Start Your Journey
                    </h4>
                    <p className="mt-1 text-[11px] leading-4 text-slate-500">
                      We&apos;ll help you with university selection and the next
                      steps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 border-t border-indigo-100 pt-5" />
            </aside>
          </div>
        ) : (
          <div className="p-10 text-center sm:p-14">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 size={35} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-950">
              Counselling Booked!
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Thank you, {form.name}. Our counsellor will contact you soon to
              confirm your appointment.
            </p>

            <button
              type="button"
              onClick={closeModal}
              className="mt-7 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
