# Next.js @latest + TypeScript + Tailwind (Yarn)

This project contains a fresh [Next.js](https://nextjs.org/) application scaffolded to
mirror the current `create-next-app@latest` defaults, but recreated manually due to
registry access restrictions. It ships with TypeScript, Tailwind CSS, and the App
Router enabled by default.

## Getting started

1. Ensure you are running Node.js 22 or newer. With `nvm` you can run:

   ```bash
   nvm use 22
   ```

2. Install dependencies with Yarn:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

4. Run lint checks:

   ```bash
   yarn lint
   ```

## Project structure

- `src/app/` – App Router entry points (`layout.tsx`, `page.tsx`) and global styles.
- `tailwind.config.ts` – Tailwind CSS configuration targeting the `src` directory.
- `postcss.config.mjs` – PostCSS pipeline including Tailwind and Autoprefixer.
- `next.config.ts` – Next.js configuration enabling React strict mode.
- `tsconfig.json` – TypeScript compiler options tuned for the Next.js runtime.

## Styling

Tailwind directives live in `src/app/globals.css`. Extend the Tailwind theme in
`tailwind.config.ts` to customize colors, fonts, or spacing as your project evolves.

## Scripts

- `yarn dev` – Run the development server with hot reloading.
- `yarn build` – Create an optimized production build.
- `yarn start` – Start the production server (after running `yarn build`).
- `yarn lint` – Execute ESLint with the Next.js shareable config.

Happy building!
