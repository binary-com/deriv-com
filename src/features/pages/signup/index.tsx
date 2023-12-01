import React, { useEffect } from 'react'
import { Analytics } from '@deriv/analytics'
import Layout from 'features/components/templates/layout'
import { signup_wrapper } from './signup.module.scss'
import SignUpContent from './signup.content'
import SignUpFormContainer from './form-container'
import StaticNav from 'features/components/templates/navigation/static-nav'
import Flex from 'features/components/atoms/flex-box'
import { isBrowser } from 'common/utility'

const SignUp = () => {
    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        form_source: isBrowser() && window.location.hostname,
        form_name: 'default_diel_deriv',
    }

    useEffect(() => {
        Analytics?.trackEvent('ce_virtual_signup_form', { action: 'open', ...analyticsData })
    }, [])

    return (
        <Layout>
            <StaticNav />
            <Flex.Box
                container="fluid"
                align="start"
                md={{
                    justify: 'around',
                    align: 'center',
                    gap: '16x',
                }}
                className={signup_wrapper}
                pt="30x"
            >
                <SignUpContent />
                <SignUpFormContainer />
            </Flex.Box>
        </Layout>
    )
}

export default SignUp
