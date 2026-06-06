"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = ["Android Developer", "Kotlin Expert", "Mobile Engineer", "SDK Builder", "Flutter Developer"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/8 blur-[80px]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,87,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,87,42,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-0 items-center py-20">
        {/* Left content */}
        <div className="order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs text-muted tracking-wider">
              Available for opportunities
            </span>
          </div>

          <h1 className="font-display font-bold leading-[1.05] mb-6">
            <span className="block text-muted text-lg font-body font-normal mb-2 animate-fade-up">
              Hello, I&apos;m
            </span>
            <span className="block text-5xl lg:text-7xl text-light animate-fade-up [animation-delay:0.1s]">
              Md Eusuf
            </span>
            <span className="block text-5xl lg:text-7xl text-primary animate-fade-up [animation-delay:0.2s]">
              Uddin
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="h-10 flex items-center mb-8 animate-fade-up [animation-delay:0.3s]">
            <span className="font-mono text-xl lg:text-2xl text-light/70">
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-muted leading-relaxed text-base max-w-lg mb-10 animate-fade-up [animation-delay:0.4s]">
            Passionate Android developer with{" "}
            <span className="text-light font-medium">4+ years</span> of
            experience crafting high-performance mobile applications for
            thousands of users across fintech, retail, health, and logistics
            sectors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up [animation-delay:0.5s]">
            <a
              href="mailto:eusuf.cse@gmail.com"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-body font-medium px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Hire Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-border hover:border-primary/50 text-light hover:text-primary font-body font-medium px-7 py-4 rounded-full transition-all duration-200"
            >
              View Projects
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 animate-fade-up [animation-delay:0.6s]">
            {[
              {
                label: "GitHub",
                href: "https://github.com/EusufUddin8926",
                icon: (
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                ),
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/md-eusuf-uddin",
                icon: (
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm14 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                ),
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/md-eusuf-uddin",
                icon: (
                  <path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56zM6.77 14.32l8.770 1.83.37-1.76-8.76-1.83-.38 1.76zm1.16-4.21l8.12 3.78.73-1.67-8.12-3.78-.73 1.67zm2.16-4l6.89 5.48 1.1-1.4-6.89-5.48-1.1 1.4zm4.45-4.25l-1.4 1.03 5.38 7.34 1.4-1.03-5.38-7.34zM6.59 18.41v-1.8h8.98v1.8H6.59z" />
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 text-muted hover:text-primary transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right — profile image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          {/* Decorative ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-2xl scale-110" />
            <div className="relative w-72 h-72 lg:w-[400px] lg:h-[400px]">
              {/* Rotating dashed border */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-primary/30">
                <Image
                  src="/profile.jpg"
                  alt="Md Eusuf Uddin"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Badge overlays */}
              <div className="absolute -bottom-2 -left-4 bg-card border border-border rounded-2xl px-4 py-2.5 shadow-xl animate-float">
                <p className="font-mono text-xs text-muted">Experience</p>
                <p className="font-display font-bold text-xl text-primary">4+</p>
                <p className="font-body text-xs text-muted">Years</p>
              </div>
              <div className="absolute -top-2 -right-4 bg-card border border-border rounded-2xl px-4 py-2.5 shadow-xl animate-float [animation-delay:3s]">
                <p className="font-mono text-xs text-muted">Apps</p>
                <p className="font-display font-bold text-xl text-primary">10+</p>
                <p className="font-body text-xs text-muted">Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
