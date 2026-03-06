import { defineCollection, z } from "astro:content";

const linksSchema = z.object({
  project: z.string().optional(),
  pdf: z.string().optional(),
  arxiv: z.string().optional(),
  code: z.string().optional(),
  bibtex: z.string().optional(),
  video: z.string().optional(),
  poster: z.string().optional(),
  supplement: z.string().optional(),
  dataset: z.string().optional(),
  doi: z.string().optional(),
  demo: z.string().optional(),
  updated: z.string().optional(),
  paper: z.string().optional(),
  company: z.string().optional(),
  blog: z.string().optional(),
  repo: z.string().optional(),
}).optional();

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number().int(),
    venue: z.string().optional(),
    summary: z.string().optional(),
    type: z.enum(["conference", "journal", "workshop", "preprint", "thesis", "other"]).default("other"),
    selected: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    links: linksSchema,
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    teaser: z.string().optional(), // path under /public, e.g. "/images/..."
    tags: z.array(z.string()).default([]),
    relatedPublications: z.array(z.string()).default([]), // slugs of publications
    links: linksSchema,
  }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    date: z.date(),
    title: z.string(),
    link: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string().optional(),
    start: z.string(), // "YYYY-MM"
    end: z.string(),   // "YYYY-MM" or "Present"
    backgroundImage: z.string().optional(), // "/images/..."
    tags: z.array(z.string()).default([]),
    links: linksSchema,
  }),
});

export const collections = { publications, projects, news, work };