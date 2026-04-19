"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";
const EVENT_NAME = "cookie-consent-change";

export type ConsentValue = "accepted" | "declined";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== "accepted" && stored !== "declined") {
        setIsVisible(true);
      }
    } catch {
      // localStorage may be blocked (privacy mode) — fall back to showing the banner
      setIsVisible(true);
    }
  }, []);

  const save = (value: ConsentValue) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: value }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Согласие на использование cookies"
      className="fixed inset-x-4 bottom-4 md:left-auto md:right-6 md:bottom-6 md:max-w-[420px] z-40 rounded-xl bg-bg border border-bg-beige shadow-xl p-5 md:p-6 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <p className="text-[15px] leading-[1.55] text-text">
          Сайт использует cookies, чтобы понимать, как им пользуются,
          и&nbsp;делать его удобнее.
        </p>
        <p className="text-[13px] leading-[1.5] text-text-muted">
          Подробнее —{" "}
          <a
            href="/offer#pdn"
            className="text-accent hover:text-accent-dark underline underline-offset-2"
          >
            политика обработки данных
          </a>
          .
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => save("accepted")}
          className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-[14px] font-medium text-bg transition-colors hover:bg-accent-dark"
        >
          Принять
        </button>
        <button
          type="button"
          onClick={() => save("declined")}
          className="inline-flex items-center justify-center rounded-lg border border-bg-beige bg-bg px-5 py-2.5 text-[14px] font-medium text-text transition-colors hover:border-text-muted"
        >
          Только необходимые
        </button>
      </div>
    </div>
  );
}
