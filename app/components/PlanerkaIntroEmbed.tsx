"use client";

import { useEffect, useRef } from "react";

export default function PlanerkaIntroEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://planerka.app/meet/assets/external/embed.js"]',
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://planerka.app/meet/assets/external/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const setTitle = () => {
      const iframe = el.querySelector("iframe");
      if (iframe && !iframe.title) {
        iframe.title = "Запись на бесплатную встречу-знакомство — Планёрка";
      }
    };
    setTitle();
    const observer = new MutationObserver(setTitle);
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="app-planerka-embed rounded-xl overflow-hidden bg-bg"
      data-planerka-embed="default"
      data-planerka-url="https://planerka.app/meet"
      data-planerka-user="anyamalets"
      data-planerka-event="vstrecha-znakomstvo"
      data-planerka-bg="transparent"
      data-planerka-border="#d29b71"
      data-planerka-hide-branding="1"
      style={{ width: "100%", minHeight: "600px" }}
    />
  );
}
