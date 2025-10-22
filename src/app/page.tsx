export default function Home() {
  return (
    <section className="space-y-8">
      <header className="space-y-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
          Next.js @latest + Tailwind CSS
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl">Welcome aboard</h1>
        <p className="text-lg text-slate-300">
          Start building with the latest Next.js features, powered by TypeScript and styled
          with Tailwind CSS.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
          <h2 className="text-xl font-semibold">Get started</h2>
          <p className="mt-2 text-sm text-slate-300">
            Run <code className="rounded bg-slate-800 px-2 py-1">yarn dev</code> to launch the
            development server and explore the app directory.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
          <h2 className="text-xl font-semibold">Tailwind ready</h2>
          <p className="mt-2 text-sm text-slate-300">
            Utility-first styles are configured out of the box. Start composing your UI with
            Tailwind&apos;s design system.
          </p>
        </article>
      </div>
    </section>
  );
}
