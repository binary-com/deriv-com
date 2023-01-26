export type TAvailableLiveMarkets =
    | 'forex'
    | 'derived'
    | 'indices'
    | 'cryptocurrency'
    | 'commodities'

export type THeaders = {
    index: number
    instrument: string
    contract_size: number
    base_currency: string
    minimum_size: number
    minimum_spread: number
    target_spread: number
    max_effective_leverage: number
    margin_requirement: number
    swap_long: number
    swap_short: number
    trading_hours: string
}
