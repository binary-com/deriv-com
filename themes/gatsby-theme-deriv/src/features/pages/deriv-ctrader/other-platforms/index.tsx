import React from 'react'
import { carousel_data } from './data'
import PlatformsCarousel from 'features/components/templates/trade-platform/other-platforms'

const OtherPlatforms = () => {
    return (
        <PlatformsCarousel
            data={carousel_data}
            heading="_t_Check out our other platforms_t_"
        />
    )
}

export default OtherPlatforms
