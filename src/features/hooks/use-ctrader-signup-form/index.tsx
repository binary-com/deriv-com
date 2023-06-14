import { useEffect, useState } from 'react'
import * as yup from 'yup'
import Cookies from 'js-cookie'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'
import { getCookiesObject, getCookiesFields, getDataObjFromCookies } from 'common/cookies'
import { validation_regex } from 'common/validation'
import apiManager from 'common/websocket'
import { useCheckExistingAccount } from 'components/hooks/use-check-existing-account'
import { isBrowser } from 'common/utility'

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

const email_schema = yup.object({
    email: yup
        .string()
        .required('_t_Email is required_t_')
        .matches(validation_regex.email, { message: '_t_Email is required_t_' })
        .email('_t_Email is required_t_'),
    terms: yup.boolean(),
})

const submit_schema = yup.object({
    password: yup
        .string()
        .required('_t_Password is requried_t_')
        .matches(validation_regex.password, { message: '_t_Password is not valid_t_' }),
    residence: yup
        .object({
            name: yup.string(),
            display_name: yup.string(),
            symbol: yup.string(),
        })
        .required('_t_Residence is requried_t_'),
    verification_code: yup.string().required('_t_Verification code is requried_t_'),
})

type EmailFormData = yup.InferType<typeof email_schema>
type SubmitFormData = yup.InferType<typeof submit_schema>

const useCtraderSignupForm = () => {
    const [step, setStep] = useState('enter-email')
    const [error, setError] = useState({})
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const affiliate_token = url_params.get('partnerId')
    const [token, setToken] = useState('')
    const { has_account } = useCheckExistingAccount('ctrader', token)

    const enterEmailForm = useForm<EmailFormData>({
        mode: 'onChange',
        resolver: yupResolver(email_schema),
    })

    const submitForm = useForm<SubmitFormData>({
        mode: 'onChange',
        resolver: yupResolver(submit_schema),
    })

    const onEnterEmail = ({ email }: EmailFormData) => {
        const formatted_email = getVerifyEmailRequest(email)

        apiManager
            .augmentedSend('verify_email', {
                ...formatted_email,
                type: 'account_opening',
            })
            .then(() => {
                const success_default_link = `signup-success?email=${email}`
                navigate(success_default_link, { replace: true })
            })
            .catch((reason) => {
                enterEmailForm.setError('email', {
                    message: reason.error.code,
                })
            })
    }

    const onSubmit = ({ password, residence, verification_code }: SubmitFormData) => {
        apiManager
            .augmentedSend('new_account_virtual', {
                type: 'trading',
                client_password: password,
                residence,
                verification_code,
                ...(affiliate_token && { affiliate_token: affiliate_token }),
            })
            .then((response) => {
                setToken(response.new_account_virtual.oauth_token)
            })
            .catch((reason) => {
                setError(reason.error)
            })
    }

    useEffect(() => {
        if (has_account !== null) {
            apiManager
                .augmentedSend('trading_platform_new_account', {
                    trading_platform_new_account: 1,
                    account_type: 'demo',
                    market_type: 'all',
                    platform: 'ctrader',
                })
                .then(() => {
                    setStep('ctrader-account-created')
                })
                .catch((reason) => {
                    setError(reason.error)
                })
        }
    }, [has_account])

    useEffect(() => {
        if (step === 'ctrader-account-created') {
            apiManager
                .augmentedSend('service_token', {
                    service_token: 1,
                    service: 'ctrader',
                })
                .then((response) => {
                    if (isBrowser()) {
                        window.location.href = `https://id-ct-uat.deriv.com/brokeroauth/success?token=${response.service_token.ctrader.token}`
                    }
                })
                .catch((reason) => {
                    setError(reason.error.message)
                })
        }
    }, [step])

    return {
        enterEmailForm,
        onEnterEmail,
        submitForm,
        onSubmit,
    }
}

export default useCtraderSignupForm
