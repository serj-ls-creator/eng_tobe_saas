# Eng Tobe SaaS

Modern English learning platform built with Next.js 14, featuring interactive activities, gamification, and premium content.

## Features

### Learning Sections
- **Words** - Vocabulary building with categories (Basic/Advanced, Synonyms, Antonyms, etc.)
- **Sentences** - Sentence construction from A1 to C2 levels
- **Idioms** - Learn idioms with interactive flip cards
- **Games** - Educational games (Wordle, Memory, Negotiations)

### Interactive Activities
- **Cards** - Flip card learning with progress tracking
- **Multiple Choice** - Test understanding
- **Synonym Pair** - Match words with meanings
- **Fill the Blanks** - Complete sentences
- **Find the Mistake** - Error identification
- **Sentence Builder** - Construct sentences

### Premium Features
- Tiered access (Free/Premium)
- Progress tracking and streaks
- Points system
- Leaderboards
- Advanced content categories

### Technical Features
- **PWA** - Installable on mobile devices
- **Responsive Design** - Works on all screen sizes
- **Real-time Progress** - Database-driven tracking
- **Payment Integration** - Lemon Squeezy subscriptions

## Tech Stack

### Frontend
- **Next.js 14.2.35** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.7.2** - Type safety
- **Tailwind CSS 3.4.17** - Styling
- **Lucide React** - Icons
- **Radix UI** - Component primitives

### Backend & Database
- **Supabase** - Authentication and database
- **Supabase SSR** - Server-side integration

### Payments
- **Lemon Squeezy** - Subscription management

### Development Tools
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **ESLint** - Code linting

## Quick Start

1. **Clone and install**
   ```bash
   git clone <repository-url>
   cd eng_tobe_saas
   npm install
   ```

2. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
   - `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key
   - `LEMONSQUEEZY_API_KEY` - Lemon Squeezy API key
   - `LEMONSQUEEZY_WEBHOOK_SECRET` - Webhook secret

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
   api/                 # API routes
   auth/                # Authentication pages
   games/               # Game implementations
   idioms/              # Idioms learning
   sentences/           # Sentence construction
   words/               # Vocabulary building
 components/            # React components
   ui/                  # Base UI components
   layout/              # Layout components
   cards/               # Activity components
 data/                  # Learning content
   words/               # Word data by category
   idioms/              # Idiom collections
   games/               # Game data
 lib/                   # Utilities and helpers
 hooks/                 # Custom React hooks
 types/                 # TypeScript definitions
 constants/             # App constants
 supabase/              # Database schema and migrations
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Type checking

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
- **Free Content**: Basic vocabulary, fundamental idioms
- **Premium Content**: Advanced vocabulary, specialized idioms, games

### Activity Types
Each category includes multiple activity types designed for different learning styles and difficulty levels.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Documentation

- [STRUKTURA.md](./STRUKTURA.md) - Detailed project structure
- [CARDS_IMPLEMENTATION.md](./CARDS_IMPLEMENTATION.md) - Cards activity implementation guide

## License

This project is licensed under the MIT License.
