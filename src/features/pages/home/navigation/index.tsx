import React from 'react'
import { NavigationBlock } from '@deriv-com/blocks'
import MainNavigationButtons from './nav.buttons'
import MainNavigationLogo from './nav.logo'
import { mainRowNavItems } from './data'

const MainRowNavigation = () => {
    return (
        <NavigationBlock
            renderButtons={MainNavigationButtons}
            renderLogo={MainNavigationLogo}
            items={mainRowNavItems}
        />
    )
}

export default MainRowNavigation
