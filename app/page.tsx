import Header from "./components/Header";
import Hero from "./components/Hero";
import Recognize from "./components/Recognize";
import Methods from "./components/Methods";
import Changes from "./components/Changes";
import Boundaries from "./components/Boundaries";
import About from "./components/About";
import Education from "./components/Education";
import FirstSession from "./components/FirstSession";
import Faq, { faqItems } from "./components/Faq";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

const SITE_URL = "https://anyamalets.ru";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Анна Малюточкина",
  alternateName: "Anna Malyutochkina",
  jobTitle: "Психолог, специалист по расстройствам пищевого поведения",
  description:
    "Психолог, работаю в доказательных подходах (КПТ, ACT, DBT) с расстройствами пищевого поведения и смежными темами.",
  url: SITE_URL,
  image: `${SITE_URL}/photos/hero.jpg`,
  email: "psy@anyamalets.ru",
  sameAs: [
    "https://t.me/anya_malets",
    "https://t.me/razreshayu_sebe_zhit",
    "https://vk.com/anya.malets",
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Ассоциация специалистов контекстуально-поведенческой науки (АКПН)",
    },
    {
      "@type": "Organization",
      name: "Ассоциация специалистов, информированных о РПП (АРППС)",
    },
    {
      "@type": "Organization",
      name: "Rome Foundation GastroPsych",
    },
  ],
  knowsAbout: [
    "Расстройства пищевого поведения",
    "Когнитивно-поведенческая терапия",
    "Терапия принятия и ответственности",
    "Диалектико-поведенческая терапия",
    "Эмоциональная регуляция",
  ],
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Психологическая консультация",
  name: "Онлайн-сессия с психологом",
  description:
    "Онлайн-сессия с психологом Анной Малюточкиной, 50 минут. Работа с расстройствами пищевого поведения в доказательном подходе (КПТ, ACT, DBT).",
  provider: {
    "@type": "Person",
    name: "Анна Малюточкина",
    url: SITE_URL,
  },
  areaServed: { "@type": "Country", name: "Россия" },
  availableChannel: {
    "@type": "ServiceChannel",
    name: "Онлайн · Яндекс Телемост",
    serviceUrl: `${SITE_URL}/#zapis`,
  },
  offers: {
    "@type": "Offer",
    price: "4000",
    priceCurrency: "RUB",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#zapis`,
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <Recognize />
        <Methods />
        <Changes />
        <Boundaries />
        <About />
        <Education />
        <FirstSession />
        <Faq />
        <Pricing />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
