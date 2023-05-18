import { TFlexBasis } from 'features/types'
import { MarketSymbol } from 'pages/markets/instruments/_market-symbols'
import { TString } from 'types/generics'

export interface CommonMarketSymbol extends MarketSymbol {
    id: number
}
export type InstrumentContentType = {
    mobile_basis: TFlexBasis
    desktop_basis: TFlexBasis
    title: TString
    data: CommonMarketSymbol[]
}
