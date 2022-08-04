import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import ReCAPTCHA from 'react-google-recaptcha'
import Cookies from 'js-cookie'
import AffiliateSignupLayout, { SignUpWrapper } from './components/_layout'
import { localize, WithIntl, Localize } from 'components/localization'
import { Input, Button } from 'components/form'
import { Header, LinkText, LocalizedLinkText } from 'components/elements'
import device from 'themes/device'
import Google from 'images/svg/custom/googlenew.svg'
import Apple from 'images/svg/custom/applenew.svg'
import Facebook from 'images/svg/custom/facebooknew-blue.svg'
import Email from 'images/svg/check-email/new email.svg'
import validation from 'common/validation'
import { getCookiesObject, getCookiesFields, getDataObjFromCookies } from 'common/cookies'
import { BinarySocketBase } from 'common/websocket/socket_base'
import Login from 'common/login'

const StyledNote = styled.div`
    padding: 8px 0;
    margin: 24px 0 16px;
    height: 36px;
    width: 406px;
    border-radius: 4px;
    background-color: #f8f8f9;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;

    @media ${device.mobileL} {
        height: 54px;
        padding: 8px 7px;
        width: 100%;
    }
`
const StyledLinkText = styled(LinkText)`
    margin-left: 3px;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
const InputGroup = styled.div`
    width: 100%;
    margin-bottom: 16px;
`
const EmailButton = styled(Button)`
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    margin-top: 3.2rem;

    @media ${device.tabletL} {
        margin-top: 24px;
    }

    @media ${device.mobileL} {
        font-size: 1.75rem;
    }
`
const StyledText = styled(LinkText)`
    font-size: 14px;
    line-height: 20px;
    @media (min-width: 768px) {
        width: 14rem;
    }
    @media (min-width: 820px) and (max-width: 1200px) {
        width: 17rem;
    }
`
const EmailText = styled(LinkText)`
    font-size: 16px;
    line-height: 24px;
    padding-top: 24px;
`
const LoginText = styled(LinkText)`
    text-align: center;
    align-self: center;
    margin-top: 1.6rem;

    @media ${device.tabletL} {
        font-size: 2rem;
    }
`
const Line = styled.div`
    width: 132px;
    height: 1px;
    background-color: var(--color-grey-7);
`
const SignupWithContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2.4rem;

    @media ${device.tabletL} {
        margin-top: 4rem;
    }
`
const LoginContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    margin-top: 2.4rem;
`
const CaptchaContainer = styled.div`
    margin: auto;
`
const SocialWrapper = styled.div`
    width: 100%;
    margin-top: 2.4rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
`
const GoogleWrapper = styled.div`
    padding-right: 24px;
`
const AppleWrapper = styled.div`
    padding-left: 24px;
`
const FacebookWrapper = styled.div``

const onChange = (data) => {
    console.log('Captcha value:', data)
}
const EmailWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const ImageWrapper = styled.div`
    margin: auto;
`
type AffiliateSignupProps = {
    autofocus: boolean
    email_error_msg: string
    email: string
    submit_status: string | ReactElement
    is_submitting: boolean
    submit_error_msg: ReactElement
    onSubmit?: (submit_status: string, email: string) => void
}

const AffiliateSignup = ({ autofocus, onSubmit }: AffiliateSignupProps) => {
    const [email, setEmail] = useState('')
    const [is_submitting, setSubmitting] = useState(false)
    const [email_error_msg, setEmailErrorMsg] = useState('')
    const [submit_status, setSubmitStatus] = useState('')
    const [submit_error_msg, setSubmitErrorMsg] = useState('')

    const validateEmail = (error_address) => {
        const error_message =
            validation.required(error_address) ||
            validation.email(error_address) ||
            submit_error_msg
        if (submit_error_msg) {
            setSubmitErrorMsg('')
        }
        return error_message
    }
    const handleValidation = (param) => {
        const message = typeof param === 'object' ? param.target.value : param
        setEmailErrorMsg(validateEmail(message.replace(/\s/g, '')))
    }
    const handleInputValidation = (e) => {
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
            type: 'account_opening',
            url_parameter: {
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
        const binary_socket = BinarySocketBase.init()

        binary_socket.onopen = () => {
            binary_socket.send(JSON.stringify(verify_email_req))
        }
        binary_socket.onmessage = (msg) => {
            const response = JSON.parse(msg.data)
            setSubmitting(false)
            if (response.error) {
                binary_socket.close()
                setSubmitStatus('error')
                setSubmitErrorMsg(response.error.message)
                handleValidation(formatted_email)
            } else {
                setSubmitStatus('success')
                if (onSubmit) {
                    onSubmit(submit_status || 'success', email)
                }
            }

            binary_socket.close()
        }
    }
    const clearEmail = () => {
        setEmail('')
        setEmailErrorMsg('')
    }
    const handleLogin = (e) => {
        e.preventDefault()
        Login.redirectTologin()
    }
    return (
        <AffiliateSignupLayout>
            <SignUpWrapper>
                {submit_status !== 'success' ? (
                    <>
                        <Header as="h3" type="heading-3" mb="0.8rem">
                            {localize('Sign up')}
                        </Header>
                        <Header as="p" type="subtitle-1" weight="normal">
                            {localize('Enter your email address to begin')}
                        </Header>

                        <StyledNote>
                            <Header
                                as="p"
                                type="paragraph-2"
                                weight="normal"
                                align="center"
                                color="grey-5"
                            >
                                {localize('Want to sign up as a trader?')}
                                <LocalizedLinkText to="/signup">
                                    <StyledLinkText
                                        id="dm-new-login-button"
                                        size="14px"
                                        color="grey-5"
                                    >
                                        {localize('Create a Deriv account')}
                                    </StyledLinkText>
                                </LocalizedLinkText>
                            </Header>
                        </StyledNote>

                        <InputGroup>
                            <Input
                                id="dm-email-input"
                                name="email"
                                type="text"
                                border="solid 1px var(--color-grey-7)"
                                label_color="grey-5"
                                label_hover_color="grey-5"
                                background="white"
                                error={email_error_msg}
                                value={email}
                                label={localize('Email')}
                                placeholder={'Email'}
                                autoFocus={autofocus}
                                autoComplete="off"
                                handleError={clearEmail}
                                onChange={handleInputValidation}
                                onBlur={handleValidation}
                                required
                            />
                        </InputGroup>
                        <CaptchaContainer>
                            <ReCAPTCHA
                                sitekey="6Ld_EwIhAAAAAI8eRUeCN9RtKzn5oKsHKKwwPaXf"
                                onChange={onChange}
                            />
                        </CaptchaContainer>
                        <EmailButton
                            disabled={is_submitting || !email || email_error_msg}
                            type="submit"
                            onClick={handleEmailSignup}
                            secondary="true"
                            id="partner-signup"
                        >
                            {localize('Create partner account')}
                        </EmailButton>
                        <SignupWithContainer>
                            <Line />
                            <StyledText color="grey-5" align="center">
                                {localize('Or sign up with')}
                            </StyledText>
                            <Line />
                        </SignupWithContainer>
                        <SocialWrapper>
                            <GoogleWrapper id="google-signup">
                                <img src={Google} alt="google" width="40" height="40" />
                            </GoogleWrapper>
                            <FacebookWrapper id="facebook-signup">
                                <img src={Facebook} alt="facebook" width="40" height="40" />
                            </FacebookWrapper>
                            <AppleWrapper id="apple-signup">
                                <img src={Apple} alt="apple" width="40" height="40" />
                            </AppleWrapper>
                        </SocialWrapper>
                        <LoginContainer>
                            <LoginText mt="3.75rem">
                                {localize('Already have a Deriv or Binary.com affiliate account?')}
                            </LoginText>
                            <StyledText
                                id="dm-new-login-button"
                                align="center"
                                size="16px"
                                color="red"
                                onClick={handleLogin}
                            >
                                {localize('Log in')}
                            </StyledText>
                        </LoginContainer>
                    </>
                ) : (
                    <EmailWrapper>
                        <ImageWrapper>
                            <img src={Email} alt="email" width="116" height="100" />
                        </ImageWrapper>
                        <Header type="subtitle-1" align="center">
                            {localize('Check your email')}
                        </Header>
                        <Header type="paragraph-1" align="center" weight="400" pt="8px">
                            <Localize
                                translate_text="We've sent a message to {{email}} with a link to activate your account."
                                values={{ email: email }}
                            />
                        </Header>
                        <EmailText id="dm-new-login-button" align="center" color="red">
                            {localize('Didn’t receive your email?')}
                        </EmailText>
                    </EmailWrapper>
                )}
            </SignUpWrapper>
        </AffiliateSignupLayout>
    )
}

export default WithIntl()(AffiliateSignup)
