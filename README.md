# Eng Tobe SaaS

Modern English learning platform built with Next.js 14, featuring interactive activities, gamification, premium content, and comprehensive language learning tools.

## Features

### Learning Sections
- **Words** - Vocabulary building with categories (Pronounce, Basic→Advanced, Synonyms, Antonyms, Formal→Informal, Rude→Polite, Time Words, Slang)
- **Sentences** - Sentence construction from A1 to C2 levels, Phrasal Verbs, Everyday Situations, Error Correction
- **Idioms** - Learn idioms with interactive activities across 7 categories (Food, Weather, Emotional, Body Parts, Animal, Business, Slang)
- **Games** - Educational games (Wordle, Memory, Negotiations)

### Interactive Activities
- **Cards** - Flip card learning with progress tracking
- **Multiple Choice** - Test understanding
- **Synonym Pair** - Match words with meanings
- **Fill the Blanks** - Complete sentences
- **Find the Mistake** - Error identification and correction
- **Sentence Builder** - Construct sentences
- **Letter Hunt** - Find missing letters
- **Word Check** - Verify word pairs
- **Unscramble** - Arrange letters correctly
- **Level Match** - Match sentence difficulty levels
- **Progression Match** - Advanced matching exercises
- **Error Hunt** - Find and correct errors
- **Listen & Pick** - Audio comprehension exercises
- **Sentence Pairs** - Match sentence pairs

### Premium Features
- Tiered access (Free/Premium)
- Progress tracking and streaks
- Points system with leaderboards
- Advanced content categories
- Audio pronunciation tools
- Technical support
- Contact forms
- **Spaced repetition system** (Recall) for optimized learning

### Technical Features
- **PWA** - Installable on mobile devices
- **Responsive Design** - Works on all screen sizes
- **Real-time Progress** - Database-driven tracking
- **Payment Integration** - Lemon Squeezy subscriptions
- **Audio Support** - Multiple TTS engines
- **Contact System** - User feedback and support
- **Technical Support** - Dedicated help section

## Tech Stack

### Frontend
- **Next.js 14.2.35** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.7.2** - Type safety
- **Tailwind CSS 3.4.17** - Styling
- **Lucide React 0.511.0** - Icons
- **Radix UI** - Component primitives
- **React Hook Form 7.53.0** - Form handling
- **Zod 3.23.8** - Schema validation
- **Vercel Analytics 2.0.1** - Performance tracking

### Backend & Database
- **Supabase** - Authentication and database
- **Supabase SSR** - Server-side integration

### Payments
- **Lemon Squeezy** - Subscription management

### Development Tools
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## Quick Start

1. **Clone and install**
   ```bash
   git clone <repository-url>
   cd eng_tobe_saas
   npm install
   ```

2. **Configure environment variables**

   Copy `.env.example` to `.env.local` and fill in the values:

   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
   - `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key

3. **Database setup**
   ```bash
   # Run the SQL schema in Supabase SQL editor
   cat supabase/schema.sql
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
eng_tobe_saas/
 app/                    # Next.js App Router pages
   api/                 # API routes (activity, checkout, me, points, premium, streak, webhooks)
   auth/                # Authentication pages (login, signup, reset-password, update-password)
   about/               # About pages (privacy-policy, terms-of-use)
   contact/             # Contact page
   games/               # Game implementations (wordle, memory, negotiation)
   idioms/              # Idioms learning with 7 categories
   sentences/           # Sentence construction (A1-C2, phrasal-verbs, everyday-situations)
   words/               # Vocabulary building with 8 categories
   premium/             # Premium subscription page
   profile/             # User profile page
   recall/              # Spaced repetition system
   store/               # In-app store
   more/                # Additional features
   technical-support/   # Support and help pages
 components/            # React components
   ui/                  # Base UI components (cards, buttons, modals, etc.)
   layout/              # Layout components (TopBar, BottomNav, ProfileSection)
   audio/               # Text-to-speech components (8 TTS engines)
   auth/                # Authentication forms
   cards/               # Activity components (FlipCard, IdiomFlipCard, PhrasalVerbFlipCard)
   games/               # Game-specific components
   words/               # Words section components
   sentences/           # Sentences section components
   about/               # About page components
   contact/             # Contact form components
   more/                # Additional features components
   technical-support/   # Support components
 data/                  # Learning content
   words/               # Word data by category (8 main categories)
   idioms/              # Idiom collections (7 categories × 3 levels × 10 idioms)
   games/               # Game data (wordle words, etc.)
 lib/                   # Utilities and helpers
   supabase-*.ts        # Supabase clients (browser, server)
   payments.ts          # Lemon Squeezy integration
   profile.ts           # Profile utilities
   use*.ts              # Custom hooks
 hooks/                 # Custom React hooks
 types/                 # TypeScript definitions
 constants/             # App constants and categories
 supabase/              # Database schema and migrations
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Type checking

### Main Tables
- **profiles** - User profiles and premium status
- **user_activities** - Activity completion tracking
- **user_points** - Points and achievements
- **user_streak** - Learning streaks

## Database Schema

### Main Tables
- **profiles** - User profiles and premium status
- **user_activities** - Activity completion tracking
- **user_points** - Points and achievements
- **user_streak** - Learning streaks

### Setup
Run the SQL from `supabase/schema.sql` in your Supabase project to create all necessary tables and RLS policies.

## Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
- All variables from `.env.example`
- `NEXT_PUBLIC_APP_URL` - Your production URL
- Lemon Squeezy webhook configuration

## Learning Content

### Categories Structure
- **Free Content**: Basic vocabulary, fundamental idioms, Wordle and Memory games
- **Premium Content**: Advanced vocabulary, specialized idioms, Negotiations game, advanced sentence exercises

### Activity Types
Each category includes multiple activity types designed for different learning styles and difficulty levels:
- **Words**: Cards, Synonym Pair, Multiple Choice, Letter Hunt, Word Check, Unscramble
- **Sentences**: Level Match, Progression Match, Error Hunt, Pairs, Phrases
- **Idioms**: Cards, Multiple Choice, Synonym Pair, Fill Blanks, Find Mistake, Sentence Builder, Listen & Pick
- **Games**: Wordle (4-8 letters), Memory (various categories and sizes), Negotiations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Documentation

- [STRUKTURA.md](./STRUKTURA.md) - Detailed project structure and implementation
- [CARDS_IMPLEMENTATION.md](./CARDS_IMPLEMENTATION.md) - Cards activity implementation guide

## Key Features

### Comprehensive Learning System
- **8 Word Categories**: From pronunciation to slang, covering all aspects of vocabulary
- **Dynamic Sentence Exercises**: A1-C2 levels, phrasal verbs, everyday situations
- **7 Idiom Categories**: 30 idioms per category across 3 difficulty levels
- **3 Educational Games**: Wordle, Memory, and Negotiations

### Advanced Interactions
- **13 Activity Types**: Cards, Multiple Choice, Synonym Pair, Fill Blanks, Error Correction, and more
- **Audio Support**: 8 different TTS engines for pronunciation practice
- **Progress Tracking**: Real-time database-driven progress monitoring
- **Gamification**: Points, streaks, and leaderboards
- **Spaced Repetition**: Intelligent recall system for optimized learning retention

### Modern Architecture
- **Next.js 14 App Router**: Latest React framework with server components
- **TypeScript**: Full type safety across the application
- **Supabase**: Authentication, database, and real-time features
- **PWA Support**: Installable on mobile devices with offline capabilities
- **Responsive Design**: Optimized for all screen sizes

## License

This project is licensed under the MIT License.
