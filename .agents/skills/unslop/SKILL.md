---
name: unslop
description: >-
  Turns vibecoded, AI-looking UI into a clean, intentional interface with its own character.
  Use when polishing screens or refactoring UI to remove typical AI tells like purple gradients,
  glows, gradient text, emoji labels, "New ✨" badges, uppercase tracked labels, or uneven spacing.
---

# Unslop (Compact Edition)

Turns vibecoded, AI-looking UI into a clean, intentional interface with its own character. Use when polishing screens to remove typical tells like purple gradients, glows, gradient text, emoji labels, "New ✨" badges, uppercase tracked labels, or uneven spacing. Works on React, Tailwind, HTML and CSS.

## Core Rules & Philosophy
- **Quiet chrome:** Navigation, buttons, and text use neutral ramps and one accent. Nothing glows or competes unnecessarily.
- **One bright element:** Each screen has one clear focal point (like a rich chart or rendered component). Everything around it is quiet.
- **Real materials:** Components look like a real app with plausible data, clear hierarchy, and weight.

## 9-Step Refactoring Process

1. **Spacing:** Use a strict 4px grid for margins, paddings, and gaps. Equal elements share equal sizes. Space inside groups is smaller than space between groups. Remove one-off odd values (`mt-[13px]`).
2. **Color:** Build from a neutral graphite/warm ramp. Use three text roles (primary, secondary, muted). Keep one accent color exclusively for primary actions or key metrics. **Remove:** hue gradients on surfaces, gradient text, colored glows, shadows, and background blobs. Borders are quiet hairlines (6-10% opacity).
3. **Icons:** No emojis as icons or label decorations. Use a single icon set (e.g., Lucide) at one size and stroke width (16/18px, 1.5 stroke). Icons take text role colors, never individual random colors.
4. **Copy:** Headlines must be plain, direct, and specific to the product. **No:** exclamation marks, greeting headers (`Welcome back! 👋`), hype words (supercharge, seamless, AI-powered), or trailing periods on short labels/buttons.
5. **Type:** Keep weights between 400 and 600 (no heavy 700+ bold headers). Use sentence case instead of uppercase tracking (`Navigation` instead of `NAVIGATION`). Numbers use tabular figures (`tabular-nums`). No italic for emphasis.
6. **Layout:** Keep app proportions intact (no compressed center columns for full dashboards). Align long headlines to the left. Limit to one primary action and at most one secondary action.
7. **Details:** Match nested border radii. Use small keycaps for keyboard shortcuts. Charts sit on muted grids with mono labels, featuring a single accent for the active series. Stat cards display clean numbers and changes without unnecessary mini-icons.
8. **Visuals:** Remove decorative filler (floating orbs, abstract glowing grids). Show actual product previews, clean cards, or relevant UI components built with code.
9. **Motion:** Remove looping animations (`animate-pulse`), bouncy springs, and `hover:scale`. Keep fast, subtle state transitions (`transition-colors`, opacity/transform changes) that explain user interaction.

## Do Not
- Do not add new decorative trends (glassmorphism, heavy grain, neon borders) to replace old ones.
- Do not invent fake data or unverified marketing claims.
- Do not use a generic "template" look; let the product's purpose dictate the tone.
