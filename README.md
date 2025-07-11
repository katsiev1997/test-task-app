# Appricot - Next.js приложение

Современное веб-приложение, построенное на Next.js 15 с использованием TypeScript, Tailwind CSS и Radix UI компонентов.

## 🚀 Быстрый старт

### Предварительные требования

- **Node.js** версии 18.17 или выше
- **Git** для клонирования репозитория
- **Bun** (рекомендуется) или **npm** / **yarn** / **pnpm** для управления пакетами

### Установка и запуск

1. **Клонируйте репозиторий**

   ```bash
   git clone <URL-вашего-репозитория>
   cd appricot
   ```

2. **Установите зависимости**

   **С Bun (рекомендуется):**

   ```bash
   bun install
   ```

   **С npm:**

   ```bash
   npm install
   ```

   **С yarn:**

   ```bash
   yarn install
   ```

   **С pnpm:**

   ```bash
   pnpm install
   ```

3. **Запустите сервер разработки**

   **С Bun:**

   ```bash
   bun dev
   ```

   **С npm:**

   ```bash
   npm run dev
   ```

   **С yarn:**

   ```bash
   yarn dev
   ```

   **С pnpm:**

   ```bash
   pnpm dev
   ```

4. **Откройте браузер**

   Перейдите по адресу [http://localhost:3000](http://localhost:3000) чтобы увидеть приложение.

## 📁 Структура проекта

```
appricot/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── about/          # Страница "О нас"
│   │   ├── products/       # Страницы продуктов
│   │   └── layout.tsx      # Корневой layout
│   ├── features/           # Функциональные модули
│   │   ├── products/       # Модуль продуктов
│   │   └── theme-toggle/   # Переключатель темы
│   ├── shared/             # Общие компоненты и утилиты
│   │   ├── ui/            # UI компоненты (shadcn/ui)
│   │   ├── hooks/         # Общие хуки
│   │   └── providers/     # React провайдеры
│   └── widgets/           # Виджеты приложения
├── public/                # Статические файлы
└── package.json          # Зависимости и скрипты
```

## 🛠️ Доступные скрипты

- `dev` - Запуск сервера разработки с Turbopack
- `build` - Сборка приложения для продакшена
- `start` - Запуск продакшен сервера
- `lint` - Проверка кода с ESLint

## 🎨 Технологии

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI + shadcn/ui
- **State Management:** React Hooks
- **HTTP Client:** Ky
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Charts:** Recharts
- **Package Manager:** Bun (рекомендуется)

## 🔧 Разработка

### Добавление новых зависимостей

**С Bun:**

```bash
bun add <package-name>
bun add -d <package-name>  # для dev зависимостей
```

**С npm:**

```bash
npm install <package-name>
npm install -D <package-name>  # для dev зависимостей
```

### Проверка кода

```bash
bun run lint
```

### Сборка для продакшена

````bash
bun run build
bun run start## 🔧 Разработка

### Добавление новых зависимостей

**С Bun:**

```bash
bun add <package-name>
bun add -d <package-name>  # для dev зависимостей
````

**С npm:**

```bash
npm install <package-name>
npm install -D <package-name>  # для dev зависимостей
```

### Проверка кода

```bash
bun run lint
```

### Сборка для продакшена

```bash
bun run build
bun run start
```

## 🌐 Деплой

### Vercel (рекомендуется)

```

## 🌐 Деплой

### Vercel (рекомендуется)

1. Подключите ваш GitHub репозиторий к Vercel
2. Vercel автоматически определит Next.js проект
3. Настройте переменные окружения если необходимо
4. Деплой произойдет автоматически при push в main ветку

### Другие платформы

Приложение можно развернуть на любой платформе, поддерживающей Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Лицензия

Этот проект является приватным.

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте feature ветку (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📞 Поддержка

Если у вас возникли вопросы или проблемы, создайте issue в репозитории.
```
