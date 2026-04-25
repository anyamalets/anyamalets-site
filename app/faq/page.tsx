import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ — Часто задаваемые вопросы о РПП",
  description: "Ответы на часто задаваемые вопросы о расстройствах пищевого поведения и психотерапии РПП.",
}

const faqItems = [
  {
    question: "Что такое расстройства пищевого поведения (РПП)?",
    answer: "Расстройства пищевого поведения — это психические заболевания, связанные с нарушениями питания. К ним относятся анорексия, булимия, компульсивное переедание и другие варианты."
  },
  {
    question: "Каковы первые признаки РПП?",
    answer: "Основные признаки: одержимость едой и весом, резкие изменения в весе, социальная изоляция, беспокойство при приёме пищи."
  },
  {
    question: "Чем анорексия отличается от булимии?",
    answer: "Анорексия — ограничение питания и потеря веса. Булимия — цикл переедания с очищением. Обе лечимы с правильной психотерапией."
  },
  {
    question: "Как долго длится лечение РПП?",
    answer: "Интенсивное лечение обычно длится от 3 до 12 месяцев, но сроки индивидуальны и зависят от: тяжести и длительности расстройства, типа РПП (анорексия, булимия, переедание), наличия коморбидных расстройств. Некоторые люди видят значительное улучшение за 3-4 месяца, другим требуется полный год интенсивной работы. На первой консультации мы обсудим реалистичные сроки конкретно для вашей ситуации."
  },
  {
    question: "Как часто нужно приходить на консультации?",
    answer: "В начале лечения — 1 раз в неделю. При устойчивых изменениях встречи становятся реже."
  },
  {
    question: "Чем КПТ отличается от DBT и ACT?",
    answer: "КПТ фокусируется на связи мыслей и поведения. DBT учит эмоциональной регуляции. ACT помогает действовать в соответствии с ценностями."
  },
  {
    question: "Можно ли вылечить РПП, если оно длилось много лет?",
    answer: "Да. Мозг пластичен в любом возрасте. Люди выздоравливают после многих лет болезни."
  },
  {
    question: "Работаете ли вы онлайн или офлайн?",
    answer: "Работаю онлайн. Консультации проводятся через защищённую видеосвязь."
  },
  {
    question: "Как начать терапию?",
    answer: "Первый шаг — написать мне. Первая консультация — это знакомство и обсуждение вашей ситуации."
  }
]

export default function FAQPage() {
  return (
    <main id="main-content" className="flex-1">
      <div className="min-h-screen bg-gradient-to-b from-bg to-bg/95 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">Часто задаваемые вопросы</h1>
            <p className="text-lg text-text/70">Ответы на вопросы о расстройствах пищевого поведения и лечении</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-text text-lg">
                  <span>{item.question}</span>
                  <span className="ml-4 text-accent group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-text/70 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white rounded-lg border border-gray-200 text-center">
            <h2 className="text-2xl font-bold text-text mb-4">Не нашли ответ?</h2>
            <p className="text-text/70 mb-6">Напишите мне в Instagram или Telegram. Я помогу разобраться в вашей ситуации.</p>
            <a href="https://instagram.com/anyamalets" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Написать мне
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
