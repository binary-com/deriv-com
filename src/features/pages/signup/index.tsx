import React, { useEffect } from 'react'
import { signup_wrapper } from './signup.module.scss'
import SignUpContent from './signup.content'
import SignUpFormContainer from './form-container'
import Layout from 'features/components/templates/layout'
import StaticNav from 'features/components/templates/navigation/static-nav'
import { useAnalyticsEvents } from 'features/hooks/analytic/use-analytic-events'
import Flex from 'features/components/atoms/flex-box'

const SignUp = () => {
    const { onAnalyticEvent } = useAnalyticsEvents('ce_virtual_signup_form')

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
