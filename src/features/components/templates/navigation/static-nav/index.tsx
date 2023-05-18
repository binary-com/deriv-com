import React from 'react'
import NavTemplate from '../template'
import { static_nav_logo } from './static-nav.module.scss'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import LogoImage from 'images/common/rebranding_logo.svg'

const StaticNav = () => {
    return (
        <NavTemplate
            has_centered_items
            has_centered_logo
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/' }}>
                    <Image src={LogoImage} className={static_nav_logo} />
                </Link>
            )}
        />
    )
}

export default StaticNav
