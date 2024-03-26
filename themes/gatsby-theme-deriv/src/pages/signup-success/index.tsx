import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { Analytics } from '@deriv-com/analytics'
import Cookies from 'js-cookie'
import { getLanguage, isBrowser } from 'common/utility'
import SignUpSuccessContainer from 'features/pages/signup-success'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const SignupSuccess = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    const [registeredEmail, setRegisteredEmail] = useState('')
    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        form_source: isBrowser() && window.location.hostname,
        form_name: 'default_diel_deriv',
    }
    useEffect(() => {
        const userEmail = Cookies.get('user_email')
        const locale = getLanguage()

        if (!userEmail) {
            if (locale !== 'en') navigate(`/${locale}/`, { replace: true })
            else {
                navigate('/', { replace: true })
            }
        } else {
            setRegisteredEmail(userEmail.replaceAll(' ', '+'))
            Analytics?.trackEvent('ce_virtual_signup_form', {
                action: 'email_confirmation_sent',
                ...analyticsData,
            })
        }
    }, [])

    return <SignUpSuccessContainer email={registeredEmail} region={region}/>
}

export default WithIntl()(SignupSuccess)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Easy And Free Sign Up | Online Trading | Deriv.com_t_"
        description="_t_Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities._t_"
        pageContext={pageContext}
    />
)
