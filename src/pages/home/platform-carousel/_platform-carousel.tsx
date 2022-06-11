import React, { useState, useEffect } from 'react'
import DesktopPlatformCarousel from './_desktop-platform-carousel'
import MobilePlatformCarousel from './_mobile-platform-carousel'
import { platform_details_cr, platform_details_eu, platform_details_uk } from './_utils'
import { DesktopWrapper, MobileWrapper } from 'components/containers/wrapper'
import { useCountryRule } from 'components/hooks/use-country-rule'

const PlatformCarousel = () => {
    const { is_eu, is_uk, is_row } = useCountryRule()
    const [carousel_data, setCarouselData] = useState(null)

    useEffect(() => {
        setCarouselData(
            (is_eu && platform_details_eu) ||
                (is_uk && platform_details_uk) ||
                (is_row && platform_details_cr),
        )
    }, [is_eu, is_row, is_uk])

    return (
        <>
            <DesktopWrapper>
                {carousel_data && <DesktopPlatformCarousel carousel_data={carousel_data} />}
            </DesktopWrapper>
            <MobileWrapper>
                {carousel_data && <MobilePlatformCarousel carousel_data={carousel_data} />}
            </MobileWrapper>
        </>
    )
}

export default PlatformCarousel
