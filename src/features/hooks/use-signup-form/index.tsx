import * as yup from 'yup'
import Cookies from 'js-cookie'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'
import { getCookiesObject, getCookiesFields, getDataObjFromCookies } from 'common/cookies'
import { validation_regex } from 'common/validation'
import apiManager from 'common/websocket'
import { getLanguage, isBrowser } from 'common/utility'

const params_list = [
    'gclid_url',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_campaign_id',
    'utm_campaign_id',
    'utm_adgroup_id',
    'utm_ad_id',
    'signup_device',
]

const getVerifyEmailRequest = (formatted_email: string) => {
    // TODO: this getJSON seems incorrect, we have to check it out, I don't know how this cookie is being populated
    const affiliate_token = Cookies.getJSON('affiliate_tracking')

    const cookies = getCookiesFields()
    const cookies_objects = getCookiesObject(cookies)
    const cookies_value = getDataObjFromCookies(cookies_objects, cookies)

    const getUrlParams = (params: string[]) => {
        const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
        const params_with_value = params.filter((param) => url_params.get(param))
        return params_with_value.reduce(
            (o, param) => ({ ...o, [param]: url_params.get(param) }),
            {},
        )
    }

    const url_params = getUrlParams(params_list)

    return {
        verify_email: formatted_email,
        url_parameters: {
            ...(affiliate_token && { affiliate_token: affiliate_token }),
            ...(cookies_value && { ...cookies_value }),
            ...(url_params && { ...url_params }),
        },
    }
}

const schema = yup.object({
    email: yup
        .string()
        .required('_t_Email is required_t_')
        .matches(validation_regex.email, { message: '_t_Email is required_t_' })
        .email('_t_Email is required_t_'),
    terms: yup.boolean(),
})

type FormData = yup.InferType<typeof schema>

const useSignupForm = () => {
    const signUpForm = useForm<FormData>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    })

    const onSignup = ({ email }: FormData) => {
        const formatted_email = getVerifyEmailRequest(email)
        apiManager
            .augmentedSend('verify_email', {
                ...formatted_email,
                type: 'account_opening',
            })
            .then(() => {
                const locale = getLanguage()
                const success_default_link = `signup-success?email=${email}`
                const link_with_language = `${locale}/${success_default_link}`
                const success_link = `/${
                    locale === 'en' ? success_default_link : link_with_language
                }`
                navigate(success_link, { replace: true })
            })
            .catch((reason) => {
                signUpForm.setError('email', {
                    message: reason.error.code,
                })
            })
    }

    return {
        signUpForm,
        onSignup,
    }
}

export default useSignupForm
