import React from 'react'
import NavTemplate from '../template'
import affiliateNavItems from './data'
import { partners_nav_logo } from './payment-agent-nav.module.scss'
import RightSideButtons from './right-side-buttons'
import PrimeLogo from 'images/svg/deriv-prime/deriv-prime-logo.svg'
import PartnerNavLogo from 'images/svg/partner-nav-logo.svg'
import Image from 'features/components/atoms/image'
import LanguageSwitcher from 'features/components/molecules/language-switcher'
import Link from 'features/components/atoms/link'
import Flex from 'features/components/atoms/flex-box'
import { TString } from 'types/generics'
import { localize } from 'components/localization'

type contentType = {
    [T: string]: TString
}

const PaymentAgentAffiliateNav = ({ is_prime_page = false }: { is_prime_page?: boolean }) => {
    return (
        <NavTemplate
            renderLogo={() => (
                <Link
                    url={{
                        type: 'internal',
                        to: is_prime_page ? '/partners/deriv-prime/' : '/partners/',
                    }}
                    aria-label="deriv partners link"
                >
                    {is_prime_page ? (
                        <Image
                            src={PrimeLogo}
                            className={partners_nav_logo}
                            alt={localize('_t_Deriv Prime_t_')}
                        />
                    ) : (
                        <Image
                            src={PartnerNavLogo}
                            className={partners_nav_logo}
                            alt={localize('_t_Deriv Partners_t_')}
                        />
                    )}
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
                <RightSideButtons />
                <LanguageSwitcher />
            </Flex.Box>
        </NavTemplate>
    )
}

export default PaymentAgentAffiliateNav
