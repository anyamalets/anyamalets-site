export const metadata = {
  title: "Студия · anyamalets.ru",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
