import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full h-[72vh] min-h-[560px] bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl h-full px-6 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Developer Platform</p>
          <h1 className="text-4xl md:text-6xl leading-[1.05] font-semibold">
            AI roadmaps. Real talent. Zero guesswork.
          </h1>
          <p className="text-white/80 max-w-[48ch]">
            Jivvo generates crisp project plans, imports GitHub repos, logs errors, and turns code into a showcase worth hiring.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#start" className="bg-white text-black px-5 py-3 uppercase tracking-widest text-xs font-semibold border border-white hover:bg-transparent hover:text-white transition">Get Started</a>
            <a href="#features" className="px-5 py-3 uppercase tracking-widest text-xs border border-white/20 hover:border-white hover:bg-white hover:text-black transition">See Features</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black/80" />
    </section>
  );
}
