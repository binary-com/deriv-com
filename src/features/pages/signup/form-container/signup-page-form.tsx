import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import { TString } from 'types/generics'
import Button from 'features/components/atoms/button'
import { localize, Localize } from 'components/localization'
import Input from 'features/components/atoms/input'
import Link from 'features/components/atoms/link'
import useSignupForm from 'features/hooks/use-signup-form'

const SignUpPageForm = () => {
    const { onSignup, signUpForm } = useSignupForm()

    const {
        register,
        formState: { errors, isValid },
        watch,
        handleSubmit,
    } = signUpForm
    const values = watch()

    const isButtonDisabled = values.email === '' || !values.terms || !isValid

    return (
        <Flex.Box as="form" direction="col" onSubmit={handleSubmit(onSignup)} gap="8x">
            <Input.Text
                autoComplete="none"
                autoCapitalize="none"
                label={'_t_Email address_t_'}
                error={errors?.email?.message ? localize(errors?.email?.message as TString) : null}
                {...register('email')}
            />
            <Flex.Item padding_block="4x">
                <Input.Checkbox {...register('terms')}>
                    <Localize
                        translate_text="_t_I agree to the <0>terms and conditions</0>._t_"
                        components={[
                            <Link
                                textcolor="brand"
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
            <Button.Primary fluid disabled={isButtonDisabled}>
                <Localize translate_text="_t_Create demo account_t_" />
            </Button.Primary>
        </Flex.Box>
    )
}

export default SignUpPageForm
