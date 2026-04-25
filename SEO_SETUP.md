# SEO Setup для anyamalets.ru

## ✅ Сделано в коде

- **sitemap.xml** — динамический из Sanity (`/app/sitemap.ts`)
- **robots.txt** — настроен с исключением `/studio/` и `/thanks`
- **Canonical URL** — `https://anyamalets.ru` в layout.tsx
- **Open Graph** — настроены для соцсетей
- **Редирект www** — 301 редирект с `www.anyamalets.ru` на `https://anyamalets.ru`

---

## 📋 Что нужно сделать вручную

### 1. **Google Search Console**

1. Перейти на https://search.google.com/search-console
2. Добавить собственность:
   - Выбрать "Domain property" и ввести `anyamalets.ru` (без www, без https://)
   - Или выбрать "URL prefix" и ввести `https://anyamalets.ru`
3. Подтвердить собственность через DNS или HTML-метатег
4. После подтверждения:
   - Перейти в **Sitemap** → добавить `https://anyamalets.ru/sitemap.xml`
   - Проверить в **Coverage** что страницы индексируются

### 2. **Яндекс Вебмастер**

1. Перейти на https://webmaster.yandex.ru/
2. Добавить сайт `anyamalets.ru` (без www)
3. Подтвердить собственность (DNS или HTML)
4. После подтверждения:
   - В меню "Мои сайты" → выбрать сайт
   - **Карта сайта** → добавить `https://anyamalets.ru/sitemap.xml`
   - **Индексирование** → проверить статус

### 3. **Vercel редирект www → non-www** (опционально)

Если Next.js редирект недостаточен, в Vercel:

1. Проект → **Settings** → **Domains**
2. Добавить домен `www.anyamalets.ru`
3. Нажать на него → **Edit** → поставить галку **Redirect to anyamalets.ru**
4. Выбрать **Permanent (301)**

---

## 🔗 Ссылки для проверки

- **Sitemap**: https://anyamalets.ru/sitemap.xml
- **Robots**: https://anyamalets.ru/robots.txt
- **Canonical**: в исходном коде страницы `<link rel="canonical">`

---

## 📊 Когда ожидать результаты

- **Google**: 1-2 недели до полной индексации
- **Яндекс**: 3-7 дней
- **Поиск**: страницы появятся после индексации (проверить в GSC/Вебмастере)
