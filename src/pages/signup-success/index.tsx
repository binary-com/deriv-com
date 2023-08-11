import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { isMobile } from 'react-device-detect'
import { RudderStack } from '@deriv/analytics'
import { getLanguage } from '../../common/utility'
import SignUpSuccessContainer from 'features/pages/signup-success'
import { WithIntl } from 'components/localization'

const SignupSuccess = () => {
    const [registeredEmail, setRegisteredEmail] = useState('')
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
            RudderStack.track('ce_virtual_signup_form', {
                action: 'email_confirmation_sent',
                form_name: isMobile
                    ? 'virtual_signup_web_mobile_default'
                    : 'virtual_signup_web_desktop_default',
            })
            console.log(`
            'ce_virtual_signup_form', {
                action: 'email_confirmation_sent',
                form_name: ${
                    isMobile
                        ? 'virtual_signup_web_mobile_default'
                        : 'virtual_signup_web_desktop_default'
                },
            }
            `)
        }
    }, [])

    return <SignUpSuccessContainer email={registeredEmail} />
}

export default WithIntl()(SignupSuccess)
