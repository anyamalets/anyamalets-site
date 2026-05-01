import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Информированное согласие",
  description:
    "Как устроена наша работа, чего ожидать, организационные условия.",
  robots: { index: true, follow: true },
};

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 mt-14 md:mt-20 pt-14 md:pt-20 border-t border-bg-beige first:mt-12 first:pt-0 first:border-t-0"
    >
      <h2 className="text-[22px] md:text-[26px] font-semibold text-text leading-tight">
        {title}
      </h2>
      <div className="mt-5 md:mt-6 flex flex-col gap-4 text-[16px] md:text-[17px] leading-[1.7] text-text">
        {children}
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-6 py-4 md:py-5 border-t border-bg-beige first:border-t-0 first:pt-0">
      <p className="font-heading text-[14px] md:text-[15px] uppercase tracking-[0.12em] text-accent font-medium min-w-0 break-words">
        {label}
      </p>
      <div className="text-[16px] md:text-[17px] leading-[1.65] text-text">
        {children}
      </div>
    </div>
  );
}

export default function ConsentPage() {
  return (
    <main id="main-content" className="bg-bg text-text">
      <div className="mx-auto max-w-[820px] px-6 md:px-10 py-16 md:py-24">
        {/* Header */}
        <header>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[14px] text-text-muted hover:text-accent transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>На главную</span>
          </a>
          <h1 className="mt-8 md:mt-10 text-[32px] md:text-[44px] font-semibold leading-[1.1] tracking-tight">
            Информированное согласие
          </h1>
          <p className="mt-5 md:mt-6 text-[17px] md:text-[18px] text-text leading-[1.6] max-w-[620px]">
            Этот документ — основа нашей работы. Пожалуйста, прочитайте его
            внимательно и&nbsp;задайте вопросы, если что-то непонятно.
          </p>
          <p className="mt-3 text-[14px] text-text-muted">
            Дата публикации: 1&nbsp;мая&nbsp;2026 ·
            Возрастная категория: 18+
          </p>
        </header>

        <Section title="1. Что важно знать до начала работы">
          <p>
            Наша работа — психологическое консультирование, не&nbsp;медицинская
            услуга. Если у&nbsp;вас есть лечащий врач (психиатр,
            гастроэнтеролог, эндокринолог и&nbsp;др.), сообщайте ему
            о&nbsp;значимых изменениях в&nbsp;своём состоянии.
            Мы&nbsp;работаем в&nbsp;партнёрстве с&nbsp;медициной, а&nbsp;не
            вместо неё. При необходимости я&nbsp;направлю к&nbsp;нужному
            специалисту — некоторые задачи решаются только в&nbsp;команде.
          </p>
        </Section>

        <Section title="2. Как я работаю">
          <p>
            Я&nbsp;опираюсь на&nbsp;подходы с&nbsp;подтверждённой клинической
            эффективностью. Регулярно обсуждаю свою работу с&nbsp;более
            опытными коллегами и&nbsp;в&nbsp;профессиональной группе —
            это стандарт качества в&nbsp;психологии.
          </p>

          <div className="mt-2 flex flex-col gap-5">
            <div>
              <p className="font-heading text-[13px] uppercase tracking-[0.12em] text-text-muted mb-1.5">
                Основной метод
              </p>
              <p>
                <strong className="font-semibold">ACT</strong> — терапия
                принятия и&nbsp;ответственности.
              </p>
            </div>

            <div>
              <p className="font-heading text-[13px] uppercase tracking-[0.12em] text-text-muted mb-1.5">
                Вспомогательный метод
              </p>
              <p>
                <strong className="font-semibold">Мотивационное интервью</strong>{" "}
                — помогает разобраться с&nbsp;внутренним конфликтом, когда
                хочется измениться, но&nbsp;страшно.
              </p>
            </div>

            <div>
              <p className="font-heading text-[13px] uppercase tracking-[0.12em] text-text-muted mb-1.5">
                Также использую
              </p>
              <ul className="flex flex-col gap-1.5">
                <li>КПТ — когнитивно-поведенческая терапия</li>
                <li>DBT — диалектико-поведенческая терапия</li>
              </ul>
            </div>
          </div>

          <p>
            Все подходы сфокусированы на&nbsp;изменении поведения,
            и&nbsp;в&nbsp;меньшей степени — на&nbsp;поиске причин
            и&nbsp;исследовании прошлого.
          </p>
          <p>
            Если по&nbsp;какой-то причине я&nbsp;не&nbsp;смогу следовать
            стандартным практикам, я&nbsp;скажу вам об&nbsp;этом заранее.
          </p>
        </Section>

        <Section title="3. Чего ожидать от терапии">
          <p>
            Я&nbsp;не&nbsp;могу гарантировать конкретный результат — терапия
            так не&nbsp;работает. Но&nbsp;подходы, которые я&nbsp;использую,
            помогают развить психологическую гибкость: замечать сложные
            мысли и&nbsp;чувства — и&nbsp;при этом действовать
            в&nbsp;сторону того, что для вас важно.
          </p>
          <p>
            Цель — не&nbsp;избавиться от&nbsp;тревоги, стыда
            или&nbsp;навязчивых мыслей о&nbsp;еде, а&nbsp;изменить ваши
            отношения с&nbsp;ними. Строить жизнь вокруг своих ценностей,
            а&nbsp;не&nbsp;вокруг борьбы с&nbsp;едой и&nbsp;телом.
          </p>
        </Section>

        <Section title="4. Как устроен процесс">
          <p>
            Первые 2–3&nbsp;сессии — знакомство: я&nbsp;задаю вопросы,
            вы&nbsp;рассказываете о&nbsp;своей ситуации, вместе исследуем
            ваши ценности и&nbsp;формулируем цели. От&nbsp;того, насколько
            точно мы&nbsp;поймём, что для вас важно, зависит вся
            дальнейшая работа.
          </p>
          <p>
            На&nbsp;сессиях много практики: упражнения на&nbsp;осознанность,
            работа с&nbsp;мыслями, ценностные практики. Я&nbsp;всегда
            объясняю, что мы&nbsp;делаем и&nbsp;зачем. Если что-то
            непонятно, не&nbsp;нравится или&nbsp;кажется неподходящим —
            говорите. Это важно. Любое упражнение можно остановить
            в&nbsp;любой момент.
          </p>
          <p>
            Между сессиями я&nbsp;буду предлагать практику: дневники
            питания, упражнения, небольшие эксперименты с&nbsp;поведением.
            Обычно 5–20&nbsp;минут в&nbsp;день. Без этого изменения идут
            гораздо медленнее.
          </p>
        </Section>

        <Section title="5. Дискомфорт — это часть процесса">
          <p>
            В&nbsp;ACT мы&nbsp;учимся давать место для тревоги, стыда
            и&nbsp;болезненных мыслей, не&nbsp;избегая их&nbsp;и&nbsp;не
            действуя импульсивно.
          </p>
          <p>
            Это может быть непривычно, но&nbsp;именно так формируются
            изменения. Иногда становится сложнее, прежде чем становится
            легче. Это нормально и&nbsp;проходит — и&nbsp;об&nbsp;этом
            мы&nbsp;будем говорить на&nbsp;сессиях.
          </p>
        </Section>

        <Section title="Организационные условия">
          <div className="mt-2">
            <Field label="Формат">
              Онлайн, в&nbsp;Яндекс Телемост, с&nbsp;включённой камерой.
              Ссылку высылаю после оплаты. Необходимо тихое закрытое
              помещение, где вас не&nbsp;слышат и&nbsp;не&nbsp;прерывают —
              на&nbsp;улице, в&nbsp;кафе или&nbsp;в&nbsp;машине сессию
              провести не&nbsp;получится. Также важны: стабильный интернет,
              экран достаточного размера, под рукой ручка и&nbsp;бумага.
            </Field>

            <Field label="Длительность">
              50&nbsp;минут. Время окончания фиксированное
              и&nbsp;не&nbsp;сдвигается, если вы&nbsp;опоздали. Если
              опаздываете более чем&nbsp;на&nbsp;15&nbsp;минут без
              уведомления — сессия считается оказанной.
            </Field>

            <Field label="Частота">
              Оптимально — 1&nbsp;раз в&nbsp;неделю, особенно в&nbsp;начале.
              По&nbsp;мере прогресса можно встречаться реже.
            </Field>

            <Field label="Стоимость">
              4&nbsp;000&nbsp;рублей за&nbsp;сессию. Оплата не&nbsp;менее
              чем&nbsp;за&nbsp;24&nbsp;часа до&nbsp;начала. При отсутствии
              оплаты встреча автоматически отменяется. Стоимость остаётся
              неизменной в&nbsp;течение года. Если мы&nbsp;работаем
              непрерывно больше года, я&nbsp;заранее обсужу с&nbsp;вами
              возможное изменение цены.
            </Field>

            <Field label="Отмена и перенос">
              Отменить или&nbsp;перенести сессию можно не&nbsp;менее
              чем&nbsp;за&nbsp;24&nbsp;часа до&nbsp;начала. При отмене
              позже оплата не&nbsp;возвращается. Исключения — болезнь,
              экстренные обстоятельства, форс-мажор: сообщите мне,
              сессию перенесу. Если сессию отменяю я&nbsp;менее
              чем&nbsp;за&nbsp;24&nbsp;часа не&nbsp;по&nbsp;уважительной
              причине, возвращаю или&nbsp;переношу оплату по&nbsp;вашему
              выбору и&nbsp;следующую сессию провожу без оплаты. Если
              моя отмена связана с&nbsp;болезнью или&nbsp;форс-мажором —
              только возврат или&nbsp;перенос, без дополнительной
              компенсации. Подробнее — на&nbsp;странице{" "}
              <a
                href="/refund"
                className="text-accent hover:underline"
              >
                «Условия отмены и&nbsp;возврата»
              </a>
              .
            </Field>

            <Field label="Прекращение работы">
              Вы&nbsp;можете прекратить работу в&nbsp;любой момент,
              без объяснения причин. Оплата за&nbsp;неоказанные сессии
              возвращается в&nbsp;течение 10&nbsp;рабочих дней.
              Я&nbsp;со&nbsp;своей стороны могу прекратить работу при
              грубом нарушении условий с&nbsp;вашей стороны или&nbsp;если
              станет понятно, что нужна помощь другого специалиста —
              в&nbsp;этом случае я&nbsp;дам рекомендации к&nbsp;коллегам
              подходящей специализации и&nbsp;верну оплату
              за&nbsp;неоказанные сессии.
            </Field>

            <Field label="Связь между сессиями">
              Для напоминаний о&nbsp;времени сессии и&nbsp;обмена ссылками
              на&nbsp;материалы используется Telegram. В&nbsp;переписке
              не&nbsp;указываются полные имена, диагнозы и&nbsp;любые
              сведения о&nbsp;состоянии — содержательные вопросы обсуждаются
              только на&nbsp;сессиях. Если мы&nbsp;не&nbsp;договорились
              об&nbsp;ином, я&nbsp;не&nbsp;отвечаю на&nbsp;содержательные
              вопросы между сессиями. Если вам удобнее — для оргсвязи
              можно использовать электронную почту.
            </Field>

            <Field label="Конфиденциальность">
              Всё, что происходит на&nbsp;сессиях, остаётся между нами.
              Я&nbsp;могу обсуждать материал сессий с&nbsp;коллегами
              в&nbsp;рамках профессиональных консультаций — без ваших
              имени и&nbsp;данных. Исключение одно: ситуация с&nbsp;угрозой
              жизни — вашей или&nbsp;другого человека. В&nbsp;этом случае
              я&nbsp;могу связаться с&nbsp;экстренными службами.
            </Field>
          </div>
        </Section>

        {/* Final note */}
        <div className="mt-16 md:mt-20 pt-10 md:pt-12 border-t border-bg-beige">
          <p className="text-[16px] md:text-[17px] leading-[1.7] text-text max-w-[640px]">
            Записываясь на&nbsp;сессию и&nbsp;оплачивая её, вы&nbsp;подтверждаете,
            что прочитали этот документ и&nbsp;согласны с&nbsp;условиями
            работы. Если что-то непонятно или&nbsp;вызывает вопросы —
            напишите мне до&nbsp;оплаты, мы&nbsp;обсудим.
          </p>
        </div>

        {/* Back to home */}
        <div className="mt-16 md:mt-20">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[15px] text-text-muted hover:text-accent transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>На главную</span>
          </a>
        </div>
      </div>
    </main>
  );
}
