import * as yup from 'yup'
import Cookies from 'js-cookie'
import { Analytics } from '@deriv-com/analytics'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'
import { getCookiesFields, getCookiesObject, getDataObjFromCookies } from 'common/cookies'
import { validation_regex } from 'common/validation'
import apiManager, { ApiManager } from 'common/websocket'
import { getLanguage, isBrowser } from 'common/utility'

const getVerifyEmailRequest = (formatted_email: string) => {
    // TODO: this getJSON seems incorrect, we have to check it out, I don't know how this cookie is being populated
    const affiliate_token = Cookies.getJSON('affiliate_tracking')

    const cookies = getCookiesFields()
    const cookies_objects = getCookiesObject(cookies)
    const cookies_value = getDataObjFromCookies(cookies_objects, cookies)

    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const gclid = url_params.get('gclid')

    return {
        verify_email: formatted_email,
        url_parameters: {
            ...(affiliate_token && { affiliate_token: affiliate_token }),
            ...(cookies_value && { ...cookies_value }),
            ...(gclid && { gclid_url: gclid }),
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

type TSignupFormOptions = {
    form_name?:
        | 'default_diel_deriv'
        | 'virtual_signup_homepage_embedded'
        | 'virtual_signup_web_mobile_exp003'
}

const useSignupForm = (options?: TSignupFormOptions) => {
    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        form_source: isBrowser() && window.location.hostname,
        form_name: options?.form_name || 'default_diel_deriv',
    }
    const signUpForm = useForm<FormData>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    })

    const onSignup = async ({ email }: FormData) => {
        Analytics?.trackEvent('ce_virtual_signup_form', {
            action: 'started',
            signup_provider: 'email',
            ...analyticsData,
        })
        const readyState = parseInt(ApiManager.readyState)
        if (readyState !== 1 && readyState !== 0) {
            if (isBrowser()) {
                const currentLanguage = getLanguage() ?? 'en'
                try {
                    // Connect to WebSocket if not connected
                    await apiManager.reconnectIfNotConnected(currentLanguage)
                } catch (e) {
                    console.log(e)
                }
            }
        }
        const formatted_email = getVerifyEmailRequest(email)
        apiManager
            .augmentedSend('verify_email', {
                ...formatted_email,
                type: 'account_opening',
            })
            .then(() => {
                const locale = getLanguage()
                const success_default_link = `signup-success`
                const link_with_language = `${locale}/${success_default_link}`
                const success_link = `/${
                    locale === 'en' ? success_default_link : link_with_language
                }`
                Cookies.set('user_email', email)
                navigate(success_link, { replace: true })
            })
            .catch((reason) => {
                Analytics?.trackEvent('ce_virtual_signup_form', {
                    action: 'signup_flow_error',
                    ...analyticsData,
                })
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
