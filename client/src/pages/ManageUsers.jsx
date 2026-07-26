// ManageUsers.jsx
import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  Funnel,
  LockKeyhole,
  Pencil,
  Search,
  Trash2,
  UserCheck,
  UserPlus,
  Users,
} from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Rohan Sharma",
    phone: "+91 98765 43210",
    email: "rohan.sharma@example.com",
    role: "Student",
    status: "Active",
    joined: "12 May 2024",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    name: "Priya Patel",
    phone: "+91 91234 56789",
    email: "priya.patel@example.com",
    role: "Student",
    status: "Active",
    joined: "10 May 2024",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    phone: "+91 99876 54321",
    email: "arjun.mehta@example.com",
    role: "Counsellor",
    status: "Active",
    joined: "08 May 2024",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 4,
    name: "Sneha Verma",
    phone: "+91 90987 65432",
    email: "sneha.verma@example.com",
    role: "Student",
    status: "Inactive",
    joined: "05 May 2024",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    id: 5,
    name: "Vikram Singh",
    phone: "+91 88990 98765",
    email: "vikram.singh@example.com",
    role: "Student",
    status: "Blocked",
    joined: "01 May 2024",
    avatar: "https://i.pravatar.cc/100?img=13",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    phone: "+91 77889 66554",
    email: "neha.kapoor@example.com",
    role: "Counsellor",
    status: "Active",
    joined: "28 Apr 2024",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
];

const statusStyles = {
  Active: "border-emerald-100 bg-emerald-50 text-emerald-600",
  Inactive: "border-orange-100 bg-orange-50 text-orange-500",
  Blocked: "border-rose-100 bg-rose-50 text-rose-500",
};

function StatCard({ title, value, detail, icon: Icon, iconStyle }) {
  return (
    <article className="rounded-xl border border-slate-100 bg-white p-5 shadow-[0_5px_16px_rgba(15,23,42,0.04)]">
      <div className="flex items-center gap-4">
        <div
          className={`grid h-12 w-12 place-items-center rounded-full ${iconStyle}`}
        >
          <Icon size={22} strokeWidth={2.4} />
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

export default function ManageUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All Roles");
  const [status, setStatus] = useState("All Status");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = `${user.name} ${user.phone} ${user.email}`
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesRole = role === "All Roles" || user.role === role;
      const matchesStatus = status === "All Status" || user.status === status;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, search, role, status]);

  const deleteUser = (id) => {
    setUsers((currentUsers) =>
      currentUsers.filter((currentUser) => currentUser.id !== id),
    );
  };

  return (
    <main className="min-h-screen bg-[#f8faff] p-5 font-sans text-slate-900 lg:p-8">
      {/* Page title */}
      <section className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Manage Users</h1>

          <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
            <span>Dashboard</span>
            <ChevronRight size={14} />
            <span>Manage Users</span>
          </div>
        </div>

        <button className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 px-4 text-xs font-semibold text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-700 hover:to-violet-700">
          <UserPlus size={16} />
          Add New User
        </button>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Users"
          value="1,248"
          detail="All registered users"
          icon={Users}
          iconStyle="bg-violet-50 text-violet-600"
        />
        <StatCard
          title="Active Users"
          value="1,098"
          detail="88% of total users"
          icon={UserCheck}
          iconStyle="bg-emerald-50 text-emerald-500"
        />
        <StatCard
          title="Counsellors"
          value="45"
          detail="Active counsellors"
          icon={Users}
          iconStyle="bg-orange-50 text-orange-500"
        />
        <StatCard
          title="Blocked Users"
          value="12"
          detail="1% of total users"
          icon={LockKeyhole}
          iconStyle="bg-rose-50 text-rose-500"
        />
      </section>

      {/* Users table */}
      <section className="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_6px_20px_rgba(15,23,42,0.05)]">
        {/* Search and filters */}
        <div className="flex flex-col gap-3 border-b border-slate-100 p-4 lg:flex-row lg:items-center">
          <div className="relative w-full lg:max-w-[246px]">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, email or phone..."
              className="h-8 w-full rounded-md border border-slate-200 bg-white pl-8 pr-3 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <select
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="h-8 min-w-[118px] appearance-none rounded-md border border-slate-200 bg-white px-3 pr-8 text-[11px] text-slate-700 outline-none focus:border-indigo-400"
              >
                <option>All Roles</option>
                <option>Student</option>
                <option>Counsellor</option>
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
                <option>Inactive</option>
                <option>Blocked</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <button className="inline-flex h-8 items-center gap-2 rounded-md border border-slate-200 px-3 text-[11px] font-medium text-slate-700 transition hover:bg-slate-50">
              <Funnel size={14} />
              Filter
            </button>
          </div>

          <button className="ml-auto inline-flex h-8 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 text-[11px] font-medium text-slate-700 transition hover:bg-slate-50">
            <Download size={14} />
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-left">
            <thead className="bg-[#fafbff]">
              <tr className="border-b border-slate-100">
                {[
                  "User",
                  "Email",
                  "Role",
                  "Status",
                  "Joined On",
                  "Actions",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-5 py-3 text-[10px] font-semibold text-slate-500"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/70"
                >
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[11px] font-semibold text-slate-800">
                          {user.name}
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-500">
                          {user.phone}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-3 text-[10px] text-slate-700">
                    {user.email}
                  </td>

                  <td className="px-5 py-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-medium ${
                        user.role === "Student"
                          ? "border-blue-200 bg-blue-50 text-blue-600"
                          : "border-violet-200 bg-violet-50 text-violet-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                        statusStyles[user.status]
                      }`}
                    >
                      <span className="h-1 w-1 rounded-full bg-current" />
                      {user.status}
                    </span>
                  </td>

                  <td className="px-5 py-3 text-[10px] text-slate-700">
                    {user.joined}
                  </td>

                  <td className="px-5 py-3">
                    <div className="flex gap-2">
                      <button
                        title="View user"
                        className="grid h-7 w-7 place-items-center rounded-md border border-slate-200 text-slate-500 transition hover:bg-slate-50"
                      >
                        <Eye size={13} />
                      </button>

                      <button
                        title="Edit user"
                        className="grid h-7 w-7 place-items-center rounded-md border border-slate-200 text-slate-500 transition hover:bg-slate-50"
                      >
                        <Pencil size={13} />
                      </button>

                      <button
                        title="Delete user"
                        onClick={() => deleteUser(user.id)}
                        className="grid h-7 w-7 place-items-center rounded-md border border-rose-100 bg-rose-50 text-rose-500 transition hover:bg-rose-100"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-12 text-center text-sm text-slate-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <footer className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-slate-500">
            Showing 1 to {filteredUsers.length} of 1,248 users
          </p>

          <div className="flex items-center gap-2 text-[11px] font-medium">
            <button className="grid h-7 w-7 place-items-center rounded-md border border-slate-200 text-slate-400">
              <ChevronLeft size={15} />
            </button>

            <button className="grid h-7 w-7 place-items-center rounded-md border border-indigo-200 bg-indigo-50 text-indigo-600">
              1
            </button>
            <button className="grid h-7 w-7 place-items-center rounded-md hover:bg-slate-50">
              2
            </button>
            <button className="grid h-7 w-7 place-items-center rounded-md hover:bg-slate-50">
              3
            </button>
            <button className="grid h-7 w-7 place-items-center rounded-md hover:bg-slate-50">
              4
            </button>
            <button className="grid h-7 w-7 place-items-center rounded-md hover:bg-slate-50">
              5
            </button>

            <span className="px-1 text-slate-500">•••</span>

            <button className="grid h-7 w-9 place-items-center rounded-md hover:bg-slate-50">
              208
            </button>

            <button className="grid h-7 w-7 place-items-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-50">
              <ChevronRight size={15} />
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}
