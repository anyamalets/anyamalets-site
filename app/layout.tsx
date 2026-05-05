import type { Metadata } from "next";
import { Roboto, Open_Sans, Parisienne } from "next/font/google";
import "./globals.css";
import YandexMetrika from "./components/YandexMetrika";
import YandexMetrikaTracker from "./components/YandexMetrikaTracker";
import CookieConsent from "./components/CookieConsent";

const SITE_URL = "https://anyamalets.ru";

const businessLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Анна Малюточкина — психотерапия расстройств пищевого поведения",
  alternateName: "anyamalets.ru",
  url: SITE_URL,
  image: `${SITE_URL}/photos/hero.jpg`,
  description:
    "Психотерапевтическая практика по работе с расстройствами пищевого поведения (РПП) в доказательном подходе: когнитивно-поведенческая терапия (КПТ), терапия принятия и ответственности (ACT), диалектико-поведенческая терапия (DBT).",
  serviceType: "Психотерапия расстройств пищевого поведения",
  areaServed: { "@type": "Country", name: "Россия" },
  availableLanguage: "ru",
  priceRange: "₽₽",
  founder: { "@id": `${SITE_URL}/#person` },
  provider: { "@id": `${SITE_URL}/#person` },
  makesOffer: { "@id": `${SITE_URL}/#service` },
  knowsAbout: [
    "Расстройства пищевого поведения",
    "Нервная анорексия",
    "Нервная булимия",
    "Компульсивное переедание",
    "Когнитивно-поведенческая терапия",
    "Терапия принятия и ответственности",
    "Диалектико-поведенческая терапия",
    "Эмоциональная регуляция",
    "Образ тела",
  ],
  sameAs: [
    "https://t.me/anya_malets",
    "https://t.me/razreshayu_sebe_zhit",
    "https://vk.com/anya.malets",
  ],
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anyamalets.ru"),
  title: "Анна Малюточкина — психолог, расстройства пищевого поведения",
  description:
    "Терапия расстройств пищевого поведения (РПП) в доказательном подходе — когнитивно-поведенческая терапия (КПТ), терапия принятия и ответственности (ACT), диалектико-поведенческая терапия (DBT). Помогаю женщинам восстановить спокойные отношения с едой и своим телом.",
  openGraph: {
    title: "Анна Малюточкина — психолог, расстройства пищевого поведения",
    description:
      "Терапия расстройств пищевого поведения (РПП) в доказательном подходе — когнитивно-поведенческая терапия (КПТ), терапия принятия и ответственности (ACT), диалектико-поведенческая терапия (DBT). Помогаю женщинам восстановить спокойные отношения с едой и своим телом.",
    url: "https://anyamalets.ru",
    siteName: "anyamalets.ru",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Анна Малюточкина — психолог, расстройства пищевого поведения",
    description:
      "Терапия расстройств пищевого поведения в доказательном подходе — когнитивно-поведенческая терапия (КПТ), ACT, DBT.",
  },
  alternates: {
    canonical: "https://anyamalets.ru",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    yandex: "6914c99a1020d7c6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${roboto.variable} ${openSans.variable} ${parisienne.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
        />
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="absolute left-2 -top-[999px] z-[100] px-4 py-3 rounded-lg bg-accent text-bg text-[15px] font-medium shadow-md focus-visible:top-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-dark focus-visible:outline-offset-2"
        >
          Перейти к содержанию
        </a>

        {children}
        <YandexMetrika />
        <YandexMetrikaTracker />
        <CookieConsent />
      </body>
    </html>
  );
}
