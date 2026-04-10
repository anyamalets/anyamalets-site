const methods = [
  {
    tag: "КПТ",
    full: "когнитивно-поведенческая терапия",
    title: "Работа с повторяющимися кругами",
    text:
      "Часто одна и та же цепочка — мысль, чувство, еда, вина — повторяется по кругу. Мы разбираем эти круги вместе и находим места, где можно вмешаться: чтобы поведение перестало быть на автопилоте.",
  },
  {
    tag: "ACT",
    full: "терапия принятия и ответственности",
    title: "Мысли о теле — это только мысли",
    text:
      "Тревожные мысли о еде и внешности будут возвращаться — это нормально, от них не нужно избавляться. Мы учимся относиться к ним иначе: замечать, но не верить им как правде о себе. И возвращать внимание туда, где для вас настоящая жизнь.",
  },
  {
    tag: "DBT",
    full: "диалектико-поведенческая терапия",
    title: "Что делать, когда накрывает",
    text:
      "Когда эмоции становятся слишком сильными, кажется, что выхода нет — и вы делаете что-то, о чём потом жалеете. Мы осваиваем навыки, которые помогают замечать этот момент и выбирать: что сейчас мне по-настоящему нужно.",
  },
];

export default function Methods() {
  return (
    <section
      id="methods"
      className="relative w-full bg-bg scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
          Как я работаю
        </h2>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {methods.map((m) => (
            <article key={m.tag} className="flex flex-col">
              <div className="flex items-center gap-4 mb-6 md:mb-7">
                <span className="inline-flex items-center rounded-md bg-bg-soft px-2.5 py-1 font-heading text-[13px] md:text-[14px] font-medium tracking-wide text-accent">
                  {m.tag}
                </span>
                <span className="text-[12px] md:text-[13px] text-text-muted leading-tight">
                  {m.full}
                </span>
              </div>

              <h3 className="text-[22px] md:text-[24px] font-medium text-text leading-tight">
                {m.title}
              </h3>

              <p className="mt-5 md:mt-6 text-[16px] md:text-[17px] leading-[1.65] text-text">
                {m.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
