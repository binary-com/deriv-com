import { PathType } from 'features/types'
import { TString } from 'types/generics'

export type TMarketData = {
    ask: number
    bid: number
    chng: number
    mkt: string
    sprd: number
    sym: string
    code: string
}

export type TAvailableLiveMarkets = 'fx' | 'der' | 'ind' | 'cry' | 'com' | 'etfs'

export type TMarketButtons = {
    src: string
    selected_src: string
    button_text: string
    market_name: TAvailableLiveMarkets
    market_description: TString
    to: PathType
}
