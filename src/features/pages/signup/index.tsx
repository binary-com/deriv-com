import React, { useEffect } from 'react'
import { Analytics } from '../../../analytics'
import { signup_wrapper } from './signup.module.scss'
import SignUpContent from './signup.content'
import SignUpFormContainer from './form-container'
import Layout from 'features/components/templates/layout'
import StaticNav from 'features/components/templates/navigation/static-nav'
import Flex from 'features/components/atoms/flex-box'
import { isBrowser } from 'common/utility'

const SignUp = () => {
    const onAnalyticEvent = Analytics?.registerAnalyticsEvent(
        'ce_virtual_signup_form',
        isBrowser() && window.location.hostname,
        'default_diel_deriv',
    )

    useEffect(() => {
        onAnalyticEvent('open')
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
