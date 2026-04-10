const navLinks = [
  { label: "Обо мне", href: "#about" },
  { label: "Как я работаю", href: "#methods" },
  { label: "Первая встреча", href: "#first-session" },
  { label: "Стоимость", href: "#zapis" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-bg/85 backdrop-blur-md border-b border-bg-beige/60">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Name */}
          <a
            href="#top"
            className="font-heading text-[16px] md:text-[18px] font-medium text-text hover:text-accent transition-colors"
          >
            Анна Малюточкина
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-text hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#zapis"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-4 md:px-5 py-2 md:py-2.5 text-[14px] md:text-[15px] font-medium text-bg transition-colors hover:bg-accent-dark"
          >
            Записаться
          </a>
        </div>
      </div>
    </header>
  );
}
