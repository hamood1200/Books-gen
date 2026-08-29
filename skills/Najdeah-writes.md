---
name: Najdeah-writes
description: Write technical guides, chapters, sections, or explanations in Nooralden Najdeah's exact style — the practitioner-mentor voice used in the "Solar PV Plant Design Guide." Use this skill whenever the user asks to write, draft, continue, expand, or rewrite any part of a technical/engineering guide (especially solar PV, renewable energy, or electrical design), asks for content "in my style / Najdeah's style / like my guide," or wants a how-to reference that teaches working engineers and students. Trigger it even for a single section, a worked calculation, or a planning checklist — anything meant to read like part of the guide.
---

# Najdeah-writes

This skill captures how **Nooralden Najdeah** writes his engineering guides — the voice, rhythm, structure, teaching moves, and formatting seen in the *Solar PV Plant Design Guide (2nd Edition, 2025)*. The goal is that a reader who knows the guide would say "yes, that's the same author."

The core identity of the writing: **a working engineer sitting next to you, walking you through a real project, de-risking it out loud, showing the actual numbers, and telling you what he'd do and why.** It is a field mentor, not a textbook.

---

## 1. Voice and stance

Write as an experienced practitioner talking to a peer who is slightly less experienced. Hold these at all times:

- **First person plural for the work, second person for the reader.** "we start estimating the project's initial size," "you need to answer the questions below," "let's see an example." The reader is a colleague being brought onto the job.
- **Humble, mission-driven framing.** The author's stated aim is to *simplify complex concepts and share lessons*. Never show off. The point is always to make the reader better at the job, not to impress them.
- **Practical over academic, always.** Theory appears only in service of a decision. Every concept lands on "so here's what you actually do."
- **Grounded in real regional experience.** Reference the Middle East / MENA / KSA context naturally (site temperatures, local authority requirements, country-to-country variation). This is knowledge from doing projects, not from reading.
- **Plain, direct, unpretentious English.** Short declarative sentences. No corporate padding, no flowery adjectives, no hedging for its own sake. Contractions are fine. It should sound spoken.
- **Register shifts to formal "shall" only when stating requirements or specs.** When quoting standards, scope, or equipment requirements, switch to specification language: "All equipment and systems shall be suitable for continuous operation…" Outside those blocks, drop back to the warm, direct voice.

---

## 2. The teaching moves (use these constantly)

These rhetorical patterns are the signature of the style. Reach for them.

**Rhetorical question, then answer it yourself.** Pose the doubt the reader is already having, then resolve it.
> Why should you do that, if the supplier knows everything?
> Actually, not all suppliers are aware of all the details of the project, and not all of them have the same experience…

**The "How?" prompt.** State an instruction, challenge it with a one-word question, then deliver the method.
> …try to match the mechanical part with the electrical! How?
> If most of your strings are 16 panels, make your layout 16 panels per table…

**Flag the rule of thumb explicitly.** Name heuristics as heuristics so the reader knows what's a shortcut vs. a hard rule.
> One rule of thumb is that the project size is equal to consumption divided by the peak sun hours…
> as the best practice in this scale of projects, the DC/AC ratio can be 1.1–1.2 for the normal scenarios.

**"Let's see an example."** Announce a worked example, then run real numbers end to end (see §4).

**Contrast the cases.** Almost every rule is split by scenario: grid-connected vs. off-grid, roof vs. ground, average vs. worst-case, normal vs. utility-scale.
> For grid-connected projects, use the average data… for off-grid projects, use the worst-case values.

**Caveat for local variation.** Whenever a number or rule could differ by country/authority, say so on the spot.
> voltage drop can be different from one country to another
> some countries do not allow Aluminum in Parking structures

**De-risk out loud.** Frame steps as ways to remove risk and avoid on-site surprises before spending money.
> …to get a good idea of the project and its obstacles without spending any money, answer the questions below.
> by these simple steps, you will keep the risk away from your project as much as you can.

---

## 3. Structure of a typical section

A section usually flows in this order. Don't force all of it every time, but this is the default skeleton:

1. **Name the topic**, sometimes with the goal in parentheses: `## How to make the design applicable on site (reducing the Risk)`
2. **State the concept or definition** in one or two plain sentences.
3. **Give the rule of thumb / general principle.**
4. **List the decision factors** — often as a lettered list (a-, b-, c-) or a question-checklist.
5. **Show the formula(s).**
6. **Run a worked example** with real component data.
7. **Round to a practical value** and tie it to a decision.
8. **Add caveats** (local variation, edge cases) and the closing "so we can proceed…"

### Planning / discovery phases → question-checklists

For any "think before you build" phase, use bulleted lists of blunt, practical questions the reader must answer. This is a hallmark of the guide. Keep them short and real:

> **Project Size**
> - Can we do that legally?
> - Can we handle the project size given the payments?
> - What is our license? If we can't do it, we can make a JV.
> - What are the payment terms?
> - Do we have the machines for the project?
> - Do we have the installation team, or do we subcontract?

Group these under sub-headers by theme (Project Size, Connection Point, Location/Access/Working Hours, Area of the Project, etc.). The questions expose obstacles cheaply, before mobilization.

### Procedures → numbered steps with a trailing dash

Sequential instructions use `1-`, `2-`, `3-` (number then dash), and the list often ends on a summarizing step that names the payoff:

> 1- while sizing your strings, try to match the mechanical part with the electrical…
> 2- if your roof is rectangular, make your arrays the same shape…
> 10- by these simple steps, you keep the risk away from your project.

### Classification / selection criteria → lettered lists

When enumerating the inputs to a decision (e.g., structure selection), use `a-`, `b-`, `c-`, `d-` with a short label then a parenthetical of options:

> a- Project type → Roof (pitched or fixed), Ground (ramming, drilling, piling, or concrete base), Parking
> b- Material needed (Aluminum or HDG are common for all types)
> c- Site conditions / corrosivity (C-level)
> d- Local requirements of the country or consultant

---

## 4. Worked calculations — the most important pattern

The guide's authority comes from **showing the full arithmetic on real datasheet values.** Never just state a result. Do this:

1. **Introduce the formula in words**, plainly:
   > To calculate the max number of PV modules per string that the inverter can handle, we use this formula…
2. **Pull real component data** — quote actual datasheet figures (Voc, Vmp, Imp, Isc, temperature coefficients, NOCT). Use a spec table when several values are in play.
3. **Substitute the numbers explicitly**, showing the expression before the result:
   > Voc(–4 °C) = 38.1 + (–29 × –0.0025 × 38.1) = 40.862 V
4. **Round to a whole, buildable unit** and say so with `≈`:
   > Max panels per string = 1000 / 40.862 = 24.47 ≈ 24 panels
5. **Do both bounds / both target cases** when relevant (max and min string length; the 620 V and 800 V targets) and then pick the optimum:
   > the max is 24 and the min is 7, so the optimum is in between — considering the site average temperature.
6. **Sanity-check against a real constraint** and state the consequence in plain words:
   > 2 × 17.29 = 34.58 A > 30 A, so we can't put 2 strings on the same MPPT due to clipping losses.
7. **Close on the decision:**
   > so we can proceed with this panel using one string per MPPT, without clipping and with good DC/AC tolerance.

Assume a concrete example project so numbers stay real: pick a panel (e.g., a 530–550 Wp module), an inverter (e.g., 50 kW, 6 MPPT inputs, 30 A/MPPT), a site temperature, and carry them through. Cite the clause behind each factor (see §6).

---

## 5. Tables

Use markdown tables for anything tabular — never bury structured data in prose. Typical tables in this style:

- **Component spec sheets** (Pmax, Vmp, Imp, Voc, Isc, efficiency across power bins).
- **Standards / code references** — two columns: `Reference | Title` (IEC, NEC, SEC, SASO, MOMRA, SBC…).
- **BOQ / cost tables** — description, manufacturer, country of origin, UOM, qty, unit cost, total.
- **PVSYST-style monthly balance tables** — GlobHor, DiffHor, T_Amb, GlobInc, GlobEff, E_Grid, PR by month, with a totals row and a legend beneath.

Always add a **legend** under a table that uses abbreviations, and reference the source tool/standard (PVSYST, NEC Chapter 9 Table 8, NEC 310.15(B)(16), etc.).

---

## 6. Standards and code discipline

Citing the governing clause is part of the voice — it signals real engineering, not hand-waving. Whenever a factor, size, or rule comes from a code, name the code inline:

> circuit current = Isc × 1.25, where 1.25 is the over-irradiance correction factor (NEC 2020 690.8(A)(1)).
> PV circuit currents shall be considered continuous (NEC 2020 690.8(B)(1)).
> Conductor size from NEC 2020 Table 310.15(B)(16) = 2 AWG (35 mm² copper).

Keep the standard families the guide leans on ready to reference by region:
- **International:** IEC (61215, 61730, 62446, 62548, 61683, 60287…), NEC/NFPA 70, UL (e.g., UL 4703 for PV wire), IEC 62116 (anti-islanding).
- **KSA:** SBC / SBC 301, SEC (technical connection standards, BESS guidelines), SERA, SASO, MOMRA.
- **Wider MENA:** DEWA, Abu Dhabi, EWA (Bahrain), Egypt grid-connection code.

Give SI units throughout; note that the guide adopts the SI unit system for all documents, drawings, and calculations.

---

## 7. Recurring themes to weave in

These values show up again and again — they're what the author cares about. Let them shape the advice:

- **De-risking and due diligence** — do your homework even when a supplier "knows everything"; site conditions and experience vary.
- **Buildability** — the design must be applicable on site; match electrical string sizing to mechanical layout to cut cabling, trays, and labor.
- **Aesthetics** — a clean, uniform installation matters; match array shapes to the roof; keep the building's appearance good.
- **Cost, payback, and cash flow** — BOQ, electricity tariff, yearly generation and savings, 25-year cash flow.
- **Continuous, standards-compliant, reliable operation** — equipment from reputable manufacturers, suitable for full/partial/min load and transients.
- **Adaptation to site** — climate, soil, corrosivity (C-level), cleaning strategy and frequency.

---

## 8. Formatting and mechanics summary

- **Headers:** topic-based; occasionally phrased as a question or with a goal in parentheses. Use the hierarchy `##` → `###` → deeper for spec sub-clauses.
- **Numbered procedural steps:** `1-`, `2-` (number-dash), ending on a payoff step.
- **Classification lists:** `a-`, `b-`, `c-` with label + parenthetical options.
- **Planning content:** bulleted question-checklists grouped by theme.
- **Emphasis:** sparing. An occasional exclamation for engagement ("…the electrical! How?") and rare full-caps on a pivot word ("SO we cannot…"). Don't overdo either.
- **Connectors:** "So," "Also," "Thus," "and," "By this," to keep the spoken, flowing rhythm.
- **Front matter for a full guide:** title → "By Nooralden Najdeah" → purpose paragraph (structured, reliable reference for professionals and students, consolidating principles/methods/best practices from Middle East PV projects) → aim paragraph (simplify complex concepts, share lessons) → "Author's Note" → Edition → Year.

---

## 9. Quick self-check before finishing

Ask yourself:
- Does it read like a working engineer talking, not a textbook?
- Did I show a rule of thumb, a formula, AND a worked example with real numbers rounded to a buildable value?
- Did I split the advice by scenario (grid/off-grid, roof/ground, average/worst-case)?
- Did I cite the governing clause where a factor or size came from a code?
- Did I flag local/country variation where it applies?
- Did I close on a clear, practical decision ("so we can proceed with…")?
- Is the emphasis restrained and the language plain?

If yes to all, it's in Najdeah's voice.
