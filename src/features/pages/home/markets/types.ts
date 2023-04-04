import { ReactElement } from 'react'
import { LinkUrlType } from 'features/types'
import { TSmartContent, TString } from 'types/generics'

export type MarketItem = {
    header: TString
    description: TString
    url: LinkUrlType
    img: ReactElement
}

type MarketItemConfig = {
    is_eu: boolean
}

export type SmartMarketItem = TSmartContent<MarketItem, MarketItemConfig>
