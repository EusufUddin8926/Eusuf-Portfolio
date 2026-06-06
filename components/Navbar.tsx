"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sec);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-darker/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-800 text-xl tracking-tight text-light hover:text-primary transition-colors"
        >
          <span className="text-primary">E</span>usuf
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide transition-all duration-200 relative group ${
                active === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted hover:text-light"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                  active === link.href.replace("#", "")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:eusuf.cse@gmail.com"
          className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-body font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
        >
          Hire Me
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-light transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-light transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-light transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-darker/98 backdrop-blur-lg border-t border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-base ${
                active === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:eusuf.cse@gmail.com"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-medium px-5 py-3 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
