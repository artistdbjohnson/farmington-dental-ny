# Farmington Dental NY — motion meeting
Date: 2026-10-06  
Branch: `worktree/grok-motion-farmington`  
Seats: Vale (restraint), Reed (soft taste), Glyph (timing), Ash (reduced motion), Axiom (optional, accordion)  
Looked at: https://www.prompt-motion.com/ for attitude and timing only. No videos rehosted. No prompt packs copied.

## What already ships
- Still-poster splash is the only intro: 2.2s hold, 3.5s `cubic-bezier(0.4, 0, 0.2, 1)` fade, `sessionStorage` key `fd-intro-seen`, skip on hash. Leave it. Do not stack a second open.
- Hero plate already drifts once (`kenburns`, 28s, scale 1.04 → 1.14). Out of scope: do not extend it, restyle it, or add another plate drift.
- Service rows already open on height (0.48s) with the same chassis ease. Chrome rail underline and wordmark collapse stay as they are.
- Instagram strip stays the one linear loop. Do not add a second linear motion.

## Attitude taken from the reference (not the shots)
The quieter product films on that index — precision UI, a control that settles, room between beats — share a usable attitude for a single-location practice: one idea per beat, premium ease, overlap so neighbors do not share a start and a stop, a few pixels of depth, no blur, no bounce, no effect that exists only to look busy. The bold kinetic-type reel is the counterexample and is rejected. Matte chrome stays matte: no glass blur, no particles, no crest draw.

## Ballot

| Option | Votes | Result |
| --- | --- | --- |
| Crest / mark loader on the splash | Vale no, Reed no, Glyph no, Ash no, Axiom no | Reject. Copies the LP crest loader and stacks a second ceremony on the poster. |
| Quiet page-open instead of, or under, the poster | Vale no, Reed no, Glyph no, Ash no, Axiom no | Reject. Batley quiet-open. The poster already is the open. |
| Stronger hero Ken Burns, or a second plate drift | Vale no, Reed no, Glyph no, Ash no, Axiom no | Reject. Boho Ken Burns. The shipped 28s drift stays untouched. |
| Kinetic type, word marquee, scroll-jack | Vale no, Reed no, Glyph no, Ash no, Axiom no | Reject. Template motion. Wrong register for this practice. |
| Threshold — section kicker + heading settle once on the way in | Vale yes, Reed yes, Glyph yes, Ash yes, Axiom yes | **Win.** |
| Follow-through — open service plate, then its copy | Vale yes, Reed yes, Glyph yes, Ash yes, Axiom yes | **Win, as the second beat only.** |

## Locked winner — Threshold + follow-through
Two beats, one temperament. Nothing else.

1. **Threshold.** Each section kicker and heading (About, Services, Team, Reviews, Instagram, Patient Info, Contact) rises 8px and fades in once, only if that heading is still below the fold when the page arms. Already-visible headings stay still, so a hash landing does not replay an entrance. Kicker runs 0.72s. Heading starts 0.10s later and uses the same duration, so they overlap and do not stop together.
2. **Follow-through.** The default-open service row does not play an entrance. After a person opens or switches a category, the plate rises 6px over 0.50s and the copy follows 0.12s later. The row still opens on height. No scale, so this is not a Ken Burns.

Shared ease, already in the chassis: `cubic-bezier(0.22, 1, 0.36, 1)`. No new curve, no new color, no new type, no layout change.

## Reduced motion and session
- `prefers-reduced-motion: reduce` arms nothing. Headings and service copy stay put. The global reduced-motion rule still shortens any leftover CSS animation.
- The poster remains once per session. Threshold is once per heading per load, and it does not arm headings that are already on screen. Follow-through is an interaction, not an intro, so it may play each time a category is opened.

## Explicitly not in this pass
Splash timing, hero plate drift, rail, theme, locale, copy, logos, and `public/brand` portraits.
