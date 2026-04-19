"use client";

import { useEffect, useRef, useState } from "react";

export default function PlanerkaEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Only load the widget script once the user is close to the pricing section.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Inject the external script when we decide to load.
  useEffect(() => {
    if (!shouldLoad) return;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://planerka.app/meet/assets/external/embed.js"]',
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://planerka.app/meet/assets/external/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [shouldLoad]);

  // The widget renders an <iframe> inside the container. Watch for it and add a title for a11y.
  useEffect(() => {
    if (!shouldLoad) return;
    const el = containerRef.current;
    if (!el) return;
    const setTitle = () => {
      const iframe = el.querySelector("iframe");
      if (iframe && !iframe.title) {
        iframe.title = "Запись на консультацию — Планёрка";
      }
    };
    setTitle();
    const observer = new MutationObserver(setTitle);
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className="app-planerka-embed rounded-xl overflow-hidden bg-bg"
      data-planerka-embed="default"
      data-planerka-url="https://planerka.app/meet"
      data-planerka-user="anyamalets"
      data-planerka-event="50min-session"
      data-planerka-bg="transparent"
      data-planerka-border="#A04E38"
      data-planerka-hide-branding="1"
      data-planerka-shadow="none"
      style={{ width: "100%", minHeight: "600px" }}
    />
  );
}
