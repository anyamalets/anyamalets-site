import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Условия отмены и возврата",
  description:
    "Как работают отмены, переносы и возврат оплаты за консультацию. Простыми словами, без юридического языка.",
  robots: { index: true, follow: true },
};

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 md:mt-12 first:mt-12">
      <h2 className="text-[20px] md:text-[24px] font-semibold text-text leading-tight">
        {title}
      </h2>
      <div className="mt-3 md:mt-4 flex flex-col gap-3 text-[16px] md:text-[17px] leading-[1.65] text-text">
        {children}
      </div>
    </section>
  );
}

export default function RefundPage() {
  return (
    <main id="main-content" className="bg-bg text-text">
      <div className="mx-auto max-w-[760px] px-6 md:px-10 py-16 md:py-24">
        <header>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[14px] text-text-muted hover:text-accent transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>На&nbsp;главную</span>
          </a>
          <h1 className="mt-8 md:mt-10 text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-tight">
            Условия отмены и&nbsp;возврата
          </h1>
          <p className="mt-5 md:mt-6 text-[17px] md:text-[18px] leading-[1.6] text-text max-w-[620px]">
            Сессия — это забронированное для&nbsp;вас время. Если она
            не&nbsp;состоялась, нужны понятные правила: они защищают
            и&nbsp;мою работу, и&nbsp;вашу регулярность в&nbsp;терапии.
          </p>
          <p className="mt-3 text-[14px] text-text-muted">
            Возрастная категория: 18+
          </p>
        </header>

        <Block title="Если отменяете вы за 24 часа и больше">
          <p>
            Оплата сохраняется. Можно перенести сессию на&nbsp;ближайшие
            30&nbsp;дней или&nbsp;забрать деньги по&nbsp;заявке.
          </p>
        </Block>

        <Block title="Если отменяете вы менее чем за 24 часа или не приходите">
          <p>
            Сессия считается состоявшейся, оплата не&nbsp;возвращается.
            То&nbsp;же правило действует при опоздании больше чем&nbsp;на
            15&nbsp;минут без предупреждения.
          </p>
          <p>
            Зарезервированное время невозможно передать другому клиенту
            за&nbsp;несколько часов. Это прямая потеря, которую я&nbsp;не
            могу компенсировать.
          </p>
        </Block>

        <Block title="Если заболели или случилось серьёзное">
          <p>
            Болезнь, госпитализация, ДТП, экстренные семейные
            обстоятельства. Сообщите мне, и&nbsp;я&nbsp;перенесу сессию
            без удержания оплаты. Если такие отмены повторяются — могу
            попросить подтверждающий документ.
          </p>
        </Block>

        <Block title="Если форс-мажор">
          <p>
            Чрезвычайные ситуации, отключения, технические сбои
            с&nbsp;моей стороны. Возвращаю оплату полностью или&nbsp;переношу
            сессию, как удобнее.
          </p>
        </Block>

        <Block title="Если отменяю я за 24 часа и больше">
          <p>
            Возвращаю оплату полностью в&nbsp;течение 10&nbsp;рабочих дней
            или&nbsp;предлагаю удобное вам время.
          </p>
        </Block>

        <Block title="Если отменяю я менее чем за 24 часа">
          <p>
            Оплату за&nbsp;отменённую сессию по&nbsp;вашему выбору
            возвращаю в&nbsp;течение 10&nbsp;рабочих дней или&nbsp;переношу
            на&nbsp;любую будущую сессию. Дополнительно следующую сессию
            провожу без оплаты.
          </p>
          <p>
            При моей болезни со&nbsp;справкой или&nbsp;форс-мажоре —
            только возврат либо перенос, без дополнительной компенсации.
          </p>
        </Block>

        <Block title="Как сообщить об отмене">
          <p>
            Telegram{" "}
            <a
              href="https://t.me/anya_malets"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              @anya_malets
            </a>{" "}
            или&nbsp;e-mail{" "}
            <a
              href="mailto:psy@anyamalets.ru"
              className="text-accent hover:underline"
            >
              psy@anyamalets.ru
            </a>
            . Время считаю по&nbsp;Москве.
          </p>
        </Block>

        <Block title="Как запросить возврат">
          <p>
            Напишите на&nbsp;{" "}
            <a
              href="mailto:psy@anyamalets.ru"
              className="text-accent hover:underline"
            >
              psy@anyamalets.ru
            </a>
            . Укажите имя, дату сессии и&nbsp;реквизиты для&nbsp;возврата.
            Отвечу в&nbsp;течение 10&nbsp;рабочих дней. Банковские комиссии
            при возврате — на&nbsp;вашей стороне.
          </p>
        </Block>

        <div className="mt-14 md:mt-16 pt-8 border-t border-bg-beige">
          <p className="text-[15px] md:text-[16px] text-text-muted leading-[1.6]">
            Полный текст условий — в&nbsp;{" "}
            <a
              href="/offer#p5"
              className="text-accent hover:underline"
            >
              договоре-оферте
            </a>
            .
          </p>
        </div>

        <div className="mt-12 md:mt-14">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[15px] text-text-muted hover:text-accent transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>На&nbsp;главную</span>
          </a>
        </div>
      </div>
    </main>
  );
}
