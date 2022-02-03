import React from 'react'
import DesktopPlatformCarousel from './_desktop-platform-carousel'
import MobilePlatformCarousel from './_mobile-platform-carousel'
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
