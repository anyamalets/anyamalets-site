import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import YandexMetrika from "./components/YandexMetrika";
import YandexMetrikaTracker from "./components/YandexMetrikaTracker";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://anyamalets.ru"),
  title: {
    default: "Анна Малюточкина — психолог, расстройства пищевого поведения",
    template: "%s · Анна Малюточкина",
  },
  description:
    "Терапия РПП в доказательном подходе — КПТ, ACT, DBT. Помогаю женщинам восстановить спокойные отношения с едой и своим телом.",
  openGraph: {
    title: "Анна Малюточкина — психолог, расстройства пищевого поведения",
    description:
      "Терапия РПП в доказательном подходе — КПТ, ACT, DBT. Помогаю женщинам восстановить спокойные отношения с едой и своим телом.",
    url: "https://anyamalets.ru",
    siteName: "anyamalets.ru",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Анна Малюточкина — психолог, расстройства пищевого поведения",
    description:
      "Терапия РПП в доказательном подходе — КПТ, ACT, DBT.",
  },
  alternates: {
    canonical: "https://anyamalets.ru",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${roboto.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="absolute left-2 -top-[999px] z-[100] px-4 py-3 rounded-lg bg-accent text-bg text-[15px] font-medium shadow-md focus-visible:top-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-dark focus-visible:outline-offset-2"
        >
          Перейти к содержанию
        </a>
        {children}
        <YandexMetrika />
        <YandexMetrikaTracker />
      </body>
    </html>
  );
}
