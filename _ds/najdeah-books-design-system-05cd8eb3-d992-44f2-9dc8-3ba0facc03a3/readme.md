# Najdeah Books Design System

Najdeah publishes practical technical books and guides for engineers working in solar PV across the MENA region, written by **Nooralden Najdeah** — a renewable-energy engineer and trainer. The books are the product: A5-proportion, print-first, heavy on checklists, tables, standards references and pasted software output (PVsyst, datasheets). They are set in InDesign, in Arabic-locale documents, and published in editions ("Second Edition · 2025").

This design system was extracted so new books in the series look identical to the existing one.

## Source

- `uploads/solar power plant guide v2.pdf` — *Solar PV Plant Design Guide, Second Edition (2025)*, 43 pages, produced with Adobe InDesign 15.0, document language ar-SA. **This is the only source provided.** Every colour, size, layout rule and asset below was measured or extracted from it.
- No codebase, Figma file or brand manual was provided. There is no web or app product — the brand's only surface is the printed/PDF book.

## Index

- `styles.css` — the one file consumers link; imports everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `assets/` — logo (dark / white / original), cover artwork, cropped cover photography and interior photography, page watermark graphic.
- `components/book/` — the book primitives: `BookCover`, `PartOpener`, `BookPage`, `RunningHeader`, `PageFolio`, `SectionHeading`, `SubHeading`, `BodyText`, `BulletList`, `SpecTable`, `TocList`, `FigureBlock`, `AuthorBio` (each with `.d.ts` + `.prompt.md`; `book.card.html` is the specimen).
- `ui_kits/guide-book/` — page-accurate click-through recreation of the source book (6 pages).
- `templates/najdeah-book/` — starting template for a new book (cover, half-title, contents, content page).
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `SKILL.md` — Agent-Skills wrapper for use outside this project.

## Content fundamentals

The voice is a working engineer talking to another engineer — instructional, plainspoken, occasionally blunt.

- **Person:** first-person plural for shared work ("we can reduce the risk as follows", "so, to get a good idea of the project… you need to answer the questions below"), second person for instructions ("Read the specs carefully", "Do not leave the site before check everything").
- **Mood:** imperative. Rules are stated as rules, and warnings are repeated for emphasis — "Do Not Assume anything you don't know what it is." appears twice in the same list, deliberately.
- **Form:** short paragraphs, then a checklist. Most pages are questions the reader must answer ("Can we do that legally?", "Where to store the material safely"), or numbered procedures ("1- Define the PV panels characteristics", "2- Define the Inverter characteristics as well").
- **Casing:** sentence case throughout, inconsistently applied — headings sometimes capitalise mid-phrase ("How to make the Design Report"). All-caps is reserved for report-section labels ("DESIGN SUMMARY", "DC SIDE DESIGN details") and standards names (NEC, IEC, SASO, MOMRA).
- **Numbers and units:** always with units and a citation ("X AWG , X mm² — NEC 2020"; "1.1-1.2 for the normal scenarios"). Placeholders in template tables are literal "X".
- **Rules of thumb are named as such:** "One rule of thumb is that the project size is equal to consumption divided by the peak sun hours."
- **No emoji, no exclamation-mark marketing, no metaphor.** Occasional rhetorical question used as a hinge: "Why should you do that, if the supplier knows everything?"
- **Light, unpolished grammar** (non-native English) is part of the voice. When writing new copy, stay simple and direct rather than imitating errors.
- **Author framing:** the author's name is a mark. It appears on the cover ("By Nooralden Najdeah"), on the half-title framed in em dashes ("— Nooralden Najdeah —"), and in the running head of every recto page.

## Visual foundations

**Colour.** Four brand colours do all the work. The cover gradient runs left to right through magenta `#c42a60` → crimson `#e2334e` → orange `#f4642f` → light orange `#fa8a3c`; deep navy `#142846` is the diagonal cover band and the edition bar; teal `#1a7f85` owns the interior (section capsules, folio badges, contents-row tint `#e6f1f1`); orange returns inside as sub-heading text and the 1.5px hairline rule under running heads. Gold `#9c7c46` appears only in the logo diamonds; cream `#faf0dc` only behind the "About the author:" label. Body text is near-black `#161616`. Two background colours per book maximum: white and the pale teal page tint.

**Type.** Two families. Body, headings, tables, folios and contents are all set in Times New Roman (regular and bold) — a serif book face, justified with hyphenation, 11.5/1.42 at page scale. The cover title alone is a heavy humanist sans (TheSans-Bold), letterspaced tight and given a white/warm double shadow. Section headings are bold serif, white, inside the teal capsule. Sub-headings are *not* bold — they are the same size as body text, coloured orange. Logotype lettering ("NAJDEAH") is serif small-caps at 0.34em tracking.

**Layout.** Fixed A5-proportion page (modelled here at 420×594px), 30px side margins, 22px head, 26px foot. Single column, full measure, no grid columns. Running heads alternate: verso = book title centred over a short orange rule; recto = logo left, author's name right over its own rule. Folio badge is centred at the foot. Figures run full column width. Nothing floats or bleeds on interior pages except the faint watermark; covers and part openers are full-bleed.

**Backgrounds.** Interior pages carry a very subtle white → pale-teal vertical wash, and some pages a faint (14% opacity) network/constellation graphic full-bleed behind the text. No repeating patterns, no textures, no noise. Covers use one large linear gradient plus one solid navy shape.

**The cover.** One layout, used for every title. A portrait project photograph covers the whole sheet — a different frame from the half-title that follows it. A navy protection gradient sits over it — strong at the top (0.78) so the white logo reads against bright sky, clearing to nothing at 44%, then building again to 0.94 at the foot so the title block reads over the image. The logo sits top-left at the page margin. The title block starts at 53.5% height, opened by a 64px orange rule, and runs: title in the display sans (30px, -0.01em), byline, then a short justified blurb capped at 270px. A navy edition bar 34px tall crosses the foot with edition left and year right. There is no white panel and no cut-out shapes — the photograph does the work.

*(The printed Second Edition used an earlier construction — magenta→orange gradient field with a cut-out photo swoosh. That layout was retired in favour of this one; see git history if it is needed.)*

**Shape language.** Beyond the cover's large ellipses, two radii only, and they are extremes: the pill (999px — headings, contents rows, buttons in the kit viewer) and the large 34px asymmetric corner on cover photo frames (top-left and bottom-right rounded, the other two square). Everything else is square: tables, figures, photo bands. Folio badges use a tiny 3–4px radius. The cover's navy band and the white blurb panel are cut with large elliptical curves, not straight diagonals.

**Cards / containers.** There are no cards in the source — this is a book. The nearest equivalents are the teal capsule, the cream label capsule and the hairline table. Containers have borders (0.5px hairline `#d8dcdc`, tables `#9a9a9a`) rather than shadows. The only shadow in the system is the page sheet itself when previewed on screen (`--shadow-page`), plus the cover title's text shadow.

**Imagery.** Real project photography, warm and sunlit: sunset over module rows, ground-mount arrays under a blue sky, close crops of panels and structure. Colour is warm and slightly desaturated in the mid-tones; no black-and-white, no duotone, no grain. Photos are either full-bleed (openers) or framed in a 5px white border with the asymmetric radius (covers). Figures are honest screenshots — PVsyst outputs, datasheet crops, Excel charts — pasted at column width with a hairline frame.

**Transparency & blur.** Used once: the watermark graphic at 14% opacity. No frosted glass, no blur.

**Motion.** The source is print, so there is no motion language. Screen recreations use the minimum: 120–200ms `cubic-bezier(.4,0,.2,1)` on background colour only. Hover = teal tint background (`#e6f1f1`) or 0.82 opacity on images; press = 1px downward nudge. No bounce, no scale-up, no fades on page changes.

**Links.** Teal `#1a7f85`, darkening to `#136066` on hover.

## Iconography

The source book uses **no icon set at all** — no icon font, no SVG sprite, no PNG icons, no emoji, no unicode symbol furniture beyond the bullet character `•` and the em dash used as a decorative frame ("— Nooralden Najdeah —"). Numbered steps are written as "1-", "2-", not as numbered glyphs. Diagrams are photographs of software output rather than drawn icons.

**Rule for new books:** stay iconless. If a UI surface ever needs icons (a web store, a reader app), add them as a documented, flagged addition rather than assuming one — nothing in the brand implies a set.

## Intentional additions

- `BookPage`, `RunningHeader`, `PageFolio`, `FigureBlock` — the source has no component library, so the page furniture was factored out of the printed layout into reusable primitives. Every one corresponds to a literal, measured element of the printed book.

## Substitutions to confirm

- **Times New Roman → Tinos** (Google Fonts, metric-compatible clone). Safe, but the licensed original is preferable for print.
- **TheSans-Bold → Fira Sans ExtraBold** for cover titles. This is the one visible compromise: TheSans (LucasFonts) is commercial and was embedded as a subset only. Please supply the licensed font file.
- Logo **white** and **transparent-background** variants were generated mechanically from the embedded original (`assets/logo-najdeah.png`, 508×194). If you have the vector original, drop in the SVG.
