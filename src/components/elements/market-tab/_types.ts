export type TAvailableLiveMarkets =
    | 'forex'
    | 'derived'
    | 'indices'
    | 'cryptocurrency'
    | 'commodities'

export type TMarketButtons = {
    id: number
    src: string
    button_text: string
    market_name: TAvailableLiveMarkets
    market_description: string
}
