export default function CTA() {
  return (
    <section id="start" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">Build like it's 1993 and 2033 at once.</h3>
          <p className="text-white/70 mt-3 max-w-[50ch]">
            Minimal UI. Max output. Jivvo turns your repo into a living plan and your errors into momentum.
          </p>
        </div>
        <form className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="bg-black border border-white/20 px-4 py-3 outline-none focus:border-white/60 placeholder-white/40"
          />
          <button
            type="submit"
            className="bg-white text-black px-5 py-3 uppercase tracking-widest text-xs font-semibold border border-white hover:bg-transparent hover:text-white transition"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}
