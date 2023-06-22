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

export type TradingPlatformWhatHaveData = {
    id: number
    image: ReactElement
    title?: TString
    subtitle?: TString
}

export type TradingPlatformCardDataType = {
    title?: TString
    subtitle?: TString
    icon: ReactElement
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
