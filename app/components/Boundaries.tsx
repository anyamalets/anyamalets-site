const items = [
  {
    title: "Я не ставлю диагнозы",
    text:
      "Для этого есть врачи-психиатры. Я работаю с тем, что вы чувствуете, переживаете и делаете — без ярлыков.",
  },
  {
    title: "Не обещаю изменений за одну сессию",
    text:
      "Психотерапия — это процесс. За одну встречу можно понять, с чем вы пришли, и наметить направление — но изменения разворачиваются постепенно.",
  },
  {
    title: "Не работаю с острыми состояниями",
    text:
      "Если сейчас вы в остром состоянии и нуждаетесь в медицинской помощи — сначала важно обратиться к врачу. Возвращайтесь, когда состояние стабилизируется — тогда мы сможем начать работу.",
  },
];

export default function Boundaries() {
  return (
    <section
      id="boundaries"
      className="relative w-full bg-bg scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px]">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
            Несколько честных уточнений
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-text-muted leading-[1.6]">
            Чтобы вам было понятно, подходим ли&nbsp;мы друг другу.
          </p>
        </div>

        <ul className="mt-14 md:mt-20 max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-14 gap-y-10 md:gap-y-12">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col border-l border-olive pl-5 md:pl-6"
            >
              <h3 className="text-[19px] md:text-[21px] font-medium text-olive leading-tight">
                {item.title}
              </h3>
              <p className="mt-3 md:mt-4 text-[16px] md:text-[17px] leading-[1.65] text-text">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
