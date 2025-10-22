import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { navItems } from "./nav-data";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const currentPath = pathname ?? "/dashboard";

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 lg:flex-row lg:px-8">
      <div className="lg:hidden">
        <nav className="grid gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? currentPath === "/dashboard"
                : currentPath.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-start gap-3 rounded-xl border border-slate-800 px-4 py-3 transition hover:border-slate-700 hover:bg-slate-900 ${
                  isActive ? "bg-slate-900 text-white" : "text-slate-300"
                }`}
              >
                <item.icon className="mt-0.5 h-5 w-5" />
                <span>
                  <span className="block text-sm font-semibold tracking-wide">{item.label}</span>
                  <span className="block text-xs text-slate-400">{item.description}</span>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <aside className="sticky top-24 hidden h-fit w-64 shrink-0 self-start rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50 lg:block">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? currentPath === "/dashboard"
                : currentPath.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-start gap-3 rounded-xl border border-transparent px-4 py-3 transition hover:border-slate-700 hover:bg-slate-900 ${
                  isActive
                    ? "border-slate-700 bg-slate-900 text-white"
                    : "text-slate-300"
                }`}
              >
                <item.icon className="mt-0.5 h-5 w-5" />
                <span>
                  <span className="block text-sm font-semibold tracking-wide">{item.label}</span>
                  <span className="block text-xs text-slate-400">{item.description}</span>
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 space-y-8">{children}</main>
    </div>
  );
}
