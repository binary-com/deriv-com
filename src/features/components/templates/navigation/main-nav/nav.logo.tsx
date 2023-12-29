import React from 'react'
import { CustomLink } from '@deriv-com/components'
// eslint-disable-next-line import/no-unresolved
import { BrandDerivWordmarkCoralIcon } from '@deriv/quill-icons/Logo'

export const MainNavigationLogo = () => {
    return (
        <CustomLink href={'/'} data-cy="deriv-logo">
            <BrandDerivWordmarkCoralIcon width={73} height={24} />
        </CustomLink>
    )
}

export default MainNavigationLogo
