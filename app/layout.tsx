import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next 15 Starter",
  description: "A Next.js 15 project bootstrapped with TypeScript and Tailwind CSS."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-100">
      <body className="min-h-screen font-sans antialiased">
        <main className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
