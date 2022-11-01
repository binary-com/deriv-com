import { TRegionSmartContent, TString } from 'types/generics'

export type TOtherMarketName =
    | 'forex'
    | 'synthetic_indices'
    | 'stock_indices'
    | 'cryptocurrencies'
    | 'basket_indices'
    | 'commodities'

export type TOtherMarketsModel = {
    icon: string
    name: TOtherMarketName
    title: TString
    content: TString
    to: string
    dynamic_id: string
}

export type TOtherMarketsContent = TRegionSmartContent<TOtherMarketsModel>
