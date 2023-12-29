import React from 'react'
import { NavigationBlock } from '@deriv-com/blocks'
import MainNavigationButtons from './nav.buttons'
import MainNavigationLogo from './nav.logo'
import { mainEuNavItems, mainRowNavItems } from './data'
import useRegion from 'components/hooks/use-region'

const MainRowNavigation = () => {
    const { is_eu } = useRegion()
    return (
        <NavigationBlock
            renderButtons={MainNavigationButtons}
            renderLogo={MainNavigationLogo}
            items={is_eu ? mainEuNavItems : mainRowNavItems}
        />
    )
}

export default MainRowNavigation
