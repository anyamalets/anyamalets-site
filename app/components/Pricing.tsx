import PlanerkaEmbed from "./PlanerkaEmbed";

export default function Pricing() {
  return (
    <section
      id="zapis"
      className="relative w-full bg-bg-beige scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
            Стоимость и&nbsp;запись
          </h2>
        </div>

        {/* Intro nudge for first-time visitors */}
        <div className="mt-10 md:mt-12 mx-auto max-w-[640px] rounded-xl border border-accent/30 bg-bg/60 p-6 md:p-7 flex flex-col gap-4 text-center items-center">
          <p className="text-[15px] md:text-[16px] leading-[1.65] text-text text-balance">
            Если мы&nbsp;еще не&nbsp;знакомы, можно начать с&nbsp;вводной встречи:
            15&nbsp;мин, бесплатно.
          </p>
          <a
            href="/znakomstvo#zapis"
            data-ym-goal="click_znakomstvo_from_home_pricing"
            className="inline-flex items-center justify-center rounded-lg border border-accent px-5 py-2.5 text-[15px] font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            Записаться на&nbsp;знакомство →
          </a>
        </div>

        {/* Price card */}
        <div className="mt-12 md:mt-16 mx-auto max-w-[480px] rounded-2xl bg-bg p-8 md:p-10 flex flex-col gap-5 text-center items-center">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-[40px] md:text-[48px] font-semibold text-accent leading-none tabular-nums">
              4&nbsp;000
            </span>
            <span className="font-heading text-[22px] md:text-[24px] font-medium text-accent leading-none">
              ₽
            </span>
          </div>

          <p className="text-[15px] md:text-[16px] text-text leading-[1.5]">
            <span className="font-medium">50 минут</span> · онлайн-сессия
          </p>
        </div>

        {/* Trust checklist */}
        <ul className="mt-10 md:mt-12 mx-auto max-w-[560px] flex flex-col gap-3 md:gap-4 text-[15px] md:text-[16px] leading-[1.55] text-text">
          {[
            "Отвечу вам в течение суток. Оплата после подтверждения, после оплаты вы получите чек.",
            "Перенос или отмена за 24 часа до начала.",
            "Можно прекратить встречи в любой момент, это нормально.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="shrink-0 mt-0.5 h-5 w-5 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Planerka widget — loaded lazily when the user approaches this section */}
        <div className="mt-12 md:mt-16">
          <PlanerkaEmbed />
        </div>
      </div>
    </section>
  );
}
