import React from 'react'
import NavTemplate from '../template'
import { static_nav_logo } from './academy-nav.module.scss'
import LogoImage from 'images/common/academy.svg'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'

const AcademyNav = () => {
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

export default AcademyNav
