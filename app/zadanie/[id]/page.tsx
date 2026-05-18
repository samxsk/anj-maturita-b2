"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { assignments } from "@/data/assignments";
import { assignments2 } from "@/data/assignments2";
import type { Task } from "@/data/assignments";

const all = [...assignments, ...assignments2];

const typeColor: Record<string, string> = {
  visual: "#4ecdc4",
  discussion: "#6c63ff",
  roleplay: "#ff6b6b",
};
const typeBg: Record<string, string> = {
  visual: "#4ecdc422",
  discussion: "#6c63ff22",
  roleplay: "#ff6b6b22",
};
const typeLabel: Record<string, string> = {
  visual: "Visual Input",
  discussion: "Discussion Topic",
  roleplay: "Role-play",
};
const typeIcon: Record<string, string> = {
  visual: "🖼️",
  discussion: "💬",
  roleplay: "🎭",
};

function formatAnswer(text: string) {
  return text.split("\n\n").map((para, i) => {
    const html = para
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br/>");
    return <p key={i} dangerouslySetInnerHTML={{ __html: html }} style={{ marginBottom: "0.85rem" }} />;
  });
}

function TaskCard({ task }: { task: Task }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${typeColor[task.type]}44`, background: "var(--surface)" }}>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xl">{typeIcon[task.type]}</span>
          <div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: typeBg[task.type], color: typeColor[task.type] }}>
              {typeLabel[task.type]}
            </span>
            <h3 className="font-bold text-lg mt-1" style={{ color: "var(--text)" }}>{task.topic}</h3>
          </div>
        </div>
        <ul className="space-y-2 mb-4">
          {task.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--text2)" }}>
              <span style={{ color: typeColor[task.type] }} className="mt-0.5 shrink-0">•</span>
              {b}
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(o => !o)}
          className="w-full rounded-xl py-2.5 px-4 text-sm font-semibold transition-all"
          style={{
            background: open ? typeColor[task.type] : typeBg[task.type],
            color: open ? "#fff" : typeColor[task.type],
            border: `1px solid ${typeColor[task.type]}66`,
          }}>
          {open ? "▲ Skryť odpoveď" : "▼ Zobraziť vypracovanú odpoveď"}
        </button>
      </div>
      {open && (
        <div style={{ background: "var(--surface2)", borderTop: `1px solid ${typeColor[task.type]}33` }}
          className="px-6 py-5">
          <div className="text-xs font-semibold mb-3 uppercase tracking-wide"
            style={{ color: typeColor[task.type] }}>
            Vzorová odpoveď (B2 úroveň)
          </div>
          <div className="prose-answer text-sm" style={{ color: "var(--text2)", lineHeight: 1.8 }}>
            {formatAnswer(task.modelAnswer)}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AssignmentPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const assignment = all.find(a => a.id === id);

  if (!assignment) {
    return (
      <div className="text-center py-20">
        <p style={{ color: "var(--text2)" }}>Zadanie nenájdené.</p>
        <Link href="/" className="mt-4 inline-block" style={{ color: "var(--accent)" }}>← Späť</Link>
      </div>
    );
  }

  const prev = all.find(a => a.id === id - 1);
  const next = all.find(a => a.id === id + 1);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm mb-6 no-underline"
        style={{ color: "var(--text2)", textDecoration: "none" }}>
        ← Všetky zadania
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: "var(--accent)33", color: "var(--accent)" }}>
            Zadanie {assignment.id}
          </span>
          <span className="text-xs" style={{ color: "var(--text2)" }}>z 30</span>
        </div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text)" }}>
          {assignment.tasks.map(t => t.topic).join(" · ")}
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text2)" }}>
          Klikni na &ldquo;Zobraziť vypracovanú odpoveď&rdquo; pod každou úlohou
        </p>
      </div>

      <div className="space-y-5">
        {assignment.tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <div className="flex justify-between mt-10 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
        {prev ? (
          <Link href={`/zadanie/${prev.id}`} className="no-underline"
            style={{ color: "var(--accent)", textDecoration: "none" }}>
            ← Zadanie {prev.id}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/zadanie/${next.id}`} className="no-underline"
            style={{ color: "var(--accent)", textDecoration: "none" }}>
            Zadanie {next.id} →
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
