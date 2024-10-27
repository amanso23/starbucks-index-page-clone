import { defineCollection, z } from "astro:content";

const pageInfo = defineCollection({
    schema: z.object({
        title: z.string(),
        banner: z.string(),
    })
})

const welcome = defineCollection({
    schema: z.object({
        src: z.string(),
        title: z.string(),
        buttonContent: z.optional(z.string())
    })
})

const extraCard = defineCollection({
    schema: z.object({
        src: z.string(),
        info: z.string(),
        title: z.string(),
        description: z.string()
    })
})

const cards = defineCollection({
    schema: z.object({
        items : z.array(
            z.object({
                src: z.string(),
                title: z.string(),
                description: z.string()
            })
        )
    })
})

export const collections = {pageInfo, welcome, extraCard, cards };