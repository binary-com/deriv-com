import React from 'react'
import { CustomLink } from '@deriv-com/components'
// eslint-disable-next-line import/no-unresolved
import { BrandDerivWordmarkCoralIcon } from '@deriv/quill-icons/Logo'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

export const MainNavigationLogo = () => {
    const [is_mobile] = useBrowserResize(1024)
    return (
        <CustomLink href={'/'} data-cy={is_mobile ? 'deriv-logo-mobile' : 'deriv-logo-desktop'}>
            <BrandDerivWordmarkCoralIcon width={73} height={24} />
        </CustomLink>
    )
}

export default MainNavigationLogo
