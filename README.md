# GMC Proiect Construct – site

Site-ul [gmc-proiect-construct.ro](https://gmc-proiect-construct.ro), construit cu [Astro](https://astro.build)
și publicat pe GitHub Pages (DNS pe Cloudflare).

## Structură

- `src/pages/` – paginile site-ului (un fișier = o pagină; `index.astro` = Acasă)
- `src/components/` – antet, subsol, carduri, blocuri refolosite
- `src/layouts/Base.astro` – scheletul comun al paginilor (head, antet, subsol)
- `src/content/noutati/` – secțiunea Noutăți: articole de informare și noutăți de la noi, fișiere Markdown (`.md`)
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

## Articol nou la Noutăți

Creează `src/content/noutati/nume-articol.md` cu antetul:

```
---
title: "Titlul articolului"
description: "O propoziție care apare în listă și pe Google."
date: 2026-10-20
image: /images/poza.jpg        # opțional
tip: informare                 # „informare” (ghid, explicație) sau „noutati” (eveniment, proiect, de la noi)
tags: [Măsurare, Legislație]   # opțional; etichetele apar ca filtre în listă
---
Textul articolului, în Markdown.
```

Adresa articolului va fi `/noutati/nume-articol/`. Lista poate fi deschisă direct filtrată:
`/noutati/?tip=noutati` sau `/noutati/?tag=Măsurare`.

## Formularul de contact

Formularul trimite prin [Web3Forms](https://web3forms.com) (gratuit). Cheia de acces NU se pune în cod:

- local: creează un fișier `.env` (după modelul `.env.example`) cu `PUBLIC_WEB3FORMS_KEY=cheia-ta`;
- pe GitHub: repo → Settings → Secrets and variables → Actions → New repository secret,
  nume `WEB3FORMS_KEY`, valoare cheia. Workflow-ul o citește la build.

Fără cheie, formularul se afișează, dar trimiterea eșuează.
