"use client";

import { useEffect } from "react";

const COUNTER_ID = 98268873;

declare global {
  interface Window {
    ym?: (counterId: number, action: string, target: string) => void;
  }
}

function reachGoal(goal: string) {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    window.ym(COUNTER_ID, "reachGoal", goal);
  }
}

export default function YandexMetrikaTracker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    // Goal: click on "Записаться" button (Hero, Header)
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const trackedElement = target.closest<HTMLElement>("[data-ym-goal]");
      if (trackedElement) {
        const goal = trackedElement.dataset.ymGoal;
        if (goal) reachGoal(goal);
      }

      // Goal: interaction with Planerka widget
      const planerkaElement = target.closest<HTMLElement>(".app-planerka-embed");
      if (planerkaElement) {
        reachGoal("planerka_widget_interaction");
      }
    };

    document.addEventListener("click", handleClick, { capture: true });

    // Goal: scrolled to pricing block
    const pricingSection = document.getElementById("zapis");
    let observer: IntersectionObserver | null = null;
    let triggered = false;

    if (pricingSection && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !triggered) {
              triggered = true;
              reachGoal("scroll_to_pricing");
              observer?.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(pricingSection);
    }

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      observer?.disconnect();
    };
  }, []);

  return null;
}
