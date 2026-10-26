# CLAUDE.md — LifeFirst website

The public website (life-first.in), Next.js on Vercel. Job openings on `/careers` come from LifeFlow's API (`src/lib/careers.ts`); see the README's Careers section.

## Releases

How the site reaches production is in **DEPLOYMENT-PRODUCTION.md**. When a change needs anything beyond a normal deploy (a new or changed environment variable, a Vercel setting, an order with LifeFlow's backend), add a checklist item under **Pending** there in the same commit: what to do, where, and how to check it. When the user says it's done in production, tick it, date it, and move it to **Done**. Every environment variable the code reads is listed in `.env.example`.
