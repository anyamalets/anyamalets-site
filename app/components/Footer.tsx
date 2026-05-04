import CookieSettingsLink from "./CookieSettingsLink";

type IconName = "telegram" | "vk" | "email" | "b17";

const contacts: {
  label: string;
  icon: IconName;
  value: string;
  href: string;
  rel?: string;
}[] = [
  { label: "Telegram", icon: "telegram", value: "@anya_malets", href: "https://t.me/anya_malets" },
  {
    label: "Telegram-канал «Разрешаю себе жить»",
    icon: "telegram",
    value: "«Разрешаю себе жить»",
    href: "https://t.me/razreshayu_sebe_zhit",
  },
  { label: "VK", icon: "vk", value: "anya.malets", href: "https://vk.com/anya.malets" },
  { label: "Email", icon: "email", value: "psy@anyamalets.ru", href: "mailto:psy@anyamalets.ru" },
  {
    label: "Профиль на сайте психологов b17.ru",
    icon: "b17",
    value: "Профиль на b17.ru",
    href: "https://www.b17.ru/id1273334/?prt=1273334",
    rel: "nofollow noopener",
  },
];

function ContactIcon({ name }: { name: IconName }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "telegram":
      return (
        <svg {...common}>
          <path d="M21.5 4.2 2.8 11.5c-.8.3-.8 1.4 0 1.7l4.5 1.6 1.7 5.4c.2.6 1 .8 1.4.3l2.6-2.7 4.6 3.4c.6.4 1.4.1 1.5-.6l3-14.6c.1-.7-.6-1.2-1.3-.8Z" />
          <path d="m8 14 8-6-6 8" />
        </svg>
      );
    case "vk":
      return (
        <svg
          width={22}
          height={22}
          viewBox="2 6 20 11"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12.785 16.241s.288-.032.435-.193c.136-.148.132-.425.132-.425s-.02-1.304.576-1.496c.588-.19 1.341 1.26 2.14 1.818.605.422 1.064.33 1.064.33l2.137-.03s1.117-.069.588-.964c-.043-.073-.308-.661-1.588-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.84-.244-.84-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.212.262-.212.262s-.382 1.03-.89 1.907c-1.07 1.85-1.499 1.948-1.674 1.832-.406-.267-.305-1.075-.305-1.649 0-1.793.267-2.54-.521-2.733-.262-.065-.454-.107-1.123-.114-.858-.009-1.585.003-1.996.208-.274.136-.485.44-.356.457.159.022.519.099.71.363.246.341.237 1.106.237 1.106s.142 2.113-.33 2.376c-.325.18-.77-.187-1.725-1.865-.489-.859-.858-1.81-.858-1.81s-.07-.176-.198-.271c-.155-.114-.371-.15-.371-.15l-2.286.015s-.343.01-.47.161c-.112.134-.008.413-.008.413s1.79 4.258 3.817 6.403c1.858 1.966 3.968 1.837 3.968 1.837z" />
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 6.5 8 6c.3.2.7.2 1 0l8-6" />
        </svg>
      );
    case "b17":
      return (
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <rect
            x="2.5"
            y="2.5"
            width="19"
            height="19"
            rx="3"
            stroke="currentColor"
            strokeWidth={1.6}
          />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fontFamily="Roboto, system-ui, sans-serif"
            fill="currentColor"
          >
            b17
          </text>
        </svg>
      );
  }
}

const documents = [
  { label: "Договор-оферта", href: "/offer" },
  { label: "Условия отмены и возврата", href: "/refund" },
  { label: "Информированное согласие", href: "/consent" },
  { label: "Политика обработки персональных данных", href: "/privacy-policy" },
  { label: "Согласие на обработку персональных данных", href: "/agreement-pdn" },
  {
    label: "Согласие на обработку специальных категорий ПД",
    href: "/agreement-health-data",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-text text-bg">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col">
            <p className="font-heading text-[22px] md:text-[24px] font-medium leading-tight">
              Анна Малюточкина
            </p>
            <p className="mt-2 text-[15px] md:text-[16px] text-bg/70 leading-[1.5]">
              Психолог · расстройства пищевого поведения
            </p>
            <p className="mt-8 md:mt-10 max-w-[440px] text-[13px] text-bg/50 leading-[1.55]">
              Член АКПН (Ассоциация специалистов контекстуально-поведенческой
              науки), АРППС (Ассоциация специалистов, информированных
              о&nbsp;РПП), Rome Foundation GastroPsych, США.
            </p>
          </div>

          {/* Contacts */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col">
            <h3 className="text-[12px] uppercase tracking-[0.14em] text-bg/50 mb-4 md:mb-5">
              Связаться
            </h3>
            <ul className="flex flex-col gap-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.rel ?? (c.href.startsWith("http") ? "noopener noreferrer" : undefined)
                    }
                    className="inline-flex items-center gap-2.5 text-[15px] md:text-[16px] text-bg hover:text-accent transition-colors group"
                  >
                    <span className="text-bg/50 group-hover:text-accent transition-colors">
                      <ContactIcon name={c.icon} />
                    </span>
                    <span className="link-underline">{c.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col">
            <h3 className="text-[12px] uppercase tracking-[0.14em] text-bg/50 mb-4 md:mb-5">
              Документы
            </h3>
            <ul className="flex flex-col gap-2.5">
              {documents.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    className="link-underline text-[15px] md:text-[16px] text-bg hover:text-accent transition-colors"
                  >
                    {d.label}
                  </a>
                </li>
              ))}
              <li>
                <CookieSettingsLink />
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 md:mt-16 pt-8 pb-8 text-center text-[13px] text-bg/50 leading-[1.5]" style={{ borderTop: "1px solid rgba(110, 122, 129, 0.2)" }}>
          <p>Под термином «психотерапия» на этом сайте подразумевается психологическое консультирование.</p>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 md:items-center md:justify-between text-[13px] text-bg/50 leading-[1.5]">
          <p className="flex items-center gap-3">
            <span
              aria-label="Возрастное ограничение: восемнадцать плюс"
              className="inline-flex items-center justify-center rounded border border-bg/30 px-1.5 py-0.5 text-[11px] font-medium tracking-wide text-bg/70"
            >
              18+
            </span>
            <span>© {year} · Малюточкина Анна Владимировна · ИНН 730292199734</span>
          </p>
          <p>Сайт использует Яндекс.Метрику</p>
        </div>
      </div>
    </footer>
  );
}
