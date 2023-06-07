import { LinkUrlType } from 'features/types'
import { TString } from 'types/generics'

export type TradeItems = {
    icon: string
    name: TString
    link: LinkUrlType
}
export type TradeType = {
    trade_name?: TString
    trade_description_1?: TString
    trade_description_2?: TString
    trade_items?: Array<TradeItems>
}
