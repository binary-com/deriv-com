import React from 'react'
import { MobileNavToggle, NavigationBlock } from '@deriv-com/blocks'
// eslint-disable-next-line import/no-unresolved
import { SubBrandDerivCareersBrandLightIcon } from '@deriv/quill-icons/Logo'
import { CustomLink } from '@deriv-com/components'
import { career_nav_items } from './data'

const CareerNav = () => {
    return (
        <NavigationBlock
            renderButtons={MobileNavToggle}
            renderLogo={() => (
                <CustomLink href={'/careers'}>
                    <SubBrandDerivCareersBrandLightIcon width={133} height={24} />
                </CustomLink>
            )}
            items={career_nav_items}
        />
    )
}

export default CareerNav
