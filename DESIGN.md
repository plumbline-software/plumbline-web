---
name: Northline Technologies
description: Black ink on white score paper; tall condensed title lettering, ruled rows, and one vertical north line as the only mark.
colors:
  ink: "#10141a"
  ink-2: "#353b45"
  now: "#2453d4"
  paper: "#ffffff"
  paper-2: "#f6f6f5"
  band: "#ececec"
  muted: "#5a616c"
  rule: "#d5d7db"
  field: "#8a909a"
typography:
  display:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 10vw, 6rem)"
    fontWeight: 560
    lineHeight: 0.9
    letterSpacing: "0.015em"
  headline:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 560
    lineHeight: 0.9
    letterSpacing: "0.015em"
  title:
    fontFamily: "Big Shoulders Display Variable, Arial Narrow, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 560
    lineHeight: 0.9
    letterSpacing: "0.015em"
  lead:
    fontFamily: "Public Sans Variable, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Public Sans Variable, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "tnum"
  label:
    fontFamily: "Public Sans Variable, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 650
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "32px"
  column-gap: "40px"
  row: "40px"
  section: "80px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-ink-hover:
    backgroundColor: "{colors.ink-2}"
  button-line:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.band}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-paper-hover:
    backgroundColor: "{colors.band}"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  cta-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "112px 32px"
---

# Design System: Northline Technologies

## Overview

**Creative North Star: "The Quiet Score"**

A quiet rendition of Systems Labanotation: the discipline of a dance score without its symbols. Pages are white score paper ruled in ink; titles are set in tall condensed caps like a score's title lettering; content sits in plain ruled rows on a twelve-column staff. The only drawn mark is the north line, one vertical stroke with a north tick, used as the wordmark's companion in header and footer.

Density is calm and editorial. Each section opens on a full-width ink rule with a display heading in the left seven columns and a lede bottom-aligned in the right five. Rows below are separated by light hairlines, never boxed. Colour is almost absent: ink, greys, and a single blue reserved for "now" (focus and caret). Motion is limited to state transitions.

The owner rejected the full notation (score diagram, patterned blocks, legend) as too busy. Keep the score's discipline; do not reintroduce its symbols.

**Key Characteristics:**
- Ink on white paper, one functional blue.
- Tall condensed uppercase display over a plain humanist sans for reading.
- Twelve-column ruled rows; no cards as structure.
- Square corners, 1px rules, no shadows.
- One mark: the north line.
- A dark ink closing band on every page except the contact page.

## Colors

A monochrome score: ink and greys on white, with one blue that only marks where the user is.

### Primary
- **Score Ink** (#10141a): headlines, body emphasis, section-opening rules, button borders and the ink button fill, the header's bottom rule, and the full-bleed closing band.

### Tertiary
- **Playhead Blue** (#2453d4): the focus-visible outline (2px, 3px offset) and the text caret in inputs. Nothing else.

### Neutral
- **Score Paper** (#ffffff): the page ground, outline-button fill, and text on the ink band.
- **Quiet Paper** (#f6f6f5): a ground for a full-bleed section (capabilities), the contact form panel, and the mobile menu row hover.
- **Pressed Paper** (#ececec): hover fill for the outline and paper buttons only.
- **Second Ink** (#353b45): ledes, row body copy, list text; the ink button's hover fill.
- **Margin Grey** (#5a616c): secondary meta (founder line, footer details, inactive nav, numerals, label terms).
- **Hairline** (#d5d7db): the 1px rules between rows and under list items.
- **Field Stroke** (#8a909a): input borders at rest and the resting underline of inline links.

### Named Rules
**The Playhead Rule.** Blue marks "now" (focus ring and caret) and does no other job. Never use it for links, buttons, fills, icons, or decoration.

**The Two Rules Rule.** Ink rules open and close structure (section heads, page titles, header, form sub-heads); hairline rules separate rows within it. Never swap them.

## Typography

**Display Font:** Big Shoulders Display Variable (with Arial Narrow, sans-serif)
**Body Font:** Public Sans Variable (with the system UI stack)

**Character:** Tall, narrow, uppercase title lettering against a sober, open sans. The contrast is the identity: the display font speaks in headings and row titles only, and Public Sans does all the reading.

### Hierarchy
- **Display** (560, clamp(3.5rem, 10vw, 6rem), 0.9, uppercase, 0.015em): the home headline and page titles (page titles run up to 11vw), spanning seven columns.
- **Headline** (560, clamp(2.5rem, 6vw, 4rem), 0.9, uppercase): section headings under an ink rule. The closing band runs larger, clamp(3rem, 8vw, 5.5rem).
- **Title** (560, 2.25rem to 3rem, 0.9, uppercase): row titles in the left four columns of service, principle and stage rows; 1.5rem for pillar heads.
- **Lead** (400, 1.125rem, 1.625): section ledes and hero copy in Second Ink, held to about 36rem. Row lead-ins step up to semibold (600) in ink at 1.125 to 1.25rem, snug leading.
- **Body** (400, 1rem, 1.625): reading copy; small text at 0.875rem for lists, meta and footer. Tabular numerals are on site-wide.
- **Label** (650, 0.6875rem, 0.16em, uppercase): tracked caps for the wordmark (0.75rem, 0.2em), footer column heads, and definition terms only.

### Named Rules
**The Title Lettering Rule.** The condensed display face is always uppercase at 0.9 leading, and appears only in headings, row titles, step numerals and the mobile menu links. Never set body copy, buttons, or form labels in it.

**The Margin Note Rule.** Tracked caps are margin notes, not headlines' introductions. They label the wordmark, footer columns, and definition terms; never put a small caps line above a heading.

## Layout

A twelve-column staff inside an 80rem container with 16 / 24 / 32px side gutters (mobile / sm / lg) and 40px column gaps from the lg breakpoint (1024px). Below lg everything stacks to one column.

Section headings take seven columns for the heading and five for a bottom-aligned lede. Content rows split 4 / 5 / 3 (title / description / detail) or 4 / 8, each row 32 to 40px tall in padding and closed by a hairline. Three-up pillars divide with vertical hairlines rather than boxes; short lists run as two or four columns of hairline-topped items.

Sections breathe at 64 to 80px vertical padding (up to 112px for the hero and closing band). The header is sticky, 64px tall, on 95% paper with a light backdrop blur and an ink bottom rule.

### Named Rules
**The Ruled Row Rule.** Content is ruled rows on the twelve-column grid. Never group items into bordered, filled or shadowed cards.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth is conveyed by rules (ink and hairline), by the quiet paper ground, and by the one full-inversion surface, the ink closing band. The only overlay is the mobile menu, a full-height sheet edged by an ink rule over a 40% ink scrim.

### Named Rules
**The Flat Score Rule.** No box-shadows, no lifted surfaces. If something needs separation, rule it or change its ground.

## Shapes

Square everything: 0px radius on buttons, inputs, panels, menu, and step markers. Borders are 1px (ink for interactive edges, hairline for separators); the vertical progress line in the contact steps is 2px ink. The north-line mark (a 1.5px stroke, 12 by 44 viewBox) is the only drawn form; the inline icons that exist (check, arrow, plus, menu, close) are 16 to 24px stroked line icons in currentColor, matching its weight.

## Components

### Buttons
Plain, square and confident.
- **Shape:** square corners (0px), 1px ink border, 48px minimum height (40px in the header), 20px side padding, 15px semibold text.
- **Ink (primary):** ink fill, paper text; hover to Second Ink.
- **Line (secondary):** paper fill, ink text and border; hover to Pressed Paper. Used beside the ink button and as the header's "Start a project".
- **Paper (on the ink band):** paper fill and border, ink text; hover to Pressed Paper.
- **Motion:** background and colour transition over 160ms on cubic-bezier(0.16, 1, 0.3, 1). Focus shows the Playhead Blue outline.

### Links
- **Inline link:** semibold, 1px underline offset 0.22em in Field Stroke, darkening to ink on hover.
- **Plain list links** (footer) underline on hover only. On the ink band, links are paper at 80% with a 40% paper underline.

### Inputs / Fields
- **Style:** paper fill, 1px Field Stroke border, 0px radius, 12 by 14px padding; label above in semibold 0.875rem.
- **Hover / Focus:** border goes to ink; focus adds the blue outline at zero offset and the caret is blue.
- **Panel:** the form sits on a Quiet Paper ground with 24 to 40px padding and no border.

### Navigation
- **Desktop:** north-line mark plus tracked-caps wordmark at left; 0.875rem medium links in Margin Grey, ink on hover; the current page is ink with a 2px underline offset 0.6em.
- **Mobile:** a 40px square ink-bordered menu button opens a right-hand sheet (320px, max 85vw) that slides in over 250ms; links are display-face rows at 1.875rem separated by hairlines, with an ink "Start a project" button below.

### Section Heading
An ink rule across the full width, then the headline in seven columns and the lede bottom-aligned in five. When it opens a page, the rule moves below and the heading becomes the page-scale display title.

### Ruled Row
The workhorse: a twelve-column row with a display-face title at left, semibold lead-in and Second Ink detail in the middle, and supporting list or outcome at right, closed by a hairline. Stage rows prefix a Margin Grey numeral; definition pairs use label-style terms.

### Closing Band
A full-bleed ink section that ends every page except contact: a headline-scale question, a lede in 80% paper, a paper button and a mailto link. The contact page ends on its form instead.

### North Line Mark
One vertical stroke with a north tick, drawn in currentColor at 1.5px: 32px tall in the header, 48px in the footer. It is the system's only mark.

## Do's and Don'ts

### Do:
- **Do** open each section with a full-width ink rule, the headline in seven columns and the lede in five.
- **Do** lay content out as hairline-separated rows on the twelve-column grid.
- **Do** keep the condensed display face uppercase at 0.9 leading, and keep reading text in Public Sans.
- **Do** close every page except contact with the ink band and its paper button.
- **Do** pair one ink button with at most one line button in any action group.

### Don't:
- **Don't** use Playhead Blue for anything except focus and caret.
- **Don't** build card grids, rounded corners, or shadows.
- **Don't** add a second mark, logo device, or decorative notation (score diagrams, patterned blocks, legends).
- **Don't** put tracked caps above headings as kickers or eyebrows; tracked caps belong to the wordmark, footer heads, and definition terms.
- **Don't** set split heroes with a product image beside the headline, or rows of icon cards.
