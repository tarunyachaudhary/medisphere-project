import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  FileText,
  Folder,
  Funnel,
  Hourglass,
  Mail,
  MessageCircle,
  MoreVertical,
  Plane,
  Search,
  XCircle,
} from "lucide-react";

const applicationData = [
  {
    id: 1,
    name: "Rohan Sharma",
    email: "rohan.sharma@email.com",
    phone: "+91 98765 43210",
    avatar: "https://i.pravatar.cc/100?img=12",
    university: "Kazan Federal University",
    universityLogo: "🏛️",
    country: "Russia",
    program: "MBBS",
    duration: "6 Years",
    date: "12 May 2024",
    time: "10:30 AM",
    status: "New",
    inquiries: 2,
    emails: 3,
    documents: 8,
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91 91234 56789",
    avatar: "https://i.pravatar.cc/100?img=47",
    university: "Bashkir State Medical University",
    universityLogo: "⚕️",
    country: "Russia",
    program: "MBBS",
    duration: "6 Years",
    date: "11 May 2024",
    time: "04:45 PM",
    status: "In Review",
    inquiries: 1,
    emails: 2,
    documents: 6,
  },
  {
    id: 3,
    name: "Arjun Mehta",
    email: "arjun.mehta@email.com",
    phone: "+91 99876 54321",
    avatar: "https://i.pravatar.cc/100?img=11",
    university: "Lomonosov Moscow State University",
    universityLogo: "🎓",
    country: "Russia",
    program: "MBBS",
    duration: "6 Years",
    date: "10 May 2024",
    time: "11:20 AM",
    status: "Accepted",
    inquiries: 3,
    emails: 4,
    documents: 10,
  },
  {
    id: 4,
    name: "Sneha Verma",
    email: "sneha.verma@email.com",
    phone: "+91 90987 65432",
    avatar: "https://i.pravatar.cc/100?img=44",
    university: "First Moscow State Medical University",
    universityLogo: "🔬",
    country: "Russia",
    program: "MBBS",
    duration: "6 Years",
    date: "09 May 2024",
    time: "02:15 PM",
    status: "Rejected",
    inquiries: 2,
    emails: 1,
    documents: 4,
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@email.com",
    phone: "+91 88990 98765",
    avatar: "https://i.pravatar.cc/100?img=13",
    university: "RUDN University",
    universityLogo: "⚗️",
    country: "Russia",
    program: "MBBS",
    duration: "6 Years",
    date: "08 May 2024",
    time: "09:10 AM",
    status: "In Review",
    inquiries: 1,
    emails: 2,
    documents: 7,
  },
];

const statusStyles = {
  New: "bg-blue-50 text-blue-600",
  "In Review": "bg-orange-50 text-orange-500",
  Accepted: "bg-emerald-50 text-emerald-600",
  Rejected: "bg-rose-50 text-rose-500",
};

function StatCard({ title, value, detail, icon: Icon, iconClass }) {
  return (
    <article className="rounded-xl border border-slate-100 bg-white p-5 shadow-[0_5px_16px_rgba(15,23,42,0.04)]">
      <div className="flex items-center gap-4">
        <div
          className={`grid h-11 w-11 place-items-center rounded-full ${iconClass}`}
        >
          <Icon size={20} strokeWidth={2.4} />
        </div>

        <div>
          <p className="text-[10px] font-medium text-slate-500">{title}</p>
          <p className="mt-0.5 text-[21px] font-bold leading-none text-slate-900">
            {value}
          </p>
          <p className="mt-2 text-[10px] text-slate-500">{detail}</p>
        </div>
      </div>
    </article>
  );
}

export default function ManageAllApplications() {
  const [activeTab, setActiveTab] = useState("All Applications");
  const [search, setSearch] = useState("");
  const [university, setUniversity] = useState("All Universities");
  const [country, setCountry] = useState("All Countries");
  const [status, setStatus] = useState("All Status");

  const tabs = [
    { name: "All Applications", icon: FileText },
    { name: "Inquiries", icon: MessageCircle },
    { name: "Emails", icon: Mail },
    { name: "Documents", icon: Folder },
  ];

  const filteredApplications = useMemo(() => {
    return applicationData.filter((application) => {
      const matchesSearch =
        `${application.name} ${application.email} ${application.phone}`
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        matchesSearch &&
        (university === "All Universities" ||
          application.university === university) &&
        (country === "All Countries" || application.country === country) &&
        (status === "All Status" || application.status === status)
      );
    });
  }, [search, university, country, status]);

  return (
    <main className="min-h-screen bg-[#f8faff] p-5 font-sans text-slate-900 lg:p-7">
      {/* Header */}
      <section className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">All Applications</h1>

          <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
            <span>Dashboard</span>
            <ChevronRight size={14} />
            <span>Applications</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="inline-flex h-8 items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 px-3 text-[10px] font-semibold text-white shadow-md shadow-indigo-200 hover:from-indigo-700 hover:to-violet-700">
            <Download size={14} />
            Export Report
          </button>

          <button className="inline-flex h-8 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-[10px] font-semibold text-slate-700 hover:bg-slate-50">
            <Funnel size={14} />
            Filter
          </button>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard
          title="Total Applications"
          value="512"
          detail="All time applications"
          icon={FileText}
          iconClass="bg-violet-50 text-violet-600"
        />
        <StatCard
          title="New Applications"
          value="128"
          detail="Last 7 days"
          icon={CheckCircle2}
          iconClass="bg-emerald-50 text-emerald-500"
        />
        <StatCard
          title="In Review"
          value="164"
          detail="Under review"
          icon={Hourglass}
          iconClass="bg-orange-50 text-orange-500"
        />
        <StatCard
          title="Accepted"
          value="142"
          detail="Applications accepted"
          icon={Plane}
          iconClass="bg-blue-50 text-blue-500"
        />
        <StatCard
          title="Rejected"
          value="78"
          detail="Applications rejected"
          icon={XCircle}
          iconClass="bg-rose-50 text-rose-500"
        />
      </section>

      {/* Content */}
      <section className="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_6px_20px_rgba(15,23,42,0.05)]">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-slate-100 px-4">
          {tabs.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex shrink-0 items-center gap-2 border-b-2 px-4 py-4 text-[10px] font-medium transition ${
                activeTab === name
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Icon size={14} />
              {name}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 border-b border-slate-100 p-4 xl:flex-row xl:items-center">
          <div className="relative w-full xl:max-w-[225px]">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by student name, email, phone..."
              className="h-8 w-full rounded-md border border-slate-200 pl-8 pr-3 text-[10px] outline-none placeholder:text-slate-400 focus:border-indigo-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <select
                value={university}
                onChange={(event) => setUniversity(event.target.value)}
                className="h-8 min-w-[148px] appearance-none rounded-md border border-slate-200 bg-white px-3 pr-8 text-[10px] text-slate-700 outline-none focus:border-indigo-400"
              >
                <option>All Universities</option>
                {applicationData.map((item) => (
                  <option key={item.id}>{item.university}</option>
                ))}
              </select>
              <ChevronDown
                size={13}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <div className="relative">
              <select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="h-8 min-w-[138px] appearance-none rounded-md border border-slate-200 bg-white px-3 pr-8 text-[10px] text-slate-700 outline-none focus:border-indigo-400"
              >
                <option>All Countries</option>
                <option>Russia</option>
              </select>
              <ChevronDown
                size={13}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <div className="relative">
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="h-8 min-w-[138px] appearance-none rounded-md border border-slate-200 bg-white px-3 pr-8 text-[10px] text-slate-700 outline-none focus:border-indigo-400"
              >
                <option>All Status</option>
                <option>New</option>
                <option>In Review</option>
                <option>Accepted</option>
                <option>Rejected</option>
              </select>
              <ChevronDown
                size={13}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <button className="inline-flex h-8 items-center gap-2 rounded-md border border-slate-200 px-3 text-[10px] text-slate-600 hover:bg-slate-50">
              Date Range
              <CalendarDays size={13} />
            </button>

            <button className="inline-flex h-8 items-center gap-2 rounded-md border border-slate-200 px-3 text-[10px] text-slate-600 hover:bg-slate-50">
              <Funnel size={13} />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1120px] text-left">
            <thead className="bg-[#fafbff]">
              <tr className="border-b border-slate-100">
                {[
                  "Student Details",
                  "University",
                  "Program",
                  "Date",
                  "Status",
                  "Inquiries",
                  "Emails",
                  "Documents",
                  "Actions",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-4 py-3 text-[9px] font-semibold text-slate-500"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredApplications.map((application) => (
                <tr
                  key={application.id}
                  className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/70"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={application.avatar}
                        alt={application.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />

                      <div>
                        <p className="text-[10px] font-semibold text-slate-800">
                          {application.name}
                        </p>
                        <p className="mt-0.5 text-[9px] text-slate-500">
                          {application.email}
                        </p>
                        <p className="mt-0.5 text-[9px] text-slate-500">
                          🇮🇳 {application.phone}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">
                        {application.universityLogo}
                      </span>
                      <div>
                        <p className="max-w-[155px] text-[10px] font-semibold leading-4 text-slate-800">
                          {application.university}
                        </p>
                        <p className="mt-0.5 text-[9px] text-slate-500">
                          {application.country}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <p className="text-[10px] font-medium text-slate-700">
                      {application.program}
                    </p>
                    <p className="mt-1 text-[9px] text-slate-500">
                      {application.duration}
                    </p>
                  </td>

                  <td className="px-4 py-3">
                    <p className="text-[10px] text-slate-700">
                      {application.date}
                    </p>
                    <p className="mt-1 text-[9px] text-slate-500">
                      {application.time}
                    </p>
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${
                        statusStyles[application.status]
                      }`}
                    >
                      {application.status}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-2 py-1 text-[10px] text-violet-600">
                      <MessageCircle size={12} />
                      {application.inquiries}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2 py-1 text-[10px] text-blue-600">
                      <Mail size={12} />
                      {application.emails}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2 py-1 text-[10px] text-orange-500">
                      <Folder size={12} />
                      {application.documents}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        title="View application"
                        className="grid h-7 w-7 place-items-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-50"
                      >
                        <Eye size={13} />
                      </button>

                      <button
                        title="More application actions"
                        className="grid h-7 w-7 place-items-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-50"
                      >
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredApplications.length === 0 && (
                <tr>
                  <td
                    colSpan="9"
                    className="px-4 py-12 text-center text-sm text-slate-500"
                  >
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <footer className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-slate-500">
            Showing 1 to {filteredApplications.length} of 512 applications
          </p>

          <div className="flex items-center gap-2 text-[10px] font-medium">
            <button className="grid h-7 w-7 place-items-center rounded-md text-slate-400">
              <ChevronLeft size={14} />
            </button>

            <button className="grid h-7 w-7 place-items-center rounded-md bg-indigo-50 text-indigo-600">
              1
            </button>

            {[2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className="grid h-7 w-7 place-items-center rounded-md hover:bg-slate-50"
              >
                {page}
              </button>
            ))}

            <span className="px-1 text-slate-500">•••</span>

            <button className="grid h-7 w-8 place-items-center rounded-md hover:bg-slate-50">
              103
            </button>

            <button className="grid h-7 w-7 place-items-center rounded-md text-slate-500">
              <ChevronRight size={14} />
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}
