const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "4+", label: "Years Experience" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "3", label: "Companies Worked" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent ml-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            01 / About
          </span>
          <div className="flex-1 max-w-xs h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-light leading-tight mb-6">
              Building mobile
              <br />
              experiences that{" "}
              <span className="text-primary italic">matter</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              I&apos;m a passionate Android developer based in{" "}
              <span className="text-light">Dhaka, Bangladesh</span>, with over
              4 years of experience crafting production-grade mobile
              applications. I specialize in Kotlin, Jetpack Compose, and modern
              Android architecture patterns.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              My journey spans diverse sectors — fintech, retail, martech,
              health, and logistics — where I&apos;ve contributed to apps
              serving thousands of daily active users. I thrive in collaborative
              environments and love solving complex engineering challenges.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              Currently a{" "}
              <span className="text-light font-medium">Software Engineer</span>{" "}
              at Navana Pharmaceuticals PLC, where I bring innovative mobile
              solutions to the pharmaceutical domain.
            </p>

            {/* Education */}
            <div className="border border-border rounded-2xl p-5 bg-card/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs text-primary mb-1">2017 – 2021</p>
                  <p className="font-display font-semibold text-light">
                    B.Sc. in Computer Science & Engineering
                  </p>
                  <p className="text-muted text-sm mt-1">
                    Daffodil International University, Bangladesh
                  </p>
                  <p className="text-muted text-sm">CGPA: 3.46 / 4.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors group"
                >
                  <p className="font-display font-bold text-4xl text-primary group-hover:scale-105 transition-transform inline-block">
                    {s.value}
                  </p>
                  <p className="text-muted text-sm mt-2 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Info items */}
            <div className="space-y-3">
              {[
                { icon: "📍", label: "Location", value: "Mirpur, Dhaka, Bangladesh" },
                { icon: "📧", label: "Email", value: "eusuf.cse@gmail.com" },
                { icon: "📱", label: "Phone", value: "+880 1785-015347" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 border border-border rounded-xl px-4 py-3 bg-card/30"
                >
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="font-mono text-xs text-muted">{item.label}</p>
                    <p className="text-light text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
