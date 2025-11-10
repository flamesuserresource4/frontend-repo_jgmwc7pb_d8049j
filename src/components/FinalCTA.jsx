export default function FinalCTA() {
  return (
    <section id="start" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/60">Lo‑fi, Soft Ending</div>
          <h3 className="text-3xl font-semibold mt-2">Create at Your Own Pace.</h3>
          <p className="text-white/70 mt-3 max-w-[55ch]">
            A calm, hand‑drawn rhythm for shipping. When you’re ready: connect GitHub or start from scratch.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="bg-white text-black px-5 py-3 uppercase tracking-widest text-xs font-semibold border border-white hover:bg-transparent hover:text-white transition">Start Building</a>
            <a href="#" className="px-5 py-3 uppercase tracking-widest text-xs border border-white/40 hover:border-white hover:bg-white hover:text-black transition">Connect GitHub</a>
          </div>
        </div>
        <div className="relative border-2 border-white h-48 md:h-56" style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}>
          <div className="absolute inset-0 animate-landscape" />
          <style>{`
            @keyframes landscape { 0% { background-position: 0 0 } 100% { background-position: -40px -20px } }
            .animate-landscape { background-image: repeating-linear-gradient(0deg, rgba(255,255,255,.04) 0, rgba(255,255,255,.04) 2px, transparent 2px, transparent 14px); animation: landscape 12s linear infinite; opacity:.5 }
          `}</style>
        </div>
      </div>
    </section>
  );
}
