"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Как я работаю", href: "#methods" },
  { label: "Обо мне", href: "#about" },
  { label: "Вопросы", href: "#faq" },
  { label: "Стоимость", href: "#zapis" },
  { label: "Блог", href: "/articles" },
];

export default function Header() {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowCta(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

          {/* CTA — appears on scroll */}
          <a
            href="#zapis"
            data-ym-goal="click_zapis_button"
            aria-hidden={!showCta}
            tabIndex={showCta ? 0 : -1}
            className={`inline-flex items-center justify-center rounded-lg bg-accent px-4 md:px-5 py-2 md:py-2.5 text-[14px] md:text-[15px] font-medium text-bg transition-all duration-300 hover:bg-accent-dark ${
              showCta
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
          >
            Записаться
          </a>
        </div>
      </div>
    </header>
  );
}
