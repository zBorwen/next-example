import { navItems } from "../../nav-data";

const products = [
  { name: "Aurora Lamp", sku: "AL-204", stock: 148, price: "$89" },
  { name: "Nebula Chair", sku: "NC-481", stock: 42, price: "$320" },
  { name: "Pulse Keyboard", sku: "PK-770", stock: 87, price: "$129" },
];

export default function ProductsModulePage() {
  const { label, description } = navItems.find((item) => item.href.endsWith("/products"))!;

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{label}</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Catalog overview</h1>
        <p className="text-base text-slate-300">{description}</p>
      </header>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
        <ul className="space-y-4 text-sm text-slate-300">
          {products.map((product) => (
            <li key={product.sku} className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">{product.name}</p>
                <p className="text-xs text-slate-400">SKU {product.sku}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-emerald-400">{product.price}</p>
                <p className="text-xs text-slate-400">{product.stock} in stock</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
