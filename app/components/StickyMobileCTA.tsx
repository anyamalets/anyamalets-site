"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPricingVisible, setIsPricingVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 800);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const pricing = document.getElementById("zapis");
    if (!pricing) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsPricingVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" },
    );
    observer.observe(pricing);
    return () => observer.disconnect();
  }, []);

  const isVisible = isScrolled && !isPricingVisible;

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
        href="#zapis"
        data-ym-goal="click_zapis_button"
        tabIndex={isVisible ? 0 : -1}
        className="flex items-center justify-center w-full rounded-xl bg-accent px-6 py-4 text-[16px] font-medium text-bg shadow-lg shadow-accent/25 transition-colors hover:bg-accent-dark"
      >
        Записаться на встречу
      </a>
    </div>
  );
}
