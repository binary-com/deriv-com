import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { validation_regex } from 'common/validation'
import apiManager from 'common/websocket'
import { useDerivAuth } from 'features/hooks/use-deriv-auth'
import { isBrowser } from 'common/utility'
import { not_available_ctrader_countries } from 'common/country-base'

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
        .notOneOf(
            not_available_ctrader_countries,
            '_t_Deriv cTrader is not available in your country_t_',
        )
        .required('_t_Residence is requried_t_'),
    verification_code: yup
        .string()
        .required('_t_Verification code is requried_t_')
        .min(8, '_t_Must be exactly 8 characters_t_')
        .max(8, '_t_Must be exactly 8 characters_t_'),
})

type SubmitFormData = yup.InferType<typeof submit_schema>

const useCtraderCredentialsForm = () => {
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const affiliate_token = url_params.get('partnerId')
    const [token, setToken] = useState('')
    const { loading, create_account_error } = useDerivAuth('ctrader', token, 'signup')

    const submitForm = useForm<SubmitFormData>({
        mode: 'all',
        resolver: yupResolver(submit_schema),
    })

    if (create_account_error) {
        submitForm.setError('root.serverError', create_account_error)
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
                submitForm.setError('root.serverError', {
                    type: reason.error.code,
                    message: reason.error.message,
                })
            })
    }

    return {
        submitForm,
        onSubmit,
        loading,
    }
}

export default useCtraderCredentialsForm
