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
