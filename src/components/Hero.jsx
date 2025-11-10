import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[620px] bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-6xl h-full px-6 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-black/60 border border-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.3em]">Lo‑fi developer platform</div>
          <h1 className="text-4xl md:text-6xl leading-[1.05] font-semibold">
            Build. Learn. Grow. One Quiet Step at a Time<span className="animate-caret">|</span>
          </h1>
          <p className="text-white/80 max-w-[60ch] leading-relaxed">
            Jivvo helps developers create calm, structured roadmaps from their projects. Connect GitHub or start from scratch and build at your own pace.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#start" className="bg-white text-black px-5 py-3 uppercase tracking-widest text-xs font-semibold border border-white hover:bg-transparent hover:text-white transition">Connect GitHub</a>
            <a href="#sections" className="px-5 py-3 uppercase tracking-widest text-xs border border-white/40 hover:border-white hover:bg-white hover:text-black transition">Try Jivvo</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 10px)' }} />

      <style>{`
        @keyframes caretBlink { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
        .animate-caret { display:inline-block; margin-left:4px; animation: caretBlink 1.2s steps(1) infinite; }
      `}</style>
    </section>
  );
}
