import { TSmartContent, TString } from 'types/generics'

export type TradeBenefitType = {
    description: TString
    icon_src: string
}

type TradeTypeConfig = {
    is_eu: boolean
}

export type BenefitTradeTypeItem = TSmartContent<TradeBenefitType, TradeTypeConfig>
