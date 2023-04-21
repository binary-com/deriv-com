import React from 'react'
import NavTemplate from '../template'
import MainNavButtons from './main-nav-buttons'
import { mainItems } from './content'
import Image from 'features/components/atoms/image'
import LogoImage from 'images/common/rebranding_logo.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Link from 'features/components/atoms/link'

const MainNav = () => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <NavTemplate
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/' }} aria-label="deriv logo link">
                    <Image
                        src={LogoImage}
                        alt="deriv-logo"
                        width={is_mobile_or_tablet ? 48 : 96}
                        height={is_mobile_or_tablet ? 16 : 36}
                    />
                </Link>
            )}
            items={mainItems}
        >
            <MainNavButtons />
        </NavTemplate>
    )
}

export default MainNav
