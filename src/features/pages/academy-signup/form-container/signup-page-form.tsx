import React from 'react'
import { link_text, btn_signup } from '../signup-academy.module.scss'
import Flex from 'features/components/atoms/flex-box'
import { TString } from 'types/generics'
import Button from 'features/components/atoms/button'
import { localize, Localize } from 'components/localization'
import Input from 'features/components/atoms/input'
import Link from 'features/components/atoms/link'
import useSignupForm from 'features/hooks/use-signup-form'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

const SignUpPageForm = () => {
    const { onSignup, signUpForm } = useSignupForm()
    const [is_mounted] = usePageLoaded()

    const {
        register,
        formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
        watch,
        handleSubmit,
        clearErrors,
        setValue,
    } = signUpForm
    const values = watch()

    const is_button_disabled =
        values.email === '' || !values.terms || !isValid || isSubmitting || isSubmitSuccessful

    if (!is_mounted) return null

    return (
        <Flex.Box as="form" direction="col" onSubmit={handleSubmit(onSignup)} gap="8x">
            <Input.Text
                autoComplete="none"
                autoCapitalize="none"
                id="email_address"
                formId="email"
                label={'_t_Email_t_'}
                clearErrors={clearErrors}
                setValue={setValue}
                error={errors?.email?.message ? localize(errors?.email?.message as TString) : null}
                {...register('email')}
            />
            <Flex.Item padding_block="4x">
                <Input.Checkbox {...register('terms')} id="terms_and_conditions">
                    <Localize
                        translate_text="_t_I agree to the <0>terms and conditions</0>_t_"
                        components={[
                            <Link
                                className={link_text}
                                textcolor="primary"
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
                </Input.Checkbox>
            </Flex.Item>
            <Button.Primary fluid disabled={is_button_disabled} className={btn_signup}>
                <Localize translate_text="_t_Create account_t_" />
            </Button.Primary>
        </Flex.Box>
    )
}

export default SignUpPageForm
