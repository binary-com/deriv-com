import React from 'react'
import { partners_nav_logo } from './nav.module.scss'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import NavTemplate from 'features/components/templates/navigation/template'
import LanguageSwitcher from 'features/components/molecules/language-switcher'
import PartnerNavLogo from 'images/svg/partner-nav-logo.svg'

const AffiliateNav = () => {
    return (
        <NavTemplate
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/partners/' }}>
                    <Image
                        src={PartnerNavLogo}
                        alt={'nav affiliates'}
                        className={partners_nav_logo}
                        aria-label="deriv logo link"
                    />
                </Link>
            )}
        >
            <LanguageSwitcher />
        </NavTemplate>
    )
}

export default AffiliateNav
