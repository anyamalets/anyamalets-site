const cards = [
  {
    title: "Срывы по вечерам",
    text:
      "Весь день стараетесь есть «правильно», а к вечеру что-то ломается — и вы едите быстро, много и почти не чувствуя вкуса. Наутро — стыд и план всё исправить.",
  },
  {
    title: "В голове нет тишины",
    text:
      "Еда и тело занимают слишком много места в мыслях. Вы устали постоянно это считать, планировать, контролировать — и больше всего хочется, чтобы в голове наконец стало тихо.",
  },
  {
    title: "Жизнь на паузе",
    text:
      "Кажется, что настоящая жизнь начнётся «потом» — когда изменится тело, вес, форма. А пока отношения, одежда, фото и планы ждут. И момент всё не наступает.",
  },
];

export default function Recognize() {
  return (
    <section
      id="recognize"
      className="relative w-full bg-bg-soft scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <h2 className="text-center text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
          Узнаёте себя?
        </h2>

        <p className="mt-5 md:mt-6 max-w-[620px] mx-auto text-center text-base md:text-lg text-text-muted leading-[1.6]">
          Если что-то из&nbsp;этого про вас — вы&nbsp;не&nbsp;одна. И&nbsp;это
          не&nbsp;про слабость характера или отсутствие силы воли. С&nbsp;этим
          работают. Я&nbsp;помогаю.
        </p>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-xl bg-bg p-7 md:p-8 lg:p-9 flex flex-col gap-3 md:gap-4"
            >
              <h3 className="text-[20px] md:text-[22px] font-medium text-accent leading-tight flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-block h-[2px] w-6 bg-accent"
                />
                {card.title}
              </h3>
              <p className="text-[16px] md:text-[17px] leading-[1.65] text-text">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
