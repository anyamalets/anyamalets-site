import type { Metadata } from "next";
import { Roboto, Open_Sans, Parisienne } from "next/font/google";
import "./globals.css";
import YandexMetrika from "./components/YandexMetrika";
import YandexMetrikaTracker from "./components/YandexMetrikaTracker";
import CookieConsent from "./components/CookieConsent";
import SchemaScripts from "./components/SchemaScripts";

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
  title: {
    default: "Анна Малюточкина — психолог, расстройства пищевого поведения",
    template: "%s · Анна Малюточкина",
  },
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
      <body className="min-h-full flex flex-col">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="absolute left-2 -top-[999px] z-[100] px-4 py-3 rounded-lg bg-accent text-bg text-[15px] font-medium shadow-md focus-visible:top-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-dark focus-visible:outline-offset-2"
        >
          Перейти к содержанию
        </a>

        {/* Schema.org structured data for search engines */}
        <SchemaScripts />

        {children}
        <YandexMetrika />
        <YandexMetrikaTracker />
        <CookieConsent />
      </body>
    </html>
  );
}
