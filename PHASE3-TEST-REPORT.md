# DRPAYOPR — Phase 3 functional accessibility testing record

Date: September 17, 2026. Target: WCAG 2.2 AA. **Status: PARTIAL — Phase 3 cannot be marked complete or certified.**

## Completed checks on the supplied Phase 2 ZIP
- Extracted the website package for testing.
- Static HTML inspection of `index.html`, `privacy.html`, and `media-release.html`: all three have a document title and an HTML language attribute (`en` at initial load).
- Main page: 20 images inspected, none missing an `alt` attribute; privacy page: no images; media-release page: one image, `alt` present. Presence alone does not establish descriptive accuracy.
- No empty/unlabeled HTML `<button>` elements found by a simple text/aria-label check across the three pages.
- Forms present on the main and media-release pages; their labels, errors and submission flows still need interactive testing.
- Attempted Chromium headless DOM rendering; it timed out in this environment. No browser interaction, screen-reader, mobile, or live-site results are claimed.

## Required functional test matrix — NOT YET VERIFIED
Record pass/fail, device/browser, tester, date, screenshot or video, and defect ID for every row:
1. Keyboard-only navigation: skip link, header, all tabs, in-page links, Back to Top, visible focus, no keyboard traps.
2. Mobile menu: open/close, focus order, Escape, scrolling and content not obscured at 320 CSS pixels.
3. Book popup: initial focus, Tab and Shift+Tab containment, Escape, focus restoration.
4. Cookie banner: accept/reject, saved gold selection, change preference, reload, analytics blocked until consent and after rejection.
5. Contact and media-release forms: labels, required fields, validation errors, successful submission and focus/announcement.
6. Language switch: all navigation, section text, form labels, dialogs, privacy/media-release pages; screen-reader language announcements.
7. Screen readers: NVDA/Firefox or Chrome on Windows; VoiceOver/Safari on iOS or macOS. Test headings, landmarks, links, buttons, status updates and reading order.
8. Zoom/reflow: 200% and 400% zoom, 320 CSS pixel width, text spacing, landscape orientation, no horizontal scrolling except allowed content.
9. Color contrast: normal text 4.5:1, large text 3:1, UI and meaningful graphics 3:1, including gold/navy combinations and focus indicators.
10. Motion/media: reduced-motion preference, captions and transcript for embedded video, controls accessible.
11. PDF releases: tagged structure, language, reading order, links and form fields in both languages.
12. Deployed GitHub Pages: repeat all relevant tests on actual URL, including third-party Formspree and analytics network behavior.

## Decision
Do not publish a claim of WCAG 2.2 AA conformance or third-party certification based on this report. Complete the outstanding tests, fix defects, retest, and obtain independent review if a certificate is required.
