type Project = {
  title: string;
  company: string;
  description: string;
  tech: string[];
  link?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "StarTech AI SDK",
    company: "V2 Technologies",
    description:
      "Developed a private SDK for a client featuring AI-based tools including Ryze AI, Grammar Checking, CV Generator, Response Generator, Rewrite GPT, Summarizer, and Avatarize.",
    tech: ["Kotlin", "Jetpack Compose", "Flow", "MVVM", "Coroutine", "Background Services"],
    link: "#",
    featured: true,
  },
  {
    title: "ECRM App",
    company: "V2 Technologies",
    description:
      "Collaborated on the Android team for an enterprise CRM app for field forces including Supervisors and Brand Promoters. Built Attendance with image processing, PTR Allocation, Route Plan, audio analysis, noise percentage detection, iris detection, and AR module.",
    tech: ["Java", "MVP", "Retrofit", "SQLite", "GPS Services", "AR Module", "Socket", "Chat Module"],
    featured: true,
  },
  {
    title: "Retailer B2B App",
    company: "V2 Technologies",
    description:
      "Key role in developing a B2B e-commerce app with Sales module (multiple payment methods), Delivery, Location-based Outlet Creation, Market Visits, Replacement module, Attendance module, and print functionality.",
    tech: ["Kotlin", "MVVM", "Coroutine", "SQLite", "Firebase Crashlytics", "Socket", "Print"],
    featured: true,
  },
  {
    title: "Amar Hisab",
    company: "Final Year Project",
    description:
      "A personal financial manager Android app enabling users to manage debtors/creditors, track daily income and expenses, monitor savings, and calculate income tax — with a clean, user-friendly interface.",
    tech: ["Android", "Java", "SQLite", "Material Design"],
    link: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-darker/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            04 / Projects
          </span>
          <div className="flex-1 max-w-xs h-px bg-border" />
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-light leading-tight">
            Things I&apos;ve{" "}
            <span className="text-primary italic">built</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl">
            Production applications serving real users across fintech, retail, enterprise, and personal finance domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                project.featured
                  ? "border-border bg-card hover:border-primary/30"
                  : "border-border/50 bg-card/30 hover:border-border"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-primary/70 bg-primary/8 px-2 py-0.5 rounded">
                      {project.company}
                    </span>
                    {project.featured && (
                      <span className="font-mono text-xs text-muted/60">★ Featured</span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-xl lg:text-2xl text-light group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 text-muted hover:text-primary transition-all shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>

              <p className="text-muted text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-muted/80 px-2.5 py-1 rounded-lg border border-border/60 bg-darker/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/EusufUddin8926"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border hover:border-primary/50 text-muted hover:text-primary px-6 py-3 rounded-full font-body text-sm transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
