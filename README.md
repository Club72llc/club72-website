# Club 72 Fitness — Website

Source code for [club72fitness.com](https://club72fitness.com). Built with Next.js 15, React 19, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy it (Vercel is the easiest)

1. Create a free account at [vercel.com](https://vercel.com).
2. Push this code to a GitHub repo (or use `vercel deploy` from this folder with the Vercel CLI).
3. Import the repo in Vercel — it auto-detects Next.js, no build settings needed.
4. Add the environment variable below, then point the `club72fitness.com` domain at the new project.

It also deploys fine on Netlify, Railway, or any host that supports Next.js.

## Required environment variable

| Name | What it is |
|------|------------|
| `KIT_API_SECRET` | API secret from a [Kit (ConvertKit)](https://kit.com) account. The signup form (`app/api/subscribe/route.ts`) adds subscribers to Kit with the tag ID `18981802` ("club 72 pre launch"). |

You'll need your own Kit account: replace the secret with yours in your host's environment variables, and update `TAG_ID` in `app/api/subscribe/route.ts` to a tag from your account. Without this variable set, the site still runs — only the signup form will fail.

## Project layout

- `app/` — pages (landing page, thank-you page) and the subscribe API route
- `public/images/` — images and video used by the site
- `Founders/`, `Pictures/`, `Background video/`, `facility section pictures/` — original/raw asset files, kept for reference (not used directly by the site)
