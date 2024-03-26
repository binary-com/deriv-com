import React from 'react'
import { Analytics } from '@deriv-com/analytics'
import PublicSignupSocial from '../social'
import { signup_public_form, signup_public_form_container } from './form.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { localize, Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import Link from 'features/components/atoms/link'
import Input from 'features/components/atoms/input'
import { TString } from 'types/generics'
import useSignupForm from 'features/hooks/use-signup-form'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

const handleCTA = () => Analytics?.trackEvent('deriv_com_signup_cta', { action: 'click' })

const SignupPublicForm = () => {
    const { onSignup, signUpForm } = useSignupForm({
        form_name: 'virtual_signup_homepage_embedded',
    })
    const [is_mounted] = usePageLoaded()

    if (!is_mounted) return null

    const {
        register,
        formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
        watch,
        clearErrors,
        setValue,
        handleSubmit,
    } = signUpForm
    const values = watch()

    const is_button_disabled =
        values.email === '' || !values.terms || !isValid || isSubmitting || isSubmitSuccessful

    return (
        <Flex.Box
            direction="col"
            align="stretch"
            gap={'12x'}
            className={signup_public_form_container}
        >
            <Flex.Box
                direction={'col'}
                grow={'1'}
                justify="around"
                align={'stretch'}
                className={signup_public_form}
                padding={'8x'}
                gap="8x"
                as="form"
                bgcolor="primary"
                onSubmit={handleSubmit(onSignup)}
                md={{
                    padding: '14x',
                }}
            >
                <Typography.Heading as="h2" size="small" textcolor="black">
                    <Localize translate_text="_t_Join over 2.5 million traders worldwide_t_" />
                </Typography.Heading>
                <Typography.Paragraph textcolor="black">
                    <Localize translate_text="_t_Sign up for your demo account now._t_" />
                </Typography.Paragraph>
                <Flex.Box
                    direction="col"
                    gap={'12x'}
                    md={{
                        direction: 'row',
                        justify: 'between',
                        gap: '4x',
                    }}
                >
                    <Flex.Item grow={'1'}>
                        <Input.Text
                            label={'_t_Email address_t_'}
                            id="email_address"
                            formId="email"
                            autoCapitalize="none"
                            clearErrors={clearErrors}
                            setValue={setValue}
                            error={
                                errors?.email?.message
                                    ? localize(errors?.email?.message as TString)
                                    : null
                            }
                            {...register('email')}
                        />
                    </Flex.Item>
                    <Flex.Item shrink="0" grow="1">
                        <Button.Primary fluid disabled={is_button_disabled} onClick={handleCTA}>
                            <Localize translate_text="_t_Sign up_t_" />
                        </Button.Primary>
                    </Flex.Item>
                </Flex.Box>
                <Flex.Box justify="start" align="baseline" gap={'5x'} mt="5x">
                    <Input.Checkbox {...register('terms')} id="terms_and_conditions">
                        <Localize
                            translate_text="_t_I agree to the <0>terms and conditions</0>._t_"
                            components={[
                                <Link
                                    textcolor="brand"
                                    target="_blank"
                                    key={0}
                                    url={{ type: 'internal', to: '/terms-and-conditions/#clients' }}
                                />,
                            ]}
                        />
                    </Input.Checkbox>
                </Flex.Box>
                <Typography.Paragraph>
                    <Localize translate_text="_t_Or sign up with_t_" />
                </Typography.Paragraph>
                <PublicSignupSocial />
            </Flex.Box>
        </Flex.Box>
    )
}

export default SignupPublicForm
