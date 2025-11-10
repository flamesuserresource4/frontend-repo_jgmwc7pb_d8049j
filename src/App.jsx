import Header from "./components/Header";
import Hero from "./components/Hero";
import LofiSections from "./components/LofiSections";
import FinalCTA from "./components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['IBM_Plex_Sans'] selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <LofiSections />
      <FinalCTA />
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/60">© {new Date().getFullYear()} Jivvo, Inc. All rights reserved.</footer>
    </div>
  );
}
