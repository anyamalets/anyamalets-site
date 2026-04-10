const items = [
  {
    title: "Не ставлю диагнозы",
    text:
      "Диагностика — зона ответственности врача-психиатра. Я помогаю понять, что происходит, и работать с этим в психотерапии.",
  },
  {
    title: "Не работаю с детьми и подростками",
    text:
      "Если нужна помощь для подростка — могу порекомендовать коллег, которые работают с этим возрастом.",
  },
  {
    title: "Не обещаю изменений за одну сессию",
    text:
      "Психотерапия — это процесс. За одну встречу можно понять, с чем вы пришли, и наметить направление — но изменения разворачиваются постепенно.",
  },
  {
    title: "Не работаю с острыми состояниями",
    text:
      "Если сейчас нужна медицинская помощь или госпитализация — сначала важно обратиться к врачу. Когда состояние стабилизируется, можем встретиться.",
  },
];

export default function Boundaries() {
  return (
    <section
      id="boundaries"
      className="relative w-full bg-bg-soft scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px]">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
            Чего у меня не&nbsp;бывает
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-text-muted leading-[1.6]">
            Честные границы — чтобы вам было понятно, подходим ли&nbsp;мы
            друг другу.
          </p>
        </div>

        <ul className="mt-14 md:mt-20 max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-14 gap-y-10 md:gap-y-12">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col">
              <div className="flex items-start gap-3 md:gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2 md:mt-2.5 inline-block h-[2px] w-5 md:w-6 shrink-0 bg-accent"
                />
                <h3 className="text-[19px] md:text-[21px] font-medium text-text leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 md:mt-4 pl-8 md:pl-10 text-[16px] md:text-[17px] leading-[1.65] text-text">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
