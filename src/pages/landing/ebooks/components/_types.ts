import type { ImageDataLike } from 'gatsby-plugin-image'
import { TString } from 'types/generics'

export type HeaderAndHeroProps = {
    authorDesc: TString
    authorName: TString
    bg?: string
    bgMobile?: string
    ebook_utm_code: string
    introMain: TString
    introSub: TString
    mainHeaderImage: ImageDataLike
}

export type ImageTextAndIntroductionProps = {
    imageWidth: number
    introImage: string
    introList?: TString[]
    introPara: TString
    subPara?: TString
}
