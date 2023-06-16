import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { validation_regex } from 'common/validation'
import apiManager from 'common/websocket'
import { useCheckExistingAccount } from 'components/hooks/use-check-existing-account'
import { isBrowser } from 'common/utility'
import { eu_countries } from 'common/country-base'

const submit_schema = yup.object({
    password: yup
        .string()
        .required('_t_Password is requried_t_')
        .matches(validation_regex.password, {
            message:
                '_t_Password should be more than 8 characters including 1 uppercase and 1 number_t_',
        }),
    residence: yup
        .string()
        .notOneOf(eu_countries, '_t_Ctrader is not available in Europe_t_')
        .required('_t_Residence is requried_t_'),
    verification_code: yup
        .string()
        .required('_t_Verification code is requried_t_')
        .min(8, '_t_Must be exactly 8 characters_t_')
        .max(8, '_t_Must be exactly 8 characters_t_'),
})

type SubmitFormData = yup.InferType<typeof submit_schema>

const useCtraderSubmitForm = () => {
    const [account_created, setAccountCreated] = useState(false)
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const affiliate_token = url_params.get('partnerId')
    const [token, setToken] = useState('')
    const { has_account } = useCheckExistingAccount('ctrader', token)

    const submitForm = useForm<SubmitFormData>({
        mode: 'onChange',
        resolver: yupResolver(submit_schema),
    })

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
                submitForm.setError('root.serverError', {
                    type: reason.error.code,
                    message: reason.error.message,
                })
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
                    setAccountCreated(true)
                })
                .catch((reason) => {
                    submitForm.setError('root.serverError', {
                        type: reason.error.code,
                        message: reason.error.message,
                    })
                })
        }
    }, [has_account, submitForm])

    useEffect(() => {
        if (account_created) {
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
                    submitForm.setError('root.serverError', {
                        type: reason.error.code,
                        message: reason.error.message,
                    })
                })
        }
    }, [account_created, submitForm])

    return {
        submitForm,
        onSubmit,
    }
}

export default useCtraderSubmitForm
