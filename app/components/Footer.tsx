type IconName = "telegram" | "vk" | "email";

const contacts: {
  label: string;
  icon: IconName;
  value: string;
  href: string;
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
        <svg {...common} strokeWidth={1.8}>
          <path d="M2 5 L6 19 L10 5" />
          <path d="M14 5 L14 19 M14 12 L22 5 M14 12 L22 19" />
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 6.5 8 6c.3.2.7.2 1 0l8-6" />
        </svg>
      );
  }
}

const documents = [
  { label: "Договор-оферта", href: "/offer" },
  { label: "Информированное согласие", href: "/consent" },
  { label: "Обработка персональных данных", href: "/offer#pdn" },
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
                      c.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    aria-label={c.label}
                    className="inline-flex items-center gap-2.5 text-[15px] md:text-[16px] text-bg hover:text-accent transition-colors group"
                  >
                    <span className="text-bg/50 group-hover:text-accent transition-colors">
                      <ContactIcon name={c.icon} />
                    </span>
                    <span>{c.value}</span>
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
                    className="text-[15px] md:text-[16px] text-bg hover:text-accent transition-colors"
                  >
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-14 md:mt-16 pt-8 border-t border-bg/10 flex flex-col md:flex-row gap-3 md:gap-6 md:items-center md:justify-between text-[13px] text-bg/50 leading-[1.5]">
          <p>© {year} · Малюточкина Анна Владимировна · ИНН 730292199734</p>
          <p>Сайт использует Яндекс.Метрику</p>
        </div>
      </div>
    </footer>
  );
}
