import { navItems } from "../../nav-data";

const orders = [
  { id: "1042", customer: "Jay Patel", total: "$642.00", status: "Fulfilled" },
  { id: "1041", customer: "Harper Diaz", total: "$218.40", status: "Processing" },
  { id: "1040", customer: "Luna Moretti", total: "$1,204.10", status: "Fulfilled" },
  { id: "1039", customer: "Samuel Green", total: "$92.50", status: "Delayed" },
];

export default function OrdersModulePage() {
  const { label, description } = navItems.find((item) => item.href.endsWith("/orders"))!;

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{label}</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Recent orders</h1>
        <p className="text-base text-slate-300">{description}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {orders.map((order) => (
          <article
            key={order.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold">#{order.id}</h2>
              <span className="text-sm text-slate-400">{order.status}</span>
            </div>
            <dl className="mt-4 space-y-2 text-sm text-slate-300">
              <div className="flex justify-between">
                <dt>Customer</dt>
                <dd className="font-medium text-white">{order.customer}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Total</dt>
                <dd className="font-medium text-emerald-400">{order.total}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
