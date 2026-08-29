# Najdeah book template — how to use it

Starting file: `NajdeahBook.dc.html` (cover, half-title, contents, content page). A4 pages, 420×594 at screen scale.

## Follow these, in order
1. **Workflow — `../../skills/Najdeah-book-workflow.md`** (binding, step by step):
   questions (language, title, topics, page count, cover, palette) → research → write in Najdeah Writing →
   Chapter 1 → review → approval → next chapter → … → last chapter approved → design → HTML → wait for approval → PDF.
   Never invent a cover, a palette or a design system. Never skip ahead of an approval.
2. **Writing voice — `../../skills/Najdeah-writes.md`**: practitioner-mentor voice, rule of thumb → formula →
   worked example on real datasheet values → rounded buildable number → cited clause → practical decision.
   Never invent datasheet values, standards or references.
3. **Design — the bound Najdeah Books design system.** Colours, type, spacing, page furniture come from it only.

## Choices to make before designing
- **Cover:** pick one of the ten in `../../Book Covers.dc.html` (ids `1a`–`1j`). Copy its photo, crop, accent and title-block placement.
- **Palette:** pick one of the ten (`2a` in the same file). Swap the `palette-01-orange` class on the template wrapper
  for the matching class in `../../assets/palettes.css`. One palette per book; never mix.

## Language
- Arabic: fully RTL, English numerals (0–9), technical terms stay English (Voc, MPPT, kW, IEC, NEC).
- English: LTR. Mixed books: Arabic RTL, English LTR.
- Author: **Nooraldean Najdeah** / **نورالدين نجديّة**.

Machine-readable cover and palette data: `../../assets/cover-series.json`.
