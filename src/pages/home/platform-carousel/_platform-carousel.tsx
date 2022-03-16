import React from 'react'
import DesktopPlatformCarousel from './_desktop-platform-carousel'
// import MobilePlatformCarousel from './_mobile-platform-carousel'
import { DesktopWrapper } from 'components/containers/wrapper'

const PlatformCarousel = () => {
    return (
        <>
            <DesktopWrapper>
                <DesktopPlatformCarousel />
            </DesktopWrapper>
        </>
    )
}

export default PlatformCarousel
