import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Share2,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import Logo from "../shared/Logo";

const WHATSAPP_NUMBER = "919151641222";
const CONTACT_PHONE = "+91 91516 41222";
const CONTACT_EMAIL = "medisphereconnect@gmail.com";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      // { label: "Our Team", to: "/team" },
      // { label: "Careers", to: "/careers" },
      // { label: "Testimonials", to: "/testimonials" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "Universities",
    links: [
      "Kazan Federal University",
      "Bashkir State Medical",
      "Crimea Federal University",
      "Orenburg State Medical",
    ]
      .map((name) => ({ label: name, to: `/universities/${slugify(name)}` }))
      .concat([{ label: "View All", to: "/universities" }]),
  },
  // {
  //   title: "Resources",
  //   links: [
  //     { label: "NEET Cutoff", to: "/resources/neet-cutoff" },
  //     { label: "MBBS Fees Comparison", to: "/resources/mbbs-fees-comparison" },
  //     { label: "FMGE Guidance", to: "/resources/fmge-guidance" },
  //     { label: "Visa Process", to: "/resources/visa-process" },
  //     { label: "FAQs", to: "/faqs" },
  //   ],
  // },
];

function ShareMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "https://medisphere.example";
  const shareText = encodeURIComponent("Check out Medisphere — helping Indian students study MBBS in Russia.");
  const encodedUrl = encodeURIComponent(pageUrl);

const shareLinks = [
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/?text=${shareText}%20${encodedUrl}`,
  },
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  },
  {
    label: "Twitter / X",
    icon: FaXTwitter,
    href: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`,
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  },
];

  const handleShareClick = async (e) => {
    if (navigator.share) {
      e.preventDefault();
      try {
        await navigator.share({
          title: "Medisphere",
          text: "Check out Medisphere — helping Indian students study MBBS in Russia.",
          url: pageUrl,
        });
      } catch {
        // user cancelled
      }
    } else {
      setOpen((o) => !o);
    }
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={handleShareClick}
        aria-label="Share this page"
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-indigo-600"
      >
        <Share2 size={16} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-12 left-0 z-20 w-48 overflow-hidden rounded-lg border border-white/10 bg-navy shadow-xl"
        >
          {shareLinks.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi Medisphere, I'd like to know more about MBBS admissions in Russia."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-indigo-600"
    >
      <MessageCircle size={16} />
    </a>
  );
}

const INSTAGRAM_HANDLE = "mbbs.in_russia";

function InstagramButton() {
  return (
    <a
      href={`https://www.instagram.com/${INSTAGRAM_HANDLE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-indigo-600"
    >
      <FaInstagram size={16} />
    </a>
  );
}

function MapLink() {
  return (
    <a
      href="https://www.google.com/maps/search/?api=1&query=Connaught+Place+New+Delhi+India"
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:text-white"
    >
      Connaught Place, New Delhi, India
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="[&_span]:text-white [&_span.block:last-child]:!text-slate-400">
            <Logo />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Helping Indian students achieve their dream of becoming a doctor
            through NMC approved universities in Russia, since 2021.
          </p>
          <div className="mt-5 flex gap-3">
            <Link
              to="/"
              aria-label="Visit our website"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-indigo-600"
            >
              <Globe size={16} />
            </Link>

            <ShareMenu />
            <InstagramButton />

            <WhatsAppButton />
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-bold text-white">{col.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-bold text-white">Contact Us</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <Phone size={15} className="mt-0.5 shrink-0" />
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                className="transition hover:text-white"
              >
                {CONTACT_PHONE}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={15} className="mt-0.5 shrink-0" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <MapLink />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Medisphere. All rights reserved.
      </div>
    </footer>
  );
}