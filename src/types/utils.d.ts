export type TMenuItem = {
    title: string,
    href: string,
    children?: Prettify<Omit<TMenuItem, "children">>[]
}

export type TCarouselItem = {
    title: string
    descriptions?: string
    image: string
}

export type Prettify<T> = {
    [K in keyof T]: T[K] & {}
}