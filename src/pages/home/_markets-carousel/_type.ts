import type { ImageDataLike } from 'gatsby-plugin-image'
import { TColor } from 'themes/theme.types'
import { TObjectKeys, TRegionSmartContent, TString } from 'types/generics'

export type TMarketModel = {
    header: TString
    description: TString
    img_name: TObjectKeys<TUseStaticMarketImagesQuery>
    to: string
    gradient_start: TColor
    gradient_end: TColor
}

export type TMarketSmartContent = TRegionSmartContent<TMarketModel>

export type TUseStaticMarketImagesQuery = {
    market_forex: ImageDataLike
    market_synthetic_indices: ImageDataLike
    market_stocks_indices: ImageDataLike
    market_crypto: ImageDataLike
    market_basket_indices: ImageDataLike
    market_commodities: ImageDataLike
}
