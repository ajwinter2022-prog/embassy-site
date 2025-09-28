# Embassy — Next.js Deploy (Vercel)

## 1) Install & Run
```bash
pnpm i # or: npm i / yarn
pm run dev
```
Open http://localhost:3000

## 2) Deploy to Vercel
1. Push this folder to GitHub (or GitLab/Bitbucket).
2. Go to vercel.com → **New Project** → Import your repo.
3. Framework preset: **Next.js** (detected automatically). No extra env vars needed to start.
4. Click **Deploy**.

## 3) Editing after Deploy
- Edit files locally → commit & push → Vercel auto‑deploys Preview → merge to main for Production.
- Rollback: open any deployment in Vercel and promote.

## 4) Replacing Placeholders
- `app/page.tsx`: swap roster images, copy, pricing, email, and video source.
- `app/layout.tsx`: update metadata.
- `app/globals.css`: tweak brand colors.

## 5) Tests
```bash
npm run test
```
Two basic tests ensure the hero copy and diagnostics render. Add more as you lock sections.

## 6) Optional Next Steps
- Add a real form handler (Vercel Serverless / Formspree / Resend).
- Add analytics (Vercel Analytics or Plausible).
- SEO: OpenGraph images, sitemap, robots.
