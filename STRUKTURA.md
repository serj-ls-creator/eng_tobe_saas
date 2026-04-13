# Структура проекта Eng Tobe SaaS

## 📁 Корневые директории

### 📁 `app/` - Страницы и роутинг Next.js
- **`page.tsx`** - Главная страница с быстрыми ссылками, полоской прогресса и словом дня
- **`layout.tsx`** - Глобальный layout всего приложения
- **`globals.css`** - Глобальные стили, включая класс `.glass-card`

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
- **`layout/`** - Компоненты layout
  - **`TopBar.tsx`** - Верхняя панель навигации с заголовком
  - **`BottomNav.tsx`** - Нижняя панель навигации
  - **`ProfileSection.tsx`** - Секция профиля пользователя
- **`words/`** - Компоненты для раздела Words
  - **`WordsTree.tsx`** - Дерево категорий слов с раскрывающимися списками
- **`auth/`** - Компоненты авторизации
  - **`AuthForm.tsx`** - Форма входа/регистрации
- **`pwa/`** - PWA компоненты
  - **`PwaRegister.tsx`** - Регистрация PWA

### 📁 `lib/` - Утилиты и функции
- **`isPremium.ts`** - Проверка премиум-статуса пользователя
- **`utils.ts`** - Общие утилиты (например, `cn` для классов)
- **`icons.ts`** - Функция получения иконок по названию

### 📁 `constants/` - Константы
- **`ui.ts`** - UI тексты и константы
- **`categories.ts`** - Структура категорий для Words, Sentences, Idioms, Games

### 📁 `types/` - TypeScript типы
- **`index.ts`** - Основные типы проекта

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

**`app/words/[categoryId]/[topicId]/page.tsx`**
- Динамическая страница для подкатегорий
- Отображение активностей в сетке 2x2
- Кнопка "← Back to Words"

### 📝 Раздел Sentences  
**`app/sentences/page.tsx`**
- Категории: A1 to C2, Phrasal verbs, Don't say: Very easy, Slang/Modern English
- Кнопка "← Back to Home"

### 💬 Раздел Idioms
**`app/idioms/page.tsx`**
- Категории: Food, Weather, Emotional, Body Parts, Animal, Business, Slang idioms
- Кнопка "← Back to Home"

### 🎮 Раздел Games
**`app/games/page.tsx`**
- Игры: Wodrle, Memory, Negotiations
- Заглушка "Games are in progress"
- Кнопка "← Back to Home"

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
- Заглушка "Coming Soon" для магазина
- Кнопка "← Back to Home"

### ⚙️ Раздел Settings
**`app/settings/page.tsx`**
- Настройки: Sound Effects, Voice Over (заглушки)
- Кнопка удаления аккаунта
- Кнопка "← Back to Home"

### 🔐 Авторизация
**`app/auth/login/page.tsx`** - Страница входа
**`app/auth/signup/page.tsx`** - Страница регистрации

### 💳 Премиум
**`app/premium/page.tsx`** - Страница покупки премиум

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
- A1 to C2 (бесплатно)
- Phrasal verbs (премиум)
- Don't say: Very easy (премиум)
- Slang/Modern English (премиум)

### Idioms (IDIOM_CATS)
- Food Idioms (бесплатно)
- Weather Idioms (бесплатно)
- Emotional Idioms (премиум)
- Body Parts Idioms (премиум)
- Animal Idioms (премиум)
- Business idioms (премиум)
- Slang idioms (премиум)

### Games (GAME_CATS)
- Wodrle (премиум)
- Memory (премиум)
- Negotiations (премиум)

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
