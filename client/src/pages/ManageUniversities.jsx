import { useMemo, useState } from "react";
import {
  BadgeCheck,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  Funnel,
  Hourglass,
  Pencil,
  Plus,
  Search,
  Trash2,
  X,
  XCircle,
} from "lucide-react";

const initialUniversities = [
  {
    id: 1,
    name: "Kazan Federal University",
    website: "kpfu.ru",
    country: "Russia",
    city: "Kazan",
    established: "1804",
    fees: "₹3.20 Lakh",
    programs: 12,
    applications: 98,
    status: "Active",
    ownership: "Public",
    logo: "🏛️",
  },
  {
    id: 2,
    name: "Bashkir State Medical University",
    website: "bashgmu.ru",
    country: "Russia",
    city: "Ufa",
    established: "1932",
    fees: "₹2.90 Lakh",
    programs: 15,
    applications: 76,
    status: "Active",
    ownership: "Public",
    logo: "⚕️",
  },
  {
    id: 3,
    name: "Lomonosov Moscow State University",
    website: "msu.ru",
    country: "Russia",
    city: "Moscow",
    established: "1755",
    fees: "₹4.10 Lakh",
    programs: 20,
    applications: 156,
    status: "Active",
    ownership: "Public",
    logo: "🎓",
  },
  {
    id: 4,
    name: "First Moscow State Medical University",
    website: "sechenov.ru",
    country: "Russia",
    city: "Moscow",
    established: "1758",
    fees: "₹3.50 Lakh",
    programs: 18,
    applications: 132,
    status: "Pending",
    ownership: "Public",
    logo: "🔬",
  },
  {
    id: 5,
    name: "RUDN University",
    website: "rudn.ru",
    country: "Russia",
    city: "Moscow",
    established: "1960",
    fees: "₹2.80 Lakh",
    programs: 14,
    applications: 64,
    status: "Active",
    ownership: "Public",
    logo: "⚗️",
  },
  {
    id: 6,
    name: "Novosibirsk State University",
    website: "nsu.ru",
    country: "Russia",
    city: "Novosibirsk",
    established: "1959",
    fees: "₹2.70 Lakh",
    programs: 16,
    applications: 77,
    status: "Inactive",
    ownership: "Public",
    logo: "🌿",
  },
];

const emptyUniversity = {
  name: "",
  website: "",
  country: "Russia",
  city: "",
  established: "",
  fees: "",
  programs: "",
  applications: "0",
  status: "Pending",
  ownership: "Public",
  logo: "🏛️",
};

const statusStyles = {
  Active: "border-emerald-100 bg-emerald-50 text-emerald-600",
  Pending: "border-orange-100 bg-orange-50 text-orange-500",
  Inactive: "border-rose-100 bg-rose-50 text-rose-500",
};

function StatCard({ title, value, detail, icon: Icon, iconClass }) {
  return (
    <article className="rounded-xl border border-slate-100 bg-white p-5 shadow-[0_5px_16px_rgba(15,23,42,0.04)]">
      <div className="flex items-center gap-4">
        <div
          className={`grid h-12 w-12 place-items-center rounded-full ${iconClass}`}
        >
          <Icon size={22} strokeWidth={2.3} />
        </div>

        <div>
          <p className="text-[11px] font-medium text-slate-500">{title}</p>
          <p className="mt-0.5 text-[22px] font-bold leading-none text-slate-900">
            {value}
          </p>
          <p className="mt-2 text-[11px] text-slate-500">{detail}</p>
        </div>
      </div>
    </article>
  );
}

export default function ManageUniversities() {
  const [universities, setUniversities] = useState(initialUniversities);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All Countries");
  const [status, setStatus] = useState("All Status");
  const [ownership, setOwnership] = useState("All Ownership");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUniversity, setEditingUniversity] = useState(null);
  const [form, setForm] = useState(emptyUniversity);

  const filteredUniversities = useMemo(() => {
    return universities.filter((university) => {
      const text = `${university.name} ${university.country} ${university.city}`
        .toLowerCase()
        .includes(search.toLowerCase());

      return (
        text &&
        (country === "All Countries" || university.country === country) &&
        (status === "All Status" || university.status === status) &&
        (ownership === "All Ownership" || university.ownership === ownership)
      );
    });
  }, [universities, search, country, status, ownership]);

  const openAddModal = () => {
    setEditingUniversity(null);
    setForm(emptyUniversity);
    setModalOpen(true);
  };

  const openEditModal = (university) => {
    setEditingUniversity(university);
    setForm(university);
    setModalOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingUniversity) {
      setUniversities((current) =>
        current.map((university) =>
          university.id === editingUniversity.id
            ? {
                ...form,
                id: editingUniversity.id,
                programs: Number(form.programs),
                applications: Number(form.applications),
              }
            : university,
        ),
      );
    } else {
      setUniversities((current) => [
        {
          ...form,
          id: Date.now(),
          programs: Number(form.programs),
          applications: Number(form.applications),
        },
        ...current,
      ]);
    }

    setModalOpen(false);
  };

  const deleteUniversity = (id) => {
    setUniversities((current) =>
      current.filter((university) => university.id !== id),
    );
  };

  return (
    <main className="min-h-screen bg-[#f8faff] p-5 font-sans text-slate-900 lg:p-8">
      <section className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Universities</h1>

          <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
            <span>Dashboard</span>
            <ChevronRight size={14} />
            <span>Universities</span>
          </div>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 px-4 text-xs font-semibold text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-700 hover:to-violet-700"
        >
          <Plus size={16} />
          Add New University
        </button>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Universities"
          value="128"
          detail="All registered universities"
          icon={Building2}
          iconClass="bg-violet-50 text-violet-600"
        />
      </section>

      {/* Table section */}
      <section className="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_6px_20px_rgba(15,23,42,0.05)]">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-4 xl:flex-row xl:items-center">
          <div className="relative w-full xl:max-w-[234px]">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, country, city..."
              className="h-8 w-full rounded-md border border-slate-200 bg-white pl-8 pr-3 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="h-8 min-w-[118px] appearance-none rounded-md border border-slate-200 bg-white px-3 pr-8 text-[11px] text-slate-700 outline-none focus:border-indigo-400"
              >
                <option>All Countries</option>
                <option>Russia</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <div className="relative">
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="h-8 min-w-[118px] appearance-none rounded-md border border-slate-200 bg-white px-3 pr-8 text-[11px] text-slate-700 outline-none focus:border-indigo-400"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <div className="relative">
              <select
                value={ownership}
                onChange={(event) => setOwnership(event.target.value)}
                className="h-8 min-w-[128px] appearance-none rounded-md border border-slate-200 bg-white px-3 pr-8 text-[11px] text-slate-700 outline-none focus:border-indigo-400"
              >
                <option>All Ownership</option>
                <option>Public</option>
                <option>Private</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <button className="inline-flex h-8 items-center gap-2 rounded-md border border-slate-200 px-3 text-[11px] font-medium text-slate-700 hover:bg-slate-50">
              <Funnel size={14} />
              Filter
            </button>
          </div>

          <button className="ml-auto inline-flex h-8 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 text-[11px] font-medium text-slate-700 hover:bg-slate-50">
            <Download size={14} />
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1120px] text-left">
            <thead className="bg-[#fafbff]">
              <tr className="border-b border-slate-100">
                {[
                  "University",
                  "Country",
                  "City",
                  "Established",
                  "Tuition Fees (Per Year)",
                  "Programs",
                  "Applications",
                  "Status",
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
              {filteredUniversities.map((university) => (
                <tr
                  key={university.id}
                  className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/70"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-slate-50 text-xl">
                        {university.logo}
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-slate-800">
                          {university.name}
                        </p>
                        <p className="mt-0.5 text-[9px] text-slate-500">
                          {university.website}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-[10px] text-slate-700">
                    <span className="mr-2">🇷🇺</span>
                    {university.country}
                  </td>

                  <td className="px-4 py-3 text-[10px] text-slate-700">
                    {university.city}
                  </td>

                  <td className="px-4 py-3 text-[10px] text-slate-700">
                    {university.established}
                  </td>

                  <td className="px-4 py-3 text-[10px] text-slate-700">
                    {university.fees}
                  </td>

                  <td className="px-4 py-3 text-center text-[10px] text-slate-700">
                    {university.programs}
                  </td>

                  <td className="px-4 py-3 text-center text-[10px] text-slate-700">
                    {university.applications}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[9px] font-medium ${
                        statusStyles[university.status]
                      }`}
                    >
                      <span className="h-1 w-1 rounded-full bg-current" />
                      {university.status}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        title="View university"
                        className="grid h-7 w-7 place-items-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-50"
                      >
                        <Eye size={13} />
                      </button>

                      <button
                        title="Edit university"
                        onClick={() => openEditModal(university)}
                        className="grid h-7 w-7 place-items-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-50"
                      >
                        <Pencil size={13} />
                      </button>

                      <button
                        title="Delete university"
                        onClick={() => deleteUniversity(university.id)}
                        className="grid h-7 w-7 place-items-center rounded-md border border-rose-100 bg-rose-50 text-rose-500 hover:bg-rose-100"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="flex flex-col gap-3 border-t border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-slate-500">
            Showing 1 to {filteredUniversities.length} of 128 universities
          </p>

          <div className="flex items-center gap-2 text-[11px] font-medium">
            <button className="grid h-7 w-7 place-items-center rounded-md border border-slate-200 text-slate-400">
              <ChevronLeft size={15} />
            </button>
            <button className="grid h-7 w-7 place-items-center rounded-md border border-indigo-200 bg-indigo-50 text-indigo-600">
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
              22
            </button>
            <button className="grid h-7 w-7 place-items-center rounded-md border border-slate-200 text-slate-500">
              <ChevronRight size={15} />
            </button>
          </div>
        </footer>
      </section>

      {/* Add/Edit modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 p-4 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">
                  {editingUniversity ? "Edit University" : "Add New University"}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Enter the university information below.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["name", "University Name"],
                ["website", "Website"],
                ["city", "City"],
                ["established", "Established Year"],
                ["fees", "Tuition Fee, e.g. ₹3.20 Lakh"],
                ["programs", "Number of Programs"],
              ].map(([field, label]) => (
                <label
                  key={field}
                  className="text-xs font-medium text-slate-700"
                >
                  {label}
                  <input
                    required
                    value={form[field]}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        [field]: event.target.value,
                      }))
                    }
                    className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-indigo-500"
                  />
                </label>
              ))}

              <label className="text-xs font-medium text-slate-700">
                Status
                <select
                  value={form.status}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      status: event.target.value,
                    }))
                  }
                  className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-indigo-500"
                >
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Inactive</option>
                </select>
              </label>

              <label className="text-xs font-medium text-slate-700">
                Ownership
                <select
                  value={form.ownership}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      ownership: event.target.value,
                    }))
                  }
                  className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-indigo-500"
                >
                  <option>Public</option>
                  <option>Private</option>
                </select>
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                {editingUniversity ? "Save Changes" : "Add University"}
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
