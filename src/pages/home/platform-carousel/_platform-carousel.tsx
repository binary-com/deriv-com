import React, { useState, useEffect } from 'react'
import DesktopPlatformCarousel from './_desktop-platform-carousel'
import MobilePlatformCarousel from './_mobile-platform-carousel'
import { platform_details_cr, platform_details_eu, platform_details_uk } from './_utils'
import { DesktopWrapper, MobileWrapper } from 'components/containers/wrapper'
import { useCountryRule } from 'components/hooks/use-country-rule'

const PlatformCarousel = () => {
    const { is_eu, is_uk, is_row } = useCountryRule()
    const [carousel_data, setCarouselData] = useState(platform_details_cr)

    useEffect(() => {
        if (is_eu) {
            setCarouselData(platform_details_eu)
        }
        if (is_uk) {
            setCarouselData(platform_details_uk)
        }
        if (is_row) {
            setCarouselData(platform_details_cr)
        }
    }, [is_eu, is_row, is_uk])

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
