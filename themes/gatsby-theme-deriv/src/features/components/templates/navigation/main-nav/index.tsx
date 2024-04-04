import React from 'react'
import { NavigationBlock } from '@deriv-com/blocks'
import MainNavigationButtons from './nav.buttons'
import MainNavigationLogo from './nav.logo'
import { mainEuNavItems, mainRowNavItems } from './data'
import useBuildVariant from 'features/hooks/use-build-variant'
import { useShowCfdBanner } from 'components/hooks/use-show-cfd-banner'

const MainRowNavigation = () => {
    const {region} = useBuildVariant()
    const show_banner = useShowCfdBanner()

    return (
        <NavigationBlock
            mobileWrapClass={show_banner && 'h-[calc(100dvh-var(--banner-height))]'}
            renderButtons={MainNavigationButtons}
            renderLogo={MainNavigationLogo}
            items={region === "row" ? mainRowNavItems : mainEuNavItems}
        />
    )
}

export default MainRowNavigation
