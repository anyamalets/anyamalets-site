import type { Metadata } from "next";
import Header from "../components/Header";
import HeroZnakomstvo from "../components/HeroZnakomstvo";
import Recognize from "../components/Recognize";
import Methods from "../components/Methods";
import Changes from "../components/Changes";
import Testimonials from "../components/Testimonials";
import Boundaries from "../components/Boundaries";
import About from "../components/About";
import Education from "../components/Education";
import FirstSession from "../components/FirstSession";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import StickyMobileCTA from "../components/StickyMobileCTA";
import PlanerkaIntroEmbed from "../components/PlanerkaIntroEmbed";

export const metadata: Metadata = {
  title: "Вводная консультация — Анна Малюточкина",
  description:
    "Запишитесь на вводную консультацию к психологу Анне Малюточкиной. Познакомимся, ответим на ваши вопросы, определимся — могу ли я вам помочь.",
  alternates: {
    canonical: "https://anyamalets.ru/znakomstvo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ZnakomstvoPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroZnakomstvo />
        <Recognize />
        <Methods />
        <Changes />
        <Testimonials />
        <Boundaries />
        <About />
        <Education />
        <FirstSession />
        <Faq />

        <section id="zapis" className="bg-bg-soft text-text py-16 md:py-24">
          <div className="mx-auto max-w-[860px] w-full px-6 md:px-10">
            <div className="flex flex-col gap-5 md:gap-6">
              <p className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-accent font-medium">
                Бесплатная консультация
              </p>
              <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.1] tracking-tight">
                Записаться на вводную консультацию
              </h2>
              <p className="text-[17px] md:text-[19px] leading-[1.6] text-text max-w-[640px]">
                Мы познакомимся, вы можете задать вопросы, определимся — могу ли я вам помочь.
              </p>
            </div>

            <div className="mt-10 md:mt-14">
              <PlanerkaIntroEmbed />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
