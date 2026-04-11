import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-bg-soft scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-28 md:py-36 lg:py-44">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Text — first on desktop */}
          <div className="md:col-span-7 md:col-start-1 md:row-start-1 order-2 md:order-1 flex flex-col">
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-text leading-[1.05] tracking-tight">
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
                Цель нашей работы — не&nbsp;избавиться от&nbsp;тревоги, стыда
                или&nbsp;навязчивых мыслей о&nbsp;еде, а&nbsp;изменить ваши
                отношения с&nbsp;ними. Строить жизнь вокруг своих ценностей,
                а&nbsp;не&nbsp;вокруг борьбы с&nbsp;едой и&nbsp;телом.
              </p>
              <p>
                Я&nbsp;говорю об&nbsp;этом не&nbsp;только как специалист.
                У&nbsp;меня был свой путь с&nbsp;РПП.
              </p>
            </div>
          </div>

          {/* Photo — right side */}
          <div className="md:col-span-5 md:col-start-8 md:row-start-1 order-1 md:order-2">
            <div className="relative mx-auto md:ml-auto md:mr-0 w-full max-w-[380px] md:max-w-[400px] aspect-[3/4] overflow-hidden rounded-xl md:mt-4">
              <Image
                src="/photos/about.jpg"
                alt="Анна Малюточкина за рабочим столом"
                fill
                sizes="(max-width: 768px) 85vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
