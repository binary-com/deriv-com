import type { ImageDataLike } from 'gatsby-plugin-image'
import { TRegion } from 'components/hooks/use-country-rule'
import { TColor } from 'themes/theme.types'
import { TSmartContent, TString } from 'types/generics'

export type TMarketModel = {
    header: TString
    description: TString
    img_name: string
    to: string
    gradient_start: TColor
    gradient_end: TColor
}

export type TMarketSmartContent = TSmartContent<TMarketModel, Partial<TRegion>>
export type TUseStaticMarketImagesQuery = {
    market_forex: ImageDataLike
    market_synthetic_indices: ImageDataLike
    market_stocks_indices: ImageDataLike
    market_crypto: ImageDataLike
    market_basket_indices: ImageDataLike
    market_commodities: ImageDataLike
}
