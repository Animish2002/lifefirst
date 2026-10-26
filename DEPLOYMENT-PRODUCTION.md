# Production deployment — LifeFirst website (life-first.in)

How the public website reaches production, and **what has to be done by hand** besides pushing new code. Read the **Pending** section before every production release.

> Keep this file current: any change that needs more than a normal deploy (a new or changed environment variable, a Vercel setting, an order with LifeFlow's backend) gets a checklist item under **Pending** in the same commit. After it's done in production, tick it, add the date, and move it to **Done**.

---

## Pending for the next production release

### 1. Careers from LifeFlow (2026-10-27)

The Careers pages now read job openings from LifeFlow and send applications there. **LifeFlow's backend Careers release must be live first** (LifeFlow-Backend `DEPLOYMENT-PRODUCTION.md` → Pending → Careers: its two variables, migration, and the job import). Deploying this site before that leaves "Current Openings" empty.

- [ ] **Vercel → Project → Settings → Environment Variables**, add for **Production** (and Preview if previews should show jobs):
  | Variable | Value |
  |---|---|
  | `NEXT_PUBLIC_LIFEFLOW_API_URL` | `https://api.lifeflow.life-first.in/api/v1` |

  Without it the Careers page shows "There are no openings right now".
- [ ] **LifeFlow's backend must know this site** (done on Railway, listed in the backend's file): `CAREERS_SITE_ORIGIN` includes every address the site is served from (`https://life-first.in`, `https://www.life-first.in`), and `CAREERS_TURNSTILE_SECRET_KEY` is the secret of this site's Turnstile widget (site key `0x4AAAAAACFSNXQ8mz2Zw6sy`, in `src/app/TurnstileWidget.tsx`). If either is wrong, applying fails: a CORS error in the browser console, or "The security check failed".
- [ ] **Deploy** (see [Routine release](#routine-release)). `NEXT_PUBLIC_` values are read at build time, so deploy *after* adding the variable (or redeploy).
- [ ] **Check:**
  - `https://life-first.in/careers`: everything above "Current Openings" is unchanged; the openings list LifeFlow's posted jobs with experience, openings and type.
  - A job page shows its description and the apply form (with any questions HR added). Submit one test application with a small PDF: the page says "Application submitted", it appears in LifeFlow under **Careers → Applications**, and the confirmation email arrives. Delete the test application in LifeFlow afterwards.
  - Optional: Google's Rich Results Test on a job page finds a **JobPosting**.
- [ ] **The old form service is no longer used** for applications (`formflowapi.thefortune.club`). Nothing to switch off on this side; decide whether to close that form there.

---

## How production is set up

| | |
|---|---|
| Code | `Animish2002/lifefirst` |
| Host | **Vercel** (Next.js), serving `life-first.in` |
| Data it needs | job openings from LifeFlow's API (`NEXT_PUBLIC_LIFEFLOW_API_URL`); everything else is in the repo |

The Careers pages are rebuilt at most every **5 minutes** from LifeFlow, so a job HR posts, closes or archives shows up (or disappears) within about 5 minutes without a deploy. A job page for a job posted after the last deploy is built on its first visit.

---

## Routine release

1. Merge the changes into the branch Vercel deploys (Vercel → Project → Settings → Git → Production Branch; `main` today).
2. Vercel builds and publishes; follow it under **Deployments**.
3. Check the pages the release changed.

**Rolling back:** Vercel → Deployments → an earlier deployment → **⋯ → Promote to Production** (or Instant Rollback).

---

## Settings

| Variable | Production value | Notes |
|---|---|---|
| `NEXT_PUBLIC_LIFEFLOW_API_URL` | `https://api.lifeflow.life-first.in/api/v1` | read at build time and by the browser (applications); changing it needs a redeploy |

`.env.example` lists them for local development (`.env.local`, with LifeFlow's API running locally).

---

## Done

Items moved here from **Pending** once they're done in production, newest first, with the date.

*(none yet)*
