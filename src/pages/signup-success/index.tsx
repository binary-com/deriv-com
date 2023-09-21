import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { getLanguage } from 'common/utility'
import { useAnalyticsEvents } from 'features/hooks/analytic/use-analytic-events'
import SignUpSuccessContainer from 'features/pages/signup-success'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const SignupSuccess = () => {
    const [registeredEmail, setRegisteredEmail] = useState('')
    const { onAnalyticEvent } = useAnalyticsEvents('ce_virtual_signup_form')
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const email = params.get('email')
        const locale = getLanguage()

        setRegisteredEmail(email?.replaceAll(' ', '+'))
        if (!email) {
            if (locale !== 'en') navigate(`/${locale}/`, { replace: true })
            else {
                navigate('/', { replace: true })
            }
        } else {
            onAnalyticEvent('email_confirmation_sent')
        }
    }, [])

    return <SignUpSuccessContainer email={registeredEmail} />
}

export default WithIntl()(SignupSuccess)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Easy And Free Sign Up | Online Trading | Deriv.com_t_"
        description="_t_Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities._t_"
        pageContext={pageContext}
    />
)
