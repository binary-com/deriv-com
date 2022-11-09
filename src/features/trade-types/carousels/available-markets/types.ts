import { TRegion, TRegionSmartContent, TString } from 'types/generics'

export type TAvailableMarketsModel = {
    name: string
    image_src: string
    image_alt: string
    text: TString
    description: TString | ((regions: TRegion) => TString)
    learn_more_path: string
}

export type TAvailableMarketSmartContent = TRegionSmartContent<TAvailableMarketsModel>
