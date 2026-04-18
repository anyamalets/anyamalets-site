"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Как я работаю", href: "/#methods" },
  { label: "Обо мне", href: "/#about" },
  { label: "Вопросы", href: "/#faq" },
  { label: "Стоимость", href: "/#zapis" },
  { label: "Блог", href: "/articles" },
];

export default function Header() {
  const [showCta, setShowCta] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowCta(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-bg/85 backdrop-blur-md border-b border-bg-beige/60">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          {/* Logo / Name */}
          <a
            href="/"
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

          <div className="flex items-center gap-2">
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

            {/* Mobile burger */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center p-2 -mr-2 text-text hover:text-accent transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-nav"
        className={`lg:hidden absolute top-full left-0 right-0 bg-bg border-b border-bg-beige/60 shadow-sm transition-all duration-200 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="mx-auto max-w-[1200px] px-6 py-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-[16px] text-text hover:text-accent transition-colors border-b border-bg-beige/60 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
