export type TMenuItem = {
    title: string,
    href: string,
    children?: Prettify<Omit<TMenuItem, "children">>[]
}

export type TProfilPimpinan = {
    name: string,
    description: string,
    image: string
}

export type TCarouselItem = {
    id: string,
    title: string,
    descriptions?: string
    image: string
}

export type TQuery = {
    skip: number
    take: number
    search: string
}

type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }

export type Prettify<T> = {
    [K in keyof T]: T[K] & {}
}