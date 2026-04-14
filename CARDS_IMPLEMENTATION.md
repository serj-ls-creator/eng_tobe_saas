# Cards Activity Implementation

## Overview
First interactive activity for learning word synonyms with flip cards functionality.

## Structure

### Data Files
- `/data/words/basicadvanced/people.ts` - Word database for People category
  - 10 subcategories × 10 words each
  - Each word has: basic, advanced, transcription, wrong answers

### Components
- `/components/cards/FlipCard.tsx` - Interactive flip card component
  - Front side: Basic word with "Basic" label
  - Back side: Advanced word with transcription and "Advanced" label
  - Smooth 3D flip animation
  - Cyan glow effect when flipped

- `/components/ui/CompletionModal.tsx` - Universal completion modal
  - Shows completion stats
  - Navigation options (Next, Back, Choose Different)
  - Reusable for all activities

### Pages
- `/app/words/[categoryId]/[topicId]/[subcategoryId]/cards/page.tsx` - Cards activity page
  - Loads words from data files
  - Navigation between cards (Previous/Next)
  - Progress tracking
  - Completion modal

## Features

### Card Design
- **Front**: Basic word, gray "Basic" label, "Tap to flip" hint
- **Back**: Advanced word, cyan "Advanced" label, transcription, "Expert Level" hint
- **Animation**: Smooth 3D flip with perspective
- **Effects**: Cyan glow and shadow when flipped

### Navigation
- Previous/Next buttons
- Progress bar (current/total)
- Back to subcategory link

### Completion
- Modal after completing all 10 cards
- Shows "10 of 10 completed"
- Options for next steps

## Current Implementation
- Works for People category only (basic-advanced/people)
- 10 subcategories: appearance, personality, emotions, relationships, actions, speech, thinking, social, energy, identity
- Each subcategory has exactly 10 words

## Next Steps
1. Add word data for other categories (World, Digital, Life, Mind)
2. Implement other activities (Transcribe, Unscramble, etc.)
3. Add progress tracking across sessions
4. Add audio pronunciation

## Usage
Navigate to: Words -> Basic Advanced -> People -> [Subcategory] -> Cards
Example: `/words/basic-advanced/people/appearance/cards`
