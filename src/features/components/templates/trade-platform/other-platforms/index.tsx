import React from 'react'
import CardCarousel from 'features/components/templates/card-carousel/other-platforms'
import { OtherPlatformsProps } from 'features/components/templates/card-carousel/other-platforms/types'

const TradingPlatformOther = ({
    trading_platform_other,
}: {
    trading_platform_other: OtherPlatformsProps
}) => {
    return (
        <>
            <CardCarousel
                renderable_data={trading_platform_other}
                main_heading="_t_Check out our other platforms_t_"
            />
        </>
    )
}

export default TradingPlatformOther
