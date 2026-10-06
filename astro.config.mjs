import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gmc-proiect-construct.ro',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
