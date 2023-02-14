export type TAvailableLiveMarkets =
    | 'forex'
    | 'derived'
    | 'indices'
    | 'cryptocurrency'
    | 'commodities'

export type THeaders = {
    instrument?: { symbol?: string; dl_icon?: true; instrument?: string }
    contract_size: string | number
    base_currency: string
    minimum_size: number
    minimum_spread: number
    target_spread: number
    max_effective_leverage: string | number
    margin_requirement: string | number
    swap_long: number
    swap_short: number
    trading_hours: string
}
export type TDLHeaders = {
    from: number
    to: number
    leverage: string | number
}

export type TSpecification = {
    market: string
    data: THeaders[]
    eu_data: THeaders[]
    dl_data?: TDLHeaders[]
    dl_title?: string
}
