import { ReactElement } from 'react'

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
export type THeaders = {
    instrument: ReactElement
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
export type TSpecData = {
    section: string
    hide_for_eu?: boolean
    hide_for_row?: boolean
    headers?: THeaders
    data?: []
}
