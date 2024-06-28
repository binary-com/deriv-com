import React, { useEffect, useState } from 'react'
import { MobileNavToggle } from '@deriv-com/blocks'
import { Button } from '@deriv/quill-design'
import { getLocationPathname } from 'common/utility'
import { Localize, LocalizedLink } from 'components/localization'
import useAffiliateSignupLink from 'features/hooks/ab-testing/use-partners-signup-link'
import useBuildVariant from 'features/hooks/use-build-variant'
import useWebsiteStatus from 'components/hooks/use-website-status'

const AffiliateButtons = () => {
    const { affiliate_signup_link } = useAffiliateSignupLink()
    const { website_status } = useWebsiteStatus()

    const user_ip_country = website_status?.clients_country || ''

    return (
        <>
            <Button
                variant="secondary"
                colorStyle="black"
                size="lg"
                onClick={() =>
                    window.open(
                        user_ip_country === 'my'
                            ? 'https://dynamicworks-dev.deriv.services/login?brd=1'
                            : 'https://login.deriv.com/signin.php?lang=0',
                        '_blank',
                    )
                }
            >
                <Localize translate_text="_t_Log in_t_" />
            </Button>
            <Button
                className="hidden lg:block"
                size="lg"
                onClick={() =>
                    window.open(
                        user_ip_country === 'my'
                            ? 'https://dynamicworks-dev.deriv.services/live_signup?brd=1'
                            : affiliate_signup_link,
                        '_blank',
                    )
                }
            >
                <Localize translate_text="_t_Sign up_t_" />
            </Button>
        </>
    )
}

const PaymentAgentButtons = () => {
    return (
        <div className="hidden sm:!block">
            <LocalizedLink external to="mailto:partners@deriv.com" is_mail_link>
                <Button size="lg" className="hidden lg:block">
                    <Localize translate_text="_t_Apply now_t_" />
                </Button>
                <Button
                    size="lg"
                    variant="secondary"
                    colorStyle="black"
                    className="block lg:hidden"
                >
                    <Localize translate_text="_t_Apply now_t_" />
                </Button>
            </LocalizedLink>
        </div>
    )
}

const PartnersNavButtons = () => {
    const { region } = useBuildVariant()
    const path_name = getLocationPathname()
    const [show_affiliate_btns, setShowAffiliateBtns] = useState(false)
    const [show_payment_btns, setShowPaymentBtns] = useState(false)

    useEffect(() => {
        setShowAffiliateBtns(!path_name ? null : path_name.includes('affiliate-ib'))
    }, [path_name])

    useEffect(() => {
        setShowPaymentBtns(path_name.includes('payment-agent') && region !== 'eu')
    }, [region, path_name])

    return (
        <div className="flex items-center gap-gap-md">
            {show_affiliate_btns && <AffiliateButtons />}
            {show_payment_btns && <PaymentAgentButtons />}
            <MobileNavToggle />
        </div>
    )
}

export default PartnersNavButtons
