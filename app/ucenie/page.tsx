"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { phrases } from "@/data/phrases";
import type { PhraseCard } from "@/data/phrases";
import { quizQuestions } from "@/data/quiz-questions";
import type { QuizQuestion } from "@/data/quiz-questions";
import { topicSummaries } from "@/data/topic-summaries";
import { assignments } from "@/data/assignments";
import { assignments2 } from "@/data/assignments2";

const allAssignments = [...assignments, ...assignments2];

// ─── COLOURS ──────────────────────────────────────────────────────────────────
const C = {
  visual:     { bg: "#4ecdc422", border: "#4ecdc466", text: "#4ecdc4" },
  discussion: { bg: "#6c63ff22", border: "#6c63ff66", text: "#6c63ff" },
  roleplay:   { bg: "#ff6b6b22", border: "#ff6b6b66", text: "#ff6b6b" },
  connector:  { bg: "#ffd93d22", border: "#ffd93d66", text: "#ffd93d" },
};
const catLabel: Record<string, string> = { visual: "Visual Input", discussion: "Discussion", roleplay: "Role-play", connector: "Connectors", all: "Všetky" };

// ─── PANIC PHRASES ────────────────────────────────────────────────────────────
const panicPhrases = [
  { label: "Začni visual", phrase: "Looking at this picture, I can see…" },
  { label: "Zaujímavá téma", phrase: "That's an interesting question. Let me think for a moment…" },
  { label: "Pridaj bod", phrase: "What is more, / Furthermore, / Not only that, but…" },
  { label: "Kontrast", phrase: "On the one hand… On the other hand, however…" },
  { label: "Tvoj názor", phrase: "In my opinion / From my perspective / I strongly believe that…" },
  { label: "Návrh kompromisu", phrase: "Perhaps we could agree that… / As a compromise, what if…?" },
  { label: "Zdvorilý nesúhlas", phrase: "I see your point, however… / I'm not entirely sure I agree…" },
  { label: "Záver odpovede", phrase: "All things considered, / To sum up, / On balance, I believe…" },
  { label: "Príklad", phrase: "For instance, … / A good example of this is…" },
  { label: "Keď nevieš slovo", phrase: "What I mean is… / It's similar to… / The thing I'm referring to is…" },
];

const grammarRules = [
  { title: "2nd Conditional", tag: "Unreal present", structure: "If + past simple, would + inf.", tip: "Pre hypotetické situácie. 'Were' pre všetky osoby!", examples: ["If I were you, I would accept it.", "If we recycled more, the environment would improve."] },
  { title: "3rd Conditional", tag: "Unreal past", structure: "If + past perfect, would have + p.p.", tip: "Čo sa mohlo stať, ale nestalo. Ľútosť.", examples: ["If I had studied harder, I would have passed.", "If they had applied, they would have got the job."] },
  { title: "Passive Voice", tag: "B2 essential", structure: "be (conjugated) + past participle", tip: "Keď chceš zdôrazniť DEJ, nie kto ho vykonáva.", examples: ["English is spoken all over the world.", "Thousands are affected by climate change."] },
  { title: "Reported Speech", tag: "Indirect speech", structure: "said/told + that + backshifted tense", tip: "Časy sa posúvajú dozadu. TELL vyžaduje objekt: told ME (nie 'said me')!", examples: ["'I am tired.' → He said he WAS tired.", "'I will come.' → She said she WOULD come."] },
  { title: "Modal Verbs", tag: "Obligation / possibility", structure: "modal + base verb (no 'to')", tip: "must/should (obligation/advice), might/could (possibility), can't (impossibility)", examples: ["You should exercise more. (advice)", "She might be late. (possibility)", "You must submit it. (obligation)"] },
  { title: "Relative Clauses", tag: "Defining vs Non-defining", structure: "who / which / that / where / whose", tip: "Non-defining (s čiarkami) = info sa môže vynechať. Defining (bez čiarok) = nevyhnutné.", examples: ["The woman WHO lives next door is a doctor.", "My sister, WHO lives in London, is a nurse."] },
  { title: "Gerund vs Infinitive", tag: "Common patterns", structure: "verb + -ing  OR  verb + to + inf.", tip: "enjoy/avoid/suggest + -ing | want/decide/refuse + to. Stop smoking ≠ stop to smoke!", examples: ["I enjoy swimming. (enjoy + -ing)", "She decided to leave. (decide + to inf.)"] },
  { title: "Comparison", tag: "Comparing ideas", structure: "as…as / -er than / the most / less than", tip: "Zosilňovače: much, far, a lot + comparative. 'By far' = zďaleka (superlatív).", examples: ["City life is far more stressful than village life.", "This is by far the most effective solution."] },
];

// ─── EXAM SIMULATOR ───────────────────────────────────────────────────────────
type ExamState = "idle" | "prep" | "speaking" | "review" | "taskdone";

function ExamSimulator({ doneIds, markDone }: { doneIds: Set<number>; markDone: (id: number) => void }) {
  const [assignmentId, setAssignmentId] = useState<number | null>(null);
  const [taskIdx, setTaskIdx] = useState(0);
  const [state, setState] = useState<ExamState>("idle");
  const [timeLeft, setTimeLeft] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const PREP_TIME = 30;
  const SPEAK_TIME = 3 * 60;

  const clearTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

  const drawRandom = useCallback(() => {
    const available = allAssignments.filter(a => !doneIds.has(a.id));
    const pool = available.length > 0 ? available : allAssignments;
    const a = pool[Math.floor(Math.random() * pool.length)];
    setAssignmentId(a.id);
    setTaskIdx(0);
    setShowAnswer(false);
    setState("prep");
    setTimeLeft(PREP_TIME);
    setPaused(false);
  }, [doneIds]);

  useEffect(() => {
    if (state === "idle" || paused) { clearTimer(); return; }
    if (timeLeft <= 0) {
      clearTimer();
      if (state === "prep") { setState("speaking"); setTimeLeft(SPEAK_TIME); }
      else if (state === "speaking") { setState("review"); }
      return;
    }
    timerRef.current = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return clearTimer;
  }, [state, paused, timeLeft]);

  const nextTask = () => {
    const a = allAssignments.find(x => x.id === assignmentId);
    if (!a) return;
    if (taskIdx + 1 >= a.tasks.length) {
      markDone(assignmentId!);
      setState("taskdone");
    } else {
      setTaskIdx(i => i + 1);
      setShowAnswer(false);
      setState("prep");
      setTimeLeft(PREP_TIME);
      setPaused(false);
    }
  };

  const assignment = allAssignments.find(a => a.id === assignmentId);
  const task = assignment?.tasks[taskIdx];
  const summary = topicSummaries.find(s => s.taskId === assignmentId);
  const taskSummary = taskIdx === 0 ? summary?.visual : taskIdx === 1 ? summary?.discussion : summary?.roleplay;

  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;
  const pct = state === "prep" ? (timeLeft / PREP_TIME) * 100 : state === "speaking" ? (timeLeft / SPEAK_TIME) * 100 : 100;
  const urgent = timeLeft <= (state === "prep" ? 10 : 30) && timeLeft > 0;

  const taskTypeColor = task ? (task.type === "visual" ? C.visual.text : task.type === "discussion" ? C.discussion.text : C.roleplay.text) : "var(--accent)";

  if (state === "idle") return (
    <div className="text-center space-y-6 max-w-md mx-auto">
      <div className="text-6xl mb-2">🎲</div>
      <p className="font-bold text-xl" style={{ color: "var(--text)" }}>Simulácia losovacieho lístka</p>
      <p className="text-sm" style={{ color: "var(--text2)" }}>
        Klikni a dostaneš náhodné zadanie. 30 sekúnd príprava, potom 3 minúty na hovorenie pri každej úlohe.
      </p>
      <div className="text-sm rounded-xl p-3" style={{ background: "var(--surface)", color: "var(--text2)" }}>
        Hotové zadania: <strong style={{ color: "var(--accent)" }}>{doneIds.size} / 30</strong>
        {doneIds.size > 0 && <button onClick={() => { /* reset handled by parent */ }} className="ml-3 text-xs underline" style={{ color: "var(--text2)" }} />}
      </div>
      <button onClick={drawRandom}
        className="w-full py-4 rounded-2xl font-bold text-white text-lg transition-transform hover:scale-105"
        style={{ background: "linear-gradient(135deg,var(--accent),#4ecdc4)" }}>
        🎲 Vytiahnuť lós
      </button>
    </div>
  );

  if (state === "taskdone") return (
    <div className="text-center space-y-5 max-w-md mx-auto">
      <div className="text-5xl">✅</div>
      <p className="font-bold text-xl" style={{ color: "var(--text)" }}>Zadanie {assignmentId} hotové!</p>
      <p className="text-sm" style={{ color: "var(--text2)" }}>
        Hotové zadania: <strong style={{ color: "var(--accent)" }}>{doneIds.size} / 30</strong>
      </p>
      <button onClick={drawRandom}
        className="w-full py-3 rounded-2xl font-bold text-white"
        style={{ background: "var(--accent)" }}>
        🎲 Ďalší lós
      </button>
      <button onClick={() => setState("idle")} className="w-full py-2.5 rounded-2xl text-sm"
        style={{ background: "var(--surface)", color: "var(--text2)", border: "1px solid var(--border)" }}>
        Späť na výber
      </button>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: "var(--accent)22", color: "var(--accent)" }}>
            Zadanie {assignmentId}
          </span>
          <span className="ml-2 text-xs" style={{ color: "var(--text2)" }}>Úloha {taskIdx + 1}/3</span>
        </div>
        <span className="text-xs font-semibold px-2 py-1 rounded-full"
          style={{ background: C[task?.type as keyof typeof C]?.bg ?? "", color: taskTypeColor }}>
          {task?.type === "visual" ? "🖼 Visual" : task?.type === "discussion" ? "💬 Discussion" : "🎭 Role-play"}
        </span>
      </div>

      {/* Task */}
      <div className="rounded-2xl p-5" style={{ background: "var(--surface)", border: `1px solid ${C[task?.type as keyof typeof C]?.border ?? "var(--border)"}` }}>
        <p className="font-bold text-base mb-3" style={{ color: taskTypeColor }}>{task?.topic}</p>
        <ul className="space-y-1.5">
          {task?.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--text2)" }}>
              <span style={{ color: taskTypeColor }}>•</span>{b}
            </li>
          ))}
        </ul>
      </div>

      {/* Timer */}
      {(state === "prep" || state === "speaking") && (
        <div className="rounded-2xl p-5 text-center" style={{ background: "var(--surface2)", border: "1px solid var(--border)" }}>
          <p className="text-xs font-bold uppercase mb-2" style={{ color: state === "prep" ? "#ffd93d" : "#4ecdc4" }}>
            {state === "prep" ? "⏳ PRIPRAV SA" : "🗣 HOVORÍŠ"}
          </p>
          <div className={`text-5xl font-mono font-bold mb-3 ${urgent ? "animate-pulse" : ""}`}
            style={{ color: urgent ? "#ff6b6b" : "var(--text)" }}>
            {state === "prep" ? `${timeLeft}s` : `${min}:${sec.toString().padStart(2, "0")}`}
          </div>
          {/* Progress bar */}
          <div className="w-full rounded-full h-2 mb-4" style={{ background: "var(--border)" }}>
            <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, background: state === "prep" ? "#ffd93d" : "#4ecdc4" }} />
          </div>
          <div className="flex gap-2 justify-center">
            <button onClick={() => setPaused(p => !p)}
              className="px-4 py-2 rounded-xl text-sm font-semibold"
              style={{ background: "var(--surface)", color: "var(--text2)", border: "1px solid var(--border)" }}>
              {paused ? "▶ Pokračovať" : "⏸ Pauza"}
            </button>
            {state === "speaking" && (
              <button onClick={() => setState("review")}
                className="px-4 py-2 rounded-xl text-sm font-semibold"
                style={{ background: "var(--accent)22", color: "var(--accent)", border: "1px solid var(--accent)44" }}>
                Skončil som →
              </button>
            )}
          </div>
        </div>
      )}

      {/* Review / Answer */}
      {state === "review" && (
        <div className="space-y-3">
          <button onClick={() => setShowAnswer(s => !s)}
            className="w-full py-3 rounded-2xl font-bold text-sm"
            style={{ background: showAnswer ? taskTypeColor : C[task?.type as keyof typeof C]?.bg ?? "", color: showAnswer ? "#fff" : taskTypeColor, border: `1px solid ${C[task?.type as keyof typeof C]?.border ?? ""}` }}>
            {showAnswer ? "▲ Skryť vzorové body" : "▼ Zobraziť vzorové body"}
          </button>

          {showAnswer && taskSummary && (
            <div className="rounded-2xl p-5 space-y-3" style={{ background: "var(--surface2)", border: `1px solid ${C[task?.type as keyof typeof C]?.border ?? "var(--border)"}` }}>
              {/* Vocab */}
              {"vocab" in taskSummary && (
                <div>
                  <p className="text-xs font-bold uppercase mb-2" style={{ color: taskTypeColor }}>📚 Kľúčová slovná zásoba</p>
                  <div className="flex flex-wrap gap-2">
                    {(taskSummary as { vocab: string[] }).vocab.map((w, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "var(--surface)", color: "var(--text2)", border: "1px solid var(--border)" }}>{w}</span>
                    ))}
                  </div>
                </div>
              )}
              {/* Points */}
              {"points" in taskSummary && (
                <div>
                  <p className="text-xs font-bold uppercase mb-2" style={{ color: taskTypeColor }}>✅ Čo určite povedať</p>
                  <ul className="space-y-1.5">
                    {(taskSummary as { points: string[] }).points.map((p, i) => (
                      <li key={i} className="text-sm flex gap-2" style={{ color: "var(--text2)" }}>
                        <span style={{ color: taskTypeColor }}>→</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Roleplay phrases */}
              {"usefulPhrases" in taskSummary && (
                <div>
                  <p className="text-xs font-bold uppercase mb-2" style={{ color: taskTypeColor }}>🗣 Užitočné vety</p>
                  <ul className="space-y-1.5">
                    {(taskSummary as { usefulPhrases: string[] }).usefulPhrases.map((p, i) => (
                      <li key={i} className="text-sm italic flex gap-2" style={{ color: "var(--text2)" }}>
                        <span style={{ color: taskTypeColor }}>"</span>{p}<span style={{ color: taskTypeColor }}>"</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <button onClick={nextTask}
            className="w-full py-3 rounded-2xl font-bold text-white"
            style={{ background: "var(--accent)" }}>
            {taskIdx + 1 >= (assignment?.tasks.length ?? 3) ? "✅ Dokončiť zadanie" : `Ďalšia úloha (${taskIdx + 2}/3) →`}
          </button>
        </div>
      )}
    </div>
  );
}

// ─── SPEED REVIEW ─────────────────────────────────────────────────────────────
function SpeedReview({ doneIds, markDone }: { doneIds: Set<number>; markDone: (id: number) => void }) {
  const [idx, setIdx] = useState(0);
  const [tab, setTab] = useState<"visual" | "discussion" | "roleplay">("visual");
  const summary = topicSummaries[idx];
  const taskData = tab === "visual" ? summary.visual : tab === "discussion" ? summary.discussion : summary.roleplay;
  const col = tab === "visual" ? C.visual : tab === "discussion" ? C.discussion : C.roleplay;

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 rounded-full h-2" style={{ background: "var(--surface2)" }}>
          <div className="h-2 rounded-full transition-all" style={{ width: `${((idx + 1) / 30) * 100}%`, background: col.text }} />
        </div>
        <span className="text-xs font-bold" style={{ color: col.text }}>{idx + 1} / 30</span>
        <span className="text-xs" style={{ color: "var(--text2)" }}>✓ {doneIds.size} hotových</span>
      </div>

      {/* Card */}
      <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${col.border}`, background: "var(--surface)" }}>
        <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: `1px solid ${col.border}` }}>
          <div>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: col.bg, color: col.text }}>
              Zadanie {summary.taskId}
            </span>
            <span className="ml-2 text-sm font-semibold" style={{ color: "var(--text)" }}>{summary.taskTitle}</span>
          </div>
          {doneIds.has(summary.taskId) && <span className="text-green-400 text-sm">✓ hotové</span>}
        </div>

        {/* Task type tabs */}
        <div className="flex border-b" style={{ borderColor: "var(--border)" }}>
          {(["visual", "discussion", "roleplay"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className="flex-1 py-2.5 text-xs font-semibold transition-all"
              style={{
                background: tab === t ? C[t].bg : "transparent",
                color: tab === t ? C[t].text : "var(--text2)",
                borderBottom: tab === t ? `2px solid ${C[t].text}` : "2px solid transparent",
              }}>
              {t === "visual" ? "🖼 Visual" : t === "discussion" ? "💬 Discussion" : "🎭 Role-play"}
            </button>
          ))}
        </div>

        <div className="p-5 space-y-4">
          <p className="font-bold" style={{ color: col.text }}>{taskData.topic}</p>

          {/* Vocab */}
          {"vocab" in taskData && (
            <div>
              <p className="text-xs font-semibold uppercase mb-2" style={{ color: "var(--text2)" }}>Kľúčová slovná zásoba</p>
              <div className="flex flex-wrap gap-2">
                {(taskData as { vocab: string[] }).vocab.map((w, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: col.bg, color: col.text, border: `1px solid ${col.border}` }}>{w}</span>
                ))}
              </div>
            </div>
          )}

          {/* Points */}
          {"points" in taskData && (
            <div>
              <p className="text-xs font-semibold uppercase mb-2" style={{ color: "var(--text2)" }}>Čo určite povedať</p>
              <ul className="space-y-2">
                {(taskData as { points: string[] }).points.map((p, i) => (
                  <li key={i} className="text-sm flex gap-2">
                    <span className="shrink-0 mt-0.5" style={{ color: col.text }}>→</span>
                    <span style={{ color: "var(--text2)" }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Role-play phrases */}
          {"usefulPhrases" in taskData && (
            <div>
              <p className="text-xs font-semibold uppercase mb-2" style={{ color: "var(--text2)" }}>
                Cieľ: {(taskData as { keyGoal: string }).keyGoal}
              </p>
              <ul className="space-y-2">
                {(taskData as { usefulPhrases: string[] }).usefulPhrases.map((p, i) => (
                  <li key={i} className="text-sm italic flex gap-2">
                    <span className="shrink-0" style={{ color: col.text }}>"</span>
                    <span style={{ color: "var(--text2)" }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-2">
        <button onClick={() => { if (idx > 0) setIdx(i => i - 1); }}
          disabled={idx === 0}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all"
          style={{ background: "var(--surface)", color: idx === 0 ? "var(--border)" : "var(--text2)", border: "1px solid var(--border)" }}>
          ← Predošlé
        </button>
        <button onClick={() => { markDone(summary.taskId); if (idx < 29) setIdx(i => i + 1); }}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm"
          style={{ background: "#22c55e22", color: "#4ade80", border: "1px solid #22c55e44" }}>
          ✓ Viem → ďalšie
        </button>
        <button onClick={() => { if (idx < 29) setIdx(i => i + 1); }}
          disabled={idx === 29}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm"
          style={{ background: "var(--surface)", color: idx === 29 ? "var(--border)" : "var(--text2)", border: "1px solid var(--border)" }}>
          Ďalšie →
        </button>
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
  const [wrong, setWrong] = useState(0);
  const [topicFilter, setTopicFilter] = useState("Všetky témy");
  const [count, setCount] = useState(10);

  const topics = ["Všetky témy", ...Array.from(new Set(quizQuestions.map(q => q.topic)))];
  const shuffle = (a: QuizQuestion[]) => [...a].sort(() => Math.random() - 0.5);

  const start = useCallback(() => {
    const f = topicFilter === "Všetky témy" ? quizQuestions : quizQuestions.filter(q => q.topic === topicFilter);
    setPool(shuffle(f).slice(0, count));
    setCurrent(0); setSelected(null); setScore(0); setWrong(0); setMode("playing");
  }, [topicFilter, count]);

  const answer = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === pool[current].correct) setScore(s => s + 1); else setWrong(w => w + 1);
  };

  const next = () => { if (current + 1 >= pool.length) { setMode("finished"); return; } setCurrent(c => c + 1); setSelected(null); };
  const pct = pool.length > 0 ? Math.round((score / pool.length) * 100) : 0;

  if (mode === "idle") return (
    <div className="max-w-sm mx-auto text-center space-y-4">
      <select value={topicFilter} onChange={e => setTopicFilter(e.target.value)}
        className="w-full rounded-xl px-4 py-2.5 text-sm"
        style={{ background: "var(--surface2)", color: "var(--text)", border: "1px solid var(--border)" }}>
        {topics.map(t => <option key={t}>{t}</option>)}
      </select>
      <div className="flex gap-2 justify-center">
        {[5, 10, 20, 30].map(n => (
          <button key={n} onClick={() => setCount(n)}
            className="px-4 py-2 rounded-xl text-sm font-bold"
            style={{ background: count === n ? "var(--accent)" : "var(--surface2)", color: count === n ? "#fff" : "var(--text2)", border: "1px solid var(--border)" }}>
            {n}
          </button>
        ))}
      </div>
      <button onClick={start} className="w-full py-3 rounded-2xl font-bold text-white" style={{ background: "var(--accent)" }}>
        Spustiť kvíz 🚀
      </button>
    </div>
  );

  if (mode === "finished") return (
    <div className="max-w-sm mx-auto text-center space-y-4">
      <div className="text-5xl">{pct >= 80 ? "🎉" : pct >= 50 ? "💪" : "📚"}</div>
      <h3 className="text-2xl font-bold" style={{ color: "var(--text)" }}>{score}/{pool.length} ({pct}%)</h3>
      <p style={{ color: "var(--text2)" }}>{pct >= 80 ? "Výborný výsledok!" : pct >= 50 ? "Dobrý základ, precvič ďalej." : "Zopakuj si a skús znova!"}</p>
      <button onClick={start} className="w-full py-3 rounded-2xl font-bold text-white" style={{ background: "var(--accent)" }}>Znova</button>
      <button onClick={() => setMode("idle")} className="w-full py-2.5 rounded-2xl text-sm" style={{ background: "var(--surface)", color: "var(--text2)", border: "1px solid var(--border)" }}>Zmeniť nastavenia</button>
    </div>
  );

  const q = pool[current];
  return (
    <div className="max-w-xl mx-auto space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 rounded-full h-2" style={{ background: "var(--surface2)" }}>
          <div className="h-2 rounded-full" style={{ width: `${(current / pool.length) * 100}%`, background: "var(--accent)" }} />
        </div>
        <span className="text-xs" style={{ color: "var(--text2)" }}>{current + 1}/{pool.length}</span>
        <span className="text-xs text-green-400">✓{score}</span>
        <span className="text-xs text-red-400">✗{wrong}</span>
      </div>
      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--accent)22", color: "var(--accent)" }}>{q.topic}</span>
      <div className="rounded-2xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
        <p className="font-semibold" style={{ color: "var(--text)" }}>{q.question}</p>
      </div>
      <div className="space-y-2">
        {q.options.map((opt, i) => {
          let bg = "var(--surface2)", border = "var(--border)", color = "var(--text)";
          if (selected !== null) {
            if (i === q.correct) { bg = "#22c55e22"; border = "#22c55e66"; color = "#4ade80"; }
            else if (i === selected) { bg = "#ef444422"; border = "#ef444466"; color = "#f87171"; }
          }
          return (
            <button key={i} onClick={() => answer(i)} disabled={selected !== null}
              className="w-full text-left rounded-xl px-4 py-3 text-sm"
              style={{ background: bg, border: `1px solid ${border}`, color }}>
              <span className="font-bold mr-2" style={{ color: "var(--accent)" }}>{String.fromCharCode(65 + i)}.</span>{opt}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="rounded-xl p-4 space-y-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--text2)" }}>💡 {q.explanation}</p>
          <button onClick={next} className="w-full py-2.5 rounded-xl font-bold text-white" style={{ background: "var(--accent)" }}>
            {current + 1 >= pool.length ? "Výsledok →" : "Ďalšia →"}
          </button>
        </div>
      )}
    </div>
  );
}

// ─── FLASHCARDS ───────────────────────────────────────────────────────────────
function Flashcard({ card }: { card: PhraseCard }) {
  const [flipped, setFlipped] = useState(false);
  const col = C[card.category];
  return (
    <div style={{ perspective: 900 }} className="h-44 cursor-pointer" onClick={() => setFlipped(f => !f)}>
      <div style={{ transition: "transform 0.45s", transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "none", position: "relative", height: "100%" }}>
        <div style={{ backfaceVisibility: "hidden", position: "absolute", inset: 0, background: col.bg, border: `1px solid ${col.border}`, borderRadius: 14 }}
          className="flex flex-col items-center justify-center p-4 text-center">
          <span className="text-xs font-bold mb-2 px-2 py-0.5 rounded-full" style={{ background: col.border, color: col.text }}>{catLabel[card.category]}</span>
          <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>{card.situation}</p>
          <p className="text-xs mt-2" style={{ color: "var(--text2)" }}>👆 otočiť</p>
        </div>
        <div style={{ backfaceVisibility: "hidden", position: "absolute", inset: 0, background: "var(--surface2)", border: `1px solid ${col.border}`, borderRadius: 14, transform: "rotateY(180deg)" }}
          className="flex flex-col items-center justify-center p-4 text-center">
          <p className="font-bold text-sm mb-2" style={{ color: col.text }}>"{card.phrase}"</p>
          {card.example && <p className="text-xs italic" style={{ color: "var(--text2)" }}>{card.example}</p>}
        </div>
      </div>
    </div>
  );
}

// ─── GRAMMAR ─────────────────────────────────────────────────────────────────
function GrammarSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="max-w-2xl mx-auto space-y-2">
      {grammarRules.map((r, i) => (
        <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
          <button className="w-full text-left px-5 py-4 flex items-center justify-between" onClick={() => setOpen(o => o === i ? null : i)}>
            <div className="flex items-center gap-3">
              <span className="font-bold" style={{ color: "var(--text)" }}>{r.title}</span>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--accent)22", color: "var(--accent)" }}>{r.tag}</span>
            </div>
            <span style={{ color: "var(--text2)" }}>{open === i ? "▲" : "▼"}</span>
          </button>
          {open === i && (
            <div className="px-5 pb-5 space-y-3" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="text-xs font-mono mt-3 px-3 py-2 rounded-lg" style={{ background: "var(--surface2)", color: "#4ecdc4" }}>{r.structure}</p>
              {r.examples.map((ex, j) => (
                <div key={j} className="flex gap-2 text-sm"><span style={{ color: "var(--accent)" }}>→</span><span className="italic" style={{ color: "var(--text2)" }}>{ex}</span></div>
              ))}
              <div className="rounded-lg px-3 py-2 text-xs" style={{ background: "#ffd93d11", border: "1px solid #ffd93d33", color: "#ffd93d" }}>💡 {r.tip}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── PANIC PANEL ─────────────────────────────────────────────────────────────
function PanicPanel() {
  const [copied, setCopied] = useState<number | null>(null);
  return (
    <div className="max-w-2xl mx-auto space-y-3">
      <div className="rounded-2xl p-4 text-center text-sm" style={{ background: "#ff6b6b11", border: "1px solid #ff6b6b33", color: "#ff6b6b" }}>
        🚨 10 fráz čo fungujú pri AKEJKOĽVEK úlohe
      </div>
      {panicPhrases.map((p, i) => (
        <div key={i} className="rounded-xl px-4 py-3 flex items-center justify-between gap-3"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <div>
            <span className="text-xs font-bold" style={{ color: "var(--accent)" }}>{p.label}</span>
            <p className="text-sm font-semibold mt-0.5" style={{ color: "var(--text)" }}>{p.phrase}</p>
          </div>
          <button onClick={() => { navigator.clipboard?.writeText(p.phrase); setCopied(i); setTimeout(() => setCopied(null), 1500); }}
            className="text-xs px-2 py-1 rounded-lg shrink-0"
            style={{ background: "var(--surface2)", color: copied === i ? "#4ade80" : "var(--text2)", border: "1px solid var(--border)" }}>
            {copied === i ? "✓" : "📋"}
          </button>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
type Tab = "exam" | "review" | "panic" | "quiz" | "grammar" | "flashcards";

export default function UceniePage() {
  const [tab, setTab] = useState<Tab>("exam");
  const [doneIds, setDoneIds] = useState<Set<number>>(new Set());
  const [catFilter, setCatFilter] = useState("all");

  useEffect(() => {
    try { const s = localStorage.getItem("done"); if (s) setDoneIds(new Set(JSON.parse(s))); } catch {}
  }, []);

  const markDone = useCallback((id: number) => {
    setDoneIds(prev => {
      const next = new Set(prev).add(id);
      try { localStorage.setItem("done", JSON.stringify([...next])); } catch {}
      return next;
    });
  }, []);

  const cats = ["all", "visual", "discussion", "roleplay", "connector"] as const;
  const filteredPhrases = catFilter === "all" ? phrases : phrases.filter(p => p.category === catFilter);

  const tabs: { id: Tab; label: string; icon: string; highlight?: boolean }[] = [
    { id: "exam",       label: "Exam Sim",   icon: "🎲", highlight: true },
    { id: "review",     label: "Speed Review", icon: "⚡", highlight: true },
    { id: "panic",      label: "Panic Phrases", icon: "🚨" },
    { id: "quiz",       label: "Kvíz",       icon: "🧠" },
    { id: "grammar",    label: "Gramatika",  icon: "📖" },
    { id: "flashcards", label: "Flashkarty", icon: "🃏" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <Link href="/" style={{ color: "var(--text2)", textDecoration: "none" }} className="inline-flex items-center gap-2 text-sm mb-5">← Späť na zadania</Link>

      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-1" style={{ color: "var(--text)" }}>Interaktívne učenie</h1>
        <p style={{ color: "var(--text2)" }} className="text-sm">Maturuješ dnes — používaj Exam Sim a Speed Review</p>
        <div className="mt-2 text-xs px-3 py-1.5 rounded-full inline-block"
          style={{ background: "var(--accent)22", color: "var(--accent)" }}>
          ✓ {doneIds.size}/30 zadaní precvičených
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 justify-center mb-6 flex-wrap">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className="px-4 py-2 rounded-2xl font-semibold text-sm transition-all"
            style={{
              background: tab === t.id ? (t.highlight ? "linear-gradient(135deg,var(--accent),#4ecdc4)" : "var(--accent)") : "var(--surface)",
              color: tab === t.id ? "#fff" : "var(--text2)",
              border: `1px solid ${tab === t.id ? "transparent" : "var(--border)"}`,
              boxShadow: t.highlight && tab !== t.id ? "0 0 0 1px var(--accent)44" : "none",
            }}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === "exam"       && <ExamSimulator doneIds={doneIds} markDone={markDone} />}
      {tab === "review"     && <SpeedReview doneIds={doneIds} markDone={markDone} />}
      {tab === "panic"      && <PanicPanel />}
      {tab === "quiz"       && <QuizSection />}
      {tab === "grammar"    && <GrammarSection />}
      {tab === "flashcards" && (
        <div>
          <div className="flex gap-2 justify-center mb-5 flex-wrap">
            {cats.map(c => (
              <button key={c} onClick={() => setCatFilter(c)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: catFilter === c ? (C[c as keyof typeof C]?.text ?? "var(--accent)") : "var(--surface2)", color: catFilter === c ? "#000" : "var(--text2)", border: `1px solid ${C[c as keyof typeof C]?.border ?? "var(--border)"}` }}>
                {catLabel[c]}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredPhrases.map(card => <Flashcard key={card.id} card={card} />)}
          </div>
        </div>
      )}
    </div>
  );
}
