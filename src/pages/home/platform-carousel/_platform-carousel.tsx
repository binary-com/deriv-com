import React, { useState, useEffect } from 'react'
import DesktopPlatformCarousel from './_desktop-platform-carousel'
import MobilePlatformCarousel from './_mobile-platform-carousel'
import { platform_details_cr } from './_utils'
import { DesktopWrapper, MobileWrapper } from 'components/containers/wrapper'

const PlatformCarousel = () => {
    const [carousel_data, setCarouselData] = useState(platform_details_cr)

    useEffect(() => {
        setCarouselData(platform_details_cr)
    }, [])

    return (
        <>
            <DesktopWrapper>
                <DesktopPlatformCarousel carousel_data={carousel_data} />
            </DesktopWrapper>
            <MobileWrapper>
                <MobilePlatformCarousel carousel_data={carousel_data} />
            </MobileWrapper>
        </>
    )
}

export default PlatformCarousel
