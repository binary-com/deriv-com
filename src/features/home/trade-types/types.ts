import type { ImageDataLike } from 'gatsby-plugin-image'
import { TObjectKeys, TRegion, TRegionSmartContent, TString } from 'types/generics'

export type TTradeTypeImageQuery = {
    trade_type_cfds: ImageDataLike
    trade_type_cfds_eu: ImageDataLike
    trade_type_cfds_uk: ImageDataLike
    trade_type_digitaloptions: ImageDataLike
    trade_type_multipliers: ImageDataLike
    trade_type_multipliers_eu: ImageDataLike
    trade_type_multipliers_uk: ImageDataLike
    trade_type_spreads: ImageDataLike
}

export type TTradeTypeModel = {
    image_url:
        | TObjectKeys<TTradeTypeImageQuery>
        | ((regions: Partial<TRegion>) => TObjectKeys<TTradeTypeImageQuery>)
    image_alt: TString
    header: TString
    desc: TString
    link: string
    link_text: TString
}

export type TTradeTypeSmartContent = TRegionSmartContent<TTradeTypeModel>
