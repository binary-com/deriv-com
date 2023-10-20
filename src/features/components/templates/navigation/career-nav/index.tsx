import React from 'react'
import NavTemplate from '../template'
import career_nav_items from './data'
import { careers_nav_logo } from './career-nav.module.scss'
import Image from 'features/components/atoms/image'
import CareerNavLogo from 'images/svg/career-nav-icon.svg'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization/localize'
import LanguageSwitcher from 'features/components/molecules/language-switcher'
import Link from 'features/components/atoms/link'
import Flex from 'features/components/atoms/flex-box'
import { localize } from 'components/localization'

const CareerNav = () => {
    return (
        <NavTemplate
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/' }} aria-label="deriv careers link">
                    <Image
                        src={CareerNavLogo}
                        className={careers_nav_logo}
                        alt={localize('_t_Deriv Careers_t_')}
                    />
                </Link>
            )}
            items={career_nav_items}
            has_centered_items
        >
            <Flex.Box
                direction="row-reverse"
                md={{ direction: 'row' }}
                justify="center"
                align="center"
                gap="8x"
            >
                <Button.Primary
                    id="dm-nav-explore-job-button"
                    onClick={() =>
                        window.open('https://deriv.zohorecruit.eu/jobs/Careers', '_blank')
                    }
                >
                    <Localize translate_text="_t_Explore jobs_t_" />
                </Button.Primary>
            </Flex.Box>
        </NavTemplate>
    )
}

export default CareerNav
