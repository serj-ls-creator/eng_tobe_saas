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
  - **`CompletionModal.tsx`** - Модальное окно для завершения активностей
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
- **`icons.ts`** - Функция получения иконок по названию
- **`idioms.ts`** - Idioms data utilities and level management

### 📁 `constants/` - Константы
- **`ui.ts`** - UI тексты и константы
- **`categories.ts`** - Структура категорий для Words, Sentences, Idioms, Games

### 📁 `data/` - Data files
- **`words/`** - Words data files
  - **`basicadvanced/`** - Basic to Advanced words by category
- **`sentences/`** - Sentences data files
- **`idioms/`** - Idioms data files (30 idioms per category)
  - **`food_idioms.ts`** - Food related idioms
  - **`weather_idioms.ts`** - Weather related idioms
  - **`emotional_idioms.ts`** - Emotional idioms
  - **`body_parts_idioms.ts`** - Body parts idioms
  - **`animal_idioms.ts`** - Animal idioms
  - **`business_idioms.ts`** - Business idioms
  - **`slang_idioms.ts`** - Slang idioms

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
- Категории: A1 to C2, Phrasal verbs, Everyday Situations, Don't say: Very easy, Slang/Modern English
- Кнопка "← Back to Home"

**`app/sentences/[categoryId]/[topicId]/page.tsx`**
- Динамическая страница для подкатегорий предложений
- Отображение активностей в сетке 2x2
- Кнопка "← Back to Sentences"

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
