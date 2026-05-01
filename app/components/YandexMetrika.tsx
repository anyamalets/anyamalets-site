"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const COUNTER_ID = 98268873;
const STORAGE_KEY = "cookie-consent";
const EVENT_NAME = "cookie-consent-change";

export default function YandexMetrika() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    // Skip in dev — local traffic shouldn't pollute stats
    if (process.env.NODE_ENV !== "production") return;

    try {
      if (localStorage.getItem(STORAGE_KEY) === "accepted") {
        setAccepted(true);
      }
    } catch {
      // ignore
    }

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail === "accepted") setAccepted(true);
    };
    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  if (!accepted) return null;

  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${COUNTER_ID}, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: false
          });
        `}
      </Script>
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${COUNTER_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
