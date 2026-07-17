# Blue Atlantic Launch Lock

## Launch domain

https://blueatlantic.co

## Official emails

- contact@blueatlantic.co
- akim@blueatlantic.co

## Launch target timing

Public launch in 2 days from this lock date (2026-07-16).

## Current readiness baseline

- BA-W-011A pre-launch QA: READY_WITH_MINOR_NOTES
- BA-W-011B live browser review: READY_WITH_MINOR_NOTES
- Confirmed launch blockers: none

## Current route set

- `/`
- `/about`
- `/companies` (visible label: Platforms)
- `/technology`
- `/contact`
- `/legal`

Routes that must remain absent:

- `/capital`
- `/newsroom`

## Current nav labels

Visible top navigation:

- About → `/about`
- Platforms → `/companies`
- Technology → `/technology`
- Contact → `/contact`

Important: the `/companies` route remains, but the visible public label is Platforms.

## Current footer requirements

Footer must include:

- Blue Atlantic brand display
- contact@blueatlantic.co
- © 2026 Blue Atlantic Inc. All rights reserved.
- Platforms
- Technology
- About
- Legal
- Contact

Footer must not include:

- Capital
- Newsroom

## Contact requirements

Contact page must include:

- contact@blueatlantic.co
- akim@blueatlantic.co
- mailto:contact@blueatlantic.co
- mailto:akim@blueatlantic.co

No live form before launch. Mailto links only.

## Legal requirements

Legal page must use:

- Blue Atlantic Inc.

for formal legal references.

Legal page must not reintroduce Capital or Newsroom.

Legal-only defensive wording such as “capital direction” remains acceptable when already present and necessary.

## Accepted minor notes

1. EliteHire Solutions vs EliteHire Pro naming nuance is accepted for launch unless the founder decides to standardize it later.
2. Sentinel linking to the Vercel demo host is accepted for launch unless a final Sentinel domain is connected before launch.

## Confirmed launch blockers

None.

## Freeze rules

From this point until public launch, the Blue Atlantic website is under launch freeze. No new features, new pages, redesigns, major copy rewrites, platform claim changes, route changes, or experimental visual changes are allowed. Only launch blockers may be fixed.

## Emergency fix rules

Allowed emergency fixes before launch:

- broken links
- misspelled domain or email
- broken logo or missing image
- mobile layout breakage
- page load/build failure
- incorrect public route
- accidental Capital or Newsroom reintroduction
- outdated Contact language returning
- incorrect legal company name
- typo that materially affects public credibility

Not allowed before launch:

- new sections
- new graphics
- new platform claims
- new service claims
- contact form
- analytics
- backend logic
- payment or financial functionality
- redesign
- major copy rewrite

## Post-launch monitoring checklist

- [ ] Confirm https://blueatlantic.co loads
- [ ] Confirm /about loads
- [ ] Confirm /companies loads
- [ ] Confirm /technology loads
- [ ] Confirm /contact loads
- [ ] Confirm /legal loads
- [ ] Confirm nav links work
- [ ] Confirm footer links work
- [ ] Confirm contact@blueatlantic.co mailto works
- [ ] Confirm akim@blueatlantic.co mailto works
- [ ] Confirm EliteHire Pro external link works
- [ ] Confirm Sentinel external link works
- [ ] Confirm Vercel production deployment is the latest launch commit
- [ ] Confirm no /capital route
- [ ] Confirm no /newsroom route

## Rollback note

If a launch blocker appears after deployment, rollback should be limited to the last known READY_WITH_MINOR_NOTES deployment unless a smaller emergency fix can be safely applied and deployed.

## Final launch classification

**READY_FOR_LAUNCH_LOCKED**
