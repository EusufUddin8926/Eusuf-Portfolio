export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            05 / Contact
          </span>
          <div className="flex-1 max-w-xs h-px bg-border" />
        </div>

        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-light leading-tight mb-6">
            Let&apos;s work{" "}
            <span className="text-primary italic">together</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-12 max-w-xl">
            Whether you have an exciting Android project, need an experienced
            mobile engineer on your team, or just want to connect — my inbox
            is always open.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                icon: "📧",
                label: "Email",
                value: "eusuf.cse@gmail.com",
                href: "mailto:eusuf.cse@gmail.com",
              },
              {
                icon: "📱",
                label: "Phone",
                value: "+880 1785-015347",
                href: "tel:+8801785015347",
              },
              {
                icon: "💼",
                label: "LinkedIn",
                value: "md-eusuf-uddin",
                href: "https://linkedin.com/in/md-eusuf-uddin",
              },
              {
                icon: "💻",
                label: "GitHub",
                value: "EusufUddin8926",
                href: "https://github.com/EusufUddin8926",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 border border-border rounded-2xl p-5 bg-card/50 hover:border-primary/40 hover:bg-card transition-all duration-200"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-mono text-xs text-muted">{item.label}</p>
                  <p className="text-light text-sm group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-muted group-hover:text-primary ml-auto transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>

          <a
            href="mailto:eusuf.cse@gmail.com"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-display font-semibold text-lg px-10 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
          >
            Say Hello
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
