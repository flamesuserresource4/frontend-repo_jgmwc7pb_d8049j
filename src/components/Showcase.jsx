export default function Showcase() {
  const items = [
    { label: "Next.js Monorepo", metric: "12 services", detail: "Turbo + PNPM" },
    { label: "Error Heatmap", metric: "-37%", detail: "Prod regressions" },
    { label: "LLM Roadmap", metric: "7 sprints", detail: "Spec complete" },
    { label: "PR Velocity", metric: "+28%", detail: "Last 30 days" },
    { label: "CI Stability", metric: "99.8%", detail: "Green builds" },
    { label: "Coverage", metric: "92%", detail: "Statements" },
  ];

  return (
    <section id="showcase" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((card) => (
            <div key={card.label} className="relative border border-white/10 p-6 group overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '10px 10px'}} />
              <p className="text-xs uppercase tracking-widest text-white/60">{card.label}</p>
              <h4 className="text-3xl font-semibold leading-none mt-3">{card.metric}</h4>
              <p className="text-white/60 mt-2 text-sm">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
