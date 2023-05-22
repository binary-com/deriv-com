import { TSmartContent, TString } from 'types/generics'

export type CardType = {
    header?: TString
    description?: TString
    icon?: string
    link?: `/${string}`
    id?: number
}

type TradeTypeConfig = {
    is_eu: boolean
}

export type CardTypeItem = TSmartContent<CardType, TradeTypeConfig>
