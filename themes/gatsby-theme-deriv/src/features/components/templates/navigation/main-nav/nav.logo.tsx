import React from 'react'
import { CustomLink } from '@deriv-com/components'
// eslint-disable-next-line import/no-unresolved
import { BrandDerivWordmarkCoralIcon } from '@deriv/quill-icons/Logo'

const MainNavigationLogo = () => {
    return (
        <CustomLink href={'/'} data-cy="deriv-logo" aria-label="deriv logo label">
            <BrandDerivWordmarkCoralIcon width={73} height={24} />
        </CustomLink>
    )
}

export default MainNavigationLogo
