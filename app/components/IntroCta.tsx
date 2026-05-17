type IntroCtaProps = {
  goalSuffix: string;
};

export default function IntroCta({ goalSuffix }: IntroCtaProps) {
  return (
    <section className="relative w-full bg-bg-beige">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 pt-0 pb-16 md:pb-20">
        <div className="max-w-[860px] flex flex-col items-start gap-5 md:gap-6">
          <p className="text-[17px] md:text-[19px] leading-[1.5] text-text max-w-[640px]">
            Первый шаг может быть маленьким&nbsp;— вводная встреча, 15&nbsp;мин,&nbsp;бесплатно.
          </p>
          <a
            href="/znakomstvo#zapis"
            data-ym-goal={`click_znakomstvo_from_home_${goalSuffix}`}
            className="inline-flex items-center justify-center rounded-lg border border-accent px-6 py-3 text-[15px] md:text-[16px] font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            Записаться на&nbsp;вводную встречу&nbsp;→
          </a>
        </div>
      </div>
    </section>
  );
}
