# Next 15 + TypeScript + Tailwind (pnpm)

This repository contains a minimal [Next.js 15](https://nextjs.org/) application
bootstrapped manually to satisfy the following requirements:

- Built with the **latest stable Node.js runtime** (≥ 22.x).
- Uses **TypeScript** throughout the codebase.
- Configured with **Tailwind CSS** for styling.
- Managed with **pnpm** for dependency installation and scripts.

## Getting started

1. Ensure you are running Node.js 22 or newer. If you use `nvm`, run:

   ```bash
   nvm use 22
   ```

2. Install dependencies with pnpm:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

4. Run lint checks:

   ```bash
   pnpm lint
   ```

## Project structure

- `app/` – App Router entry points (`layout.tsx`, `page.tsx`) and global styles.
- `tailwind.config.ts` – Tailwind CSS configuration targeting the app directory.
- `postcss.config.mjs` – PostCSS pipeline including Tailwind and Autoprefixer.
- `next.config.ts` – Next.js configuration enabling React strict mode.
- `tsconfig.json` – TypeScript compiler options tuned for Next.js 15.

## Styling

Tailwind directives are declared in `app/globals.css`. Feel free to extend the
Tailwind theme in `tailwind.config.ts` to customize colors, fonts, or spacing.

## Scripts

- `pnpm dev` – Run the development server with hot reloading.
- `pnpm build` – Create an optimized production build.
- `pnpm start` – Start the production server (after running `pnpm build`).
- `pnpm lint` – Execute ESLint with the Next.js shareable config.

Happy building!
