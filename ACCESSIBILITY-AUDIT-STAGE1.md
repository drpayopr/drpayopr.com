# DRPAYOPR — Accessibility Audit: Stage 1
Date: September 17, 2026
Target: WCAG 2.2 Level AA. Status: preliminary source-code audit; NOT certified or confirmed conformant.

## Scope
Uploaded ZIP: DRPAYOPR-WEBSITE-ACCESSIBILITY-BILINGUAL(1).zip. Inspected index.html, privacy.html, media-release.html and ZIP inventory (19 files). No live browser, screen-reader, device or deployed-site testing was performed.

## Source checks completed
- All 19 ZIP members extracted successfully; three HTML pages found.
- All 20 images in index.html and the single image in media-release.html have alt attributes. Alt quality and appropriateness still require human review.
- No duplicate IDs, completely unnamed links or completely unnamed buttons detected in a static HTML scan.
- A title and HTML language attribute are present on all three HTML pages.
- Main page language-switch code updates document.documentElement.lang; privacy and media-release pages also have language-switch code.
- Main page contains a skip-to-content link and reduced-motion CSS.
- Embedded video iframe has a title.
- Contact eligibility acknowledgement and minor-release inputs use wrapping label elements. A simple label-for scan alone would incorrectly flag these.

## Correction implemented in this package
- Replaced the explicit suppression of the main-content keyboard-focus outline with a visible gold focus-visible outline.
- Added a clearly visible gold focus-visible outline for text inputs, selects and textareas while preserving their existing border and shadow styling.

## Open verification requirements — do not claim conformance yet
1. Run automated WCAG checks (axe-core or equivalent) on each page, each language, each open modal, contact-form validation, cookie choices, and mobile menu. Record and resolve findings.
2. Manually test keyboard order, focus visibility, modal focus containment and restoration, Escape behavior, language toggle, contact gate, cookie settings, text-to-speech controls, and back-to-top links.
3. Test NVDA with Firefox or Chrome and VoiceOver with Safari; verify names, states, announcements, form errors, heading navigation, language pronunciation and dynamic updates.
4. Measure text and non-text contrast for every state; test 200%/400% zoom, 320 CSS-pixel reflow, text spacing, and portrait/landscape mobile layouts.
5. Check all link destinations, PDF media-release accessibility (tagging, reading order, form usability), and third-party Formspree/YouTube interactions.
6. Review each image's alt text for contextual accuracy; check video captions and transcripts, and any audio-description requirements.
7. Confirm inactive SPA sections and language variants are hidden from assistive technologies and keyboard navigation; verify there are no duplicate active H1s in any displayed view.
8. Verify live deployment, browser compatibility, consent analytics behavior, and ongoing change-management procedure.
9. Obtain an independent qualified audit if an externally verified claim or certification is required. WCAG does not itself issue a universal certification.

## Publication guidance
This is a development build with limited source-level fixes, not a certified accessibility release. Keep the audit report internal. Publish an accessibility statement only when its claims reflect verified results and known limitations.
