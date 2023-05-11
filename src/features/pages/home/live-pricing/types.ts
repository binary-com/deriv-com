export type TMarketData = {
    ask: number
    bid: number
    day_percentage_change: number
    market: string
    spread: number
    symbol: string
    shortcode: string
}

export type TMarketDataResponse = {
    trading_platform_asset_listing: any
    active_symbols: TMarketData[]
    req_id: number
}

export type TAvailableLiveMarkets =
    | 'forex'
    | 'derived'
    | 'indices'
    | 'cryptocurrency'
    | 'commodities'

export type TMarketButtons = {
    id: number
    src: string
    selected_src: string
    button_text: string
    market_name: TAvailableLiveMarkets
    market_description: string
    to: string
}