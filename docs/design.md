# Murtaza Labs --- Contact / Project Inquiry Page Design Specification

## 1. Page purpose

Create a high-end, dark-themed contact page for **Murtaza Labs**, an
independent deep-tech and computational engineering studio. The page
should make it easy for prospective clients to submit a structured
project inquiry while communicating technical credibility,
confidentiality, and a clear engagement process.

The visual direction is **industrial, technical, editorial, and
minimal**, with restrained red accents, compact monospace metadata,
large typography, thin borders, and layered charcoal surfaces.

## 2. Overall visual direction

-   **Theme:** Dark mode only.
-   **Mood:** Precision engineering, AI research lab, technical
    operations dashboard.
-   **Primary background:** Near-black, with a very subtle warm burgundy
    glow behind the hero.
-   **Cards:** Charcoal panels with thin, low-contrast borders and
    rounded corners.
-   **Accent:** Bright signal red for primary actions, status
    indicators, active states, and selected emphasis.
-   **Typography:** Heavy modern sans-serif for headlines; neutral
    sans-serif for body copy; monospace for labels, system metadata, and
    small technical details.
-   **Density:** Information-rich but orderly. Keep generous spacing
    between major sections and tighter spacing inside metadata-heavy
    panels.
-   **Effects:** Subtle red glow around the primary CTA, small red
    status dots, restrained gradients, and minimal hover transitions.
    Avoid excessive glassmorphism, shadows, or decorative imagery.

## 3. Color palette

Use these as starting values and tune them to match the reference image.

  Token                Suggested value   Usage
  -------------------- ----------------- --------------------------------------
  `--bg`               `#0D0D0D`         Main page and footer background
  `--surface`          `#1B1A1A`         Cards and form panel
  `--surface-deep`     `#101010`         Inputs and inset areas
  `--border`           `#302626`         Card outlines and separators
  `--text-primary`     `#EAE7E7`         Main headings and high-priority text
  `--text-secondary`   `#BDB8B8`         Body text and supporting copy
  `--text-muted`       `#8E8888`         Secondary metadata and hints
  `--accent-red`       `#F20D1B`         Main CTA, active dots, emphasis
  `--accent-coral`     `#FFAAA5`         Soft accent labels and icons
  `--accent-pink`      `#F7B7B7`         Gradient transition in headline
  `--success-muted`    `#8D9A91`         Optional success feedback

### Gradient use

-   Main headline: a subtle left-to-right gradient from pale blush to
    coral/red on the emphasized phrase.
-   Hero background: low-opacity burgundy radial glow fading into the
    near-black background.
-   Primary button: solid signal red, with a soft red shadow/glow.
-   Do not use gradients on every card or field; keep the interface
    disciplined.

## 4. Typography

Use web-safe fallbacks and preferably load a modern sans-serif plus a
technical monospace family.

-   **Display/headline:** `Inter`, `Manrope`, or a similar geometric
    sans-serif; weight 800--900; tight letter spacing.
-   **Body:** `Inter`, system sans-serif; 14--16px desktop; line-height
    around 1.5--1.7.
-   **Micro-labels:** `IBM Plex Mono`, `JetBrains Mono`, or monospace
    fallback; 9--11px; uppercase; letter spacing around 0.08--0.14em.
-   **Navigation:** 12--13px, medium weight.
-   **Primary CTA:** 14--15px, bold, uppercase.
-   **Main heading:** Approximately 50--56px on desktop, scaling down
    responsively.

Use uppercase labels with `//` prefixes to establish the technical
system-console style. Keep long-form descriptions readable and avoid
using monospace for paragraph copy.

## 5. Page layout

### Header / navigation

A full-width, near-black navigation bar sits at the top of the page.

-   Approximate desktop height: 64px.
-   Center content in a max-width container of roughly 1200--1300px.
-   Left: **MURTAZA LABS** wordmark in bold uppercase, followed by a
    small bordered `AI STUDIO` chip with a red status dot.
-   Center/right: `Home`, `Services`, `Work`, `About`, `Contact`.
-   Mark `Contact` as active using brighter text and a short red
    underline.
-   Right: prominent red `START A PROJECT →` button and a small circular
    user/profile icon.
-   Use a subtle bottom border.
-   On mobile, collapse navigation into a compact menu and keep the
    primary project CTA easy to reach.

### Hero section

Place the hero directly below the navigation, aligned to the same
content container.

-   Small metadata chip: red dot and `04 // INTAKE & COLLABORATION`.
-   Supporting system status text: `SYS_ENDPOINT: DISPATCH_ACTIVE`.
-   Main heading: **LET'S BUILD SOMETHING.**
    -   Keep `LET'S BUILD` in off-white.
    -   Emphasize `SOMETHING.` with a pale-pink-to-red gradient.
    -   Use a large, bold, tight headline.
-   Supporting paragraph: "Have a project, computational bottleneck, or
    system blueprint you'd like to engineer? Send an inquiry and receive
    an architectural breakdown within 24 hours."
-   Keep the hero copy relatively short, with a maximum width around
    650px.
-   Add a soft, low-opacity burgundy glow behind the hero, not strong
    enough to reduce contrast.

### Main content grid

On desktop, use a two-column layout:

-   **Left information column:** roughly 40% of the available width.
-   **Right inquiry form:** roughly 60% of the available width.
-   Gap between columns: approximately 36--40px.
-   Align the top of both columns.
-   Stack the left-side information cards vertically.
-   Let the form panel be the dominant element, with a red-tinted top
    border or very subtle accent line.

At medium widths, reduce the gap and column proportions. On small
screens, stack the information column above the form and make all
controls full-width.

## 6. Left information column

### A. Capacity status card

A compact panel communicates availability.

-   Header label: `// CAPACITY STATUS`.
-   Small red status badge: `RESERVED Q2`.
-   Icon tile with a lightning bolt.
-   Main status: `1 Sprint Slot Open for Q2`.
-   Supporting copy:
    `Immediate onboarding for qualified engineering scopes.`
-   Add a faint oversized red/burgundy circle or glow clipped into the
    upper-right corner of the card.
-   The status badge should be visually distinct but not overly bright.

### B. Dispatch directory card

A larger card with stacked contact and operational metadata.

-   Header: `// DISPATCH DIRECTORY`.
-   Include three information groups:
    1.  **DIRECT DISPATCH** --- `murtaza.labs.dev@gmail.com`, with an
        external-link arrow.
    2.  **OPERATIONAL BASE** --- `Karachi, Pakistan`, with
        `GLOBAL ASYNC` aligned to the right.
    3.  **CODE REPOSITORY** --- `github.com/MurtazaLabs`, with a small
        code/repository icon.
-   Use thin horizontal dividers between groups.
-   Bottom row: **TYPICAL RESPONSE TIME**, value `Under 24 Hours`, and a
    red-tinted `< 14h AVG` indicator aligned to the right.
-   Keep labels small and monospace; values use a more readable size.

### C. "What happens next" protocol card

A vertical three-step timeline communicates the engagement process.

-   Header: `// PROTOCOL: WHAT HAPPENS NEXT`.
-   Use a thin vertical line on the left with small circular timeline
    nodes.
-   Active first node is red; later nodes are muted gray.
-   Each phase includes a monospace phase label, a bold title, and a
    short description.

**Phase 01 --- Scope & Technical Review**

"Rigorous evaluation of requirements, pipeline feasibility, compute
load, and system bottlenecks."

**Phase 02 --- Discovery Call or Async Plan**

"Deep architectural alignment to settle technology stack, timeline
constraints, and capital allocations."

**Phase 03 --- Blueprint & Sprint Plan**

"Delivery of high-definition system architecture, execution schedule,
milestone deliverables, and launch targets."

### D. Privacy assurance card

A shorter, quieter panel at the bottom of the information column.

-   Shield/check icon in soft coral.
-   Heading: `MANDATORY PRIVACY STANDARD`.
-   Copy:
    `All shared models, schemas, and proprietary workflows are kept strictly non-disclosed under standard bilateral non-disclosure terms.`
-   Do not imply a legally binding NDA exists automatically unless the
    business process actually supports that claim. If needed, revise the
    copy to clarify that confidentiality terms can be agreed before
    sensitive details are shared.

## 7. Project inquiry form

The form lives in a large charcoal panel with a thin border and subtly
highlighted top edge.

### Panel header

-   Left: red status dot and `PROJECT DISPATCH TRANSMISSION`.
-   Right: small technical label `SEC_ENCRYPT: SHA-256`.
-   Treat security-related labels as decorative interface metadata only
    unless the actual backend implements the claimed encryption. Never
    make inaccurate security promises.

### Form fields and order

Use consistent field labels above controls. Required fields should have
a visible `*`, and the form must also expose required state
programmatically.

1.  **FULL NAME \*** --- text input; placeholder `e.g. Alexander Vance`.
2.  **EMAIL ADDRESS \*** --- email input; placeholder
    `e.g. alexander@company.com`.
3.  **COMPANY / ENTITY** --- optional text input; placeholder
    `e.g. Vance Dynamics or Independent`.
4.  **PROJECT CLASSIFICATION \*** --- selectable checkbox/tile options:
    -   AI System
    -   Web App / UI
    -   Automation
    -   Custom Software
    -   Other Tech
5.  **BUDGET RANGE \*** --- select control with placeholder
    `Select capital parameter`.
6.  **TIMELINE \*** --- select control with placeholder
    `Select delivery window`.
7.  **PROJECT BRIEF & OBJECTIVES \*** --- multiline textarea;
    placeholder
    `Tell me about your goals, current bottlenecks, or the system you want to build...`.
8.  **SEND PROJECT INQUIRY →** --- full-width primary submit button.

The screenshot shows the name and email fields side by side, the company
field full-width, classification choices arranged in a three-column grid
on desktop, budget and timeline side by side, then the large project
brief textarea and CTA.

### Form layout and styling

-   Form padding: about 32px on desktop, reduced to 20--24px on smaller
    screens.
-   Inputs: near-black fill, subtle border, 8px-ish radius, muted
    placeholder text, light entered text.
-   Standard input height: approximately 38--42px.
-   Textarea height: approximately 105--120px on desktop.
-   Field labels: uppercase monospace, 9--11px.
-   Classification options: dark tiles with a small square checkbox and
    compact monospace label. Each tile should be keyboard-accessible and
    have a clear checked, focus, and hover state.
-   Vertical spacing between field groups: 18--22px.
-   Primary button: bright red, about 46--50px tall, slightly rounded
    corners, bold white uppercase text, centered arrow.
-   Button hover: slightly brighter red and a restrained glow. Include
    disabled/loading states while submitting.
-   Under the CTA: small lock icon and copy explaining that spam is not
    sent and contact/project details are handled confidentially. Only
    state guarantees that the actual implementation supports.

### Suggested select options

The reference does not show dropdown contents. Suitable initial options
can be configured as follows:

**Budget range** - Under \$1,000 - \$1,000--\$5,000 -
\$5,000--\$15,000 - \$15,000--\$50,000 - \$50,000+ - Not sure yet

**Timeline** - ASAP - 1--2 weeks - 2--4 weeks - 1--3 months - Flexible /
exploratory

These values are recommendations, not visible text from the reference;
adjust them to match the studio's actual service model.

## 8. Footer

Separate the footer from the main content with a thin horizontal border
and generous top padding.

Use a three-column desktop layout:

### Column 1 --- Brand summary

-   Centered or left-aligned `MURTAZA LABS` wordmark.
-   Description:
    `Independent deep tech & computational engineering studio architecting autonomous systems, predictive core infrastructure, and frontier machine intelligence.`
-   Two compact chips:
    -   `RUNTIME: SYSTEM ACTIVE`
    -   `LATENCY: 14MS`
-   Treat live runtime/latency figures as illustrative unless backed by
    real measurements.

### Column 2 --- Navigation matrix

-   Header: `// NAVIGATION MATRIX`.
-   Numbered links:
    -   `01 // Home`
    -   `02 // Services & Capabilities`
    -   `03 // Case Archives`
    -   `04 // Research & Profile`
    -   `05 // Initiate Engagement`

### Column 3 --- Studio metrics & contact

-   Header: `// STUDIO METRICS & CONTACT`.
-   Key/value rows:
    -   `DIRECTOR:` --- `Syed Muhammad Murtaza`
    -   `GEO_LOCATION:` --- `Karachi, Pakistan [24.8607° N, 67.0011° E]`
    -   `DISPATCH:` --- `murtaza.labs.dev@gmail.com`
    -   `REPOSITORY:` --- `github.com/MurtazaLabs`
-   Use fine dividers between rows; emphasize email and repository links
    with the coral accent.

### Bottom legal/status strip

-   Thin divider above.
-   Left:
    `© 2025 MURTAZA LABS. ALL RIGHTS RESERVED. HIGH PERFORMANCE AT ENGINEERING.`
-   Right: `SEC_LEVEL: PRODUCTION_A   VERSION: 4.1.0-STABLE`
-   Keep text very small and monospace.
-   Update the copyright year and version to reflect the real release
    rather than copying the screenshot blindly.

## 9. Responsive behavior

### Desktop (approximately 1100px and wider)

-   Horizontal navigation.
-   Two-column main grid.
-   Name/email, budget/timeline, and classification tiles use
    multi-column layouts.
-   Footer uses three columns.
-   Keep the form panel aligned with the first information card.

### Tablet (approximately 700--1099px)

-   Reduce page gutters and card padding.
-   Preserve the two-column layout only when both columns remain
    comfortable to read; otherwise switch to a stacked layout.
-   Classification tiles may use two columns.
-   Footer can move to two columns, with contact details spanning the
    full width if needed.

### Mobile (below approximately 700px)

-   Compact header; collapse desktop navigation.
-   Hero heading scales to around 36--42px and wraps naturally.
-   Main content becomes a single column.
-   Form fields stack vertically, including name/email and
    budget/timeline.
-   Classification tiles use two columns if labels fit, otherwise one
    column.
-   CTA remains full-width and comfortably tappable.
-   Footer becomes a single column.
-   Use at least 16px text in form inputs to prevent unwanted browser
    zoom on mobile.
-   Avoid horizontal overflow from long email, repository, or metadata
    strings; allow wrapping or use safe overflow handling.

## 10. Interaction and accessibility

-   Use semantic landmarks: `header`, `nav`, `main`, `section`, `form`,
    and `footer`.
-   Provide visible keyboard focus styles in red/coral with sufficient
    contrast.
-   Associate every label with its input.
-   Use appropriate input types (`email`, `text`) and native validation
    where possible.
-   Make classification tiles operable by keyboard and expose selected
    state to assistive technology.
-   Show clear inline validation messages near invalid fields.
-   On submit, prevent duplicate submissions and show a loading state.
-   Show a clear success state only after the server confirms successful
    processing.
-   On errors, preserve the user's entered values and display a useful
    retry message.
-   Respect reduced-motion preferences; keep transitions subtle.
-   Ensure color is not the only way to communicate required, selected,
    error, or success states.

## 11. Submission and backend expectations

The form should be a real inquiry workflow, not a static visual mockup.

-   Submit to the **backend API**, not directly from the browser to a
    privileged database or email provider.
-   Validate and normalize input on the server.
-   Enforce reasonable length limits, required fields, valid email
    format, and allowed project categories.
-   Add spam protection and rate limiting appropriate to the deployment.
-   Store inquiries in Supabase using a server-side role with the
    minimum required permissions.
-   Enable Row Level Security (RLS) on the inquiry table. Do not expose
    a service-role key in client-side code. Public clients should not be
    able to read inquiry records.
-   Send email notifications through the email provider from the backend
    after validation and successful persistence, with clear handling for
    partial failures.
-   Keep secrets in deployment environment variables; never commit them
    to the repository or expose them in frontend bundles.
-   Avoid logging sensitive project briefs or credentials.
-   Confirm successful delivery with a truthful UI message; distinguish
    a saved inquiry from a failed email notification if those operations
    can fail independently.
-   Test success, validation failure, rate limiting, backend failure,
    email failure, keyboard navigation, and mobile layouts.

## 12. Motion and micro-interactions

Keep motion subtle and purposeful.

-   Navigation underline transitions smoothly on hover and active state.
-   Cards may lift by 1--2px on hover, with a slight border-color shift.
-   Buttons brighten and glow slightly on hover.
-   Checkbox tiles show a restrained border/accent change when selected.
-   Timeline active node can use a static red dot; avoid unnecessary
    pulsing.
-   Respect `prefers-reduced-motion`.

## 13. Design quality checklist

-   [ ] Dark background and charcoal cards establish a clear surface
    hierarchy.
-   [ ] Red is used selectively for actions, status, and important
    emphasis.
-   [ ] Headline has strong contrast and a blush-to-red emphasized
    phrase.
-   [ ] Technical labels are consistent in size, spacing, and uppercase
    treatment.
-   [ ] Main grid balances the information cards and inquiry form.
-   [ ] Form labels, placeholders, field heights, and vertical rhythm
    are consistent.
-   [ ] Primary CTA is the strongest action on the page.
-   [ ] Layout adapts cleanly to tablet and mobile widths.
-   [ ] All fields work with keyboard and assistive technology.
-   [ ] Security, confidentiality, runtime, and performance claims match
    real implementation.
-   [ ] Inquiry submission is wired to the backend API and tested end to
    end.
