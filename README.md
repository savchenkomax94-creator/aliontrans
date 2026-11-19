# АЛІОН-ТРАНС — корпоративний сайт
React + TypeScript + Vite + Tailwind + Framer Motion + Lucide.

## Запуск
    npm install
    npm run dev        # локально
    npm run build      # збірка у dist/

## Що замінити
- Контакти, Telegram/WhatsApp, логотип, фото Hero — `src/config/site.ts` (файли кладіть у `public/`, напр. `public/logo.svg`, `public/img/...`).
- Послуги, країни/маршрути, галерея, партнери, відгуки — `src/data/content.ts`. Поки порожні поля показують заглушки.
- `index.html`, `public/robots.txt`, `public/sitemap.xml` — замініть YOUR-DOMAIN на ваш домен.

## Форма (реальна відправка)
1. Створіть форму на Formspree (або Web3Forms) і вкажіть email для заявок.
2. Скопіюйте `.env.example` у `.env`, вставте адресу в `VITE_FORM_ENDPOINT`.
3. Перезберіть сайт. Секретних ключів у frontend немає — для власного backend приймайте POST із JSON на свій endpoint і тримайте ключі в змінних середовища сервера.

## Публікація на своєму домені
`npm run build` → вміст папки `dist/` завантажте на хостинг (або Netlify/Vercel/Cloudflare Pages: build `npm run build`, папка `dist`; змінну `VITE_FORM_ENDPOINT` додайте в налаштуваннях проєкту). Далі підключіть домен у DNS.
