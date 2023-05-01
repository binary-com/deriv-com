import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Cookies from 'js-cookie'
import { navigate } from 'gatsby'
import PublicSignupSocial from '../social'
import { signup_public_form_container, signup_public_form } from './form.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { localize, Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import Link from 'features/components/atoms/link'
import { validation_regex } from 'common/validation'
import { getCookiesObject, getCookiesFields, getDataObjFromCookies } from 'common/cookies'
import { getLanguage } from 'common/utility'
import apiManager from 'common/websocket'
import Input from 'features/components/atoms/input'
import { TString } from 'types/generics'

const schema = yup.object({
    email: yup
        .string()
        .required('_t_Email is required_t_')
        .matches(validation_regex.email, { message: '_t_Please enter a valid email_t_' })
        .email('_t_Please enter a valid email_t_'),
    terms: yup.boolean(),
})

type FormData = yup.InferType<typeof schema>

const getVerifyEmailRequest = (formatted_email: string) => {
    // TODO: this getJSON seems incorrect, we have to check it out, I don't know how this cookie is being populated
    const affiliate_token = Cookies.getJSON('affiliate_tracking')

    const cookies = getCookiesFields()
    const cookies_objects = getCookiesObject(cookies)
    const cookies_value = getDataObjFromCookies(cookies_objects, cookies)

    return {
        verify_email: formatted_email,
        url_parameters: {
            ...(affiliate_token && { affiliate_token: affiliate_token }),
            ...(cookies_value && { ...cookies_value }),
        },
    }
}

const SignupPublicForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
        watch,
    } = useForm<FormData>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    })

    const values = watch()

    const isButtonDisabled = values.email === '' || !values.terms || !isValid

    const onSubmit = ({ email }: FormData) => {
        const formatted_email = getVerifyEmailRequest(email)
        apiManager
            .augmentedSend('verify_email', {
                ...formatted_email,
                type: 'account_opening',
            })
            .then(() => {
                const success_default_link = `signup-success?email=${email}`
                const link_with_language = `${getLanguage()}/${success_default_link}`
                const success_link = `/${
                    getLanguage() === 'en' ? success_default_link : link_with_language
                }`
                navigate(success_link, { replace: true })
            })
            .catch((reason) => {
                setError('email', {
                    message: reason.error.code,
                })
            })
    }

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
                onSubmit={handleSubmit(onSubmit)}
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
                            Sign up
                        </Button.Primary>
                    </Flex.Item>
                </Flex.Box>
                <Flex.Box justify="start" align="baseline" gap={'5x'} mt="5x">
                    <Input.Checkbox {...register('terms')}>
                        <Localize
                            translate_text="_t_I agree to the <0>terms and conditions</0>._t_"
                            components={[
                                <Link
                                    textcolor="brand"
                                    key={0}
                                    url={{ type: 'internal', to: '/terms-and-conditions/#clients' }}
                                />,
                            ]}
                        />
                    </Input.Checkbox>
                </Flex.Box>
                <Typography.Paragraph>
                    <Localize translate_text="Or sign up with" />
                </Typography.Paragraph>
                <PublicSignupSocial />
            </Flex.Box>
        </Flex.Box>
    )
}

export default SignupPublicForm
