const steps = [
  {
    phase: "Первые минуты",
    title: "Знакомство",
    text:
      "Я коротко расскажу о себе и о том, как обычно строю работу. Вы рассказываете о себе столько, сколько захочется — можно молчать или говорить в своём темпе.",
  },
  {
    phase: "Основная часть",
    title: "Что происходит",
    text:
      "Задаю вопросы, чтобы понять, с чем вы пришли: что сейчас беспокоит, что уже пробовали, что помогает, а что нет. Не обязательно рассказать всё за одну встречу.",
  },
  {
    phase: "Ближе к концу",
    title: "Моё видение",
    text:
      "Рассказываю, как я вижу вашу ситуацию и с чем можно работать дальше. Это не про то, чтобы повесить на вас диагноз, а про то, чтобы вместе понять, что происходит.",
  },
  {
    phase: "Последние минуты",
    title: "Что дальше",
    text:
      "Решаем, продолжаем ли мы вместе. Если нет — это нормально. Подойти друг другу важно, и это тоже часть работы.",
  },
];

export default function FirstSession() {
  return (
    <section
      id="first-session"
      className="relative w-full bg-bg scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px]">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
            Как проходит первая встреча
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-text-muted leading-[1.6]">
            Чтобы вы примерно представляли, куда идёте — и&nbsp;было чуть
            меньше тревоги. Сессия длится 50&nbsp;минут, порядок
            ниже — ориентировочный, не&nbsp;жёсткий график: всё подстраивается
            под ваш темп.
          </p>
        </div>

        <ol className="mt-14 md:mt-20 max-w-[860px] flex flex-col">
          {steps.map((s) => (
            <li
              key={s.phase}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-10 py-7 md:py-9 border-t border-bg-beige last:border-b"
            >
              <div className="flex md:block">
                <span className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.14em] text-accent font-medium">
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
