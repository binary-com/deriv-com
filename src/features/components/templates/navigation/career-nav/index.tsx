import React from 'react'
import { MobileNavToggle, NavigationBlock } from '@deriv-com/blocks'
// eslint-disable-next-line import/no-unresolved
import { SubBrandDerivCareersBrandLightIcon } from '@deriv/quill-icons/Logo'
import { career_nav_items } from './data'

const CareerNav = () => {
    return (
        <NavigationBlock
            renderButtons={MobileNavToggle}
            renderLogo={() => <SubBrandDerivCareersBrandLightIcon width={133} height={24} />}
            items={career_nav_items}
        />
    )
}

export default CareerNav
