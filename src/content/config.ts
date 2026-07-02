import { defineCollection, z } from 'astro:content';

const benefitsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    footnote: z.string(),
    order: z.number().default(1),
  }),
});

const factsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    source: z.string(),
    order: z.number().default(1),
  }),
});

const idealForCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number().default(1),
  }),
});

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    order: z.number().default(1),
  }),
});

export const collections = {
  benefits: benefitsCollection,
  facts: factsCollection,
  'ideal-for': idealForCollection,
  faq: faqCollection,
};
