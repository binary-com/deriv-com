import React from 'react'
import { NavigationBlock } from '@deriv-com/blocks'
import MainNavigationButtons from './nav.buttons'
import MainNavigationLogo from './nav.logo'
import { mainEuNavItems, mainRowNavItems } from './data'
import useBuildVariant from 'features/hooks/use-build-variant'

const MainRowNavigation = () => {
    const { region } = useBuildVariant()

    return (
        <NavigationBlock
            renderButtons={MainNavigationButtons}
            renderLogo={MainNavigationLogo}
            items={region === 'eu' ? mainEuNavItems : mainRowNavItems}
        />
    )
}

export default MainRowNavigation
