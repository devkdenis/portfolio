import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),      // ISO date
    description: z.string().optional(),
  }),
});

const updates = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = { projects, updates };
