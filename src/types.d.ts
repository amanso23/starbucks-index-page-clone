import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface PageInfo {
    title: string
    banner: string
}

export interface WelcomeData  {
    src: string
    title: string;
    buttonContent: string;
}

export interface Welcome {
    id: string;
    slug: string;
    body: string;
    collection: CollectionTypes;
    data: WelcomeData
    render(): Promise<RenderResult>;
}


export interface CardType {
    info?: string
    variant: Variant
    src: string
    title: string;
    description: string;
}

type Variant = 
   | "info"
   | "extra"


export interface Cards {
    type: string;
    items: Card[];
}

export interface Collection {
    id: string;
    slug: string;
    body: string;
    collection: CollectionTypes;
    data: PageInfo | WelcomeData | ExtraCard | Cards;
    render(): Promise<RenderResult>;
}

export interface Page {
    pageInfo: PageInfo;
    cards: CardType[] | undefined;
    extraCard: ExtraCard | undefined;
    welcome: Welcome
}


type CollectionTypes =
    | "index"
    
