export type TMarketData = {
    allow_forward_starting: number
    delay_amount: number
    display_name: string
    exchange_is_open: number
    exchange_name: string
    intraday_interval_minutes: number
    is_trading_suspended: number
    market: TAvailableLiveMarkets
    market_display_name: string
    pip: number
    quoted_currency_symbol: string
    spot: number
    spot_age: string
    spot_time: string
    submarket: string
    submarket_display_name: string
    symbol: string
    symbol_type: string
    spot_percentage_change: number
}

export type TMarketDataResponse = {
    active_symbols: TMarketData[]
    req_id: number
}

export type TAvailableLiveMarkets =
    | 'basket_index'
    | 'forex'
    | 'indices'
    | 'cryptocurrency'
    | 'synthetic_index'
    | 'commodities'

export type TMarketButtons = {
    id: number
    button_text: string
    market_name: TAvailableLiveMarkets
}
