export default function LofiSections() {
  return (
    <div id="sections" className="bg-black text-white">
      <Section title="Your Roadmap, Calm and Clear." tag="AI Roadmaps, but Cozy">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="relative border-2 border-white p-6" style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px),repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)",
          }}>
            <Flowchart />
            <PaperTexture />
          </div>
          <ul className="space-y-3 text-sm text-white/80 leading-relaxed">
            <li>• AI-generated milestones</li>
            <li>• Editable steps</li>
            <li>• Lo‑fi timeline style</li>
            <li>• Refresh with new commits</li>
            <li>• Built for devs who value clarity</li>
          </ul>
        </div>
      </Section>

      <Section title="Turn Mistakes Into Notes." tag="Error Logging (Lo‑Fi Debugging)">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <NotebookLog />
          <div className="space-y-3 text-sm text-white/80 leading-relaxed">
            <p>Capture errors step‑by‑step</p>
            <p>Write how you solved them</p>
            <p>AI suggests fixes</p>
            <p>Share publicly to help other devs</p>
            <p className="mt-4 italic text-white/70">“Debugging is learning.”</p>
          </div>
        </div>
      </Section>

      <Section title="Build Together, Gently." tag="Collaboration, Lo‑Fi Edition">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Pinboard />
          <ul className="space-y-3 text-sm text-white/80 leading-relaxed">
            <li>• Co‑edit roadmaps</li>
            <li>• Assign tasks</li>
            <li>• Track commits</li>
            <li>• Work in sync with your team</li>
          </ul>
        </div>
      </Section>

      <Section title="A Feed Without Pressure." tag="Calm Progress, Not Noise">
        <FeedCards />
        <div className="mt-6 text-sm text-white/70">Updates show only: commits • milestones • logs • breakthroughs</div>
      </Section>

      <Section title="Get Noticed for What Matters." tag="Recruiters See Real Work">
        <RecruiterView />
        <div className="mt-6 text-sm text-white/70">Recruiters view: your real progress • debugging habits • consistency over hype</div>
      </Section>
    </div>
  );
}

function Section({ title, tag, children }) {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-white/60">{tag}</span>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function PaperTexture() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-screen opacity-40"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "3px 3px",
        animation: "grainMove 8s linear infinite",
      }}
    >
      <style>{`
        @keyframes grainMove { from { transform: translate3d(0,0,0)} to { transform: translate3d(-20px,-30px,0)} }
      `}</style>
    </div>
  );
}

function Flowchart() {
  const node = (text, style = "") => (
    <div className={`bg-black border-2 border-white px-4 py-3 text-sm shadow-[4px_4px_0_0_#ffffff] ${style}`}>
      {text}
    </div>
  );
  return (
    <div className="relative">
      <div className="animate-sway-slow inline-block">{node("Idea", "")}</div>
      <Dotted />
      <div className="mt-6 ml-16 animate-sway-slower inline-block">{node("Plan", "")}</div>
      <Dotted vertical className="ml-28" />
      <div className="mt-6 ml-32 inline-block animate-sway-slow">{node("Build", "")}</div>
      <Dotted className="ml-16" />
      <div className="mt-6 ml-4 inline-block animate-sway-slower">{node("Review", "")}</div>
      <style>{`
        .animate-sway-slow{ animation: sway 5s ease-in-out infinite alternate }
        .animate-sway-slower{ animation: sway 7s ease-in-out infinite alternate }
        @keyframes sway{ from{ transform: translateY(0)} to{ transform: translateY(4px)} }
      `}</style>
    </div>
  );
}

function Dotted({ vertical = false, className = "" }) {
  const common = "opacity-70";
  const style = vertical
    ? { backgroundImage: "repeating-linear-gradient(180deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 2px, transparent 2px, transparent 8px)", width: 2, height: 48, margin: '8px 0 8px 24px' }
    : { backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 2px, transparent 2px, transparent 8px)", height: 2, width: 96, margin: '8px 0' };
  return <div className={`${common} ${className}`} style={style} />;
}

function NotebookLog() {
  const rows = [
    { time: "10:02", text: "TypeError in /api/tasks: cannot read 'map'" },
    { time: "10:06", text: "Noted: null edge case in parser" },
    { time: "10:18", text: "Fix: guard + unit test" },
  ];
  return (
    <div className="border-2 border-white p-4 relative" style={{
      backgroundImage: "linear-gradient(white 1px, transparent 1px)",
      backgroundSize: "100% 32px",
      backgroundPositionY: "24px",
    }}>
      <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-white/60" />
      {rows.map((r, i) => (
        <div key={i} className="flex items-start gap-4 py-4">
          <div className="min-w-[48px] text-xs opacity-70">{r.time}</div>
          <div className="flex-1">
            <div className="inline-block underline decoration-dotted underline-offset-4">{r.text}</div>
            <div className="mt-1 h-4 w-24 bg-white/10 animate-pop" />
          </div>
        </div>
      ))}
      <style>{`
        @keyframes pop { 0%{ transform: scale(0.96); opacity:.6 } 100%{ transform: scale(1); opacity:1 } }
        .animate-pop { animation: pop 700ms ease forwards }
      `}</style>
    </div>
  );
}

function Pinboard() {
  const note = (title, y) => (
    <div className="relative inline-block bg-black border-2 border-white px-4 py-3 mr-4 mb-4 shadow-[6px_6px_0_0_#ffffff]" style={{ transform: `rotate(${y}deg)` }}>
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 bg-white" />
      <div className="text-sm font-medium">{title}</div>
      <div className="text-xs opacity-70">assignee · due</div>
    </div>
  );
  return (
    <div className="border-2 border-white p-6 overflow-x-auto whitespace-nowrap">
      {note("Auth flow", -1)}
      {note("API spec", 1)}
      {note("Unit tests", -2)}
      {note("Docs", 0.5)}
      {note("Release", -1.5)}
    </div>
  );
}

function FeedCards() {
  const items = [
    { label: "commit", text: "refactor: split roadmap generator" },
    { label: "milestone", text: "v0.2 Roadmap editor ready" },
    { label: "log", text: "fixed pagination off-by-one" },
    { label: "breakthrough", text: "auto‑cluster errors by stack" },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((i, idx) => (
        <div key={idx} className="border-2 border-white p-4 bg-black animate-fade">
          <div className="text-[11px] uppercase tracking-[0.3em] opacity-70">{i.label}</div>
          <div className="mt-2 text-sm">{i.text}</div>
        </div>
      ))}
      <style>{`
        @keyframes fadeIn { from{ opacity:0; transform: translateY(4px) } to { opacity:1; transform: translateY(0) } }
        .animate-fade { animation: fadeIn 900ms ease both }
      `}</style>
    </div>
  );
}

function RecruiterView() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="border-2 border-white p-4">
        <div className="h-24 border-2 border-white bg-black/40" style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)",
        }} />
        <div className="mt-3 text-sm">Profile blocks</div>
      </div>
      <div className="border-2 border-white p-4">
        <div className="h-24 border-2 border-white bg-black/40" style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 10px)",
        }} />
        <div className="mt-3 text-sm">Lo‑fi heatmap</div>
      </div>
      <div className="border-2 border-white p-4">
        <div className="h-24 border-2 border-white bg-black/40" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.06) 2px, transparent 2px), radial-gradient(circle at 60% 60%, rgba(255,255,255,0.06) 3px, transparent 3px)",
          backgroundSize: "18px 18px, 22px 22px",
        }} />
        <div className="mt-3 text-sm">Monochrome portfolio</div>
      </div>
    </div>
  );
}
