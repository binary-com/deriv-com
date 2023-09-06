import * as yup from 'yup'
import Cookies from 'js-cookie'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'
import { getCookiesObject, getCookiesFields, getDataObjFromCookies } from 'common/cookies'
import { validation_regex } from 'common/validation'
import apiManager from 'common/websocket'
import { isBrowser } from 'common/utility'

const getVerifyEmailRequest = (formatted_email: string) => {
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

type EmailFormData = yup.InferType<typeof email_schema>

const useCtraderEmailForm = () => {
    const enterEmailForm = useForm<EmailFormData>({
        mode: 'all',
        resolver: yupResolver(email_schema),
    })

    const onEnterEmail = ({ email }: EmailFormData) => {
        const formatted_email = getVerifyEmailRequest(email)
        const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
        const partner_id = url_params.get('partnerId')

        apiManager
            .augmentedSend('verify_email', {
                ...formatted_email,
                type: 'account_opening',
            })
            .then(() => {
                const partner_id_query_param = partner_id ? `&partnerId=${partner_id}` : ''
                const credentials_form_link = `credentials?email=${email}${partner_id_query_param}`
                navigate(credentials_form_link)
            })
            .catch((reason) => {
                enterEmailForm.setError('email', {
                    message: reason.error.code,
                })
            })
    }

    return {
        enterEmailForm,
        onEnterEmail,
    }
}

export default useCtraderEmailForm
