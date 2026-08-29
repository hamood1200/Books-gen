# Najdeah Books — project rules

## Building a book: follow the workflow, step by step
`skills/Najdeah-book-workflow.md` is binding for every new book. Follow it in order, without skipping:
questions (language, title, topics, page count, cover, palette, project size, private-sector type) → research →
top-10 problems list → write every chapter in Najdeah Writing → humanize → Google Doc → my review → approval →
design with this design system → HTML first, tell me it's ready → wait for my approval → PDF → improvement suggestions.
Never invent a cover design, a palette or a design system. Never start the design before I approve the Google Doc.
Books are A4. Arabic is fully RTL with English numerals and English technical terms (Voc, MPPT, kW, IEC, NEC).
Author: **Nooraldean Najdeah** / **نورالدين نجديّة**.

## Language: one per book, then offer the other
Ask for **English or Arabic** — one language, all the way through. Never mix the two in one volume.
Only after the final PDF is delivered, ask: "Do you want the same book in the other language?"
If yes, reuse the same cover, palette, layout and research — only the text changes.

## Arabic / English type parity
Arabic renders visually larger than Latin at the same `font-size`, so never reuse the English numbers.
**Arabic px = English px × 0.80**, rounded to the nearest 0.5px, with a taller line-height (1.7–1.8):
body 11.5 → 9.5, sub-heading 12.5 → 10.5, section pill 15 → 12.5, chapter title 26 → 21,
table 9.5 → 8, header/footer 10 → 8.5, cover title 30 → 24, cover blurb 11.5 → 9.5.
English terms inside Arabic text (`MPPT`, `kW`, `NPV`) go in `<span class="en">` at 1px smaller than the Arabic around them.
Formula and code blocks keep the English size. Full table in `skills/Najdeah-book-workflow.md` §7.

## Asking the questions
Ask every setup question through the `AskUserQuestion` popup, grouped up to 4 at a time — not as plain chat text.
Before asking which cover and which palette, **show them**: render the ten covers `1a`–`1j` as real thumbnails
and the ten palettes as colour swatches on a canvas (`show_widget`, or an Artifact if I want to zoom around),
then ask with the popup. Never describe a cover in words instead of showing it.

## Show a live checklist
From the end of the questions until the PDF, keep a visible checklist of every step and update it as each one
finishes — questions → research → top-10 list → chapters (n of m) → humanize → Google Doc → my review →
design → HTML → my approval → PDF → improvement suggestions → other-language offer. Never work silently.

## Write the whole book, humanize it, then send a Google Doc
No chapter-by-chapter approval. Write every chapter first, run the full text through `skills/humanizer/SKILL.md`
(rewrite only — never change a fact, number, standard or citation, and never touch formulas, code or tables),
then create a Google Doc with `GOOGLEDOCS_CREATE_DOCUMENT_MARKDOWN` via Composio and send me the link.
Wait for my OK before starting design. Revisions update the *same* doc with `GOOGLEDOCS_UPDATE_DOCUMENT_MARKDOWN`.

## Writing voice
`skills/Najdeah-writes.md` — use it for all book content: practitioner-mentor voice, rule of thumb → formula →
worked example on real datasheet values → rounded buildable number → cited clause → practical decision.
Never invent datasheet values, standards or references.

# Cover series — house rules

Design system: Najdeah Books (bound at `_ds/najdeah-books-design-system-05cd8eb3-d992-44f2-9dc8-3ba0facc03a3/`).
Cover library lives in `Book Covers.dc.html` — 10 approved covers, ids `1a`–`1j`. Reuse these, don't reinvent the layout.

## The one cover construction (A4 — 420×594 at screen scale, the A-series 1:√2 ratio)
1. Full-bleed portrait project photograph, `object-fit: cover` + a chosen `object-position` crop.
2. Navy protection gradient over it: `linear-gradient(180deg, rgba(20,40,70,.78) 0%, rgba(20,40,70,0) 44%, rgba(20,40,70,.94) 100%)`.
   Raise the mid stop to ~.52 when the title block sits over a bright sky.
3. White Najdeah logo, `left: 30px; top: 22px; width: 120px`.
4. Title block, opened by a 64px × 4px accent rule (or a 4px vertical rule at the left):
   title Fira Sans ExtraBold 30px / -0.01em white with `0 2px 8px rgba(0,0,0,.5)` shadow;
   byline Tinos 13px; blurb Tinos 11.5/1.42, `rgba(255,255,255,.86)`, max-width 270px, justified.
5. Navy edition bar at the foot: 34px tall, `#142846`, edition left / year right, Tinos 10.5px, 0.08em tracking.

## What varies per book
Photograph + crop, accent colour, title-block placement. Nothing else.
- Accents (brand only): `#f4642f` orange, `#c42a60` magenta, `#e2334e` crimson, `#fa8a3c` light orange, `#1a7f85` teal, `#9c7c46` gold.
- Placements in use: 53.5% (canonical), 58%, foot-anchored (`bottom: 78px`), head (`top: 96px`), centred, right-aligned, vertical rule at the left.

## Book template
`templates/najdeah-book/NajdeahBook.dc.html` — the starting file for a new book (cover, half-title, contents, content page),
updated to the approved cover construction, A4 pages, the palette variables from `assets/palettes.css`
(swap the `palette-01-orange` class on the wrapper) and the byline "By Nooraldean Najdeah".

## Palettes
Ten approved palettes are shown as `2a` in `Book Covers.dc.html` — accent + navy edition bar + interior tint.
Single-accent: orange, magenta, crimson, light orange, teal, gold (cream interior).
Two-accent: orange/magenta, teal/orange, crimson/light-orange, navy-led (navy accent, orange inside).
Pick one palette per title; never mix palettes within a book.

## Imagery rules
Photos live in `assets/` and `uploads/`. Before using a photo: check it is ≥600px wide and carries **no stock watermark**
(several early uploads were Dreamstime previews and were removed from the covers). Warm, sunlit, real project photography only.

## Titles
Covers currently read "Book Name" as a placeholder. When real titles arrive, replace the title text and the blurb;
leave layout, crops and accents alone unless asked.
