import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gmc-proiect-construct.ro',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Adresele vechi ale paginilor de radon (indexate de Google) trimit la cele noi.
  redirects: {
    '/masurare-radon': '/radon/masurare/',
    '/remediere-radon': '/radon/remediere/',
    '/radon-la-locul-de-munca': '/radon/locul-de-munca/',
    '/cladiri-noi-si-proiectare': '/radon/cladiri-noi/',
    '/legislatie': '/radon/legislatie/',
  },
});
