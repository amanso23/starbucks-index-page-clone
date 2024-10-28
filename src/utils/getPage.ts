import { getCollection } from "astro:content";
import type {Page, PageInfo } from "src/types";

export const getPage= async(pageName: "index"): Promise<Page> =>  {

    const page = await getCollection(pageName)

    const pageEntry = page.find((entry: { slug: string; }) => entry.slug === 'pageinfo');

    if (!pageEntry) {
        throw new Error("No se encontró la página con slug 'page'.");
    }

    const pageInfo: PageInfo = {
        title: pageEntry.data.title,
        banner: pageEntry.data.banner,
        linksButtons: pageEntry.data.linksButtons
    };

    const cards = page.find((entry: { slug: string; }) => entry.slug === 'cards');
    const extraCard = page.find((entry: { slug: string; }) => entry.slug === 'extracard');
    const welcomeEntry = page.find((entry: { slug: string; }) => entry.slug === 'welcome');

    if (!welcomeEntry) {
        throw new Error("No se encontró la página con slug 'welcome'.");
    }
    
    return {
        pageInfo,
        cards: cards?.data.items,
        extraCard: extraCard?.data,
        welcome : welcomeEntry
    };
}