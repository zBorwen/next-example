import { navItems } from "./nav-data";

export default function DashboardOverviewPage() {
  const overview = navItems[0];

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{overview.label}</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Performance summary</h1>
        <p className="text-base text-slate-300">{overview.description}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
          <p className="text-sm font-medium text-slate-400">New customers</p>
          <p className="mt-4 text-3xl font-semibold">1,284</p>
          <p className="mt-2 text-xs text-emerald-400">+18.6% vs last month</p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
          <p className="text-sm font-medium text-slate-400">Monthly revenue</p>
          <p className="mt-4 text-3xl font-semibold">$98,420</p>
          <p className="mt-2 text-xs text-emerald-400">+7.2% vs forecast</p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
          <p className="text-sm font-medium text-slate-400">Support backlog</p>
          <p className="mt-4 text-3xl font-semibold">42</p>
          <p className="mt-2 text-xs text-rose-400">-5 tickets this week</p>
        </article>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
        <h2 className="text-xl font-semibold">Activity feed</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          <li>
            <span className="font-medium text-white">Laura Chen</span> upgraded to the Pro plan.
          </li>
          <li>
            <span className="font-medium text-white">Order #1042</span> was marked as fulfilled.
          </li>
          <li>
            <span className="font-medium text-white">API usage</span> exceeded the monthly limit.
          </li>
        </ul>
      </div>
    </section>
  );
}
