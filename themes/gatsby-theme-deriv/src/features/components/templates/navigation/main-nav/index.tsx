import React, { useEffect, useState } from 'react'
import { NavigationBlock } from '@deriv-com/blocks'
import MainNavigationButtons from './nav.buttons'
import MainNavigationLogo from './nav.logo'
import { mainEuNavItems, mainRowNavItems } from './data'
import useBuildVariant from 'features/hooks/use-build-variant'
import useRegion from 'components/hooks/use-region'

const MainRowNavigation = () => {
    const { is_eu } = useRegion()
    const [items, setItems] = useState(mainRowNavItems)

    useEffect(() => {
        if (is_eu) setItems(mainEuNavItems)
    }, [is_eu])

    return (
        <NavigationBlock
            renderButtons={MainNavigationButtons}
            renderLogo={MainNavigationLogo}
            items={items}
        />
    )
}

export default MainRowNavigation
