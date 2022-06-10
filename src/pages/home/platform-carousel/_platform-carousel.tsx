import React, { Suspense } from 'react'
import MobilePlatformCarousel from './_mobile-platform-carousel'
import { DesktopWrapper, MobileWrapper } from 'components/containers/wrapper'
const DesktopPlatformCarousel = React.lazy(() => import('./_desktop-platform-carousel')) // Lazy-loaded

const PlatformCarousel = () => {
    return (
        <>
            <DesktopWrapper>
                <Suspense fallback={''}>
                    <DesktopPlatformCarousel />
                </Suspense>
            </DesktopWrapper>
            <MobileWrapper>
                <MobilePlatformCarousel />
            </MobileWrapper>
        </>
    )
}

export default PlatformCarousel
