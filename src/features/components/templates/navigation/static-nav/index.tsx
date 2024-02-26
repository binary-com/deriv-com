import React, { useEffect, useState } from 'react'
import NavTemplate from '../template'
import { static_nav_logo, static_nav_logo_academy } from './static-nav.module.scss'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import LogoImage from 'images/common/rebranding_logo.svg'
import AcademyLogoImage from 'images/common/derivacademy.svg'
import { isBrowser } from 'common/utility'

const StaticNav = () => {
    const url = isBrowser() && window.location.href
    const academy = isBrowser() && url.includes('academy')
    const [is_academy, setIsAcademy] = useState(false)
    useEffect(() => {
        // setIsAcademy(true)
        if (academy) {
            setIsAcademy(true)
        }
    }, [])

    return (
        <NavTemplate
            has_centered_items
            has_centered_logo
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/' }}>
                    <Image
                        src={is_academy ? AcademyLogoImage : LogoImage}
                        className={is_academy ? static_nav_logo_academy : static_nav_logo}
                    />
                </Link>
            )}
        />
    )
}

export default StaticNav
