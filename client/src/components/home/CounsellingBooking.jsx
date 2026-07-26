import { useState } from "react";
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/55 p-4 backdrop-blur-sm">
      <div className="relative my-auto w-full max-w-[760px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close counselling modal"
          className="absolute right-4 top-4 z-10 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
        >
          <X size={21} />
        </button>

        {!submitted ? (
          <div className="grid lg:grid-cols-[1.45fr_0.85fr]">
            {/* Booking form */}
            <section className="p-7 sm:p-8">
              <div className="flex items-start gap-4 pr-8">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-50 text-indigo-600">
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
                      className="h-10 w-full rounded-lg border border-slate-200 py-2 pl-10 pr-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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
                      className="h-10 w-full rounded-lg border border-slate-200 py-2 pl-10 pr-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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
                      className="h-10 w-full rounded-lg border border-slate-200 py-2 pl-10 pr-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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
                      className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-xs text-slate-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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
                      className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-xs text-slate-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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
                        className="h-10 w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-xs text-slate-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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
                        className="h-10 w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-xs text-slate-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-2 h-11 w-full rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-700 hover:to-violet-700"
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
            <aside className="m-5 ml-0 hidden rounded-xl bg-gradient-to-b from-violet-50 via-[#fbfbff] to-indigo-50 p-6 lg:block">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 text-indigo-600">
                <Headphones size={39} />
              </div>

              <h3 className="mt-6 text-base font-extrabold text-slate-900">
                What happens next?
              </h3>

              <div className="mt-6 space-y-6">
                <div className="flex gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-100 text-indigo-600">
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
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-100 text-indigo-600">
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
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-100 text-indigo-600">
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

              <div className="mt-7 border-t border-indigo-100 pt-5">

              </div>
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
