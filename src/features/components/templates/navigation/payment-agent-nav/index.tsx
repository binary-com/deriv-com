import React, { useMemo } from 'react'
import NavTemplate from '../template'
import affiliateNavItems from './data'
import { partners_nav_logo, partners_buttons } from './payment-agent-nav.module.scss'
import PrimeLogo from 'images/svg/deriv-prime/deriv-prime-logo.svg'
import PartnerNavLogo from 'images/svg/partner-nav-logo.svg'
import Image from 'features/components/atoms/image'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization/localize'
import LanguageSwitcher from 'features/components/molecules/language-switcher'
import Link from 'features/components/atoms/link'
import Flex from 'features/components/atoms/flex-box'
import { getLocationPathname } from 'common/utility'
import useScrollToElement from 'features/hooks/use-scroll-to-element'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'
import { localize } from 'components/localization'

type contentType = {
    [T: string]: TString
}

const PaymentAgentAffiliateNav = ({ is_prime_page = false }: { is_prime_page?: boolean }) => {
    const path_name = getLocationPathname()
    const clickToScrollHandler = useScrollToElement('getintouch')

    const { is_eu } = useRegion()
    const texts: contentType = is_eu
        ? {
              login: '_t_Affiliate log in_t_',
              sign_up: '_t_Affiliate sign up_t_',
          }
        : {
              login: '_t_Affiliate & IB Log in_t_',
              sign_up: '_t_Affiliate & IB sign up_t_',
          }

    const generate_buttons = useMemo(() => {
        return !path_name ? null : path_name.includes('deriv-prime') ? (
            <Button.Primary
                id="dm-nav-deriv-prime-contact"
                onClick={clickToScrollHandler}
                className={partners_buttons}
            >
                <Localize translate_text="_t_Contact us_t_" />
            </Button.Primary>
        ) : (
            <>
                <Button.Primary
                    onClick={() =>
                        window.open('https://login.deriv.com/signin.php?lang=0', '_blank')
                    }
                    outlined
                    visible={'larger-than-tablet'}
                    className={partners_buttons}
                >
                    <Localize translate_text={texts.login} />
                </Button.Primary>
                <Button.Primary
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
                    onClick={() => window.open('https://login.deriv.com/signup.php', '_blank')}
                    visible={'larger-than-tablet'}
                    className={partners_buttons}
                >
                    <Localize translate_text={texts.sign_up} />
                </Button.Primary>
            </>
        )
    }, [path_name])

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
                {generate_buttons}
                <LanguageSwitcher />
            </Flex.Box>
        </NavTemplate>
    )
}

export default PaymentAgentAffiliateNav
