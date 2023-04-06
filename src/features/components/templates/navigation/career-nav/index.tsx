import React from 'react'
import NavTemplate from '../template'
import careerNavItems from './data'
import Image from 'features/components/atoms/image'
import CareerNavLogo from 'images/svg/career-nav-icon.svg'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization/localize'
import LanguageSwitcher from 'features/components/molecules/language-switcher'
import Link from 'features/components/atoms/link'

const CareerNav = () => {
    return (
        <NavTemplate
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/' }}>
                    <Image src={CareerNavLogo} width={185} height={32} />
                </Link>
            )}
            items={careerNavItems}
            hasTopNav
            has_centered_items
        >
            <Button.Primary
                id="dm-nav-explore-job-button"
                onClick={() => window.open('https://deriv.zohorecruit.eu/jobs/Careers', '_blank')}
            >
                <Localize translate_text="_t_Explore jobs_t_" />
            </Button.Primary>
            <LanguageSwitcher />
        </NavTemplate>
    )
}

export default CareerNav
