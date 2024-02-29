import React, { useEffect, useState } from 'react'
import NavTemplate from '../template'
import MainNavButtons from './nav.buttons'
import { main_nav_logo } from './nav.module.scss'
import { mainItems } from './data'
import Image from 'features/components/atoms/image'
import LogoImage from 'images/common/rebranding_logo.svg'
import Link from 'features/components/atoms/link'

const MainNav = () => {
    return (
        <NavTemplate
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/' }} aria-label="deriv logo link">
                    <Image src={LogoImage} alt="deriv-logo" className={main_nav_logo} />
                </Link>
            )}
            items={mainItems}
        >
            <MainNavButtons />
        </NavTemplate>
    )
}

export default MainNav
