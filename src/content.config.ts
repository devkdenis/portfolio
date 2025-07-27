import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    project:        z.string(),
    host:           z.string(),
    role:           z.string(),
    tools:          z.string(),
    date:           z.string(), 
    date_sort:      z.number(),
    thumbnail:      z.string(),
    projectid:      z.string(),
  }),
});

export const collections = { projects };