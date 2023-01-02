export type TMarketData = {
    ask: number
    bid: number
    day_percentage_change: number
    market: string
    market_ranking: string
    spread: number
    symbol: string
}

export type TMarketDataResponse = {
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
    button_text: string
    market_name: TAvailableLiveMarkets
    market_description: string
}
