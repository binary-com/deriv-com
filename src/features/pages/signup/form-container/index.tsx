import React from 'react'
import { signup_form_container, signup_form_line } from '../signup.module.scss'
import FormSocialButtons from './form-social-buttons'
import SignUpPageForm from './signup-page-form'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'
import useRegion from 'components/hooks/use-region'
import useBreakpoints from 'components/hooks/use-breakpoints'

const SignUpFormContainer = () => {
    const { is_eu } = useRegion()

    const { is_mobile_or_tablet } = useBreakpoints()

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
            className={signup_form_container}
        >
            <Typography.Heading size={is_mobile_or_tablet ? 'small' : 'xs'}>
                <Localize translate_text="_t_Sign up_t_" />
            </Typography.Heading>
            <Typography.Paragraph size={is_mobile_or_tablet ? 'large' : 'medium'}>
                <Localize translate_text="_t_Enter your email address to begin_t_" />
            </Typography.Paragraph>
            <SignUpPageForm />
            <Typography.Paragraph textcolor="secondary" size={is_mobile_or_tablet ? 'small' : 'xs'}>
                <Localize
                    translate_text="_t_By pressing “Create demo account”, you confirm that you are 18 or older. You understand that we may use your email address to send you information about Deriv products and services as well as market news. You can always unsubscribe from these emails in your account settings. For more information, please take a look at Deriv’s <0>Security and privacy</0>._t_"
                    components={[
                        <Link
                            textcolor="brand"
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
            <Flex.Box justify="center" align="center" padding_block="4x">
                <Flex.Item className={signup_form_line} basis="4-12" />
                <Flex.Item grow="1">
                    <Typography.Paragraph align="center" textcolor="secondary">
                        <Localize translate_text="_t_Or sign up with_t_" />
                    </Typography.Paragraph>
                </Flex.Item>
                <Flex.Item className={signup_form_line} basis="4-12" />
            </Flex.Box>
            <FormSocialButtons />
        </Flex.Box>
    )
}

export default SignUpFormContainer
