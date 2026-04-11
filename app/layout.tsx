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
        {children}
        <YandexMetrika />
        <YandexMetrikaTracker />
      </body>
    </html>
  );
}
