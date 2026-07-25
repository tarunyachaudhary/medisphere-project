import { useState } from "react";
import { ShieldCheck } from "lucide-react";

const states = ["Bihar", "Delhi", "Uttar Pradesh", "Maharashtra", "Punjab", "West Bengal", "Rajasthan", "Other"];

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", mobile: "", state: "", neet: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="w-full rounded-2xl bg-white p-6 card-shadow ring-1 ring-slate-100">
      <p className="text-lg font-bold text-slate-900">
        Book Your <span className="text-indigo-600">Free</span> Counselling
      </p>
      <p className="mt-1 text-sm text-slate-500">Start your MBBS journey with expert guidance</p>

      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">Full Name</label>
          <input
            required
            value={form.name}
            onChange={update("name")}
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">Mobile Number</label>
          <input
            required
            value={form.mobile}
            onChange={update("mobile")}
            type="tel"
            placeholder="Enter your mobile number"
            className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-600">Select State</label>
            <select
              value={form.state}
              onChange={update("state")}
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-600 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            >
              <option value="">Select your state</option>
              {states.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-600">NEET Qualified?</label>
            <select
              value={form.neet}
              onChange={update("neet")}
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-600 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="appearing">Appearing</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          {submitted ? "Thanks! We'll call you shortly ✓" : "Book Free Counselling"}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
          <ShieldCheck size={13} className="text-emerald-500" />
          Our expert will call you back within 15 mins
        </p>
      </form>
    </div>
  );
}
