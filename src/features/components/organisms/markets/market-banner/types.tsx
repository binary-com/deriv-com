import { ReactElement } from 'react'
import { TSmartContent, TString } from 'types/generics'

export type HomepageBannerType = {
    description: TString
    title: TString
    image_tablet?: ReactElement
    image_phone?: ReactElement
}

export type TradeTypeConfig = {
    is_eu: boolean
}

export type HomePageBannerItem = TSmartContent<HomepageBannerType, TradeTypeConfig>
