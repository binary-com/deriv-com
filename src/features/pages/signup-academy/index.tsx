import React, { useEffect } from 'react'
import { Analytics } from '@deriv-com/analytics'
import Layout from 'features/components/templates/layout'
import { signup_wrapper, static_nav_logo } from './signup.module.scss'
import SignUpContent from './signup.content'
import SignUpFormContainer from './form-container'
import NavTemplate from 'features/components/templates/navigation/template'
import Flex from 'features/components/atoms/flex-box'
import { isBrowser } from 'common/utility'
import AcademyNav from 'features/components/templates/navigation/academy-nav'

const SignUpAcademy = () => {
    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        form_source: isBrowser() && window.location.hostname,
        form_name: 'default_diel_deriv',
    }

    useEffect(() => {
        Analytics?.trackEvent('ce_virtual_signup_form', { action: 'open', ...analyticsData })
    }, [])

    return (
        <Layout>
            <AcademyNav />

            <Flex.Box
                container="fluid"
                align="start"
                md={{
                    justify: 'center',
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

export default SignUpAcademy
