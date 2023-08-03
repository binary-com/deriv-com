import React from 'react'
import NavTemplate from '../template'
import affiliateNavItems from './data'
import { partners_nav_logo, partners_buttons } from './payment-agent-nav.module.scss'
import PartnerNavLogo from 'images/svg/partner-nav-logo.svg'
import Image from 'features/components/atoms/image'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization/localize'
import LanguageSwitcher from 'features/components/molecules/language-switcher'
import Link from 'features/components/atoms/link'
import Flex from 'features/components/atoms/flex-box'
import { getLocationPathname } from 'common/utility'

const PaymentAgentAffiliateNav = () => {
    const is_deriv_prime_url = getLocationPathname().includes('deriv-prime')

    return (
        <NavTemplate
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/partners/' }}>
                    <Image src={PartnerNavLogo} className={partners_nav_logo} />
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
                {is_deriv_prime_url ? (
                    <Button.Primary
                        id="dm-nav-deriv-prime-contact"
                        onClick={() => (window.location.hash = '#getintouch')} //navigating to the get in touch div element.will be changed later
                        className={partners_buttons}
                    >
                        <Localize translate_text="_t_Contact us_t_" />
                    </Button.Primary>
                ) : (
                    <>
                        <Button.Primary
                            id="dm-nav-affiliate-login-button"
                            onClick={() =>
                                window.open('https://login.deriv.com/signin.php?lang=0', '_blank')
                            }
                            outlined
                            visible={'larger-than-tablet'}
                            className={partners_buttons}
                        >
                            <Localize translate_text="_t_Affiliate & IB Log in_t_" />
                        </Button.Primary>
                        <Button.Primary
                            id="dm-nav-affiliate-login-button"
                            onClick={() =>
                                window.open('https://login.deriv.com/signin.php?lang=0', '_blank')
                            }
                            outlined
                            visible={'phone-and-tablet'}
                        >
                            <Localize translate_text="_t_Log in_t_" />
                        </Button.Primary>
                        <Button.Primary
                            id="dm-nav-affiliate-signup-button"
                            onClick={() =>
                                window.open('https://login.deriv.com/signup.php', '_blank')
                            }
                            visible={'larger-than-tablet'}
                            className={partners_buttons}
                        >
                            <Localize translate_text="_t_Affiliate & IB sign up_t_" />
                        </Button.Primary>
                    </>
                )}

                <LanguageSwitcher />
            </Flex.Box>
        </NavTemplate>
    )
}

export default PaymentAgentAffiliateNav
