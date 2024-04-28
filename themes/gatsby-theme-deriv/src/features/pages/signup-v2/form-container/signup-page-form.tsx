import React from 'react'
import { Button, TextField } from '@deriv/quill-design'
import {
    link_text,
    sign_up_content,
    signup_inline_display,
    signup_error_message,
} from '../signup.module.scss'
import Flex from 'features/components/atoms/flex-box'
import { TString } from 'types/generics'
import { localize, Localize } from 'components/localization'
import Input from 'features/components/atoms/input'
import Link from 'features/components/atoms/link'
import useSignupForm from 'features/hooks/use-signup-form'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import Typography from 'features/components/atoms/typography'
import useBuildVariant from 'features/hooks/use-build-variant'

const SignUpPageForm = () => {
    const { region } = useBuildVariant()
    const { onSignup, signUpForm } = useSignupForm({
        form_name: 'virtual_signup_web_mobile_exp003',
    })
    const [is_mounted] = usePageLoaded()

    const {
        register,
        formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
        watch,
        handleSubmit,
    } = signUpForm
    const values = watch()

    const is_button_disabled =
        values.email === '' || !values.terms || !isValid || isSubmitting || isSubmitSuccessful

    const security_pdf_link = `/tnc${region === 'eu' ? '/eu' : ''}/security-and-privacy.pdf`

    const handleFormSubmission = (data: { email?: string; terms?: boolean }) => {
        if (!is_button_disabled) {
            onSignup(data)
        }
    }

    if (!is_mounted) return null

    return (
        <Flex.Box as="form" direction="col" onSubmit={handleSubmit(handleFormSubmission)} gap="6x">
            <TextField
                label={localize('_t_Email_t_')}
                autoComplete="none"
                placeholder=""
                autoCapitalize="none"
                id="email_address"
                required
                type='email'
                status={errors?.email?.message ? 'error' : 'neutral'}
                {...register('email')}
            />

            {errors?.email?.message ? (
                <Typography.Paragraph
                    className={signup_error_message}
                    size="small"
                >
                    {localize(errors?.email?.message as TString)}
                </Typography.Paragraph>
            ) : null}

            <Typography.Paragraph textcolor="white" className={sign_up_content}>
                <Localize
                    translate_text="_t_By creating an account, you confirm you are 18+ and understand we may send you updates and marketing materials (see <0>Security and privacy policy</0>). Unsubscribe in your account settings anytime._t_"
                    components={[
                        <Link
                            className={link_text}
                            textcolor="white"
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
            <Flex.Item padding_block="2x">
                <Input.Checkbox required {...register('terms')} id="terms_and_conditions">
                    <Typography.Paragraph className={signup_inline_display} textcolor="white">
                        <Localize
                            translate_text="_t_I agree to the <0>terms and conditions</0>_t_"
                            components={[
                                <Link
                                    className={link_text}
                                    textcolor="white"
                                    key={0}
                                    target="_blank"
                                    url={{
                                        type: 'non-company',
                                        target: '_blank',
                                        href: '/terms-and-conditions/#clients',
                                    }}
                                />,
                            ]}
                        />
                    </Typography.Paragraph>
                </Input.Checkbox>
            </Flex.Item>
            <Button size="lg">
                <Localize translate_text="_t_Start my trading journey_t_" />
            </Button>
        </Flex.Box>
    )
}

export default SignUpPageForm
