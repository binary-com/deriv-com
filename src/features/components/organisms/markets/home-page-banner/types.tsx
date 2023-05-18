import { ReactElement } from 'react'
import { TSmartContent, TString } from 'types/generics'

export type HomepageBannerType = {
    description: TString
    title: TString
    image: ReactElement
}

export type TradeTypeConfig = {
    is_eu: boolean
}

export type HomePageBannerItem = TSmartContent<HomepageBannerType, TradeTypeConfig>
