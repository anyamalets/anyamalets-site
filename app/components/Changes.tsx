const items = [
  {
    title: "Вечера перестанут превращаться в срывы",
    text:
      "Между тем, что вы чувствуете, и тем, что вы едите, появится пауза. В этой паузе можно заметить — и выбрать.",
  },
  {
    title: "В голове станет тише",
    text:
      "Еда и тело перестают занимать 80% мыслей. Появляется место для всего остального — работы, отношений, простых радостей.",
  },
  {
    title: "Утро перестанет зависеть от зеркала",
    text: "Как пройдёт день, перестанет решаться утром у зеркала.",
  },
  {
    title: "Жизнь выйдет из режима «потом»",
    text:
      "Отношения, одежда, фото, путешествия — то, что вы откладываете до «когда похудею» — может начаться сейчас. Не потом, когда изменится тело.",
  },
  {
    title: "Вы перестанете наказывать себя едой",
    text:
      "Ни едой, ни отказом от еды, ни тренировкой «чтобы отработать», ни голоданием. Забота о себе станет нормой, а не наградой.",
  },
];

export default function Changes() {
  return (
    <section
      id="changes"
      className="relative w-full bg-bg-soft scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px]">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
            Что может измениться
          </h2>
        </div>

        <ol className="mt-14 md:mt-20 max-w-[860px] flex flex-col">
          {items.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-10 py-7 md:py-9 border-t border-bg-beige last:border-b"
            >
              <div className="flex flex-col">
                <h3 className="text-[19px] md:text-[22px] font-medium text-text leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 md:mt-4 text-[16px] md:text-[17px] leading-[1.65] text-text max-w-[640px]">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
