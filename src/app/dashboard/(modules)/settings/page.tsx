import { navItems } from "../../nav-data";

export default function SettingsModulePage() {
  const { label, description } = navItems.find((item) => item.href.endsWith("/settings"))!;

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{label}</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Workspace preferences</h1>
        <p className="text-base text-slate-300">{description}</p>
      </header>

      <form className="space-y-6">
        <fieldset className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
          <legend className="text-sm font-semibold uppercase tracking-wide text-slate-400">Notifications</legend>
          <label className="flex items-center justify-between text-sm text-slate-300">
            <span>Email alerts</span>
            <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-700 bg-slate-900" />
          </label>
          <label className="flex items-center justify-between text-sm text-slate-300">
            <span>Product updates</span>
            <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-900" />
          </label>
          <label className="flex items-center justify-between text-sm text-slate-300">
            <span>Weekly reports</span>
            <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-700 bg-slate-900" />
          </label>
        </fieldset>

        <fieldset className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
          <legend className="text-sm font-semibold uppercase tracking-wide text-slate-400">Automation</legend>
          <div className="space-y-2 text-sm text-slate-300">
            <p>Automatically pause campaigns when inventory falls below a threshold.</p>
            <div className="flex items-center gap-3">
              <label className="text-xs uppercase tracking-wide text-slate-500" htmlFor="inventory-threshold">
                Threshold
              </label>
              <input
                id="inventory-threshold"
                type="number"
                defaultValue={25}
                className="w-20 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
