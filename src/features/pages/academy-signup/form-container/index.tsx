import React from 'react'
import { Analytics } from '@deriv-com/analytics'
import {
    form_container,
    link_text,
    header,
    content,
    login_redirect,
} from '../signup-academy.module.scss'
import SignUpPageForm from './signup-page-form'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'
import useRegion from 'components/hooks/use-region'
import Login from 'common/login'
import { isBrowser } from 'common/utility'

const SignUpFormContainer = () => {
    const { is_eu } = useRegion()

    const security_pdf_link = `/tnc${is_eu ? '/eu' : ''}/security-and-privacy.pdf`

    return (
        <Flex.Box
            basis="full"
            padding="5x"
            radius="4x"
            direction="col"
            gap="8x"
            md={{
                basis: '6-12',
                padding: '20x',
            }}
            className={form_container}
        >
            <Typography.Heading className={header}>
                <Localize translate_text="_t_Sign up_t_" />
            </Typography.Heading>

            <Typography.Paragraph>
                <Localize
                    translate_text="_t_Use this account to log in to <0>Deriv</0> and <0>Deriv Academy.</0>_t_"
                    components={[<strong key={0} />]}
                />
            </Typography.Paragraph>
            <SignUpPageForm />
            <Typography.Paragraph textcolor="secondary" className={content}>
                <Localize
                    translate_text="_t_By clicking “Create account”, you confirm that you are 18 or older. You understand that we may use your email address to send you information about Deriv products and services as well as market news. You can always unsubscribe from these emails in your account settings. For more information, please take a look at Deriv’s <0>Security and privacy policy</0>._t_"
                    components={[
                        <Link
                            className={link_text}
                            textcolor="primary"
                            key={0}
                            url={{
                                target: '_blank',
                                type: 'non-company',
                                href: security_pdf_link,
                            }}
                        />,
                    ]}
                />
            </Typography.Paragraph>

            <Typography.Paragraph align="center">
                <Localize
                    translate_text="_t_Already have a Deriv account? <0>Log in</0>_t_"
                    components={[
                        <Typography.Paragraph
                            as="span"
                            textcolor="brand"
                            key={0}
                            className={login_redirect}
                            onClick={(event) => {
                                event.preventDefault()
                                Analytics?.trackEvent('ce_virtual_signup_form', {
                                    action: 'go_to_login',
                                    form_source: isBrowser() && window.location.hostname,
                                    form_name: 'default_diel_deriv',
                                })
                                Login.redirectToLogin()
                            }}
                        />,
                    ]}
                />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default SignUpFormContainer
