import {
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleUserRound,
  Clock3,
  FileText,
  FolderOpen,
  GraduationCap,
  KeyRound,
  LockKeyhole,
  Pencil,
  Phone,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";

const details = [
  {
    title: "Personal Information",
    icon: UserRound,
    items: [
      ["Full Name", "Arjun Kumar"], ["Gender", "Male"],
      ["Email", "arjun.kumar@email.com"], ["Nationality", "Indian"],
      ["Phone Number", "+91 98765 43210"], ["Blood Group", "B+"],
      ["Date of Birth", "12 Aug 2003"], ["Address", "Greater Noida, Uttar Pradesh, India - 201310"],
    ],
  },
  {
    title: "Education Details",
    icon: GraduationCap,
    items: [
      ["10th Percentage", "85.60%"], ["10th Board", "CBSE"],
      ["12th Percentage", "88.20%"], ["12th Board", "CBSE"],
      ["NEET Score", "612"], ["Passing Year", "2023"],
      ["Preferred Intake", "September 2026"], ["Preferred Country", "Russia"],
    ],
  },
  {
    title: "Passport Details",
    icon: FileText,
    items: [
      ["Passport Number", "R1234567"], ["Date of Issue", "15 Jan 2024"],
      ["Date of Expiry", "14 Jan 2034"], ["Place of Issue", "New Delhi, India"],
      ["Passport Status", "Verified"],
    ],
  },
  {
    title: "Parent / Guardian Details",
    icon: UsersRound,
    items: [
      ["Father's Name", "Rajesh Kumar"], ["Mother's Name", "Sunita Chaudhary"],
      ["Occupation", "Businessman"], ["Contact Number", "+91 98765 43211"],
      ["Email", "rajesh.kumar@email.com"], ["Annual Income", "₹8,00,000"],
    ],
  },
  {
    title: "Emergency Contact",
    icon: Phone,
    items: [
      ["Name", "Ankit Kumar"], ["Phone Number", "+91 98765 56789"],
      ["Relation", "Brother"], ["Email", "ankit.kumar@email.com"],
    ],
  },
];

const documents = [
  ["Passport", true], ["10th Marksheet", true], ["12th Marksheet", true],
  ["NEET Scorecard", false], ["Medical Certificate", true], ["Passport Photo", true],
];

function InfoCard({ title, icon: Icon, items }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><Icon size={16} /></span>
          <h2 className="text-sm font-bold text-slate-800">{title}</h2>
        </div>
        <button className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2 py-1 text-[10px] font-semibold text-indigo-600 hover:bg-indigo-100">
          <Pencil size={11} /> Edit
        </button>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
        {items.map(([label, value]) => (
          <div key={label}>
            <dt className="text-[10px] text-slate-400">{label}</dt>
            <dd className={`mt-0.5 text-[11px] font-medium leading-snug ${value === "Verified" ? "text-emerald-600" : "text-slate-700"}`}>
              {value === "Verified" && <CheckCircle2 className="mr-1 inline" size={11} />}{value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function Profile() {
  const storedUser = localStorage.getItem("medisphere_user");
  let user;
  try { user = storedUser ? JSON.parse(storedUser) : null; } catch { user = null; }
  const name = user?.name || "Arjun Kumar";
  const initials = name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">My Profile</h1>
        <p className="mt-1 text-sm text-slate-500">Manage your personal information and admission details.</p>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <section className="rounded-2xl bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            {user?.avatar ? <img className="h-16 w-16 rounded-full border-4 border-white object-cover shadow" src={user.avatar} alt="Profile" /> : <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-white bg-indigo-600 text-lg font-bold text-white shadow">{initials}</span>}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5"><h2 className="truncate text-base font-extrabold text-slate-900">{name}</h2><BadgeCheck size={16} className="shrink-0 text-blue-500" /></div>
              <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700"><CheckCircle2 size={10} /> Verified Student</p>
              <p className="mt-3 text-[10px] text-slate-500">Student ID</p><p className="text-xs font-semibold text-slate-700">#MB20260123</p>
              <p className="mt-2 text-[10px] text-slate-500">Applying for</p><p className="text-xs font-semibold text-slate-700">MBBS in Russia (2026 Intake)</p>
            </div>
          </div>
          <button className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 bg-white/70 px-3 py-2 text-xs font-semibold text-indigo-600 hover:bg-white"><Pencil size={13} /> Edit Profile</button>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100">
          <div className="flex items-start justify-between"><div><p className="text-sm font-bold text-slate-800">Admission Progress</p><p className="mt-1 text-2xl font-extrabold text-indigo-600">80%</p><p className="text-[10px] text-slate-500">4 of 5 steps completed</p></div><span className="rounded-full bg-indigo-50 p-2.5 text-indigo-500"><GraduationCap size={18} /></span></div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100"><span className="block h-full w-4/5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" /></div>
          <div className="mt-4 space-y-2.5">
            {["Profile Completed", "Documents Uploaded", "Counselling Completed", "University Selected", "Visa Processing"].map((step, index) => <div key={step} className="flex items-center gap-2 text-[10px]"><span className={index < 4 ? "text-emerald-500" : "text-slate-300"}>{index < 4 ? <CheckCircle2 size={13} /> : <Clock3 size={13} />}</span><span className="flex-1 font-medium text-slate-600">{step}</span><span className={index < 4 ? "text-slate-400" : "font-semibold text-amber-500"}>{index < 4 ? `${12 + index * 5} May 2025` : "Pending"}</span></div>)}
          </div>
        </section>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        {details.slice(0, 4).map((detail) => <InfoCard key={detail.title} {...detail} />)}
        <InfoCard {...details[4]} />
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100"><div className="flex items-center justify-between"><div className="flex items-center gap-2.5"><span className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><FolderOpen size={16} /></span><h2 className="text-sm font-bold text-slate-800">Documents Overview</h2></div><button className="rounded-md bg-indigo-50 px-2 py-1 text-[10px] font-semibold text-indigo-600">View All</button></div><div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">{documents.map(([document, uploaded]) => <div key={document} className="rounded-lg border border-slate-100 p-2"><div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700"><FileText size={13} className="text-indigo-500" />{document}</div><span className={`mt-2 inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${uploaded ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}>{uploaded ? <CheckCircle2 size={9} /> : <Clock3 size={9} />}{uploaded ? "Uploaded" : "Pending"}</span></div>)}</div></section>
      </div>

      <section className="mt-4 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100 lg:grid-cols-2"><div><div className="flex items-center gap-2.5"><span className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><ShieldCheck size={16} /></span><h2 className="text-sm font-bold text-slate-800">Account Security</h2></div><div className="mt-4 space-y-3 text-xs"><div className="flex items-center gap-2 text-slate-600"><KeyRound size={14} className="text-indigo-500" /><span className="flex-1">Password</span><button className="rounded-md bg-indigo-50 px-2 py-1 text-[10px] font-semibold text-indigo-600">Change Password</button></div><div className="flex items-center gap-2 text-slate-600"><LockKeyhole size={14} className="text-indigo-500" /><span className="flex-1">Two-Factor Authentication</span><span className="rounded bg-rose-50 px-2 py-1 text-[10px] font-semibold text-rose-500">Disabled</span></div></div></div><div className="border-t border-slate-100 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"><div className="flex items-center gap-2.5"><span className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><BookOpen size={16} /></span><h2 className="text-sm font-bold text-slate-800">Account Activity</h2></div><div className="mt-4 space-y-3 text-xs text-slate-600"><div className="flex items-center gap-2"><CircleUserRound size={14} className="text-indigo-500" /><span className="flex-1">Logged-in devices</span><button className="text-[10px] font-semibold text-indigo-600">View Devices <ChevronRight className="inline" size={11} /></button></div><div className="flex items-center gap-2"><Clock3 size={14} className="text-indigo-500" /><span className="flex-1">Login history</span><button className="text-[10px] font-semibold text-indigo-600">View History <ChevronRight className="inline" size={11} /></button></div></div></div></section>
    </div>
  );
}
