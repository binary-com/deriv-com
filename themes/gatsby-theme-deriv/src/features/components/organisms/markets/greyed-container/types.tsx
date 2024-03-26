import { TSmartContent, TString } from 'types/generics'
import { IconType } from 'features/types'

export type TradeBenefitType = {
    description: TString
    icon: IconType
}

type TradeTypeConfig = {
    is_eu: boolean
}

export type BenefitTradeTypeItem = TSmartContent<TradeBenefitType, TradeTypeConfig>
