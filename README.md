# Full-Stack Learning Portfolio

Building my way from Vanilla JavaScript to full-stack development —
one project per concept, no tutorial hell.

**Stack:** Vanilla JS → React → TypeScript → Node/Express → Neon Postgres → Next.js

Each project is built up to three times: vanilla → React → TypeScript, so this repo also documents how the same app evolves across technologies.

## Progress

### Phase 1: Vanilla JS

- [x] 01-digital-clock — setInterval, Date, DOM text updates
- [ ] 02-calculator — button events, state in variables
- [ ] 03-stopwatch — clearInterval, state flags
- [ ] 04-password-generator — Math.random, Clipboard API
- [ ] 05-quiz-app — arrays of objects, rendering from data
- [ ] 06-todo-list — CRUD, event delegation, localStorage
- [ ] 07-pomodoro-timer — state machine, combined timers
- [ ] 08-notes-app — editing items, first ES modules split
- [ ] 09-typing-speed-test — keydown events, WPM math
- [ ] 10-weather-app — fetch, async/await, loading/error UI
- [ ] 11-expense-tracker — map/filter/reduce, grouping, modules
- [ ] 12-form-validator — regex, validation messages
- [ ] 13-currency-converter — API + dropdowns, number formatting
- [ ] 14-memory-card-game — shuffling, matching logic, game state
- [ ] 15-image-gallery — modal, keyboard navigation
- [ ] 16-countdown-timer — Date math, interval logic
- [ ] 17-recipe-finder — debouncing, list rendering from API
- [ ] 18-drag-and-drop-kanban — DnD API, re-render from state
- [ ] 19-movie-search — pagination, API state patterns
- [ ] 20-mini-ecommerce-cart — derived state, totals, localStorage
- [ ] 21-flashcards-app — randomization, flip state
- [ ] 22-markdown-editor — parsing, live preview *(Stretch)*
- [ ] 23-calendar-app — grid rendering, nested loops *(Stretch)*
- [ ] 24-snake-game — canvas, game loop, collision *(Stretch)*
- [ ] 25-drawing-app — canvas, mouse events
- [ ] 26-chat-ui — message rendering, auto-scroll
- [ ] 27-mini-social-feed — nested data, localStorage
- [ ] 28-portfolio-website — component-like structure, responsive CSS

### Concept Checklist (Gate Before React)

- [ ] map, filter, reduce, find, some
- [ ] Destructuring + spread operator
- [ ] Arrow functions and callbacks
- [ ] Closures
- [ ] Event delegation
- [ ] async/await + try/catch with fetch
- [ ] localStorage with JSON
- [ ] ES modules (import/export across files)
- [ ] Never mutating data directly
- [ ] DevTools breakpoints debugging

### Phases 2–8

- [ ] Phase 2: React rebuilds
- [ ] Phase 3: TypeScript conversion
- [ ] Phase 4: Task Manager backend (Express + Neon)
- [ ] Phase 4: Expense Tracker backend
- [ ] Phase 5: JWT auth
- [ ] Phase 6: Deployed live
- [ ] Phase 7: Task Manager in Next.js
- [ ] Phase 7: Next.js portfolio centerpiece (Blog or Habit Tracker)
- [ ] Phase 8: DevOps (CI/CD, Docker)

## Project Index

| # | Project | Vanilla | React | TS | Notes |
|---|---|---|---|---|---|
| 01 | 01-digital-clock | [x] | [ ] | [ ] | |
| 02 | 02-calculator | [ ] | [ ] | [ ] | |
| 05 | 05-quiz-app | [ ] | [ ] | [ ] | |
| 06 | 06-todo-list | [ ] | [ ] | [ ] | becomes Task Manager |
| 10 | 10-weather-app | [ ] | [ ] | [ ] | API-key proxy later |
| 11 | 11-expense-tracker | [ ] | [ ] | [ ] | full ladder project B |
| 12 | 12-form-validator | [ ] | [ ] | [ ] | |
| 14 | 14-memory-card-game | [ ] | [ ] | [ ] | |
| 19 | 19-movie-search | [ ] | [ ] | [ ] | |
| 20 | 20-mini-ecommerce-cart | [ ] | [ ] | [ ] | |
| 26 | 26-chat-ui | [ ] | — | — | AI chatbot upgrade later |
| 28 | 28-portfolio-website | [ ] | — | — | rebuilt in Next.js |

*(Full 28-project list lives in the Progress checklist above; this table tracks only the convertible/core projects.)*

## Folder Naming Convention

All project folders follow the same naming convention:

- Two-digit project number (`01`, `02`, etc.)
- Lowercase letters
- Hyphens between words
- No spaces or underscores

Example:

```text
02-calculator/
├── vanilla/
├── react/
└── typescript/
```

This keeps project names consistent across the repository and makes it easy to compare how each project evolves across technologies.
