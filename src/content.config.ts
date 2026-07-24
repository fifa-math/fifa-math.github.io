import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const claimsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/claims" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    claimNumber: z.number(),
    mathConcepts: z.array(z.string()), // e.g., ['Poisson Distribution', 'Calculus']
    published: z.boolean().default(true),
  }),
});

export const collections = {
  'claims': claimsCollection,
};
