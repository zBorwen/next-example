import { navItems } from "../../nav-data";

export default function UsersModulePage() {
  const { label, description } = navItems.find((item) => item.href.endsWith("/users"))!;

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{label}</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Team directory</h1>
        <p className="text-base text-slate-300">{description}</p>
      </header>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
        <table className="w-full table-fixed text-left text-sm text-slate-300">
          <thead className="text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="pb-3">Member</th>
              <th className="pb-3">Role</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            <tr>
              <td className="py-3 font-semibold text-white">Laura Chen</td>
              <td className="py-3">Administrator</td>
              <td className="py-3 text-emerald-400">Active</td>
            </tr>
            <tr>
              <td className="py-3 font-semibold text-white">Diego Alvarez</td>
              <td className="py-3">Support lead</td>
              <td className="py-3 text-emerald-400">Active</td>
            </tr>
            <tr>
              <td className="py-3 font-semibold text-white">Mia Robinson</td>
              <td className="py-3">Billing specialist</td>
              <td className="py-3 text-amber-400">Pending</td>
            </tr>
            <tr>
              <td className="py-3 font-semibold text-white">Klaus Becker</td>
              <td className="py-3">Developer</td>
              <td className="py-3 text-emerald-400">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
