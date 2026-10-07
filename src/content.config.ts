import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Secțiunea „Noutăți”: articole de informare (ghiduri, explicații) și noutăți de la noi (evenimente, proiecte).
const noutati = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noutati' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    tip: z.enum(['informare', 'noutati']).default('informare'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { noutati };
