type Item = { title: string; place: string };
type Category = { title: string; items: Item[] };

const categories: Category[] = [
  {
    title: "Основное образование",
    items: [
      {
        title: "Магистратура по консультативной и клинической психологии",
        place: "ММУ",
      },
      {
        title: "Практическая психология",
        place: "МГУ им. Н.П. Огарёва",
      },
      {
        title:
          "Специалист по социальной работе, профиль — психосоциальные технологии работы с населением",
        place: "УлГУ",
      },
    ],
  },
  {
    title: "Расстройства пищевого поведения",
    items: [
      {
        title: "Доказательная психотерапия РПП",
        place: "Психодемия (И. Ушкова)",
      },
      {
        title: "Психотерапия РПП: продвинутый курс",
        place: "Школа ЧК (И. Ушкова)",
      },
      {
        title: "Современные методы диагностики и терапии РПП",
        place:
          "СПб институт ДПО для психологов и психотерапевтов (Е. Белая)",
      },
      {
        title: "Психология пищевого поведения",
        place: "МИП (Е. Тетерникова)",
      },
      {
        title:
          "Навыки эмоциональной регуляции при работе с пищевым поведением",
        place: "МИП (Е. Тетерникова)",
      },
      {
        title: "Системный подход: баланс психологии, питания, тела",
        place: "МИП",
      },
      {
        title:
          "Выявление, лечение и профилактика расстройств пищевого поведения и ожирения у взрослых, детей и подростков",
        place: "Academy of Eating Disorders, США (M. Herrin)",
      },
      {
        title: "CFT для работы с нарушением образа тела",
        place: "Hungry School (Н. Чернов)",
      },
      {
        title: "Организация питания при СДВГ",
        place: "Школа ЧК",
      },
      {
        title:
          "Стажировка — Центр нормализации веса и пищевого поведения «Можно есть»",
        place: "",
      },
    ],
  },
  {
    title: "КПТ и её направления",
    items: [
      {
        title: "Поведенческая психотерапия",
        place: "Чистые когниции (И. Ушкова)",
      },
      {
        title: "Основы КПТ",
        place: "Поведенческая компания (группа О. Сазоновой)",
      },
      { title: "ACT in Action", place: "NEWPSY" },
      {
        title: "Основы ACT",
        place: "Поведенческая компания (группа Л. Лукьяновой)",
      },
      {
        title: "Группа навыков ACT",
        place: "А. Краевский",
      },
      {
        title: "Группа самообучения навыкам DBT",
        place: "Поведенческая компания",
      },
      {
        title: "DBT, интенсив (в обучении)",
        place: "Behavioral Tech Institute",
      },
    ],
  },
  {
    title: "Другие обучения",
    items: [
      {
        title: "Техники терапии зависимостей",
        place: "АСП (И. Гавин)",
      },
      {
        title: "Мотивационное интервью",
        place: "BGCourse (И. Гавин)",
      },
      {
        title: "Мотивационное интервью в психотерапии",
        place: "SoberLab Education (М. Агинян)",
      },
      {
        title: "Аддикции: клиническая картина и диагностика",
        place: "МАНП (Т. Волк)",
      },
      { title: "СДВГ у детей и взрослых", place: "psyDOCMED" },
      {
        title:
          "Трихотилломания и экскориационное расстройство: диагностика и терапия",
        place: "psyDOCMED",
      },
      { title: "ОРКТ", place: "IPPSY (Л. Яковлева)" },
      {
        title: "ОРКТ — группа личной терапии",
        place: "IPPSY (В. Мерещак)",
      },
      {
        title: "Этическая и правовая подготовка",
        place: "СПб институт ДПО для психологов и психотерапевтов",
      },
      {
        title: "Психогастроэнтерология",
        place: "Центр гастропсихологии (И. Волкова, Н. Гладских)",
      },
      {
        title: "Физиология ЖКТ для специалистов",
        place: "Rome Foundation GastroPsych, США",
      },
      {
        title: "Ключевые навыки практикующего психолога",
        place: "Поведенческая компания",
      },
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full bg-bg scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px]">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
            Образование
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-text-muted leading-[1.6]">
            Профессиональная подготовка по&nbsp;направлениям. Нажмите
            на&nbsp;категорию, чтобы развернуть список.
          </p>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col gap-3 md:gap-4">
          {categories.map((cat) => (
            <details
              key={cat.title}
              className="group rounded-xl border border-bg-beige bg-bg-soft/60 open:bg-bg-soft transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 md:px-8 py-5 md:py-6 rounded-xl">
                <span className="flex items-baseline gap-3 md:gap-4 flex-wrap">
                  <span className="text-[18px] md:text-[20px] font-medium text-text">
                    {cat.title}
                  </span>
                  <span className="text-[13px] md:text-[14px] text-text-muted">
                    {cat.items.length}{" "}
                    {cat.items.length === 1
                      ? "программа"
                      : cat.items.length < 5
                        ? "программы"
                        : "программ"}
                  </span>
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="shrink-0 h-5 w-5 text-accent transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>

              <ul className="px-6 md:px-8 pb-6 md:pb-8 flex flex-col gap-4">
                {cat.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="pt-4 border-t border-bg-beige first:border-t-0 first:pt-0"
                  >
                    <p className="text-[15px] md:text-[16px] text-text leading-[1.5]">
                      {item.title}
                    </p>
                    {item.place && (
                      <p className="mt-1 text-[13px] md:text-[14px] text-text-muted leading-[1.5]">
                        {item.place}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
