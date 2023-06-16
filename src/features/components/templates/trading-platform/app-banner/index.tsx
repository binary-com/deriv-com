import React from 'react'
import { BannerType } from 'features/components/templates/banners/blade-shape-banner/types'
import BladeShapeBanner from 'features/components/templates/banners/blade-shape-banner'

const TradingPlatformBanner = ({
    trading_platform_banner,
}: {
    trading_platform_banner: BannerType
}) => {
    return <BladeShapeBanner data={trading_platform_banner} />
}

export default TradingPlatformBanner
