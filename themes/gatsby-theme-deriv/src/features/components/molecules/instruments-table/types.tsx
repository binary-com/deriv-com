import { TFlexBasis } from 'features/types'
import { TString } from 'types/generics'

export interface CommonMarketSymbol {
    id: number
    src: string
    text: TString
}
export type InstrumentContentType = {
    // based on the design can pass columns by passing mobile_basis and desktop_basis
    mobile_basis: TFlexBasis
    desktop_basis: TFlexBasis
    title: TString
    data: CommonMarketSymbol[]
}
