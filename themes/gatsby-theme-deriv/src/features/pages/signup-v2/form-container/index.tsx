import React from 'react'
import { LabelPairedXmarkLgBoldIcon } from '@deriv/quill-icons'
import { signup_form_container, sign_up_header, signup_form_layout } from '../signup.module.scss'
import FormSocialButtons from './form-social-buttons'
import SignUpPageForm from './signup-page-form'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const SignUpFormContainer = ({
    onModalClose,
    theme,
}: {
    onModalClose: () => void
    theme: 'plain' | 'dark'
}) => {
    const textStyleOverrides = theme === 'dark' ? ({ textcolor: 'white' } as const) : {}
    const logoStyleOverrides = theme === 'dark' ? ({ fill: 'white' } as const) : {}

    return (
        <Flex.Box
            basis="full"
            padding="5x"
            pl="8x"
            pr="8x"
            radius="4x"
            direction="col"
            gap="8x"
            md={{
                basis: '6-12',
                padding: '20x',
            }}
            className={signup_form_container}
        >
            <Flex.Box justify="between" pr="5x" align="center">
                <Typography.Heading size="xxl" className={sign_up_header} {...textStyleOverrides}>
                    <Localize translate_text="_t_Sign Up_t_" />
                </Typography.Heading>
                <LabelPairedXmarkLgBoldIcon onClick={onModalClose} {...logoStyleOverrides} />
            </Flex.Box>

            <Flex.Box className={signup_form_layout} direction="col" pb="6x" gap="8x">
                <SignUpPageForm theme={theme} />
                <Flex.Box justify="center" align="center">
                    <Flex.Item grow="1">
                        <Typography.Paragraph align="center" {...textStyleOverrides}>
                            <Localize translate_text="_t_Or sign up with_t_" />
                        </Typography.Paragraph>
                    </Flex.Item>
                </Flex.Box>
                <FormSocialButtons theme={theme} />
            </Flex.Box>
        </Flex.Box>
    )
}

export default SignUpFormContainer
