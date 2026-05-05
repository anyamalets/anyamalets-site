import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена · Анна Малюточкина",
  description:
    "Этой страницы здесь нет. Возможно, ссылка устарела. Перейдите на главную, в раздел статей или к ответам на частые вопросы.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex-1 bg-bg text-text"
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-10 py-20 md:py-28 lg:py-36">
        <p className="text-[14px] uppercase tracking-[0.2em] text-text-muted">
          404
        </p>

        <h1 className="mt-6 md:mt-8 text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight">
          Эта страница не нашлась
        </h1>

        <p className="mt-6 md:mt-8 text-[17px] md:text-[18px] leading-[1.65] text-text-muted max-w-[560px]">
          Возможно, ссылка устарела или адрес введён с ошибкой. Это бывает.
          Может быть, вам подойдёт что-то из этого:
        </p>

        <nav className="mt-10 md:mt-12 flex flex-col gap-3" aria-label="Куда перейти">
          <Link
            href="/"
            className="group flex items-baseline justify-between gap-4 py-4 border-t border-bg-beige hover:text-accent transition-colors"
          >
            <span className="text-[17px] md:text-[18px] font-medium">
              Вернуться на главную
            </span>
            <span
              aria-hidden="true"
              className="text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
            >
              →
            </span>
          </Link>

          <Link
            href="/articles"
            className="group flex items-baseline justify-between gap-4 py-4 border-t border-bg-beige hover:text-accent transition-colors"
          >
            <span className="text-[17px] md:text-[18px] font-medium">
              Читать статьи
            </span>
            <span
              aria-hidden="true"
              className="text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
            >
              →
            </span>
          </Link>

          <Link
            href="/faq"
            className="group flex items-baseline justify-between gap-4 py-4 border-t border-b border-bg-beige hover:text-accent transition-colors"
          >
            <span className="text-[17px] md:text-[18px] font-medium">
              Ответы на частые вопросы
            </span>
            <span
              aria-hidden="true"
              className="text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
            >
              →
            </span>
          </Link>
        </nav>

        <p className="mt-12 md:mt-16 text-[16px] md:text-[17px] leading-[1.65] text-text-muted">
          Если искали меня и не нашли, можно написать в{" "}
          <a
            href="https://t.me/anya_malets"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-dark underline underline-offset-2 decoration-accent/40 hover:decoration-accent transition-colors"
          >
            Telegram
          </a>
          . Я отвечу.
        </p>
      </div>
    </main>
  );
}
