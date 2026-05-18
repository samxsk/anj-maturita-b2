"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { phrases } from "@/data/phrases";
import type { PhraseCard } from "@/data/phrases";
import { quizQuestions } from "@/data/quiz-questions";
import type { QuizQuestion } from "@/data/quiz-questions";

// ─── COLOURS ──────────────────────────────────────────────────────────────────
const C = {
  visual:     { bg: "#4ecdc422", border: "#4ecdc466", text: "#4ecdc4", label: "Visual Input" },
  discussion: { bg: "#6c63ff22", border: "#6c63ff66", text: "#6c63ff", label: "Discussion" },
  roleplay:   { bg: "#ff6b6b22", border: "#ff6b6b66", text: "#ff6b6b", label: "Role-play" },
  connector:  { bg: "#ffd93d22", border: "#ffd93d66", text: "#ffd93d", label: "Connectors" },
};

const grammarRules = [
  {
    title: "Second Conditional", tag: "Unreal present / future",
    structure: "If + past simple, would + infinitive",
    examples: ["If I were you, I would accept the job.", "If we recycled more, the environment would improve.", "If I had more money, I would travel more."],
    tip: "Používaj pre hypotetické situácie v prítomnosti alebo budúcnosti. 'Were' sa používa pre všetky osoby (nie 'was').",
  },
  {
    title: "Third Conditional", tag: "Unreal past",
    structure: "If + past perfect, would have + past participle",
    examples: ["If I had studied harder, I would have passed.", "If they had recycled, they would have helped the environment.", "If she had applied earlier, she would have got the job."],
    tip: "Hovoríš o tom, čo sa mohlo stať v minulosti — ale nestalo. Vyjadruje ľútosť alebo iný výsledok.",
  },
  {
    title: "Passive Voice", tag: "B2 essential",
    structure: "Object + be (conjugated) + past participle",
    examples: ["English is spoken all over the world.", "The report was written by the manager.", "Thousands of animals are being affected by climate change."],
    tip: "Použi pasív, keď chceš zdôrazniť dej (nie kto ho vykonáva), alebo keď nevieš / nechceš menovať činiteľa.",
  },
  {
    title: "Reported Speech", tag: "Indirect speech",
    structure: "Said / told + that + backshifted tense",
    examples: ["'I am tired.' → He said he was tired.", "'I will come.' → She said she would come.", "'I have finished.' → He said he had finished."],
    tip: "Časy sa posúvajú o 1 stupeň dozadu: present → past, will → would, have/has → had. 'Tell' vyžaduje objekt: he TOLD me (nie 'said me').",
  },
  {
    title: "Modal Verbs", tag: "Obligation, ability, possibility",
    structure: "Modal + base verb (no 'to')",
    examples: ["You should exercise more regularly. (advice)", "She might be late due to traffic. (possibility)", "You must submit the form by Friday. (obligation)", "They can't be serious! (impossibility)"],
    tip: "Kľúčové modály pre B2: must/have to (povinnosť), should/ought to (rada), might/could (možnosť), can't (nemožnosť).",
  },
  {
    title: "Relative Clauses", tag: "Defining vs Non-defining",
    structure: "who/which/that/where/whose",
    examples: ["The woman who lives next door is a doctor. (defining)", "My sister, who lives in London, is a nurse. (non-defining — commas!)", "This is the city where I was born."],
    tip: "Non-defining relative clause (čiarky) pridáva len doplňujúcu info — vetu možno vynechať. Defining (bez čiarok) — info je nevyhnutná.",
  },
  {
    title: "Gerund vs Infinitive", tag: "Common patterns",
    structure: "verb + -ing  OR  verb + to + infinitive",
    examples: ["I enjoy swimming. (enjoy + -ing)", "She decided to leave. (decide + to)", "I stopped smoking. vs. I stopped to smoke. (different meanings!)"],
    tip: "Po: enjoy, avoid, suggest, keep, mind → -ing. Po: want, decide, manage, refuse, hope → to infinitive. Po: stop, remember, forget → oboje, ale iný význam!",
  },
  {
    title: "Comparison Structures", tag: "Comparing effectively",
    structure: "as...as / -er than / the most / less than",
    examples: ["City life is as stressful as village life. (equality)", "The countryside is much quieter than the city.", "Electric cars are far less polluting than petrol cars.", "This is by far the most effective solution."],
    tip: "Zosilňovače: much, far, a lot + comparative. Zoslabovače: slightly, a little + comparative. 'By far' = zďaleka (superlative).",
  },
];

// ─── FLASHCARD ────────────────────────────────────────────────────────────────
function Flashcard({ card }: { card: PhraseCard }) {
  const [flipped, setFlipped] = useState(false);
  const col = C[card.category];
  return (
    <div style={{ perspective: 1000 }} className="h-52 cursor-pointer" onClick={() => setFlipped(f => !f)}>
      <div style={{
        transition: "transform 0.5s",
        transformStyle: "preserve-3d",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        position: "relative", height: "100%",
      }}>
        {/* FRONT */}
        <div style={{
          backfaceVisibility: "hidden", position: "absolute", inset: 0,
          background: col.bg, border: `1px solid ${col.border}`, borderRadius: 16,
        }} className="flex flex-col items-center justify-center p-5 text-center">
          <div className="text-xs font-bold mb-3 px-2 py-0.5 rounded-full" style={{ background: col.border, color: col.text }}>{col.label}</div>
          <p className="font-semibold text-base" style={{ color: "var(--text)" }}>{card.situation}</p>
          <p className="text-xs mt-3" style={{ color: "var(--text2)" }}>👆 klikni pre frázu</p>
        </div>
        {/* BACK */}
        <div style={{
          backfaceVisibility: "hidden", position: "absolute", inset: 0,
          background: "var(--surface2)", border: `1px solid ${col.border}`, borderRadius: 16,
          transform: "rotateY(180deg)",
        }} className="flex flex-col items-center justify-center p-5 text-center">
          <p className="font-bold text-lg mb-3" style={{ color: col.text }}>"{card.phrase}"</p>
          {card.example && <p className="text-xs italic" style={{ color: "var(--text2)" }}>{card.example}</p>}
        </div>
      </div>
    </div>
  );
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
type QuizMode = "idle" | "playing" | "finished";

function QuizSection() {
  const [mode, setMode] = useState<QuizMode>("idle");
  const [pool, setPool] = useState<QuizQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [topicFilter, setTopicFilter] = useState("Všetky témy");
  const [countChoice, setCountChoice] = useState(10);

  const topics = ["Všetky témy", ...Array.from(new Set(quizQuestions.map(q => q.topic)))];

  const shuffle = (arr: QuizQuestion[]) => [...arr].sort(() => Math.random() - 0.5);

  const startQuiz = useCallback(() => {
    let filtered = topicFilter === "Všetky témy"
      ? quizQuestions
      : quizQuestions.filter(q => q.topic === topicFilter);
    const picked = shuffle(filtered).slice(0, countChoice);
    setPool(picked);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setWrongCount(0);
    setMode("playing");
  }, [topicFilter, countChoice]);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === pool[current].correct) setScore(s => s + 1);
    else setWrongCount(w => w + 1);
  };

  const next = () => {
    if (current + 1 >= pool.length) { setMode("finished"); return; }
    setCurrent(c => c + 1);
    setSelected(null);
  };

  const pct = pool.length > 0 ? Math.round((score / pool.length) * 100) : 0;

  if (mode === "idle") return (
    <div className="max-w-md mx-auto text-center space-y-5">
      <p className="text-sm" style={{ color: "var(--text2)" }}>Zvol tému a počet otázok, potom spusti test.</p>
      <select value={topicFilter} onChange={e => setTopicFilter(e.target.value)}
        className="w-full rounded-xl px-4 py-2.5 text-sm"
        style={{ background: "var(--surface2)", color: "var(--text)", border: "1px solid var(--border)" }}>
        {topics.map(t => <option key={t}>{t}</option>)}
      </select>
      <div className="flex gap-2 justify-center flex-wrap">
        {[5, 10, 20, 30].map(n => (
          <button key={n} onClick={() => setCountChoice(n)}
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{ background: countChoice === n ? "var(--accent)" : "var(--surface2)", color: countChoice === n ? "#fff" : "var(--text2)", border: "1px solid var(--border)" }}>
            {n} otázok
          </button>
        ))}
      </div>
      <button onClick={startQuiz}
        className="w-full py-3 rounded-2xl font-bold text-white text-base"
        style={{ background: "var(--accent)" }}>
        Spustiť test 🚀
      </button>
    </div>
  );

  if (mode === "finished") return (
    <div className="max-w-md mx-auto text-center space-y-4">
      <div className="text-6xl mb-2">{pct >= 80 ? "🎉" : pct >= 50 ? "💪" : "📚"}</div>
      <h3 className="text-2xl font-bold" style={{ color: "var(--text)" }}>
        {score} / {pool.length} ({pct}%)
      </h3>
      <p style={{ color: "var(--text2)" }}>
        {pct >= 80 ? "Výborný výsledok! Ovládaš to!" : pct >= 50 ? "Dobrý základ, ešte trochu precvič." : "Zopakuj si látku a skús znova!"}
      </p>
      <div className="flex gap-3 justify-center">
        <button onClick={startQuiz} className="px-5 py-2.5 rounded-xl font-semibold text-white"
          style={{ background: "var(--accent)" }}>Skúsiť znova</button>
        <button onClick={() => setMode("idle")} className="px-5 py-2.5 rounded-xl font-semibold"
          style={{ background: "var(--surface2)", color: "var(--text2)", border: "1px solid var(--border)" }}>
          Zmeniť nastavenia
        </button>
      </div>
    </div>
  );

  const q = pool[current];
  return (
    <div className="max-w-xl mx-auto space-y-4">
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-2">
        <div className="flex-1 rounded-full h-2" style={{ background: "var(--surface2)" }}>
          <div className="h-2 rounded-full transition-all" style={{ width: `${((current) / pool.length) * 100}%`, background: "var(--accent)" }} />
        </div>
        <span className="text-xs shrink-0" style={{ color: "var(--text2)" }}>{current + 1} / {pool.length}</span>
        <span className="text-xs shrink-0 text-green-400">✓ {score}</span>
        <span className="text-xs shrink-0 text-red-400">✗ {wrongCount}</span>
      </div>

      {/* Topic tag */}
      <div className="text-xs px-2 py-0.5 rounded-full inline-block"
        style={{ background: "var(--accent)22", color: "var(--accent)" }}>{q.topic}</div>

      {/* Question */}
      <div className="rounded-2xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
        <p className="font-semibold text-base" style={{ color: "var(--text)" }}>{q.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {q.options.map((opt, i) => {
          let bg = "var(--surface2)";
          let border = "var(--border)";
          let color = "var(--text)";
          if (selected !== null) {
            if (i === q.correct) { bg = "#22c55e22"; border = "#22c55e66"; color = "#4ade80"; }
            else if (i === selected && i !== q.correct) { bg = "#ef444422"; border = "#ef444466"; color = "#f87171"; }
          }
          return (
            <button key={i} onClick={() => handleAnswer(i)} disabled={selected !== null}
              className="w-full text-left rounded-xl px-4 py-3 text-sm transition-all"
              style={{ background: bg, border: `1px solid ${border}`, color }}>
              <span className="font-semibold mr-2" style={{ color: "var(--accent)" }}>{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation + next */}
      {selected !== null && (
        <div className="rounded-xl p-4 text-sm space-y-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <p style={{ color: "var(--text2)" }}>💡 {q.explanation}</p>
          <button onClick={next} className="w-full py-2.5 rounded-xl font-bold text-white"
            style={{ background: "var(--accent)" }}>
            {current + 1 >= pool.length ? "Zobraziť výsledok →" : "Ďalšia otázka →"}
          </button>
        </div>
      )}
    </div>
  );
}

// ─── GRAMMAR ─────────────────────────────────────────────────────────────────
function GrammarSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="max-w-2xl mx-auto space-y-3">
      <p className="text-sm text-center mb-5" style={{ color: "var(--text2)" }}>
        Klikni na štruktúru pre detaily, príklady a tip.
      </p>
      {grammarRules.map((r, i) => (
        <div key={i} className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
          <button className="w-full text-left px-5 py-4 flex items-center justify-between"
            onClick={() => setOpen(o => o === i ? null : i)}>
            <div>
              <span className="font-bold" style={{ color: "var(--text)" }}>{r.title}</span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full"
                style={{ background: "var(--accent)22", color: "var(--accent)" }}>{r.tag}</span>
            </div>
            <span style={{ color: "var(--text2)" }}>{open === i ? "▲" : "▼"}</span>
          </button>
          {open === i && (
            <div className="px-5 pb-5 space-y-3" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="text-xs font-mono mt-3 px-3 py-2 rounded-lg"
                style={{ background: "var(--surface2)", color: "var(--accent2)" }}>
                {r.structure}
              </p>
              <div className="space-y-1.5">
                {r.examples.map((ex, j) => (
                  <div key={j} className="flex gap-2 text-sm">
                    <span style={{ color: "var(--accent)" }}>→</span>
                    <span style={{ color: "var(--text2)" }} className="italic">{ex}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-lg px-3 py-2.5 text-xs"
                style={{ background: "#ffd93d11", border: "1px solid #ffd93d33", color: "#ffd93d" }}>
                💡 {r.tip}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
type Tab = "flashcards" | "quiz" | "grammar";

export default function UceniePage() {
  const [tab, setTab] = useState<Tab>("flashcards");
  const [catFilter, setCatFilter] = useState<string>("all");
  const [shuffledPhrases, setShuffledPhrases] = useState<PhraseCard[]>([]);

  useEffect(() => {
    setShuffledPhrases([...phrases].sort(() => Math.random() - 0.5));
  }, []);

  const cats = ["all", "visual", "discussion", "roleplay", "connector"] as const;
  const catLabel: Record<string, string> = { all: "Všetky", visual: "Visual Input", discussion: "Discussion", roleplay: "Role-play", connector: "Connectors" };
  const filtered = catFilter === "all" ? shuffledPhrases : shuffledPhrases.filter(p => p.category === catFilter);

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "flashcards", label: "Flashkarty", icon: "🃏" },
    { id: "quiz", label: "Kvíz", icon: "🧠" },
    { id: "grammar", label: "Gramatika", icon: "📖" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm mb-6"
        style={{ color: "var(--text2)", textDecoration: "none" }}>← Späť na zadania</Link>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text)" }}>Interaktívne učenie</h1>
        <p style={{ color: "var(--text2)" }} className="text-sm">
          Precvič si frázy, slovnú zásobu a gramatiku potrebnú na ústnu maturitu
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className="px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all"
            style={{
              background: tab === t.id ? "var(--accent)" : "var(--surface)",
              color: tab === t.id ? "#fff" : "var(--text2)",
              border: `1px solid ${tab === t.id ? "var(--accent)" : "var(--border)"}`,
            }}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* ── FLASHCARDS ── */}
      {tab === "flashcards" && (
        <div>
          {/* Category filter */}
          <div className="flex gap-2 justify-center mb-6 flex-wrap">
            {cats.map(c => (
              <button key={c} onClick={() => setCatFilter(c)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={{
                  background: catFilter === c ? (C[c as keyof typeof C]?.text ?? "var(--accent)") : "var(--surface2)",
                  color: catFilter === c ? "#000" : "var(--text2)",
                  border: `1px solid ${C[c as keyof typeof C]?.border ?? "var(--border)"}`,
                }}>
                {catLabel[c]} {c !== "all" && `(${phrases.filter(p => p.category === c).length})`}
              </button>
            ))}
          </div>
          <p className="text-center text-xs mb-5" style={{ color: "var(--text2)" }}>
            {filtered.length} fráz · klikni na kartu pre otočenie
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(card => <Flashcard key={card.id} card={card} />)}
          </div>
        </div>
      )}

      {/* ── QUIZ ── */}
      {tab === "quiz" && (
        <div>
          <div className="rounded-2xl p-4 mb-6 text-center text-sm"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text2)" }}>
            120 otázok z 30 tém · overuje slovnú zásobu, fakty a dôležité pojmy
          </div>
          <QuizSection />
        </div>
      )}

      {/* ── GRAMMAR ── */}
      {tab === "grammar" && (
        <div>
          <div className="rounded-2xl p-4 mb-6 text-center text-sm"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text2)" }}>
            8 kľúčových gramatických štruktúr na úrovni B2 · klikni pre príklady
          </div>
          <GrammarSection />
        </div>
      )}
    </div>
  );
}
