import { Rocket, GitBranch, Bug, Presentation } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "AI Roadmaps",
    desc: "Generate step-precise plans with pixel-grid milestones and clear deliverables.",
  },
  {
    icon: GitBranch,
    title: "GitHub Import",
    desc: "Ingest repos to map architecture, dependencies, and commit intent.",
  },
  {
    icon: Bug,
    title: "Error Logging",
    desc: "Capture, group, and diff stack traces with terminal-clean formatting.",
  },
  {
    icon: Presentation,
    title: "Talent Showcase",
    desc: "Curate work like a gallery—evidence-based, filterable, and real.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group border border-white/10 p-6 hover:border-white transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center border border-white/20">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
