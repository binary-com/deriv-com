import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { getLanguage } from 'common/utility'
import { useAnalyticsEvents } from 'features/hooks/analytic/use-analytic-events'
import SignUpSuccessContainer from 'features/pages/signup-success'
import { WithIntl } from 'components/localization'

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
