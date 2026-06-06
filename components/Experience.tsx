type Job = {
  period: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  tech: string[];
  highlights: string[];
  current: boolean;
};

const experiences: Job[] = [
  {
    period: "March 2026 – Present",
    role: "Executive, Android Developer",
    company: "Navana Pharmaceuticals PLC",
    companyUrl: "https://navanapharma.com/",
    location: "Dhaka, Bangladesh",
    tech: ["Kotlin", "Jetpack Compose", "MVVM"],
    highlights: [
      "Developing and maintaining Android applications for pharmaceutical business operations.",
      "Building innovative mobile solutions tailored to pharmaceutical workflows.",
      "Collaborating with cross-functional teams including backend and UI/UX designers.",
      "Implementing clean architecture patterns and best practices.",
    ],
    current: true,
  },
  {
    period: "December 2025 – March 10, 2026",
    role: "Software Engineer (Android)",
    company: "UCB Fintech Company Limited (UPAY)",
    companyUrl: "#",
    location: "Dhaka, Bangladesh",
    tech: ["Kotlin", "Java", "GitLab"],
    highlights: [
      "Managed and maintained Upay Customer, Agent, and DSO applications.",
      "Handled Change Requests, updated existing business workflows, and integrated new functionalities.",
      "Collaborated with backend and UI design teams for seamless feature delivery.",
      "Fixed bugs and upgraded code structure according to evolving business logic.",
    ],
    current: false,
  },
  {
    period: "September 2022 – November 2025",
    role: "Software Engineer (Android)",
    company: "V2 Technologies Ltd",
    companyUrl: "#",
    location: "Dhaka, Bangladesh",
    tech: ["Kotlin", "Java", "MVVM", "MVP", "Bitbucket", "Firebase"],
    highlights: [
      "Designed and developed highly scaled production-grade Android systems serving thousands of users.",
      "Delivered impactful solutions across martech, retail, health, logistics, and HR sectors.",
      "Maintained chain of command, performed code reviews, and upgraded architecture patterns.",
      "Managed Google Play Console deployments and maintained simultaneous dev/maintenance cycles.",
      "Collaborated via Bitbucket with cross-functional backend and UI teams.",
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-darker/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            02 / Experience
          </span>
          <div className="flex-1 max-w-xs h-px bg-border" />
        </div>

        <div className="mb-10">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-light leading-tight">
            Where I&apos;ve{" "}
            <span className="text-primary italic">worked</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((job, i) => (
              <div key={i} className="relative md:pl-20">
                {/* Dot */}
                <div
                  className={`absolute left-0 lg:left-8 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 hidden md:block ${
                    job.current
                      ? "bg-primary border-primary shadow-lg shadow-primary/50"
                      : "bg-darker border-border"
                  }`}
                />

                {/* Card */}
                <div
                  className={`border rounded-2xl p-6 lg:p-8 transition-colors ${
                    job.current
                      ? "border-primary/30 bg-card"
                      : "border-border bg-card/50 hover:border-border/80"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        {job.current && (
                          <span className="inline-flex items-center gap-1.5 bg-primary/15 text-primary text-xs font-mono px-3 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-semibold text-xl lg:text-2xl text-light mb-1">
                        {job.role}
                      </h3>
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-body font-medium text-base transition-colors"
                      >
                        {job.company} ↗
                      </a>
                      <p className="text-muted text-sm mt-1">{job.location}</p>
                    </div>
                    <div className="shrink-0">
                      <span className="font-mono text-sm text-muted bg-darker px-3 py-1.5 rounded-lg border border-border">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                        <span className="text-primary mt-1.5 text-xs">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-primary/80 bg-primary/8 border border-primary/15 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
