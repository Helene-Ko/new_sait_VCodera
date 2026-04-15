[README.md](https://github.com/user-attachments/files/26762659/README.md)
# Vibe Coder Portfolio (Next.js 14)

Портфолио-сайт переведен на Next.js 14 (App Router) с анимациями Framer Motion и переключением темы.

## Что внутри

- App Router структура (`src/app/layout.jsx`, `src/app/page.jsx`)
- Глобальные стили (`src/styles/globals.css`)
- Плавные анимации секций при скролле (Framer Motion)
- Переключение темной/светлой темы (кнопка справа снизу)
- Изображения в `public/`

## Стек

- Next.js 14
- React 18
- Framer Motion
- Tailwind CSS (установлен как зависимость)

## Структура проекта

```text
.
├─ public/
│  └─ _7qmqmphxgrxlgdz5tnd3_1.png
├─ src/
│  ├─ app/
│  │  ├─ layout.jsx
│  │  └─ page.jsx
│  └─ styles/
│     └─ globals.css
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ README.md
```

## Быстрый старт

### 1) Установка зависимостей

```bash
npm install
```

### 2) Запуск локального сервера

```bash
npm run dev
```

После запуска открой:

[http://localhost:3007](http://localhost:3007)

## Скрипты

- `npm run dev` — dev-сервер на `3007`
- `npm run build` — production build
- `npm run start` — запуск production-сборки на `3007`

## Кастомизация

- Основной контент: `src/app/page.jsx`
- Глобальные стили и темы: `src/styles/globals.css`
- Фото: `public/_7qmqmphxgrxlgdz5tnd3_1.png`

## Рекомендации по деплою

Проект статический, поэтому можно разместить на:

- GitHub Pages
- Netlify
- Vercel (static)

Для деплоя достаточно загрузить файлы репозитория как есть.
