import React, { useState } from 'react'
import { graphql, StaticQuery, navigate } from 'gatsby'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import { getLanguage } from '../../common/utility'
import CtraderCheckEmail from './_ctrader-check-email'
import CtraderSignupSuccess from './_ctrader-signup-success'
import { getCookiesObject, getCookiesFields, getDataObjFromCookies } from 'common/cookies'
import { Box } from 'components/containers'
import Login, { TSocialProvider } from 'common/login'
import validation from 'common/validation'
import SignupDefault from 'components/custom/_signup-default'
import SignupFlat from 'components/custom/_signup-flat'
import SignupNew from 'components/custom/_signup-new'
import SignupCtrader from 'components/custom/_signup-ctrader'
import SignupPublic from 'components/custom/_signup-public'
import { Header, QueryImage, StyledLink } from 'components/elements'
import { localize, Localize } from 'components/localization'
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
    font-size: 1.4rem;
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
    }
`
const ResponseWrapper = styled.div`
    justify-content: center;
    max-width: 33rem;
    margin: 0 auto;
    flex-direction: column;
    padding: 2rem 1rem;
`

const ConfirmationMessage = styled.div`
    text-align: center;
    font-size: 16px;
    word-wrap: break-word;
`

export const Appearances = {
    default: 'default',
    simple: 'simple',
    darkFlat: 'darkFlat',
    lightFlat: 'lightFlat',
    public: 'public',
    newSignup: 'newSignup',
    cTrader: 'cTrader',
}

const Signup = (props: SignupProps) => {
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

        if (props.appearance === 'cTrader') {
            if (submit_status === 'signup-success') {
                props.onSubmit(submit_status, email)
            }
            apiManager
                .augmentedSend('verify_email', {
                    verify_email: email,
                    type: 'account_opening',
                })
                .then((response) => {
                    setSubmitting(false)
                    if (response.error) {
                        setSubmitStatus('error')
                        setSubmitErrorMsg(response.error.message)
                        handleValidation(formatted_email)
                    } else {
                        setSubmitStatus('ctrader-check-email')
                        if (props.onSubmit) {
                            props.onSubmit(submit_status || 'ctrader-check-email', email)
                        }
                    }
                })
        } else {
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
        }

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

    const handleCtraderSuccess = () => {
        props.onSubmit('ctrader-success', email)
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
            case Appearances.cTrader:
                return <SignupCtrader {...parameters}></SignupCtrader>
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

    if (props.submit_state === 'success') {
        return (
            <ResponseWrapper>
                <Header as="h3" type="section-title" align="center" weight="normal">
                    {localize('Check your email')}
                </Header>
                <StaticQuery
                    query={graphql`
                        query {
                            view_email: file(relativePath: { eq: "sign-up/view-email.png" }) {
                                ...fadeIn
                            }
                        }
                    `}
                    render={(data) => (
                        <Box m="3.2rem 0">
                            <QueryImage data={data.view_email} alt="Email image" />
                        </Box>
                    )}
                />
                <ConfirmationMessage>
                    <Localize
                        translate_text="We've sent a message to {{email}} with a link to activate your account."
                        values={{ email: props.email }}
                    />
                </ConfirmationMessage>
                <EmailLink to="/check-email/" align="center">
                    {localize("Didn't receive your email?")}
                </EmailLink>
            </ResponseWrapper>
        )
    }

    if (props.submit_state === 'ctrader-check-email') {
        return <CtraderCheckEmail handleSuccess={handleCtraderSuccess} email={email} />
    }
    if (props.submit_state === 'ctrader-success') {
        return <CtraderSignupSuccess email={email} />
    }

    return (
        <Form onSubmit={handleEmailSignup} noValidate bgColor={props.bgColor}>
            {renderSwitch(props.appearance)}
        </Form>
    )
}

export default Signup
