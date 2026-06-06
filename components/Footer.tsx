export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {year} Md Eusuf Uddin. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/EusufUddin8926" },
            { label: "LinkedIn", href: "https://linkedin.com/in/md-eusuf-uddin" },
            { label: "Stack Overflow", href: "https://stackoverflow.com/users/md-eusuf-uddin" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
