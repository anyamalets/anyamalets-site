import Image from "next/image";
import Link from "next/link";

export default function AuthorCard() {
  return (
    <aside
      aria-label="Об авторе"
      className="mt-14 md:mt-20 rounded-2xl bg-bg-beige p-6 md:p-8 lg:p-10"
    >
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-7">
        <div className="flex-shrink-0">
          <Image
            src="/photos/about.jpg"
            alt="Анна Малюточкина, психолог"
            width={120}
            height={120}
            className="rounded-full object-cover w-[96px] h-[96px] sm:w-[120px] sm:h-[120px]"
          />
        </div>

        <div className="flex-1">
          <p className="text-[12px] uppercase tracking-[0.16em] text-text-muted">
            Об авторе
          </p>
          <p className="mt-2 text-[20px] md:text-[22px] font-semibold text-text leading-tight">
            Анна Малюточкина
          </p>
          <p className="mt-3 text-[15px] md:text-[16px] leading-[1.6] text-text">
            Психолог, специалист по&nbsp;расстройствам пищевого поведения.
            Работаю в&nbsp;доказательных подходах: КПТ, ACT, DBT.
            Член АКПН и&nbsp;АРППС.
          </p>

          <Link
            href="/#zapis"
            className="mt-5 md:mt-6 inline-flex items-center gap-2 px-5 py-3 bg-accent text-bg rounded-lg text-[15px] font-medium hover:bg-accent-dark transition-colors"
          >
            Записаться на&nbsp;консультацию
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
