import Image from "next/image";

type HeroProps = {
  ctaLabel?: string;
  ctaEyebrow?: string;
  ctaGoal?: string;
  introLink?: boolean;
};

export default function Hero({
  ctaLabel = "Записаться на встречу",
  ctaEyebrow,
  ctaGoal = "click_zapis_button",
  introLink = false,
}: HeroProps) {
  return (
    <section className="relative w-full bg-bg overflow-hidden">
      <div className="mx-auto max-w-[1200px] relative px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center py-16 md:py-24 lg:py-28">
          {/* Photo — second on mobile, first on desktop */}
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

          {/* Text — first on mobile, second on desktop */}
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

            {/* Desktop CTA — hidden on mobile */}
            <div className="hidden md:flex flex-col items-start gap-3 mt-8 md:mt-10 w-full max-w-[420px]">
              {ctaEyebrow && (
                <p className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-accent font-medium">
                  {ctaEyebrow}
                </p>
              )}
              <a
                href="#zapis"
                data-ym-goal={ctaGoal}
                className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-10 py-4 text-base md:text-lg font-medium text-bg transition-colors hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {ctaLabel}
              </a>
              {introLink && (
                <a
                  href="/znakomstvo#zapis"
                  data-ym-goal="click_znakomstvo_from_home_hero"
                  className="inline-flex w-full items-center justify-center text-center rounded-lg border border-accent bg-transparent px-6 py-3.5 text-[15px] md:text-base font-medium text-accent leading-snug transition-colors hover:bg-accent hover:text-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Обращаетесь впервые? Вводная встреча 15&nbsp;мин, бесплатно&nbsp;→
                </a>
              )}
            </div>
          </div>

          {/* Mobile CTA — hidden on desktop, after photo */}
          <div className="md:hidden order-3 flex flex-col items-center gap-2.5 w-full max-w-[420px] mx-auto">
            {ctaEyebrow && (
              <p className="font-heading text-[11px] uppercase tracking-[0.18em] text-accent font-medium">
                {ctaEyebrow}
              </p>
            )}
            <a
              href="#zapis"
              data-ym-goal={ctaGoal}
              className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-[15px] font-medium text-bg transition-colors hover:bg-accent-dark"
            >
              {ctaLabel}
            </a>
            {introLink && (
              <a
                href="/znakomstvo#zapis"
                data-ym-goal="click_znakomstvo_from_home_hero"
                className="inline-flex w-full items-center justify-center text-center rounded-lg border border-accent bg-transparent px-5 py-3 text-[14px] font-medium text-accent leading-tight transition-colors hover:bg-accent hover:text-bg"
              >
                Обращаетесь впервые? Вводная встреча 15&nbsp;мин, бесплатно&nbsp;→
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
