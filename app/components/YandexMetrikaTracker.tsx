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
    };

    document.addEventListener("click", handleClick, { capture: true });

    // Goal: interaction with Planerka widget (cross-origin iframe — clicks
    // don't bubble, so listen for the widget's own postMessage signals and
    // fall back to detecting iframe focus on click). Path determines which
    // funnel the interaction belongs to (znakomstvo = free intro, otherwise = paid).
    let planerkaTriggered = false;
    const triggerPlanerka = () => {
      if (planerkaTriggered) return;
      planerkaTriggered = true;
      const isZnakomstvo =
        typeof window !== "undefined" &&
        window.location.pathname.startsWith("/znakomstvo");
      reachGoal(
        isZnakomstvo ? "znakomstvo_widget_interaction" : "planerka_widget_interaction",
      );
    };

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://planerka.app") return;
      let data = event.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }
      if (data && data.type === "planerka:enable_scroll") {
        triggerPlanerka();
      }
    };
    window.addEventListener("message", handleMessage);

    const handleBlur = () => {
      const active = document.activeElement;
      if (
        active instanceof HTMLIFrameElement &&
        active.closest(".app-planerka-embed")
      ) {
        triggerPlanerka();
      }
    };
    window.addEventListener("blur", handleBlur);

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
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("blur", handleBlur);
      observer?.disconnect();
    };
  }, []);

  return null;
}
