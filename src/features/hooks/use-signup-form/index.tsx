import * as yup from 'yup'
import Cookies from 'js-cookie'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'
import { getCookiesObject, getCookiesFields, getDataObjFromCookies } from 'common/cookies'
import { validation_regex } from 'common/validation'
import apiManager from 'common/websocket'
import { getLanguage } from 'common/utility'

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
