# DRPAYOPR — Accessibility remediation: Phase 2
Date: September 17, 2026. Target: WCAG 2.2 AA. **Status: partial source-level remediation; not certified or confirmed conformant.**

## Changes implemented
- Inactive single-page-application views now use `inert` alongside `aria-hidden` and CSS display state, preventing focus and assistive-technology access to inactive content where supported.
- Book promotion dialog now traps Tab/Shift+Tab within its visible controls, supports Escape, and restores focus to the previous element when dismissed. Added a programmatic focus target on the dialog.
- Cookie banner changed from `role=dialog` to a labeled nonmodal `region`, reflecting its existing behavior without misleading modal semantics.
- Strengthened keyboard focus indication and minimum language-button target sizes in the main site; strengthened focus indication and button sizing on privacy and media-release pages.
- Preserved existing public privacy notice, cookie opt-in code, navigation, bilingual content, and the rollback of additional service-request CTAs.

## Outstanding — cannot claim complete Phase 2 or certification
- Browser-based axe-core checks for each page, each language, mobile menu, dialogs and error states; resolve findings.
- Manual screen-reader and keyboard tests, including book dialog, cookie banner, request gate, text-to-speech tools, language changes and SPA navigation.
- Color contrast measurements, 320px reflow, 200–400% zoom, text-spacing and touch target tests.
- Verify meaningful alt descriptions, embedded video captions/transcript, and third-party form accessibility.
- Audit/remediate both downloadable PDF releases for tags, reading order, document language and accessible forms.
- Verify deployed website and arrange independent assessment if third-party certification is required.

## Caution
These changes were checked by static inspection only. They are not evidence of WCAG conformance. The PDF documents have not been altered.
