import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-bg">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center py-16 md:py-24 lg:py-28">
          {/* Photo — second on mobile, first on desktop */}
          <div className="md:col-span-5 lg:col-span-5 order-2 md:order-1">
            <div className="relative mx-auto w-full max-w-[420px] md:max-w-none aspect-[2/3] overflow-hidden rounded-xl">
              <Image
                src="/photos/hero.jpg"
                alt="Анна Малюточкина, психолог"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 480px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text — first on mobile, second on desktop */}
          <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex flex-col">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-text-muted mb-5 md:mb-6">
              Психолог · расстройства пищевого поведения
            </p>

            <h1 className="text-[32px] leading-[1.1] sm:text-[44px] md:text-[52px] lg:text-[60px] font-semibold text-text tracking-tight">
              Устали от цикла
              <br />
              <span className="text-accent">диета — срыв — вина?</span>
            </h1>

            <p className="mt-6 md:mt-8 max-w-[560px] text-lg md:text-xl leading-[1.55] text-text">
              Меня зовут{" "}
              <span className="whitespace-nowrap">Анна Малюточкина</span>,
              я&nbsp;психолог. Помогаю восстановить спокойные отношения
              с&nbsp;едой и&nbsp;своим телом — без диет, контроля
              и&nbsp;силы воли.
            </p>

            {/* Desktop CTA — hidden on mobile */}
            <div className="hidden md:block mt-8 md:mt-10">
              <a
                href="#zapis"
                data-ym-goal="click_zapis_button"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-4 text-base md:text-lg font-medium text-bg transition-colors hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Записаться на встречу
              </a>
            </div>
          </div>

          {/* Mobile CTA — hidden on desktop, after photo */}
          <div className="md:hidden order-3 flex justify-center">
            <a
              href="#zapis"
              data-ym-goal="click_zapis_button"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-4 text-base font-medium text-bg transition-colors hover:bg-accent-dark"
            >
              Записаться на встречу
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
