export type TMarketData = {
    ask: number
    bid: number
    day_percentage_change: number
    market: string
    market_ranking: string
    spread: number
    symbol: string
    shortcode: string
}
export type TAvailableLiveMarkets =
    | 'forex'
    | 'derived'
    | 'indices'
    | 'cryptocurrency'
    | 'commodities'
