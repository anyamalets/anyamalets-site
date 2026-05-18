type IntroCtaProps = {
  text?: string;
  ctaLabel: string;
  ctaHref: string;
  goal: string;
  variant?: "outline" | "solid";
};

export default function IntroCta({
  text,
  ctaLabel,
  ctaHref,
  goal,
  variant = "outline",
}: IntroCtaProps) {
  const buttonClasses =
    variant === "solid"
      ? "bg-accent text-bg hover:bg-accent-dark"
      : "border border-accent text-accent hover:bg-accent hover:text-bg";

  return (
    <section className="relative w-full bg-bg-beige">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 pt-0 pb-16 md:pb-20">
        <div className="max-w-[860px] flex flex-col items-start gap-5 md:gap-6">
          {text && (
            <p className="text-[17px] md:text-[19px] leading-[1.5] text-text max-w-[640px]">
              {text}
            </p>
          )}
          <a
            href={ctaHref}
            data-ym-goal={goal}
            className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-[15px] md:text-[16px] font-medium transition-colors ${buttonClasses}`}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
