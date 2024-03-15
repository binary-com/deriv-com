import React, { useEffect, useState } from 'react'
import { NavigationBlock } from '@deriv-com/blocks'
import MainNavigationButtons from './nav.buttons'
import MainNavigationLogo from './nav.logo'
import { mainEuNavItems, mainRowNavItems } from './data'
import useRegion from 'components/hooks/use-region'
import { useShowCfdBanner } from 'components/hooks/use-show-cfd-banner'

const MainRowNavigation = () => {
    const show_banner = useShowCfdBanner()
    const { is_eu } = useRegion()
    const [items, setItems] = useState(mainRowNavItems)

    useEffect(() => {
        if (is_eu) setItems(mainEuNavItems)
    }, [is_eu])

    return (
        <NavigationBlock
            mobileWrapClass={show_banner && 'h-calc(100dvh-94px) min-[402px]:h-calc(100dvh-76px)'}
            renderButtons={MainNavigationButtons}
            renderLogo={MainNavigationLogo}
            items={items}
        />
    )
}

export default MainRowNavigation
