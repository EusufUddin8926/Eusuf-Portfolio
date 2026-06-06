type SkillGroup = { category: string; icon: string; skills: string[] };

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "⚡",
    skills: ["Kotlin", "Java", "Flutter / Dart"],
  },
  {
    category: "UI Frameworks",
    icon: "🎨",
    skills: ["Jetpack Compose", "Compose Multiplatform", "Navigation Compose", "XML Layouts"],
  },
  {
    category: "Architecture",
    icon: "🏗️",
    skills: ["MVVM", "MVP", "MVI", "Clean Architecture", "Dependency Injection (Koin, Hilt)"],
  },
  {
    category: "Async & Data",
    icon: "🔄",
    skills: ["Coroutines", "Flow / SharedFlow / StateFlow", "Room Database", "SQLite", "DataStore", "SharedPreferences"],
  },
  {
    category: "Networking & APIs",
    icon: "🌐",
    skills: ["Retrofit", "Ktor", "Volley", "REST APIs", "Socket.IO"],
  },
  {
    category: "Firebase & Cloud",
    icon: "🔥",
    skills: ["Realtime Database", "Firestore", "Push Notifications", "Crashlytics", "App Distribution"],
  },
  {
    category: "Maps & Location",
    icon: "📍",
    skills: ["Google Map API", "Google Maps SDK", "GPS Services"],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Bitbucket", "GitLab", "Google Play Console", "Memory Leak Detection"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            03 / Skills
          </span>
          <div className="flex-1 max-w-xs h-px bg-border" />
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-light leading-tight">
            Technical{" "}
            <span className="text-primary italic">expertise</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl">
            A comprehensive toolkit built through years of production development across diverse Android projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="group border border-border rounded-2xl p-5 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-display font-semibold text-light text-sm">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-muted group-hover:text-light/70 bg-darker px-2 py-1 rounded-lg border border-border transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Training banner */}
        <div className="mt-10 border border-primary/20 rounded-2xl p-6 bg-primary/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 text-2xl">
            🎓
          </div>
          <div>
            <p className="font-display font-semibold text-light mb-1">
              Dive In Android — Comprehensive Android Bootcamp
            </p>
            <p className="text-muted text-sm">
              4-month intensive Android development training organized by Daffodil International University Computer Programming Club (DIU CPC) · Fall 2020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
