# Ken Wachira — Basketball Coach Poster (React + Tailwind)

A static React rebuild of a poster design pulled from a shared Figma file,
built by breaking the visual design down into small, reusable components
and styling everything with Tailwind CSS.

---

## Poster chosen

**Ken Wachira — Basketball Coach**, from the shared Figma file

---

## Tech stack

- **React** — component-based UI
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — utility-first styling

---

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`) — open that
in your browser to see the poster.


## Project structure

```
figma-poster/
├── index.html
├── vite.config.js
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx                # composes all components with real content
│   ├── index.css              # Tailwind import + one small custom CSS class
│   └── components/
│       ├── PosterLayout.jsx   # outer container, background, grid, centering
│       ├── PosterImage.jsx    # photo + dark gradient fade overlay
│       ├── PosterHeading.jsx  # reusable heading (name + section titles)
│       ├── PosterBadge.jsx    # small role label under the name
│       ├── PosterSubtext.jsx  # reusable label + text/list block
│       └── CTAButton.jsx      # "Book a Training Session" button
└── README.md
```

## Component breakdown

| Component | Responsibility |
|---|---|
|`PosterLayout`| Full-screen black background, centers the poster, and lays out the two-column grid (left panel / right panel) |
|`PosterImage`| Displays the photo and the dark gradient fade at its base, so text sitting on top stays readable |
|`PosterHeading`| A flexible heading used twice in very different ways: the large name at the top, and each small orange-underlined section title on the right panel — driven entirely by props (`size`, `weight`, `underline`, `color`) |
|`PosterBadge`| The small "BASKETBALL COACH" role label under the name |
|`PosterSubtext`| The most-reused component — powers the "About Ken" paragraph and every label + text/list block on the right panel (Strength, Expertise, Coaching Focus, Main Focus ×2, Accolades) |
|`CTAButon`| The call-to-action button at the bottom of the poster ("Book a Training Session") |

No component has any text hardcoded inside it — all copy lives in
`App.jsx` and is passed down through props. Any element that repeats
visually across the poster (section titles, label+text blocks) is built
once as a component and reused with different props, rather than
copy-pasted JSX.


No component has any text hardcoded inside it — all copy lives in
`App.jsx` and is passed down through props. Any element that repeats
visually across the poster (section titles, label+text blocks) is built
once as a component and reused with different props, rather than
copy-pasted JSX.

---

## Styling approach

Styling is done almost entirely with Tailwind utility classes and abit 
of CSS for the CTAButton matched as closely as possible to the exact 
values pulled from Figma's Dev Mode / Inspect panel.

---

### The one custom CSS addition

`index.css` includes a small hand-written CSS class (`.cta-btn`) for the
button's hover animation — a smooth lift plus a soft orange shadow. This
specific combination was simpler to express as a few lines of plain CSS
than to assemble from individual Tailwind utilities, which is the one
exception to "Tailwind utilities only" in this project.

---

## Responsiveness

The layout is single-column below the `md` breakpoint (mobile, tested at
~375px) and switches to the two-column grid at `md` and above (desktop,
tested at ~1280px), using Tailwind's `sm:` / `md:` responsive prefixes
rather than separate components per screen size.
