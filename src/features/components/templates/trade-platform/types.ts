import React, { ReactElement } from 'react'
import StepperView from 'features/components/atoms/tab/tab-content'
import { BannerType } from 'features/components/templates/banners/blade-shape-banner/types'
import { TString } from 'types/generics'

export type TradingPlatformTextType = {
    title?: TString
    subtitle?: TString
}
export type TradingPlatformPHeroProps = {
    hero_title: TString[]
    hero: ReactElement
    hero_mobile: ReactElement
    logo: ReactElement
    logo_mobile: ReactElement
}
export type TradingPlatformDescriptionProps = {
    what_is_description: TradingPlatformTextType
}
export type TradingPlatformWhatHaveProps = {
    id: number
    image: ReactElement
    title?: TString
    subtitle?: TString
}[]
export type TradingPlatformWhyTradeProps = {
    title?: TString
    card_data: { title?: TString; subtitle?: TString; icon: ReactElement }[]
}
export type TradingPlatformStepperViewType = React.ComponentProps<typeof StepperView>['items']
export type TradingPlatformStartProps = {
    demo: TradingPlatformStepperViewType
    demo_mobile?: TradingPlatformStepperViewType
    real: TradingPlatformStepperViewType
    real_mobile?: TradingPlatformStepperViewType
}
export type TradingPlatformOtherProps = {
    icon: string
    header: string
    description: TString
    link: string
}[]
export type TradingPlatformDataType = {
    trading_platform_hero: TradingPlatformPHeroProps
    trading_platform_description: TradingPlatformDescriptionProps
    trading_platform_why_trade: TradingPlatformWhyTradeProps
    trading_platform_what_have: TradingPlatformWhatHaveProps
    trading_platform_start: TradingPlatformStartProps
    trading_platform_banner?: BannerType
    trading_platform_other: TradingPlatformOtherProps
}
