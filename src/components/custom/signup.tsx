import React, { useState } from 'react'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import { getLanguage } from '../../common/utility'
import { getCookiesObject, getCookiesFields, getDataObjFromCookies } from 'common/cookies'
import { Flex } from 'components/containers'
import Login, { TSocialProvider } from 'common/login'
import validation from 'common/validation'
import SignupDefault from 'components/custom/_signup-default'
import SignupFlat from 'components/custom/_signup-flat'
import SignupNew from 'components/custom/_signup-new'
import SignupPublic from 'components/custom/_signup-public'
import { Header, QueryImage, StyledLink } from 'components/elements'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'
import apiManager from 'common/websocket'

type SignupProps = {
    appearance?: keyof typeof Appearances | string
    autofocus?: boolean
    bgColor?: string
    email?: string
    is_ppc?: boolean
    onSubmit?: (submit_status, email) => void
    submit_state?: string
}
type FormProps = {
    bgColor?: string
}

const EmailLink = styled(StyledLink)`
    display: table;
    font-size: 14px;
    margin-top: 1.8rem;
    text-decoration: underline;
    width: 100%;
    text-align: center;
`
const Form = styled.form<FormProps>`
    height: 100%;
    background-color: ${(props) => props.bgColor || 'var(--color-white)'};
    @media ${device.mobileL} {
        width: 100%;
        margin-top: 70px;
    }
`
const ResponseWrapper = styled(Flex)`
    justify-content: center;
    max-width: 24rem;
    margin: 0 auto;
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 12px;
    margin-top: -100px;
    @media ${device.mobileL} {
        max-width: 40rem;
    }
`

export const Appearances = {
    default: 'default',
    simple: 'simple',
    darkFlat: 'darkFlat',
    lightFlat: 'lightFlat',
    public: 'public',
    newSignup: 'newSignup',
}

const query = graphql`
    query {
        view_email: file(relativePath: { eq: "sign-up/response-email.png" }) {
            ...fadeIn
        }
    }
`

const Signup = (props: SignupProps) => {
    const data = useStaticQuery(query)
    const [email, setEmail] = useState('')
    const [is_submitting, setSubmitting] = useState(false)
    const [email_error_msg, setEmailErrorMsg] = useState('')
    const [submit_status, setSubmitStatus] = useState('')
    const [submit_error_msg, setSubmitErrorMsg] = useState('')
    const validateEmail = (email_address) => {
        const error_message =
            validation.required(email_address) ||
            validation.email(email_address) ||
            submit_error_msg
        if (submit_error_msg) {
            setSubmitErrorMsg('')
            setSubmitStatus('')
        }
        return error_message
    }
    const handleValidation = (param) => {
        const message = typeof param === 'object' ? param.target.value : param
        setEmailErrorMsg(validateEmail(message.replace(/\s/g, '')))
    }
    const handleInputChange = (e) => {
        const { value } = e.target
        setEmail(value)
        handleValidation(value)
    }
    const getVerifyEmailRequest = (formatted_email) => {
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
    const handleEmailSignup = (e) => {
        e.preventDefault()
        setSubmitting(true)
        const formatted_email = email.replace(/\s/g, '')
        handleValidation(email)
        const has_error_email = validateEmail(formatted_email)
        if (has_error_email || email_error_msg) {
            return setSubmitting(false)
        }

        const verify_email_req = getVerifyEmailRequest(formatted_email)
        apiManager
            .augmentedSend('verify_email', { ...verify_email_req, type: 'account_opening' })
            .then((response) => {
                setSubmitting(false)
                if (response.error) {
                    setSubmitStatus('error')
                    setSubmitErrorMsg(response.error.message)
                    handleValidation(formatted_email)
                } else {
                    setSubmitStatus('success')
                    if (props.onSubmit) {
                        props.onSubmit(submit_status || 'success', email)
                    }
                }
            })
        if (props.appearance === 'public') {
            const success_default_link = `signup-success?email=${email}`
            const link_with_language = `${getLanguage()}/${success_default_link}`
            const success_link = `/${
                getLanguage() === 'en' ? success_default_link : link_with_language
            }`
            navigate(success_link, { replace: true })
        }
    }
    const clearEmail = () => {
        setEmail('')
        setEmailErrorMsg('')
    }

    const handleSocialSignup = (e) => {
        e.preventDefault()
        const data_provider: TSocialProvider = e.currentTarget.getAttribute('data-provider')
        Login.initOneAll(data_provider)
    }
    const handleLogin = (e) => {
        e.preventDefault()
        Login.redirectToLogin()
    }
    const renderSwitch = (param) => {
        const parameters = {
            autofocus: props.autofocus,
            clearEmail: clearEmail,
            email: email,
            email_error_msg: email_error_msg,
            handleInputChange: handleInputChange,
            handleLogin: handleLogin,
            handleSocialSignup: handleSocialSignup,
            handleValidation: handleValidation,
            is_ppc: props.is_ppc,
            is_submitting: is_submitting,
        }
        switch (param) {
            case Appearances.newSignup:
                return <SignupNew {...parameters}></SignupNew>
            case Appearances.public:
                return <SignupPublic {...parameters}></SignupPublic>
            case Appearances.lightFlat:
            case Appearances.darkFlat:
                return param == Appearances.darkFlat ? (
                    <SignupFlat dark {...parameters}></SignupFlat>
                ) : (
                    <SignupFlat {...parameters}></SignupFlat>
                )
            case Appearances.default:
            default:
                return <SignupDefault {...parameters}></SignupDefault>
        }
    }

    return props.submit_state === 'success' ? (
        <ResponseWrapper>
            <Header as="p" type="subtitle-1" align="center" weight="700">
                <Localize translate_text="_t_Check your email_t_" />
            </Header>
            <Flex jc="center" height="128px">
                <QueryImage
                    data={data.view_email}
                    alt={localize('_t_Email image_t_')}
                    height="128px"
                    width="128px"
                />
            </Flex>
            <Header type="paragraph-1" weight="normal" align="center">
                <Localize
                    translate_text="_t_We've sent a message to {{email}} with a link to activate your account._t_"
                    values={{ email: props.email }}
                />
            </Header>
            <EmailLink to="/check-email/" align="center">
                <Localize translate_text="_t_Didn't receive your email?_t_" />
            </EmailLink>
        </ResponseWrapper>
    ) : (
        <Form onSubmit={handleEmailSignup} noValidate bgColor={props.bgColor}>
            {renderSwitch(props.appearance)}
        </Form>
    )
}
export default Signup
