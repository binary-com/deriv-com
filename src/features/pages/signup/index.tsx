import React from 'react'
import { RudderStack } from '@deriv/analytics'
import { isMobile } from 'react-device-detect'
import { signup_wrapper } from './signup.module.scss'
import SignUpContent from './signup.content'
import SignUpFormContainer from './form-container'
import Layout from 'components/layout/layout'
import StaticNav from 'features/components/templates/navigation/static-nav'
import { SEO } from 'components/containers'
import Flex from 'features/components/atoms/flex-box'

const SignUp = () => {
    React.useEffect(() => {
        RudderStack.track('ce_virtual_signup_form', {
            action: 'open',
            form_source: document.referrer || window.location.host,
            form_name: isMobile
                ? 'virtual_signup_web_mobile_default'
                : 'virtual_signup_web_desktop_default',
        })
        console.log(`
        'ce_virtual_signup_form', {
            action: 'open',
            form_source: ${document.referrer || window.location.host},
            form_name: ${
                isMobile
                    ? 'virtual_signup_web_mobile_default'
                    : 'virtual_signup_web_desktop_default'
            },
        }
        `)
    }, [])

    return (
        <Layout show_footer={false}>
            <SEO
                title="_t_Easy And Free Sign Up | Online Trading | Deriv.com_t_"
                description="_t_Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities._t_"
            />
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
                mt={'30x'}
            >
                <SignUpContent />
                <SignUpFormContainer />
            </Flex.Box>
        </Layout>
    )
}

export default SignUp
