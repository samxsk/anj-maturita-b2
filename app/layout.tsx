import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANJ Maturita B2 – Zadania & Odpovede",
  description: "Všetkých 30 maturitných zadaní z angličtiny B2 s vypracovanými odpoveďami",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className="h-full">
      <body className="min-h-full flex flex-col" style={{ background: "var(--bg)", color: "var(--text)" }}>
        <header style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
          className="sticky top-0 z-40 px-6 py-4 flex items-center gap-4">
          <a href="/" className="flex items-center gap-3 no-underline">
            <span style={{ background: "var(--accent)", borderRadius: 8 }}
              className="text-white font-bold text-sm px-2 py-1">B2</span>
            <span className="font-bold text-lg" style={{ color: "var(--text)" }}>
              ANJ Maturita
            </span>
          </a>
          <span style={{ color: "var(--text2)" }} className="text-sm hidden sm:block">
            Gymnázium Jozefa Miloslava Hurbana · 30 zadaní
          </span>
        </header>
        <main className="flex-1">{children}</main>
        <footer style={{ borderTop: "1px solid var(--border)", color: "var(--text2)" }}
          className="text-center text-xs py-4">
          ANJ Maturita B2 · Úroveň B2 (2025)
        </footer>
      </body>
    </html>
  );
}
