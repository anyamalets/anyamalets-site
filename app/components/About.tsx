import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-bg-soft scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Text — first on desktop */}
          <div className="md:col-span-8 md:col-start-1 md:row-start-1 order-2 md:order-1 flex flex-col">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-text-muted mb-5 md:mb-6">
              Обо мне
            </p>

            <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-text leading-[1.15]">
              Анна Малюточкина
            </h2>

            <div className="mt-6 md:mt-8 flex flex-col gap-5 text-[17px] md:text-[18px] leading-[1.65] text-text max-w-[600px]">
              <p>
                За&nbsp;годы работы с&nbsp;расстройствами пищевого поведения
                я&nbsp;увидела, что это одна из&nbsp;самых одиноких
                и&nbsp;стыдных тем. Часто вы&nbsp;приходите
                с&nbsp;убеждением, что «сами виноваты» и&nbsp;должны
                справиться своими силами.
              </p>
              <p>
                Мне важно, чтобы со&nbsp;мной этого не&nbsp;было. Моя работа
                — не&nbsp;добавить вам ещё одну систему контроля,
                а&nbsp;помочь выйти из&nbsp;той, в&nbsp;которой вы живёте.
              </p>
              <p>
                Я&nbsp;говорю об&nbsp;этом не&nbsp;только как специалист.
                У&nbsp;меня был свой путь с&nbsp;РПП.
              </p>
            </div>
          </div>

          {/* Photo — right side, smaller */}
          <div className="md:col-span-4 md:col-start-9 md:row-start-1 order-1 md:order-2">
            <div className="relative mx-auto w-full max-w-[300px] md:max-w-[320px] aspect-[3/4] overflow-hidden rounded-xl bg-bg-soft md:mt-4">
              <Image
                src="/photos/about.jpg"
                alt="Анна Малюточкина за рабочим столом"
                fill
                sizes="(max-width: 768px) 80vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
