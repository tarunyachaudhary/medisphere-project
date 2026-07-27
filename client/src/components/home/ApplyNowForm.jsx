import { useState, useEffect } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Globe,
  GraduationCap,
  BookOpen,
  ChevronDown,
  ShieldCheck,
  Headphones,
  Zap,
  Send,
  X,
  Lock,
} from "lucide-react";

export default function ApplyNowForm({ isOpen, onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    country: "",
    course: "",
    education: "",
  });

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

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", form);
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="apply-now-form relative w-full max-w-lg max-h-[96vh] overflow-y-auto rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl p-5 sm:p-6 animate-[popIn_0.25s_cubic-bezier(0.34,1.56,0.64,1)]"
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
          .apply-now-form {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .apply-now-form::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-900/40 mb-2.5">
            <GraduationCap className="text-white" size={22} />
          </div>
          <h1 className="text-2xl sm:text-[1.75rem] font-extrabold text-white leading-tight">
            Apply{" "}
            <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Now
            </span>
          </h1>
          <p className="text-white/70 text-xs mt-1.5">
            Fill in your details and our expert will get in touch with you.
          </p>
          <div className="flex items-center gap-2 mt-2.5">
            <span className="h-px w-8 bg-white/30" />
            <GraduationCap className="text-violet-300" size={12} />
            <span className="h-px w-8 bg-white/30" />
          </div>
        </div>

        {/* Row: Full Name / Phone */}
        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <Field
            label="Full Name"
            icon={<User size={14} />}
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange("fullName")}
          />
          <Field
            label="Phone Number"
            icon={<Phone size={14} />}
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange("phone")}
          />
        </div>

        {/* Row: Email / City */}
        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <Field
            label="Email Address"
            icon={<Mail size={14} />}
            placeholder="Enter your email address"
            value={form.email}
            onChange={handleChange("email")}
          />
          <Field
            label="City"
            icon={<MapPin size={14} />}
            placeholder="Enter your city"
            value={form.city}
            onChange={handleChange("city")}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <SelectField
            label="Country"
            icon={<Globe size={14} />}
            placeholder="Select your country"
            value={form.country}
            onChange={handleChange("country")}
            options={["India", "other"]}
          />
          <SelectField
            label="Course Interested In"
            icon={<GraduationCap size={14} />}
            placeholder="Select a course"
            value={form.course}
            onChange={handleChange("course")}
            options={["MBBS", "Computer Science", "other"]}
          />
        </div>

        {/* Education Level */}
        <div className="mb-3.5">
          <SelectField
            label="Education Level"
            icon={<BookOpen size={14} />}
            placeholder="Select your education level"
            value={form.education}
            onChange={handleChange("education")}
            options={[
              "High School",
              "Undergraduate",
              "Graduate",
              "Postgraduate",
              "other",
            ]}
          />
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/15 bg-white/5 p-3 mb-3.5">
          <Badge
            icon={<ShieldCheck size={15} />}
            title="100% Secure"
            subtitle="Your data is safe with us"
          />
          <Badge
            icon={<Headphones size={15} />}
            title="Expert Guidance"
            subtitle="Get help from our counselling experts"
          />
          <Badge
            icon={<Zap size={15} />}
            title="Quick Response"
            subtitle="We will get back to you soon"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white font-semibold py-2.5 text-sm shadow-lg shadow-violet-900/40 hover:opacity-90 active:scale-[0.99] transition"
        >
          <Send size={16} />
          Submit Application
        </button>

        <p className="flex items-center justify-center gap-1.5 text-white/50 text-[11px] mt-2.5">
          <Lock size={11} />
          Your information is secure and will not be shared with third parties.
        </p>
      </form>
    </div>
  );
}

function Field({ label, icon, placeholder, value, onChange }) {
  return (
    <label className="block text-left">
      <span className="text-white/85 text-xs font-medium">{label}</span>
      <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 focus-within:border-violet-300/60 focus-within:bg-white/15 transition">
        <span className="text-white/60">{icon}</span>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-white placeholder-white/50 text-[13px] outline-none"
        />
      </div>
    </label>
  );
}

function SelectField({ label, icon, placeholder, value, onChange, options }) {
  return (
    <label className="block text-left">
      <span className="text-white/85 text-xs font-medium">{label}</span>
      <div className="relative mt-1 flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 focus-within:border-violet-300/60 focus-within:bg-white/15 transition">
        <span className="text-white/60">{icon}</span>
        <select
          value={value}
          onChange={onChange}
          className="w-full appearance-none bg-transparent text-[13px] outline-none text-white [&>option]:text-slate-800"
        >
          <option value="" disabled hidden className="text-slate-400">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown size={14} className="text-white/60 pointer-events-none" />
      </div>
    </label>
  );
}

function Badge({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center gap-1">
      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-violet-200">
        {icon}
      </div>
      <p className="text-white text-[11px] font-semibold leading-tight">
        {title}
      </p>
      <p className="text-white/60 text-[9px] leading-tight">{subtitle}</p>
    </div>
  );
}
