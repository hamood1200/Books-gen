# Najdeah social posts — book launch

Two ready artboards for announcing a finished book on LinkedIn and Facebook.

| File | What it is |
|---|---|
| `NajdeahSocialPost.html` | Both posts on one page: `#landscape` 1200×630 and `#square` 1080×1080 |
| `BookMockup3D.html` | The 3D hardback on its own — spine, page block, raking light |
| `reference/landscape-1200x630.png` | What the landscape post looks like when it is right |
| `reference/square-1080x1080.png` | Same for the square post |

Both files pull the tokens from `_ds/najdeah-books-design-system-.../styles.css` and the photos
and logo from `assets/`. Nothing else is needed to open them in a browser.

## Making a post for a new book

Change only the content. Leave the layout, the gradients, the glows, the accent tag and the
3D transforms alone.

1. **Cover** — the artboard contains a real copy of the book cover, so it must be *the same cover
   the book was designed with*: same photograph in `.front .photo`, same `object-position` crop,
   same accent colour on `.orule` / `.srule`, same title block placement. Never a different photo.
2. **Title, byline, blurb** — inside `.art`, matching the printed cover word for word.
3. **Spine** — `.stitle` carries the book title.
4. **Copy block** — the eyebrow (edition · year), the headline, one sentence of subtitle, and up to
   three pills. Pills state facts about the book: page count, the standards it cites, what it includes.
5. **Edition bar** — `Second Edition · 2025` in both the cover art and the eyebrow, kept in step.

## Language

The posts follow the language of the book. Never mix.

**Arabic edition:** add `dir="rtl"` to the `.post` elements, set the Arabic display and body faces from
the design system, reverse `#landscape .inner` to `grid-template-columns:430px 1fr` with the padding on
the right, and apply the Arabic type scale from `skills/Najdeah-book-workflow.md` §7 —
**Arabic px = English px × 0.80** with a taller line-height. At the sizes used here that means the
landscape headline drops 56 → 45px, the square headline 46 → 37px, the subtitle 20 → 16px, the pills
and eyebrow 15 → 12.5px, and the byline 18 → 14.5px. English technical terms stay English in
`<span class="en">` one px smaller. The cover art keeps the book's own Arabic cover sizes.

## Exporting

Screenshot each artboard at its exact pixel size — 1200×630 and 1080×1080, at 2× for a crisp upload.
Do not scale one into the other; each has its own composition.
