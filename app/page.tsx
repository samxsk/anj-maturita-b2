"use client";
import Link from "next/link";
import { assignments } from "@/data/assignments";
import { assignments2 } from "@/data/assignments2";

const all = [...assignments, ...assignments2];

const typeColor: Record<string, string> = {
  visual: "#4ecdc4",
  discussion: "#6c63ff",
  roleplay: "#ff6b6b",
};
const typeLabel: Record<string, string> = {
  visual: "Visual Input",
  discussion: "Discussion",
  roleplay: "Role-play",
};

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>
          Maturitné zadania z angličtiny
        </h1>
        <p style={{ color: "var(--text2)" }} className="text-lg">
          Úroveň B2 · 30 zadaní · každé s vypracovanou odpoveďou pre ústnu maturitu
        </p>
        <div className="flex gap-3 justify-center mt-5 flex-wrap text-sm">
          {Object.entries(typeLabel).map(([k, v]) => (
            <span key={k} className="flex items-center gap-2 px-3 py-1 rounded-full"
              style={{ background: typeColor[k] + "22", color: typeColor[k], border: `1px solid ${typeColor[k]}44` }}>
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: typeColor[k] }} />
              {v}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {all.map((a) => (
          <Link key={a.id} href={`/zadanie/${a.id}`}
            className="block rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-2xl no-underline group"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", textDecoration: "none" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: "var(--accent)33", color: "var(--accent)" }}>
                Zadanie {a.id}
              </span>
              <span className="text-xs" style={{ color: "var(--text2)" }}>3 úlohy</span>
            </div>
            <ul className="space-y-2">
              {a.tasks.map((t) => (
                <li key={t.id} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: typeColor[t.type] }} />
                  <div>
                    <span className="text-xs" style={{ color: typeColor[t.type] }}>{typeLabel[t.type]} · </span>
                    <span style={{ color: "var(--text)" }}>{t.topic}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
