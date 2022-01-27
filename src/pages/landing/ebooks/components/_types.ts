import type { ImageDataLike } from 'gatsby-plugin-image'

export type HeaderAndHeroProps = {
    authorDesc: string
    authorName: string
    bg?: string
    bgMobile?: string
    ebook_utm_code: string
    introMain: string
    introSub: string
    mainHeaderImage: ImageDataLike
}

export type ImageTextAndIntroductionProps = {
    imageWidth: number
    introImage: string
    introList?: string[]
    introPara: string
    subPara?: string
}
