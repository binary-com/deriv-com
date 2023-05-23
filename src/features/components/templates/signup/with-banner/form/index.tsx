import React from 'react'
import PublicSignupSocial from '../social'
import { signup_public_form_container, signup_public_form } from './form.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { localize, Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import Link from 'features/components/atoms/link'
import Input from 'features/components/atoms/input'
import { TString } from 'types/generics'
import useSignupForm from 'features/hooks/use-signup-form'

const SignupPublicForm = () => {
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
                <Typography.Heading size="small" textcolor="black">
                    <Localize translate_text="_t_Join over 2.5 million traders worldwide_t_" />
                </Typography.Heading>
                <Typography.Paragraph textcolor="black">
                    <Localize translate_text="_t_Sign up for your demo account now._t_" />
                </Typography.Paragraph>
                <Flex.Box
                    direction="col"
                    gap={'8x'}
                    md={{
                        direction: 'row',
                        justify: 'between',
                        align: 'center',
                        gap: '4x',
                    }}
                >
                    <Flex.Item grow={'1'}>
                        <Input.Text
                            label={'_t_Email address_t_'}
                            id="email_address"
                            error={
                                errors?.email?.message
                                    ? localize(errors?.email?.message as TString)
                                    : null
                            }
                            {...register('email')}
                        />
                    </Flex.Item>
                    <Flex.Item shrink="0" grow="1">
                        <Button.Primary fluid disabled={isButtonDisabled}>
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
