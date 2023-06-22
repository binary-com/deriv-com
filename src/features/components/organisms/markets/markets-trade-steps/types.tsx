import { TSmartContent, TString } from 'types/generics'

export type TradeStepsType = {
    description: TString
    title: TString
}

export type TradeTypeConfig = {
    is_eu: boolean
}

export type StepsTradeTypeItem = TSmartContent<TradeStepsType, TradeTypeConfig>
