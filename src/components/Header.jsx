import { Github, ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-widest uppercase text-sm">
          Jivvo
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="hover:opacity-80 transition">Product</a>
          <a href="#showcase" className="hover:opacity-80 transition">Showcase</a>
          <a href="#pricing" className="hover:opacity-80 transition">Pricing</a>
          <a href="#docs" className="hover:opacity-80 transition">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="#start"
            className="group inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-xs uppercase tracking-widest font-semibold hover:bg-transparent hover:text-white border border-white transition"
          >
            Start Free
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
