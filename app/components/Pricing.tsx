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
          <p className="text-[15px] md:text-[16px] leading-[1.65] text-text">
            Если мы&nbsp;ещё не&nbsp;знакомы, можно начать со&nbsp;встречи-знакомства:
            15&nbsp;минут, бесплатно. Вы&nbsp;зададите вопросы, и&nbsp;мы поймём,
            подойдём ли&nbsp;друг другу.
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

        {/* Note under price card */}
        <p className="mt-8 md:mt-10 mx-auto max-w-[520px] text-center text-[15px] md:text-[16px] leading-[1.6] text-text-muted">
          После бронирования я&nbsp;отвечу в&nbsp;течение суток — подтвержу
          встречу и&nbsp;пришлю ссылку для оплаты.
        </p>

        {/* Planerka widget — loaded lazily when the user approaches this section */}
        <div className="mt-12 md:mt-16">
          <PlanerkaEmbed />
        </div>
      </div>
    </section>
  );
}
