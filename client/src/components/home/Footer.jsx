import { Globe, Share2, MessageCircle, Link2, Phone, Mail, MapPin } from "lucide-react";
import Logo from "../shared/Logo";

const columns = [
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Testimonials", "Blog"],
  },
  {
    title: "Universities",
    links: ["Kazan Federal University", "Bashkir State Medical", "Crimea Federal University", "Orenburg State Medical", "View All"],
  },
  {
    title: "Resources",
    links: ["NEET Cutoff", "MBBS Fees Comparison", "FMGE Guidance", "Visa Process", "FAQs"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="[&_span]:text-white [&_span.block:last-child]:!text-slate-400">
            <Logo />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Helping Indian students achieve their dream of becoming a doctor through NMC approved
            universities in Russia, since 2001.
          </p>
          <div className="mt-5 flex gap-3">
            {[Globe, Share2, MessageCircle, Link2].map((Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-indigo-600"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-bold text-white">{col.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l} className="cursor-pointer text-slate-400 transition hover:text-white">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-bold text-white">Contact Us</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <Phone size={15} className="mt-0.5 shrink-0" /> +91 98765 43210
            </li>
            <li className="flex items-start gap-2">
              <Mail size={15} className="mt-0.5 shrink-0" /> info@medbridge.in
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" /> Connaught Place, New Delhi, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-500">
        © 2025 MedBridge. All rights reserved.
      </div>
    </footer>
  );
}
