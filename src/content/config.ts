import { defineCollection, z } from "astro:content";

const pageInfo = defineCollection({
    schema: z.object({
        title: z.string(),
        banner: z.string(),
        linksButtons: z.array(
            z.object({
                href: z.string(),
                content: z.string()
            })
        )
    })
})

const welcome = defineCollection({
    schema: z.object({
        src: z.string(),
        title: z.string(),
        linkButton: z.object({
            href: z.string(),
            content: z.string()
        })
    })
})

const extraCard = defineCollection({
    schema: z.object({
        src: z.string(),
        info: z.string(),
        title: z.string(),
        description: z.string(),
        href: z.string(),
    })
})

const cards = defineCollection({
    schema: z.object({
        items : z.array(
            z.object({
                src: z.string(),
                title: z.string(),
                description: z.string(),
                href: z.string(),
            })
        )
    })
})

export const collections = {pageInfo, welcome, extraCard, cards };