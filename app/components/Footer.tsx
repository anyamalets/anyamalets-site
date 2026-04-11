const contacts = [
  { label: "Telegram", value: "@anya_malets", href: "https://t.me/anya_malets" },
  {
    label: "Канал",
    value: "«Разрешаю себе жить»",
    href: "https://t.me/razreshayu_sebe_zhit",
  },
  { label: "VK", value: "anya.malets", href: "https://vk.com/anya.malets" },
  { label: "Email", value: "psy@anyamalets.ru", href: "mailto:psy@anyamalets.ru" },
];

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
            <ul className="flex flex-col gap-2.5">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="inline-flex items-baseline gap-2 text-[15px] md:text-[16px] text-bg hover:text-accent transition-colors"
                  >
                    <span className="text-bg/50 text-[13px]">{c.label}</span>
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
