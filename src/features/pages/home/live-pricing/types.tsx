import { TString } from 'types/generics'

export type TMarketData = {
    ask: number
    bid: number
    chng: number
    mkt: string
    sprd: number
    sym: string
    code: string
    bid_status?: string
    ask_status?: string
    spread_status?: string
}

export type TMarketDataResponse = {
    trading_platform_asset_listing: any
    active_symbols: TMarketData[]
    req_id: number
}

export type TAvailableLiveMarkets = 'fx' | 'der' | 'ind' | 'cry' | 'com'

export type TMarketButtons = {
    src: string
    selected_src: string
    button_text: string
    market_name: TAvailableLiveMarkets
    market_description: TString
    to: string
}
