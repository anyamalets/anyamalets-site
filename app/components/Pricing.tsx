import Script from "next/script";

export default function Pricing() {
  return (
    <section
      id="zapis"
      className="relative w-full bg-bg-soft scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
            Стоимость и&nbsp;запись
          </h2>
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

        {/* Steps before widget */}
        <ol className="mt-12 md:mt-16 mx-auto max-w-[560px] flex flex-col gap-5 md:gap-6">
          {[
            {
              n: "1",
              text: (
                <>Выберите удобное время в&nbsp;календаре ниже</>
              ),
            },
            {
              n: "2",
              text: (
                <>
                  Я&nbsp;отвечу в&nbsp;Telegram в&nbsp;течение суток —
                  подтвержу встречу и&nbsp;пришлю ссылку для оплаты
                </>
              ),
            },
            {
              n: "3",
              text: (
                <>
                  Накануне пришлю ссылку на&nbsp;встречу в&nbsp;Яндекс.Телемост
                </>
              ),
            },
          ].map((step) => (
            <li key={step.n} className="flex items-baseline gap-4">
              <span
                aria-hidden="true"
                className="flex-none font-heading text-accent text-[16px] md:text-[17px] font-medium tabular-nums"
              >
                {step.n}.
              </span>
              <p className="text-[16px] md:text-[17px] leading-[1.6] text-text">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        {/* Planerka widget */}
        <div className="mt-12 md:mt-16">
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
