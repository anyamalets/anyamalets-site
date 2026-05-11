"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function StickyMobileCTA() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isZapisVisible, setIsZapisVisible] = useState(false);
  const pathname = usePathname();
  const isZnakomstvo = pathname === "/znakomstvo";
  const ctaHref = isZnakomstvo ? "#zapis" : "/znakomstvo";

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide the floating CTA once the user scrolls onto the booking section
  // (avoids covering the widget on small screens).
  useEffect(() => {
    const zapis = document.getElementById("zapis");
    if (!zapis) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsZapisVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" },
    );
    observer.observe(zapis);
    return () => observer.disconnect();
  }, [pathname]);

  const isVisible = isScrolled && !isZapisVisible;

  return (
    <div
      aria-hidden={!isVisible}
      className={`lg:hidden fixed bottom-4 left-4 right-4 z-30 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={ctaHref}
        data-ym-goal="click_znakomstvo_button"
        tabIndex={isVisible ? 0 : -1}
        className="flex items-center justify-center w-full rounded-xl bg-accent px-6 py-4 text-[16px] font-medium text-bg shadow-lg shadow-accent/25 transition-colors hover:bg-accent-dark"
      >
        Записаться на вводную консультацию
      </a>
    </div>
  );
}
