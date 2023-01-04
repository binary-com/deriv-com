import React, { useState, useEffect } from 'react'
import DesktopPlatformCarousel from './_desktop-platform-carousel'
import MobilePlatformCarousel from './_mobile-platform-carousel'
import { platform_details_row, platform_details_eu } from './_utils'
import { DesktopWrapper, MobileWrapper } from 'components/containers/wrapper'
import { RegionContext } from 'store/region-context'

const PlatformCarousel = () => {
    const { is_eu, is_row } = React.useContext(RegionContext)
    const [carousel_data, setCarouselData] = useState(platform_details_row)

    useEffect(() => {
        if (is_eu) {
            setCarouselData(platform_details_eu)
        }
        if (is_row) {
            setCarouselData(platform_details_row)
        }
    }, [is_eu, is_row])

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
