import { TRegionSmartContent, TString } from 'types/generics'

export type THeroCarouselModel = {
    text: TString
}

export type TSmartHeroContent = TRegionSmartContent<THeroCarouselModel>
