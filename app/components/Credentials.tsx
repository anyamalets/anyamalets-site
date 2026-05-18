import FadeIn from "./FadeIn";

const associations = [
  {
    short: "АКПН",
    full: "Ассоциация специалистов в сфере контекстуально-поведенческой науки",
  },
  {
    short: "АРППС",
    full: "Ассоциация специалистов, информированных о расстройствах пищевого поведения",
  },
];

const internship = {
  name: "Центр нормализации веса и пищевого поведения «Можно есть»",
  note: "Стажировка, г. Москва.",
};

const keyTrainings = [
  {
    name: "NEWPSY",
    note: "Курс «ACT in Action» по программе Psychotherapy.net. Лектор — Steven C. Hayes, Ph.D., создатель терапии принятия и ответственности.",
  },
  {
    name: "REформа.LIFE / Московский Институт Психоанализа",
    note: "Курс по работе с РПП у взрослых, детей и подростков. Marcia Herrin, EdD, MPH, RDN, LD, FAED, и Екатерина Тетерникова.",
  },
  {
    name: "Психодемия / Школа ЧК",
    note: "Курсы «Доказательная психотерапия РПП» и «Психотерапия РПП: продвинутый». Автор — Ирина Ушкова.",
  },
];

export default function Credentials() {
  return (
    <section id="opora" className="relative w-full bg-bg scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px]">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
            На&nbsp;что я&nbsp;опираюсь
          </h2>
        </div>

        <div className="mt-14 md:mt-20 max-w-[900px] flex flex-col gap-12 md:gap-14">
          {/* Профессиональные сообщества */}
          <FadeIn>
            <div className="flex flex-col gap-5">
              <p className="text-[15px] md:text-[16px] font-medium text-text-muted">
                Профессиональные сообщества
              </p>
              <ul className="flex flex-col gap-5 md:gap-6">
                {associations.map((a) => (
                  <li
                    key={a.short}
                    className="flex flex-col pl-5 md:pl-6"
                    style={{ borderLeft: "1px solid #6E7A81" }}
                  >
                    <p className="text-[17px] md:text-[19px] font-medium text-text leading-tight">
                      {a.short}
                    </p>
                    <p className="mt-2 text-[15px] md:text-[16px] text-text-muted leading-[1.6]">
                      {a.full}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Стажировка */}
          <FadeIn delay={80}>
            <div className="flex flex-col gap-5">
              <p className="text-[15px] md:text-[16px] font-medium text-text-muted">
                Стажировка
              </p>
              <div
                className="flex flex-col pl-5 md:pl-6"
                style={{ borderLeft: "1px solid #6E7A81" }}
              >
                <p className="text-[17px] md:text-[19px] font-medium text-text leading-tight">
                  {internship.name}
                </p>
                <p className="mt-2 text-[15px] md:text-[16px] text-text-muted leading-[1.6]">
                  {internship.note}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Ключевые обучения */}
          <FadeIn delay={160}>
            <div className="flex flex-col gap-5">
              <p className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-accent font-medium">
                Ключевые обучения
              </p>
              <ul className="flex flex-col gap-5 md:gap-6">
                {keyTrainings.map((t) => (
                  <li
                    key={t.name}
                    className="flex flex-col pl-5 md:pl-6"
                    style={{ borderLeft: "1px solid #6E7A81" }}
                  >
                    <p className="text-[17px] md:text-[19px] font-medium text-text leading-tight">
                      {t.name}
                    </p>
                    <p className="mt-2 text-[15px] md:text-[16px] text-text-muted leading-[1.6]">
                      {t.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Тексты и публикации */}
          <FadeIn delay={240}>
            <div className="flex flex-col gap-5">
              <p className="text-[15px] md:text-[16px] font-medium text-text-muted">
                Тексты и&nbsp;публикации
              </p>
              <a
                href="/articles"
                className="flex flex-col pl-5 md:pl-6 hover:opacity-80 transition-opacity"
                style={{ borderLeft: "1px solid #6E7A81" }}
              >
                <p className="text-[17px] md:text-[19px] font-medium text-accent leading-tight">
                  Блог&nbsp;→
                </p>
                <p className="mt-2 text-[15px] md:text-[16px] text-text-muted leading-[1.6]">
                  Статьи о&nbsp;работе с&nbsp;расстройствами пищевого поведения и&nbsp;смежными темами.
                </p>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Ссылка-якорь на полный Education */}
        <div className="mt-12 md:mt-16 max-w-[900px]">
          <a
            href="#education"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Полный список обучений
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
