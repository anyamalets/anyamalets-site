import Image from "next/image";

export default function HeroZnakomstvo() {
  return (
    <section className="relative w-full bg-bg overflow-hidden">
      <div className="mx-auto max-w-[1200px] relative px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center py-16 md:py-24 lg:py-28">
          <div className="md:col-span-5 lg:col-span-5 order-2 md:order-1">
            <div className="relative mx-auto w-full max-w-[420px] md:max-w-none aspect-[2/3] overflow-hidden rounded-xl">
              <Image
                src="/photos/hero.jpg"
                alt="Анна Малюточкина, психолог по расстройствам пищевого поведения"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 480px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex flex-col">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-text-muted mb-5 md:mb-6">
              Анна Малюточкина
            </p>

            <h1 className="text-[30px] leading-[1.1] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-text tracking-tight">
              Психолог по расстройствам
              <br />
              <span className="text-accent">пищевого поведения</span>
            </h1>

            <p className="mt-6 md:mt-8 max-w-[560px] text-lg md:text-xl leading-[1.55] text-text">
              Помогаю восстановить спокойные отношения с&nbsp;едой
              и&nbsp;своим телом, без диет, контроля и&nbsp;силы воли.
            </p>

            <div className="hidden md:flex flex-col items-start gap-3 mt-8 md:mt-10">
              <p className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-accent font-medium">
                Бесплатная встреча
              </p>
              <a
                href="#zapis"
                data-ym-goal="click_znakomstvo_button"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-4 text-base md:text-lg font-medium text-bg transition-colors hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Записаться на вводную консультацию
              </a>
            </div>
          </div>

          <div className="md:hidden order-3 flex flex-col items-center gap-2.5">
            <p className="font-heading text-[11px] uppercase tracking-[0.18em] text-accent font-medium">
              Бесплатная встреча
            </p>
            <a
              href="#zapis"
              data-ym-goal="click_znakomstvo_button"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-accent px-6 py-3 text-[15px] font-medium text-bg transition-colors hover:bg-accent-dark"
            >
              Записаться на вводную консультацию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
