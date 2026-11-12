# KindCare Health Services

Website for **KindCare Health Services**, a New Jersey Division of Developmental Disabilities (DDD) approved provider of Community Based Supports, Individual Supports and Respite for adults with intellectual and developmental disabilities.

**Live site:** [www.meetkindcare.com](https://www.meetkindcare.com)

## Tech stack

- [React 19](https://react.dev) + TypeScript, built with [Vite 6](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com) (design tokens in `src/index.css`)
- [React Router 7](https://reactrouter.com) for client-side routing
- [AOS](https://michalsnik.github.io/aos/) for scroll-in animations, plus custom CSS and canvas animations
- Hosted on **GitHub Pages** (`gh-pages` branch, custom domain via `CNAME`)
- Forms post to a **Google Apps Script** web app that writes to Google Sheets and sends email alerts

## Getting started

Requires Node.js 20 or newer.

```bash
git clone https://github.com/arman7rm/kindcare-react.git
cd kindcare-react
npm install
npm run dev        # local dev server at http://localhost:5173
```

| Command           | What it does                                             |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload                     |
| `npm run build`   | Type-check and build to `dist/`                          |
| `npm run preview` | Serve the production build locally                       |
| `npm run lint`    | Run ESLint                                               |
| `npm run deploy`  | Build and publish `dist/` to the `gh-pages` branch (live) |

## Deploying

```bash
npm run deploy
```

This builds the site and pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves at www.meetkindcare.com. Commit and merge to `main` first so the live site always matches a commit.

The build writes two extra files (see `vite.config.ts`):

- `CNAME` keeps the custom domain.
- `404.html` is a copy of `index.html`. GitHub Pages serves it for any unknown path, which lets deep links like `/services` or `/careers` load the app instead of a 404.

## Project structure

```
src/
  content/site.ts      Shared facts: contact details, services, counties,
                       intake steps, documents, compliance, form endpoint
  pages/               One file per route (Home, Services, About, Careers,
                       FAQ, Contact, Legal)
  components/
    ui.tsx             Layout and design primitives (Section, PageHero,
                       ButtonLink, CtaBand, ...)
    form.tsx           Shared form fields and buttons
    PatientForm.tsx    Client call-back form (homepage, Contact page)
    DspApplicationForm.tsx  DSP job application (Careers page)
    motion/            Hero graphic, dot field, counties marquee
    ScrollManager.tsx  Scroll-to-top / scroll-to-#section on navigation
    RouteMeta.tsx      Per-page title, description and canonical URL
    icons.tsx          Inline SVG icons
  lib/submitForm.ts    Sends form data to the Apps Script endpoint
  index.css            Design tokens, fonts, animation keyframes
public/                Copied as-is to the site root: favicons,
                       apple-touch-icon, og-image (social preview),
                       robots.txt, sitemap.xml
apps-script/Code.gs    Source of the Google Apps Script form handler
```

## Editing content

Most facts live in **`src/content/site.ts`** so they only need changing in one place: phone, email, address, hours, the three services and their programs, the counties served, the "how to start" steps, requested documents, what isn't offered, and the compliance points.

Before publishing changes to services, programs or counties, verify them against KindCare's DDD approval records. Only list services KindCare is approved to provide.

## Adding a page

1. Create the page in `src/pages/` and add a `<Route>` in `src/App.tsx`.
2. Add its title and description to `PAGES` in `src/components/RouteMeta.tsx`.
3. Add its URL to `public/sitemap.xml`.

## Forms

Both website forms post to one Google Apps Script web app (URL in `FORM_ENDPOINT` in `src/content/site.ts`). The script routes each submission by `formType`:

| Form                   | `formType` | Google Sheet              | Email alert to        |
| ---------------------- | ---------- | ------------------------- | --------------------- |
| Request a call back    | `client`   | Client call-back requests | info@meetkindcare.com |
| Apply to be a DSP      | `dsp`      | DSP applications          | info@meetkindcare.com |

The sheets and the script belong to the info@meetkindcare.com Google account.

**Changing the script:** edit `apps-script/Code.gs`, paste it into the Apps Script editor (open either sheet → Extensions → Apps Script), save, then **Deploy → Manage deployments → edit → Version: New version → Deploy**. The deployment must run as *Me* with access set to *Anyone*. Editing the existing deployment keeps the same URL; a brand-new deployment gets a new URL that must be copied into `FORM_ENDPOINT`.

The forms send data as `text/plain` JSON on purpose: Apps Script can't answer the CORS preflight that `application/json` would trigger.

The forms collect contact details only and tell visitors not to include medical information. Keep it that way unless the Google Workspace account is covered by Google's HIPAA Business Associate Agreement.

## Acknowledgments

Originally built by [Mohamed Salam](https://github.com/arman7rm).
