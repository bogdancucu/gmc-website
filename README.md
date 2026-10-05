# GMC Proiect Construct – site

Site-ul [gmc-proiect-construct.ro](https://gmc-proiect-construct.ro), publicat prin GitHub Pages (DNS pe Cloudflare).

## Structură

- `site/` – fișierele publicate (HTML static). Workflow-ul din `.github/workflows/deploy.yml` le publică pe GitHub Pages.
  - `index.html` – pagina „site în lucru"
  - `assets/` – logo-uri, imagini, favicon

## Publicare

Fiecare push pe `main` declanșează automat workflow-ul de publicare (GitHub Actions → Pages).
În Settings → Pages, sursa trebuie să fie „GitHub Actions”.

## Urmează

Site-ul complet (Astro): Acasă · Măsurare radon · Remediere radon · Radon la locul de muncă ·
Clădiri noi și proiectare · Despre / Contact · Blog.
