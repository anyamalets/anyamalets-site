const steps = [
  {
    phase: "Первые минуты",
    title: "Знакомство",
    text: "Коротко расскажу о себе и о том, как обычно строю работу. Вы рассказываете о себе столько, сколько захочется.",
  },
  {
    phase: "Основное время",
    title: "Ваши вопросы",
    text: "Спросите всё, что важно: про подход, опыт, формат, цены. Это место, где можно понять, подхожу ли я вам как специалист.",
  },
  {
    phase: "В завершение",
    title: "Решение",
    text: "Решаем, хочется ли вам записаться на первую полную сессию. Без обязательств. Если нет, это нормально.",
  },
];

export default function IntroMeeting() {
  return (
    <section
      id="intro-meeting"
      className="relative w-full bg-bg-beige scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px]">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
            Что будет на&nbsp;15-минутном знакомстве
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-text-muted leading-[1.6]">
            Короткий звонок, чтобы вы&nbsp;могли спросить всё, что важно,
            и&nbsp;понять, подходим ли&nbsp;мы друг другу. Бесплатно,
            без&nbsp;обязательств.
          </p>
        </div>

        <ol className="mt-14 md:mt-20 max-w-[860px] flex flex-col">
          {steps.map((s) => (
            <li
              key={s.phase}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-10 py-7 md:py-9 border-t border-bg-beige last:border-b"
            >
              <div className="flex md:block">
                <span className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-medium" style={{ color: "#6E7A81" }}>
                  {s.phase}
                </span>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[19px] md:text-[22px] font-medium text-text leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 md:mt-3 text-[16px] md:text-[17px] leading-[1.65] text-text">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
