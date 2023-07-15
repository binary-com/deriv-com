import { TString } from 'types/generics'

export type TAvailableLiveMarkets =
    | 'forex'
    | 'derived'
    | 'indices'
    | 'etfs'
    | 'cryptocurrency'
    | 'commodities'

export type TMarketButtons = {
    id: number
    src: string
    selected_src?: string
    button_text: TString
    market_name: TAvailableLiveMarkets
    market_description: TString
    to: string
}
