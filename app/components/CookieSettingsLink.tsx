"use client";

const STORAGE_KEY = "cookie-consent";
const REOPEN_EVENT = "cookie-consent-reopen";

export default function CookieSettingsLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event(REOPEN_EVENT));
  };

  return (
    <a
      href="#cookie-settings"
      onClick={handleClick}
      className="link-underline text-[15px] md:text-[16px] text-bg hover:text-accent transition-colors"
    >
      Настройки cookies
    </a>
  );
}
