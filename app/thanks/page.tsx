import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заявка получена",
  description: "Спасибо, что записались на встречу.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main className="bg-bg text-text min-h-[85vh] flex items-center">
      <div className="mx-auto max-w-[720px] w-full px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-5 md:gap-6">
            <p className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-accent font-medium">
              Заявка получена
            </p>
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight">
              Спасибо, что нашли время записаться
            </h1>
          </div>

          <div className="flex flex-col gap-5 text-[17px] md:text-[18px] leading-[1.65] text-text max-w-[600px]">
            <p>
              Я&nbsp;получила вашу заявку. В&nbsp;течение суток напишу вам
              в&nbsp;Telegram — подтвержу встречу и&nbsp;пришлю ссылку
              для&nbsp;оплаты.
            </p>
            <p>
              Накануне встречи пришлю ссылку на&nbsp;Яндекс.Телемост. Заранее
              проверьте, что у&nbsp;вас будет тихое закрытое помещение,
              стабильный интернет и&nbsp;включённая камера.
            </p>
          </div>

          <div className="mt-2 md:mt-4 pt-8 md:pt-10 border-t border-bg-beige max-w-[600px]">
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-text-muted">
              Если сейчас есть силы и&nbsp;время — можно прочитать{" "}
              <a
                href="/consent"
                className="text-accent hover:text-accent-dark underline underline-offset-2 decoration-accent/40 hover:decoration-accent transition-colors"
              >
                информированное согласие
              </a>
              . Там я&nbsp;описываю, как строю работу и&nbsp;что будет
              на&nbsp;первых встречах. Это необязательно, но&nbsp;поможет
              чувствовать себя увереннее.
            </p>
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-6 md:gap-8 items-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-[15px] md:text-[16px] text-text-muted hover:text-accent transition-colors"
            >
              <span aria-hidden="true">←</span>
              <span>На главную</span>
            </a>
            <a
              href="https://t.me/anya_malets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] md:text-[16px] text-accent hover:text-accent-dark transition-colors"
            >
              Telegram
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
