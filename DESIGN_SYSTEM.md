# Design system

This document describes the shared visual language for the signed-in application. The public landing page is intentionally out of scope and keeps its own visual treatment.

## Foundations

- **Typeface:** Inter for interface text. Keep the system IPA fallback for pronunciation symbols and phonetic text.
- **Layout:** Mobile-first app shell, centered at a maximum width of 430px. Use the shared page insets (`--space-page-x`, `--space-page-top`) and adapt layouts at existing responsive breakpoints.
- **Spacing:** Prefer Tailwind's 4px spacing scale. Use the shared page inset utilities for page boundaries; use consistent 2/3/4/6 spacing steps for compact, standard, card, and section gaps.
- **Shape:** Cards use `--radius-card` (16px). Controls use `--radius-control` (12px); pills remain fully rounded where their shape conveys status or category.
- **Surfaces:** `--color-background` is the app canvas, `--color-surface` is a standard card, and `--color-surface-raised` is a nested or elevated surface. `--color-surface-hover` is for quiet hover feedback; `--color-border` and `--color-border-subtle` provide standard and low-contrast outlines.
- **Text:** `--color-foreground` is primary text; muted text uses the zinc scale. Keep body copy readable and reserve tiny text for metadata.
- **Interaction:** Shared buttons and inputs use the current route accent for focus and primary actions. Keep visible focus, disabled, pressed, and hover states.
- **Feedback:** Success, error, warning, and neutral information keep semantic colors across every theme. A route accent must not replace correctness feedback.

## Route themes

Themes are applied by the signed-in app shell and inherited by nested pages and activities. Each route changes the accent family while retaining the same background, surfaces, typography, spacing, and component geometry.

| Section | Route | Accent | Direction |
| --- | --- | --- | --- |
| Home | `/home` | Pink `#FF3D71` | Energetic entry point; existing mixed-color highlights remain decorative exceptions. |
| My Vocabulary | `/vocabulary` | Purple `#A855F7` | Personal collection and review tools. |
| Games | `/games` | Yellow `#FFD93D` | Playful, high-visibility actions; maintain semantic game states. |
| Grammar | `/grammar` | Sky `#4FD1FF` | Clear instructional emphasis and examples. |
| Words | `/words` | Cyan `#00E5FF` | Vocabulary discovery and practice. |
| Sentences | `/sentences` | Green `#34D399` | Fluent, conversational practice. |
| Idioms | `/idioms` | Pink `#F472B6` | Expressive phrase learning. |
| Phrasal Verbs | `/phrasal-verbs` | Pink `#F472B6` | Follows the Idioms category treatment; topic icons use varied semantic colors. |
| Recall | `/recall` | Cyan `#00E5FF` | Intentionally follows Words styling. |
| Profile | `/profile` | Blue `#60A5FA` | Personal progress and account controls. |
| Store | `/store` | Amber `#FBBF24` | Premium and purchase actions. |
| More | `/more` | Neutral `#A1A1AA` | Utility pages and secondary navigation. |

## Tokens and implementation

Global values live in `app/globals.css` as CSS custom properties and are exposed to utility classes through `tailwind.config.ts`. The route accent tokens are `--color-accent`, `--color-accent-strong`, `--color-accent-soft`, and `--color-accent-foreground`; use `text-theme`, `bg-theme`, `bg-theme-soft`, and `border-theme` utilities when the accent is appropriate. Shared UI primitives live in `components/ui`; named layout and activity styles live in the `@layer components` section of `app/globals.css`.

When adding a page, use the shared components and token utilities first. Keep a local value only when it represents content-specific illustration, a semantic state, or a deliberate activity visualization. If such an exception is repeated, promote it to a named token or component and document its intent here.

## Migration status

- The signed-in app shell assigns route themes to nested paths; Recall inherits Words' accent.
- Foundation tokens are connected to Tailwind and shared Button, Input, Card, page-shell, top bar, streak/completion feedback, and bottom navigation styles.
- Secondary and outline buttons and input surfaces use the shared surface and border tokens; the app loading shell uses the same background tokens as the regular shell.
- Shared section hero panels now draw their accent from the active route theme.
- Recall tree surfaces use the shared card and border tokens, keeping Recall close to Words.
- Category icon containers in Words and Sentences trees and shared category cards use the same dimensions and control radius while retaining their topic colors.
- Repeated Grammar topic rows and the Tenses hero now use shared styles instead of duplicated gradient utility strings.
- Grammar lesson panels share a single `grammar-lesson-card` class that preserves their existing appearance.
- Grammar page labels, activity headings, and primary mistake-game actions use the Grammar route accent token; correctness feedback and difficulty colors remain semantic.
- Nested topic rows in Words and Sentences share a subtle surface token while retaining their progress-state border colors.
- Words and Sentences tree links use the shared `surface-hover` token for their hover background, preserving the existing contrast.
- Words, Sentences, and Idioms share the `category-icon` geometry while keeping each category's own icon color.
- Common idle answer options in Words, Sentences, and Idioms use `answer-option-idle`; correct, incorrect, selected, and disabled states stay local to each activity.
- Profile progress meters and Store plan panels share named component styles; Profile and More primary controls use their route accent tokens.
- CategoryCard metadata and most section hero labels use the app's cyan learning accent; Grammar headings use the route accent. Phrasal Verbs topic icons follow the Idioms category-card treatment, with topic-specific green, violet, blue, and orange colors.
- Activity pages now share the `activity-shell` width and page-inset rule while keeping activity-specific classes.
- This migration is incremental: unique lesson illustrations, game-specific visuals, semantic status colors, and some legacy page styles still use local values. Review those in context before replacing them; the public landing page remains out of scope.
