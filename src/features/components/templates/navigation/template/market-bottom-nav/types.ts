import { TString, TSmartContent } from 'types/generics'
import { LinkUrlType } from 'features/types'

export type TMarketNavItemType = {
    title: TString
    link: LinkUrlType
    active_urls?: string[]
}

type TradeTypeConfig = {
    is_eu: boolean
}

export type MarketTradeTypeItem = TSmartContent<TMarketNavItemType, TradeTypeConfig>
