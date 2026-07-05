 Welth — AI-Powered Finance Dashboard

Multi-account personal finance platform with AI receipt scanning, budget alerts,
and automated financial reports.

**🔗 Live demo:** https://welth-ai-6x1a.vercel.app

<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/9f883afe-7d02-4ca8-8c09-b5d4cb93cfdd" />


## Features
- **Multi-account tracking** — accounts, income/expense transactions, full history
- **AI receipt scanning** — upload a receipt, Google Gemini extracts merchant,
  amount and date; user reviews before saving
- **Interactive analytics** — bar, line and pie charts (Recharts) with
  date-range filtering
- **Background automation** — recurring transactions, budget alerts and monthly
  email reports via Inngest scheduled jobs
- **Auth & route protection** — Clerk sessions with server-side protection on all
  dashboard routes

## Tech stack
Next.js 15 (App Router, server components) · React · Prisma + PostgreSQL ·
Clerk · Google Gemini · Inngest · Tailwind + Shadcn UI · Recharts

## What I'd build next
- [ ] Category budgets with rollover
- [ ] CSV import for bank statements
- [ ] Shared/household accounts
