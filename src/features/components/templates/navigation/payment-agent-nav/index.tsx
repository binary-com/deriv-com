import React from 'react'
import NavTemplate from '../template'
import affiliateNavItems from './data'
import PartnerNavLogo from 'images/svg/partner-nav-logo.svg'
import Image from 'features/components/atoms/image'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization/localize'
import LanguageSwitcher from 'features/components/molecules/language-switcher'
import Link from 'features/components/atoms/link'
import Flex from 'features/components/atoms/flex-box'

const PaymentAgentAffiliateNav = () => {
    return (
        <NavTemplate
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/partners/' }}>
                    <Image src={PartnerNavLogo} width={185} height={32} />
                </Link>
            )}
            items={affiliateNavItems}
            has_top_nav
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
                    id="dm-nav-affiliate-login-button"
                    onClick={() =>
                        window.open('https://login.deriv.com/signin.php?lang=0', '_blank')
                    }
                    outlined
                >
                    <Localize translate_text="_t_Affiliate & IB Log in_t_" />
                </Button.Primary>
                <Button.Primary
                    id="dm-nav-affiliate-signup-button"
                    onClick={() => window.open('https://login.deriv.com/signup.php', '_blank')}
                >
                    <Localize translate_text="_t_Affiliate & IB sign up_t_" />
                </Button.Primary>
                <LanguageSwitcher />
            </Flex.Box>
        </NavTemplate>
    )
}

export default PaymentAgentAffiliateNav
