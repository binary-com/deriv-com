import React from 'react'
import { BannerType } from 'features/components/templates/banners/blade-shape-banner/types'
import BladeShapeBanner from 'features/components/templates/banners/blade-shape-banner'

export type TradingPlatformBannerProps = BannerType

const TradingPlatformBanner = (props: TradingPlatformBannerProps) => {
    return <BladeShapeBanner data={props} />
}

export default TradingPlatformBanner
