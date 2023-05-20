import React from 'react'
import NavTemplate from '../template'
import { bug_bounty_logo } from './bug-bounty-nav.module.scss'
import Image from 'features/components/atoms/image'
import BugBountyNavLogo from 'images/svg/bug-bounty-nav-logo.svg'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization/localize'
import LanguageSwitcher from 'features/components/molecules/language-switcher'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'

const BugBountyNav = () => {
    return (
        <NavTemplate
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/' }} aria-label="deriv logo link">
                    <Image src={BugBountyNavLogo} className={bug_bounty_logo} />
                </Link>
            )}
            has_top_nav
        >
            <Flex.Box
                direction="row-reverse"
                md={{ direction: 'row' }}
                justify="center"
                align="center"
                gap="8x"
            >
                <Button.Primary
                    id="dm-nav-submit-button"
                    onClick={() => window.open('https://hackerone.com/deriv?type=team', '_blank')}
                    outlined
                >
                    <Localize translate_text="_t_Submit a report_t_" />
                </Button.Primary>
                <LanguageSwitcher />
            </Flex.Box>
        </NavTemplate>
    )
}

export default BugBountyNav
