# Структура проекта Eng Tobe SaaS

## 📁 Корневые директории

### 📁 `app/` - Страницы и роутинг Next.js App Router
- **`page.tsx`** - Главная страница с быстрыми ссылками, полоской прогресса и словом дня
- **`layout.tsx`** - Глобальный layout всего приложения
- **`globals.css`** - Глобальные стили, включая класс `.glass-card`
- **`manifest.ts`** - PWA манифест для установки приложения
- **`api/`** - API маршруты
  - **`activity/`** - API для отслеживания активностей
  - **`checkout/`** - API для Lemon Squeezy платежей
  - **`me/`** - API для получения данных пользователя
  - **`points/`** - API для управления очками
  - **`premium/`** - API для премиум-статуса
  - **`streak/`** - API для стрика
  - **`webhooks/`** - Webhooks для Lemon Squeezy
- **`auth/`** - Страницы авторизации
  - **`login/`** - Страница входа
  - **`signup/`** - Страница регистрации
- **`games/`** - Раздел игр
- **`idioms/`** - Раздел идиом
- **`premium/`** - Премиум страница
- **`profile/`** - Профиль пользователя
- **`recall/`** - Функция повторения
- **`sentences/`** - Раздел предложений
- **`settings/`** - Настройки
- **`store/`** - Магазин
- **`words/`** - Раздел слов

### 📁 `components/` - React компоненты
- **`ui/`** - Базовые UI компоненты
  - **`card.tsx`** - Компонент Card с классом `.glass-card`
  - **`button.tsx`** - Компонент кнопки
  - **`input.tsx`** - Компонент поля ввода
  - **`progress.tsx`** - Компонент прогресс-бара
  - **`CategoryCard.tsx`** - Карточка категории для списков
  - **`ComingSoon.tsx`** - Заглушка "Скоро будет"
  - **`PremiumBadge.tsx`** - Бейдж премиум-контента
  - **`StreakBar.tsx`** - Компонент полоски прогресса/стрика
  - **`Icon.tsx`** - Компонент иконок
  - **`CompletionModal.tsx`** - Модальное окно для завершения активностей
  - **`FlyingWords.tsx`** - Анимированные слова для фона
  - **`FlyingWordsEng.tsx`** - Анимированные английские слова
  - **`StorePremiumCard.tsx`** - Карточка премиум-подписки в магазине
- **`layout/`** - Компоненты layout
  - **`TopBar.tsx`** - Верхняя панель навигации с заголовком
  - **`BottomNav.tsx`** - Нижняя панель навигации
  - **`ProfileSection.tsx`** - Секция профиля пользователя
- **`words/`** - Компоненты для раздела Words
  - **`WordsTree.tsx`** - Дерево категорий слов с раскрывающимися списками
- **`sentences/`** - Компоненты для раздела Sentences
  - **`SentencesTree.tsx`** - Дерево категорий предложений с раскрывающимися списками
- **`cards/`** - Компоненты для активностей Cards
  - **`FlipCard.tsx`** - Компонент переворачиваемой карточки для слов
  - **`IdiomFlipCard.tsx`** - Компонент переворачиваемой карточки для идиом
- **`auth/`** - Компоненты авторизации
  - **`AuthForm.tsx`** - Форма входа/регистрации
- **`pwa/`** - PWA компоненты
  - **`PwaRegister.tsx`** - Регистрация PWA

### 📁 `lib/` - Утилиты и функции
- **`isPremium.ts`** - Проверка премиум-статуса пользователя
- **`utils.ts`** - Общие утилиты (например, `cn` для классов)
- **`icons.tsx`** - Компонент иконок
- **`idioms.ts`** - Idioms data utilities and level management
- **`payments.ts`** - Утилиты для работы с платежами (Lemon Squeezy)
- **`profile.ts`** - Утилиты для работы с профилем
- **`supabase-browser.ts`** - Supabase клиент для браузера
- **`supabase.ts`** - Supabase серверный клиент
- **`useAddPoints.ts`** - Hook для добавления очков
- **`useCompleteActivity.ts`** - Hook для завершения активностей
- **`usePoints.ts`** - Hook для работы с очками

### 📁 `hooks/` - React hooks
- **`useIsPremium.ts`** - Hook для проверки премиум-статуса
- **`useUser.ts`** - Hook для работы с данными пользователя

### 📁 `constants/` - Константы
- **`ui.ts`** - UI тексты и константы
- **`categories.ts`** - Структура категорий для Words, Sentences, Idioms, Games

### 📁 `data/` - Data files
- **`words/`** - Words data files
  - **`basicadvanced/`** - Basic to Advanced words (5 категорий)
  - **`antonyms/`** - Антонимы (4 категории)
  - **`formalinformal/`** - Формальный/неформальный стиль (4 категории)
  - **`rudepolite/`** - Грубый/вежливый стиль (4 категории)
  - **`slang/`** - Сленг (4 категории)
  - **`timewords/`** - Слова времени (4 категории)
- **`sentences/`** - Sentences data files (пустая директория)
- **`idioms/`** - Idioms data files (30 idioms per category)
  - **`food_idioms.ts`** - Food related idioms
  - **`weather_idioms.ts`** - Weather related idioms
  - **`emotional_idioms.ts`** - Emotional idioms
  - **`body_parts_idioms.ts`** - Body parts idioms
  - **`animal_idioms.ts`** - Animal idioms
  - **`business_idioms.ts`** - Business idioms
  - **`slang_idioms.ts`** - Slang idioms
- **`games/`** - Games data files
  - **`wordle-words.ts`** - Список слов для игры Wordle

### 📁 `types/` - TypeScript типы
- **`index.ts`** - Основные типы проекта (UserProfile, Category, WordTopic, и др.)

### 📁 `supabase/` - Supabase конфигурация
- **`migrations.sql`** - Миграции базы данных
- **`schema.sql`** - Схема базы данных

### 📁 `public/` - Статические файлы
- **`favicon.ico`** - Фавикон
- **`logo.svg`** - Логотип приложения
- **`sw.js`** - Service Worker для PWA

### 📁 `.vscode/` - VSCode настройки
- **`settings.json`** - Настройки редактора

---

## 📄 Страницы (app/)

### 🏠 Главная страница
**`app/page.tsx`**
- Быстрые ссылки: Words, Sentences, Idioms, Games
- StreakBar - полоска прогресса
- Блок "Word of Day" с анимированной обводкой
- Блок "Go Premium" (если не премиум)

### 📚 Раздел Words
**`app/words/page.tsx`**
- Список категорий: Pronounce, Basic→Advanced, Synonyms, Antonyms, Rude→Polite, Formal→Informal, Time words, Slang
- Кнопка "← Back to Home"

**`app/words/[categoryId]/page.tsx`**
- Динамическая страница для категорий слов
- Отображение подкатегорий и тем
- Кнопка "← Back to Words"

**`app/words/[categoryId]/[topicId]/page.tsx`**
- Динамическая страница для подкатегорий
- Отображение активностей в сетке 2x2
- Кнопка "← Back to [Category]"

**`app/words/[categoryId]/[topicId]/[subcategoryId]/cards/page.tsx`**
- Реализация полной активности Cards с компонентом FlipCard
- Прогресс-бар, навигация Previous/Next, модальное окно завершения
- Анимация переворота с Basic на Advanced слова

### 📝 Раздел Sentences  
**`app/sentences/page.tsx`**
- Категории: A1 to C2, Phrasal verbs, Everyday Situations, Don't say: Very easy, Slang/Modern English
- Кнопка "← Back to Home"

**`app/sentences/[categoryId]/page.tsx`**
- Динамическая страница для категорий предложений
- Отображение подкатегорий и тем
- Кнопка "← Back to Sentences"

**`app/sentences/[categoryId]/[topicId]/page.tsx`**
- Динамическая страница для подкатегорий предложений
- Отображение активностей в сетке 2x2
- Кнопка "← Back to [Category]"

### 💬 Раздел Idioms
**`app/idioms/page.tsx`**
- Категории: Food, Weather, Emotional, Body Parts, Animal, Business, Slang idioms
- Кнопка "← Back to Home"

**`app/idioms/[categoryId]/page.tsx`**
- Выбор уровня: Level 1, Level 2, Level 3 (10 идиом каждый)
- Кнопка "← Back to Idioms"

**`app/idioms/[categoryId]/[levelId]/page.tsx`**
- Активности в сетке 2x2: Cards, Multiple Choice, Synonym Pair, Fill the Blanks, Find the Mistake, Sentence Builder
- Кнопка "← Back to [Category Name]"

**`app/idioms/[categoryId]/[levelId]/cards/page.tsx`**
- Реализация полной активности Cards с компонентом IdiomFlipCard
- Прогресс-бар, навигация Previous/Next, модальное окно завершения
- Анимация переворота, показывающая идиом на лицевой стороне, значение на оборотной

### 🎮 Раздел Games
**`app/games/page.tsx`**
- Игры: Wordle (бесплатная), Memory (бесплатная), Negotiations (премиум)
- Кнопка "← Back to Home"

**`app/games/wordle/page.tsx`**
- Страница выбора длины слова для игры Wordle

**`app/games/wordle/[length]/page.tsx`**
- Полная реализация игры Wordle с выбранной длиной слова
- 6 попыток угадать слово
- Цветовая индикация правильных букв

**`app/games/memory/page.tsx`**
- Страница выбора категории для игры Memory

**`app/games/memory/[category]/[size]/page.tsx`**
- Полная реализация игры Memory (карточная игра на память)
- Выбор категории и размера поля
- Нахождение пар vocab слов

### 👤 Раздел Profile
**`app/profile/page.tsx`**
- Профиль пользователя через `ProfileSection` компонент
- Кнопка "← Back to Home"

### 🔄 Раздел Recall
**`app/recall/page.tsx`**
- Заглушка "Coming Soon" для функции повторения
- Кнопка "← Back to Home"

### 🏆 Раздел Leaderboard
**`app/leaderboard/page.tsx`**
- Заглушка "Coming Soon" для рейтингов
- Кнопка "← Back to Home"

### 🛍️ Раздел Store
**`app/store/page.tsx`**
- Магазин с премиум-подписками
- Компонент StorePremiumCard для покупки
- Кнопка "← Back to Home"

### ⚙️ Раздел Settings
**`app/settings/page.tsx`**
- Настройки: Sound Effects, Voice Over (заглушки)
- Кнопка удаления аккаунта
- Кнопка "← Back to Home"

### 🔐 Авторизация
**`app/auth/login/page.tsx`** - Страница входа с AuthForm
**`app/auth/signup/page.tsx`** - Страница регистрации с AuthForm

### 💳 Премиум
**`app/premium/page.tsx`** - Страница покупки премиум с Lemon Squeezy интеграцией

---

## 🎨 Стили и UI

### Глобальные стили (`app/globals.css`)
- **`.glass-card`** - Основной стиль карточек с фоном `bg-white/[0.12]` и обводкой `border-white/15`
- **`.content-shell`** - Контейнер для контента с отступами
- **`.fade-up`** - Анимации появления элементов
- **`.flying-word`** - Анимация летающих слов на главной

### Нижняя навигация (`components/layout/BottomNav.tsx`)
Порядок разделов:
1. Home (🏠)
2. Recall (🧠) 
3. Profile (👤)
4. Leaderboard (🏆)
5. Store (🛍️)
6. Settings (⚙️)

---

## 📊 Категории (`constants/categories.ts`)

### Words (CATS)
- **Pronounce** - Произношение (бесплатно)
- **Basic→Advanced** - Улучшение базовых слов (бесплатно)
  - Health (с активностями)
- **Synonyms** - Синонимы (бесплатно)
  - Health, Education, Technology, Environment (с активностями)
- **Antonyms** - Антонимы (премиум)
  - Health (с активностями)
- **Rude→Polite** - От грубого к вежливому (премиум)
- **Formal→Informal** - Формальный/неформальный (премиум)
- **Time words** - Слова времени (премиум)
- **Slang** - Сленг (премиум)
  - Texting language

### Sentences (SENT_CATS)
- A1 to C2 (free)
- Phrasal verbs (premium)
- Everyday Situations (premium) - 10 subcategories:
  - Dining Out (restaurant phrases)
  - Travel & Airport (check-in, security, gates)
  - Shopping & Prices (sizes, returns, exchanges)
  - Hotel & Accommodation (check-in/out, requests)
  - Directions & Transport (asking directions, tickets)
  - Health & Pharmacy (symptoms, medicine)
  - Socializing & Small Talk (conversation starters)
  - At the Bank & Money (withdrawal, exchange)
  - Work & Office (meetings, requests, deadlines)
  - Emergency Situations (help, theft, police/medical)
- Don't say: Very easy (premium)
- Slang/Modern English (premium)

### Idioms (IDIOM_CATS)
- Food Idioms (free) - 3 levels × 10 idioms
- Weather Idioms (free) - 3 levels × 10 idioms
- Emotional Idioms (premium) - 3 levels × 10 idioms
- Body Parts Idioms (premium) - 3 levels × 10 idioms
- Animal Idioms (premium) - 3 levels × 10 idioms
- Business idioms (premium) - 3 levels × 10 idioms
- Slang idioms (premium) - 3 levels × 10 idioms

**Idioms Activities:**
- Cards - Flip cards with idioms and meanings
- Multiple Choice - Choose correct meaning (placeholder)
- Synonym Pair - Match idioms with meanings (placeholder)
- Fill the Blanks - Complete idiom sentences (placeholder)
- Find the Mistake - Identify incorrect usage (placeholder)
- Sentence Builder - Create sentences with idioms (placeholder)

### Games (GAME_CATS)
- Wordle (бесплатная) - игра "Угадай слово" с выбором длины
- Memory (бесплатная) - карточная игра на память с выбором категории и размера поля
- Negotiations (премиум) - игра выбора лучшего ответа (в разработке)

---

## 🔧 Особенности реализации

### Навигация
- Все страницы имеют кнопки "назад" в едином стиле
- Подкатегории Words ведут на отдельные страницы с активностями
- Активности отображаются в сетке 2x2 как главные категории

### Анимации
- `fade-up-d1` до `fade-up-d5` - задержки появления
- `flying-word` - анимированные слова на фоне главной
- `hover:scale-110` - увеличение при наведении на аватар

### Премиум-логика
- `isPremium()` проверяет статус пользователя
- `PremiumBadge` показывает премиум-контент
- Заблокированные элементы ведут на `/premium`

### Адаптивность
- `max-w-shell` - ограничение ширины контента
- `grid-cols-2` - сетка для мобильных устройств
- `content-shell` - адаптивные отступы

---

## 🛠️ Технологический стек

### Frontend
- **Next.js 14.2.35** - React фреймворк с App Router
- **React 18.3.1** - UI библиотека
- **TypeScript 5.7.2** - Типизация
- **Tailwind CSS 3.4.17** - CSS фреймворк
- **Lucide React 0.511.0** - Иконки
- **Radix UI** - Базовые UI компоненты
- **React Hook Form 7.53.0** - Формы
- **Zod 3.23.8** - Валидация

### Backend
- **Supabase** - База данных и аутентификация
- **Supabase SSR** - Серверная интеграция

### Платежи
- **Lemon Squeezy** - Обработка платежей и подписок

### PWA
- **Service Worker** - Офлайн функциональность
- **Manifest** - Установка на устройство

---

## 🔧 Особенности реализации

### Навигация
- Все страницы имеют кнопки "назад" в едином стиле
- Подкатегории Words ведут на отдельные страницы с активностями
- Активности отображаются в сетке 2x2 как главные категории

### Анимации
- `fade-up-d1` до `fade-up-d5` - задержки появления
- `flying-word` - анимированные слова на фоне главной
- `hover:scale-110` - увеличение при наведении на аватар
- 3D flip animation для карточек

### Премиум-логика
- `isPremium()` проверяет статус пользователя
- `PremiumBadge` показывает премиум-контент
- Заблокированные элементы ведут на `/premium`
- Интеграция с Lemon Squeezy для платежей

### Система прогресса
- Очки за завершение активностей
- Streak (полоса прогресса)
- Отслеживание в базе данных через API

### Адаптивность
- `max-w-shell` - ограничение ширины контента
- `grid-cols-2` - сетка для мобильных устройств
- `content-shell` - адаптивные отступы

### PWA функциональность
- Service Worker для офлайн работы
- Манифест для установки на устройство
- Push notifications (заглушка)

---

## 🗄️ База данных (Supabase)

### Структура таблиц
- **profiles** - Профили пользователей
  - id, user_id, is_premium, streak, created_at
- **user_activities** - Отслеживание активностей
- **user_points** - Очки пользователей
- **user_streak** - Стрик пользователей

### Миграции
- `supabase/migrations.sql` - Миграции базы данных
- `supabase/schema.sql` - Полная схема базы данных

---

## ⚙️ Конфигурационные файлы

### Основные
- **`package.json`** - Зависимости и скрипты проекта
- **`tsconfig.json`** - Конфигурация TypeScript
- **`tailwind.config.ts`** - Конфигурация Tailwind CSS
- **`next.config.mjs`** - Конфигурация Next.js
- **`components.json`** - Конфигурация shadcn/ui компонентов

### Окружение
- **`.env.example`** - Пример переменных окружения
- **`.env.local`** - Локальные переменные окружения
- **`.gitignore`** - Игнорируемые файлы
- **`middleware.ts`** - Middleware для Next.js

### VSCode
- **`.vscode/settings.json`** - Настройки редактора

---

## 📋 Скрипты (package.json)

- **`npm run dev`** - Запуск dev сервера
- **`npm run build`** - Сборка для продакшена
- **`npm run start`** - Запуск продакшн сборки
- **`npm run lint`** - Проверка кода линтером
- **`npm run typecheck`** - Проверка TypeScript типов

---

## 📝 Дополнительная документация

- **`CARDS_IMPLEMENTATION.md`** - Детальная документация по реализации активности Cards
- **`README.md`** - Основная информация о проекте

---

## 🎯 Ключевые особенности проекта

### SaaS архитектура
- Многоуровневая система доступа (free/premium)
- Интеграция с платежной системой Lemon Squeezy
- Отслеживание прогресса и активности пользователей

### Образовательная платформа
- 4 основных раздела: Words, Sentences, Idioms, Games
- Интерактивные активности с анимациями
- Система уровней и прогресса
- Адаптивный дизайн для мобильных устройств

### Технологическая реализация
- Современный стек Next.js 14 с App Router
- Полная типизация на TypeScript
- PWA функциональность для установки на устройства
- Реальная база данных через Supabase

### Масштабируемость
- Модульная архитектура компонентов
- Четкое разделение данных и UI
- Гибкая система категорий и активностей
- API для расширения функционала
