# GMC Proiect Construct – site

Site-ul [gmc-proiect-construct.ro](https://gmc-proiect-construct.ro), construit cu [Astro](https://astro.build)
și publicat pe GitHub Pages (DNS pe Cloudflare).

## Structură

- `src/pages/` – paginile site-ului (un fișier = o pagină; `index.astro` = Acasă)
- `src/components/` – antet, subsol, carduri, blocuri refolosite
- `src/layouts/Base.astro` – scheletul comun al paginilor (head, antet, subsol)
- `src/content/blog/` – articolele de blog, fișiere Markdown (`.md`)
- `src/styles/global.css` – stilurile (culori, fonturi, componente)
- `public/` – fișiere servite ca atare: imagini, favicon, robots.txt, CNAME

## Lucru local

```
npm install        # o singură dată
npm run dev        # http://localhost:4321
npm run build      # produce folderul dist/ (ce se publică)
```

## Publicare

Fiecare push pe `main` rulează `.github/workflows/deploy.yml` (build + publicare pe Pages).
În Settings → Pages, sursa trebuie să fie „GitHub Actions”, iar Custom domain `gmc-proiect-construct.ro`.

## Articol nou pe blog

Creează `src/content/blog/nume-articol.md` cu antetul:

```
---
title: "Titlul articolului"
description: "O propoziție care apare în listă și pe Google."
date: 2026-10-20
---
Textul articolului, în Markdown.
```

## Formularul de contact

Formularul trimite prin [Web3Forms](https://web3forms.com) (gratuit). Cheia de acces se pune în
`src/components/ContactForm.astro`, la `access_key`.
