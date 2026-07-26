
// Contact.jsx
import {
  Clock3,
  Headphones,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Globe2,
  ArrowRight,
} from "lucide-react";

import contactImg from "../assets/contact-image.avif";

const contactOptions = [
  {
    title: "Call Us",
    value: "+91 91516 41222",
    detail: "Mon - Sat: 10:00 AM - 6:00 PM",
    icon: Phone,
    href: "tel:+919876543210",
  },
  {
    title: "Email Us",
    value: "medisphereconnect@gmail.com",
    detail: "We reply within 24 hours",
    icon: Mail,
    href: "mailto:medisphereconnect@gmail.com",
  },
  {
    title: "WhatsApp",
    value: "+91 91516 41222",
    detail: "Chat with us on WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/91516 41222",
  },
  {
    title: "Support Hours",
    value: "Mon - Sat: 09:00 AM - 6:00 PM",
    detail: "Sunday: Closed",
    icon: Clock3,
  },
];

function ContactCard({ title, value, detail, icon: Icon, href }) {
  const content = (
    <>
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-100 to-indigo-50 text-indigo-600">
        <Icon size={27} strokeWidth={2.1} />
      </div>

      <div className="min-w-0">
        <h3 className="mb-3 text-sm font-bold text-slate-950">{title}</h3>
        <p className="mb-3 truncate text-sm font-bold text-indigo-600">{value}</p>
        <p className="text-[13px] text-slate-500">{detail}</p>
      </div>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex min-h-[126px] gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100"
    >
      {content}
    </a>
  ) : (
    <article className="flex min-h-[126px] gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      {content}
    </article>
  );
}

function InfoRow({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4 border-b border-slate-100 pb-4 last:border-0">
      <Icon className="mt-0.5 shrink-0 text-indigo-600" size={25} />
      <div className="text-[13px] leading-5 text-slate-500">
        <p className="mb-1 font-bold text-slate-950">{title}</p>
        {children}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 font-sans text-slate-950 md:p-7">
      <div className="mx-auto max-w-[1230px] overflow-hidden rounded-2xl bg-white shadow-sm">
        {/* Header */}
        <section className="relative min-h-[265px] overflow-hidden border-b border-slate-100 px-7 py-8 md:px-10 md:py-9">
          <div className="relative z-10">
            <div className="grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-violet-100 to-indigo-50 text-indigo-600">
              <Headphones size={34} />
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight md:text-[35px]">
              Contact Support
            </h1>

            <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-600">
              We're here to help you at every step of your journey.
              <br />
              Reach out to our expert team for any assistance.
            </p>
          </div>

          {/* Decorative support illustration */}
          <div className="absolute bottom-0 right-8 hidden md:block">
            <img
              src={contactImg}
              alt="Customer Support"
              className="h-[260px] w-[500px] object-cover rounded-none"
            />
          </div>
        </section>

        <div className="p-5 md:p-9">
          {/* Contact methods */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactOptions.map((option) => (
              <ContactCard key={option.title} {...option} />
            ))}
          </section>

          <section className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_1fr]">
            {/* Contact form */}
            <div className="rounded-2xl border border-slate-100 p-6 shadow-sm md:p-7">
              <h2 className="mb-5 text-lg font-bold">Send Us a Message</h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full resize-none rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02] hover:from-indigo-700 hover:to-violet-700"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Office details */}
            <aside className="rounded-2xl border border-slate-100 p-6 shadow-sm md:p-7">
              <h2 className="mb-6 text-lg font-bold">Our Office</h2>

              <div className="grid gap-7 xl:grid-cols-[1fr_185px]">
                <div className="space-y-4">
                  <InfoRow icon={MapPin} title="medisphere-Study Abroad">
                    <p>
                      B-123, Sector 62, Noida,
                      <br />
                      Uttar Pradesh, India - 201309
                    </p>
                  </InfoRow>

                  <InfoRow icon={Globe2} title="Website">
                    <a
                      href="https://www.medisphere.in"
                      className="font-semibold text-indigo-600 hover:underline"
                    >
                      www.medisphere.in
                    </a>
                  </InfoRow>

                  <InfoRow icon={Mail} title="General Inquiries">
                    <a
                      href="mailto:medisphereconnect@gmail.com"
                      className="font-semibold text-indigo-600 hover:underline"
                    >
                      medisphereconnect@gmail.com
                    </a>
                  </InfoRow>

                  <InfoRow icon={Clock3} title="Response Time">
                    <p>We typically respond within 24 business hours</p>
                  </InfoRow>
                </div>

                {/* <img
                  src={}
                  alt="MedBridge office building"
                  className="hidden h-[300px] w-full rounded-xl object-cover xl:block"
                /> */}
              </div>
            </aside>
          </section>

          {/* FAQ banner */}
          {/* <section className="mt-5 flex flex-col gap-5 rounded-xl bg-gradient-to-r from-violet-50 via-white to-indigo-50 px-7 py-6 sm:flex-row sm:items-center">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 text-white">
              <HelpCircle size={30} />
            </div>

            <div className="flex-1">
              <h2 className="mb-1 text-[15px] font-bold">
                Looking for quick answers?
              </h2>
              <p className="text-[13px] text-slate-500">
                Check our FAQs section for answers to common questions.
              </p>
            </div>

            <a
              href="#faqs"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-indigo-500 px-5 py-3 text-[13px] font-bold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
            >
              View FAQs <ArrowRight size={17} />
            </a>
          </section> */}
        </div>
      </div>
    </main>
  );
}