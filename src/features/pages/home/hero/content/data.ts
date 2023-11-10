import { TString } from 'types/generics'

export type THeaderItem = {
    id: number
    text: TString
}

export type THomeHeroImage = {
    key: string
    image: {
        src: string
        alt: string
        quality: number
        eager_loading: boolean
    }
}
