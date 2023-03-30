import { LinkUrlType } from 'features/types'
import { TSmartContent, TString } from 'types/generics'

export type TradeTypeItemType = {
    title: TString
    description: TString
    url: LinkUrlType
}

type TradeTypeConfig = {
    is_eu: boolean
}

export type SmartTradeTypeItem = TSmartContent<TradeTypeItemType, TradeTypeConfig>
