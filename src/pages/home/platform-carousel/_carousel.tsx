import React from 'react'
import DesktopPlatformCarousel from './_desktop-carousel'
import MobilePlatformCarousel from './_mobile-carousel'
import { DesktopWrapper, MobileWrapper } from 'components/containers/wrapper'

const PlatformCarousel = () => {
    return (
        <>
            <DesktopWrapper>
                <DesktopPlatformCarousel />
            </DesktopWrapper>
            <MobileWrapper>
                <MobilePlatformCarousel />
            </MobileWrapper>
        </>
    )
}

export default PlatformCarousel
