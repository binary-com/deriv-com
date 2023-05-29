import React from 'react'
import NavTemplate from '../template'
import MainNavButtons from './main-nav-buttons'
import { main_nav_logo } from './main-nav.module.scss'
import { mainItems } from './content'
import Image from 'features/components/atoms/image'
import LogoImage from 'images/common/rebranding_logo.svg'
import Link from 'features/components/atoms/link'
import { TZIndex } from 'features/types'

const MainNav = ({ z_index }: { z_index?: TZIndex }) => {
    return (
        <NavTemplate
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/' }} aria-label="deriv logo link">
                    <Image src={LogoImage} alt="deriv-logo" className={main_nav_logo} />
                </Link>
            )}
            items={mainItems}
            z_index={z_index}
        >
            <MainNavButtons />
        </NavTemplate>
    )
}

export default MainNav
