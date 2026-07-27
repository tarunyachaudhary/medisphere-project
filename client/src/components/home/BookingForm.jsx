import { useState, useEffect } from "react";
import {
  User,
  Phone,
  MapPin,
  ClipboardCheck,
  ChevronDown,
  ShieldCheck,
  Check,
  X,
} from "lucide-react";

const states = [
  "Bihar",
  "Delhi",
  "Uttar Pradesh",
  "Maharashtra",
  "Punjab",
  "West Bengal",
  "Rajasthan",
  "Other",
];

export default function BookingForm({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    state: "",
    neet: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  // Lock page scroll while the modal is open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="booking-form-card relative w-full max-w-md max-h-[96vh] overflow-y-auto rounded-3xl border border-white/60 bg-white/70 backdrop-blur-2xl shadow-2xl shadow-indigo-950/20 p-6 sm:p-7 animate-[popIn_0.25s_cubic-bezier(0.34,1.56,0.64,1)]"
      >
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes popIn {
            from { opacity: 0; transform: scale(0.92) translateY(12px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .booking-form-card {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .booking-form-card::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/5 border border-slate-900/10 flex items-center justify-center text-slate-500 hover:bg-slate-900/10 hover:text-slate-700 transition"
        >
          <X size={15} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-600/30 mb-3">
            <ClipboardCheck className="text-white" size={22} />
          </div>
          <p className="text-lg font-bold text-slate-900">
            Book Your <span className="text-indigo-600">Free</span> Counselling
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Start your MBBS journey with expert guidance
          </p>
        </div>

        <form className="space-y-3.5" onSubmit={handleSubmit}>
          <Field
            label="Full Name"
            icon={<User size={15} />}
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Enter your full name"
          />

          <Field
            label="Mobile Number"
            icon={<Phone size={15} />}
            type="tel"
            required
            value={form.mobile}
            onChange={update("mobile")}
            placeholder="Enter your mobile number"
          />

          <div className="grid grid-cols-2 gap-3">
            <SelectField
              label="Select State"
              icon={<MapPin size={15} />}
              value={form.state}
              onChange={update("state")}
              placeholder="Select your state"
              options={states}
            />
            <SelectField
              label="NEET Qualified?"
              icon={<ClipboardCheck size={15} />}
              value={form.neet}
              onChange={update("neet")}
              placeholder="Select"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "appearing", label: "Appearing" },
              ]}
            />
          </div>

          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white shadow-lg transition active:scale-[0.99] ${
              submitted
                ? "bg-emerald-500 shadow-emerald-500/30"
                : "bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-indigo-600/30 hover:opacity-90"
            }`}
          >
            {submitted ? (
              <>
                <Check size={16} />
                Thanks! We'll call you shortly
              </>
            ) : (
              "Book Free Counselling"
            )}
          </button>

          <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
            <ShieldCheck size={13} className="text-emerald-500" />
            Our expert will call you back within 15 mins
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({ label, icon, type, required, value, onChange, placeholder }) {
  return (
    <label className="block text-left">
      <span className="mb-1.5 block text-xs font-semibold text-slate-600">
        {label}
      </span>
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3.5 py-2.5 transition focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100">
        <span className="text-slate-400">{icon}</span>
        <input
          required={required}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
        />
      </div>
    </label>
  );
}

function SelectField({ label, icon, value, onChange, placeholder, options }) {
  return (
    <label className="block text-left">
      <span className="mb-1.5 block text-xs font-semibold text-slate-600">
        {label}
      </span>
      <div className="relative flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2.5 transition focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100">
        <span className="text-slate-400">{icon}</span>
        <select
          value={value}
          onChange={onChange}
          className="w-full appearance-none bg-transparent text-sm text-slate-600 outline-none"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) =>
            typeof opt === "string" ? (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ) : (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ),
          )}
        </select>
        <ChevronDown size={13} className="text-slate-400 pointer-events-none" />
      </div>
    </label>
  );
}
