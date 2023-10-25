import { LinkUrlType } from 'features/types'
import { TSmartContent, TString } from 'types/generics'

export type TradeItem = {
    icon: string
    name: TString
    link: LinkUrlType
}

interface TradeItemConfig {
    is_eu: boolean
}

export type SmartTradeItem = TSmartContent<TradeItem, TradeItemConfig>

export type TradeType = {
    trade_name?: TString
    trade_description_1?: TString
    trade_description_2?: TString
    trade_items: SmartTradeItem[]
}
