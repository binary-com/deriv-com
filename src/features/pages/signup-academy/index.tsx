import React, { useEffect } from 'react'
import { Analytics } from '@deriv-com/analytics'
import Layout from 'features/components/templates/layout'
import { signup_wrapper, static_nav_logo } from './signup.module.scss'
import SignUpContent from './signup.content'
import SignUpFormContainer from './form-container'
import NavTemplate from 'features/components/templates/navigation/template'
import Flex from 'features/components/atoms/flex-box'
import { isBrowser } from 'common/utility'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import LogoImage from 'images/common/derivacademy.svg'

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
            <NavTemplate
                has_centered_items
                has_centered_logo
                renderLogo={() => (
                    <Link url={{ type: 'internal', to: '/' }}>
                        <Image src={LogoImage} className={static_nav_logo} />
                    </Link>
                )}
            />

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
