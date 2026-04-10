import Script from "next/script";

export default function Pricing() {
  return (
    <section
      id="zapis"
      className="relative w-full bg-bg-soft scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px]">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
            Стоимость и&nbsp;запись
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-text-muted leading-[1.6]">
            Выберите удобное время ниже — я&nbsp;получу заявку
            и&nbsp;свяжусь с&nbsp;вами, чтобы подтвердить встречу.
          </p>
        </div>

        {/* Price card */}
        <div className="mt-12 md:mt-16 max-w-[560px] rounded-2xl bg-bg p-8 md:p-10 flex flex-col gap-6">
          <div className="flex items-baseline gap-3">
            <span className="font-heading text-[56px] md:text-[72px] lg:text-[80px] font-semibold text-accent leading-none tabular-nums">
              4&nbsp;000
            </span>
            <span className="font-heading text-[28px] md:text-[32px] font-medium text-accent leading-none">
              ₽
            </span>
          </div>

          <div className="flex flex-col gap-2 text-[15px] md:text-[16px] text-text leading-[1.5]">
            <p>
              <span className="font-medium">50 минут</span> · онлайн-сессия
            </p>
            <p className="text-text-muted">
              Обычно встречаемся раз в&nbsp;неделю
            </p>
          </div>
        </div>

        {/* Planerka widget */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-[22px] md:text-[26px] font-medium text-text mb-6 md:mb-8">
            Выбрать время
          </h3>
          <div
            className="app-planerka-embed rounded-xl overflow-hidden bg-bg"
            data-planerka-embed="default"
            data-planerka-url="https://planerka.app/meet"
            data-planerka-user="anyamalets"
            data-planerka-event="50min-session"
            data-planerka-bg="transparent"
            data-planerka-border="#C4654A"
            data-planerka-hide-branding="1"
            data-planerka-shadow="none"
            style={{ width: "100%", minHeight: "600px" }}
          />
          <Script
            src="https://planerka.app/meet/assets/external/embed.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </section>
  );
}
