import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ — Часто задаваемые вопросы о РПП",
  description:
    "Ответы на часто задаваемые вопросы о расстройствах пищевого поведения и психотерапии РПП.",
  openGraph: {
    title: "FAQ — Часто задаваемые вопросы о РПП",
    description:
      "Ответы на часто задаваемые вопросы о расстройствах пищевого поведения и психотерапии РПП.",
  },
}

const faqItems = [
  {
    question: "Что такое расстройства пищевого поведения (РПП)?",
    answer:
      "Расстройства пищевого поведения — это психические заболевания, связанные с нарушениями питания. К ним относятся нервная анорексия, нервная булимия, приступообразное переедание и другие типы этого расстройства. РПП часто маскируют глубокие проблемы с эмоциями и самооценкой.",
  },
  {
    question: "Каковы первые признаки расстройства пищевого поведения?",
    answer:
      "Основные признаки: одержимость едой и весом, беспокойство при приёме пищи, избегание носить определенную одежду, побуждение отработать съеденные калории, многочисленные попытки сесть на диету.",
  },
  {
    question: "Чем нервная анорексия отличается от нервной булимии?",
    answer:
      "Нервная анорексия — это ограничение питания и потеря веса. Нервная булимия — цикл переедания с очищением или чрезмерными физическими нагрузками. Психотерапия помогает справиться с обоими расстройствами.",
  },
  {
    question: "Как долго длится терапия РПП?",
    answer:
      "Работа с РПП обычно длится от 3 до 12 месяцев, но сроки индивидуальны и зависят от: тяжести и длительности расстройства, типа РПП (нервная анорексия, нервная булимия, компульсивное переедание), наличия коморбидных расстройств. Некоторые люди видят значительное улучшение за 3-4 месяца, другим требуется полный год интенсивной работы. На первой консультации мы обсудим реалистичные сроки конкретно для вашей ситуации.",
  },
  {
    question: "Как часто нужно приходить на консультации?",
    answer:
      "В начале рекомендуется 1 раз в неделю. По мере улучшения частота может снизиться до 1 раза в две недели или реже. Это обсуждается индивидуально на основе динамики изменений.",
  },
  {
    question: "Чем КПТ отличается от DBT и ACT?",
    answer:
      "КПТ (когнитивно-поведенческая терапия) фокусируется на связи мыслей, эмоций и поведения. DBT (диалектико-поведенческая терапия) учит навыкам эмоциональной регуляции и стрессоустойчивости. ACT (терапия принятия и ответственности) помогает действовать в соответствии с ценностями.",
  },
  {
    question: "Мне стыдно обратиться к психологу. Это нормально?",
    answer:
      "Совершенно нормально. Стыд — частая часть РПП. Психолог не осуждает, а помогает выйти из порочного круга.",
  },
  {
    question: "Можно ли вылечить РПП, если оно длилось много лет?",
    answer:
      "Да. Мозг пластичен в любом возрасте. Люди возвращаются к нормальному питанию и отношению к телу после многих лет с РПП.",
  },
  {
    question: "Что делать, если я чувствую срыв?",
    answer:
      "Срывы — нормальная часть выздоровления. Это не провал, а информация о том, что нужны дополнительные навыки. Разберём, что произошло, и выработаем план предотвращения.",
  },
  {
    question: "Как начать терапию? Какой первый шаг?",
    answer:
      "Первый шаг — написать мне или записаться на консультацию. Обсудим вашу ситуацию, подход, расписание. Первая консультация — это знакомство.",
  },
  {
    question: "Гарантируется ли полное выздоровление?",
    answer:
      "Психотерапия не дает гарантий. Я гарантирую использование доказанных методов и адаптацию подхода.",
  },
  {
    question: "Работаете ли вы онлайн или только офлайн?",
    answer:
      "Работаю онлайн. Онлайн-формат удобен для занятых людей и тех, кто живет в других городах. Эффективность не зависит от формата.",
  },
]

export default function FAQPage() {
  return (
    <main id="main-content" className="flex-1">
      <div className="min-h-screen bg-gradient-to-b from-bg to-bg/95 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <a href="/" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium">
              ← На главную
            </a>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">
              Часто задаваемые вопросы
            </h1>
            <p className="text-base text-text/70 max-w-2xl mx-auto">
              Я знаю, что поиск помощи — это смелый шаг. Надеюсь, здесь вы найдете ответы на вопросы, которые вас беспокоят. Если вашего вопроса нет — напишите мне.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-white rounded-lg border border-gray-200 text-center">
            <h2 className="text-2xl font-bold text-text mb-4">
              Не нашли ответ на свой вопрос?
            </h2>
            <p className="text-text/70 mb-6">
              Свяжитесь со мной напрямую. Я помогу разобраться в вашей ситуации.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://planerka.app/anyamalets/50min-session"
                className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Записаться на консультацию
              </a>
              <a
                href="https://t.me/anyamalets"
                className="inline-block px-8 py-3 bg-text/10 text-text rounded-lg font-semibold hover:bg-text/20 transition-colors"
              >
                Написать мне
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function FAQItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  return (
    <details className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors cursor-pointer">
      <summary className="flex items-center justify-between font-semibold text-text text-lg">
        <span>{question}</span>
        <span className="ml-4 flex-shrink-0 text-accent group-open:rotate-180 transition-transform">
          ↓
        </span>
      </summary>
      <p className="mt-4 text-text/70 leading-relaxed">{answer}</p>
    </details>
  )
}
