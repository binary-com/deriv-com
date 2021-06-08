import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import Login from 'common/login'
import { getCookiesObject, getCookiesFields, getDataObjFromCookies } from 'common/cookies'
import validation from 'common/validation'
import { BinarySocketBase } from 'common/websocket/socket_base'
import { Input, Button } from 'components/form'
import { Header, Text } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { Flex } from 'components/containers'
import AgreementLabel from 'components/custom/_agreement-label'
import device from 'themes/device.js'
import Apple from 'images/svg/apple.svg'
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'
import ViewEmailImage from 'images/common/view-email.png'

const SignupFormWrapper = styled(Flex)`
    width: 50%;
    align-items: center;
    justify-content: initial;

    @media ${device.mobileM} {
        width: 100%;

        & > div {
            width: 100%;
        }
    }
`

const InputWrapper = styled.div`
    width: 40rem;

    @media ${device.tabletL} {
        margin-right: 1rem;
    }

    @media ${device.tablet} {
        margin-right: 0;
        width: 100%;
    }
`
const InputGroupForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2.4rem;
`
const EmailButton = styled(Button)`
    min-width: 40rem;
    height: 4rem;
    padding: 10px 28px;
    border-radius: 4px;
    @media ${device.tabletL} {
        padding: 10px 16px;
        white-space: nowrap;
        min-width: unset;
        margin-left: 0;
        height: 40px;
        width: auto;
    }
`

const SocialWrapper = styled(Flex)`
    width: 100%;
    margin-top: 1.6rem;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
`
const SocialButton = styled(Button)`
    width: 12.5rem;
    min-width: 116px;
    line-height: 27px;
    padding: 5px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    background-color: var(--color-white);
    border: solid 1px var(--color-grey-7);
    min-height: 4rem;
    height: 40px;
    font-weight: normal;

    /* margin-left: 0.8rem; */

    &:nth-of-type(1) {
        margin-left: 0;
    }
    img {
        padding-right: 5px;
        object-fit: contain;
    }

    @media (max-width: 500px) {
        width: 100%;
        height: 43px;
        padding: 0;
        line-height: 14px;
        margin-bottom: 10px;

        img {
            margin-top: 3px;
            padding-right: 0;
        }
    }
`
const SocialButtonText = styled.div`
    display: flex;

    span {
        display: block;
        width: 100%;
        text-align: left;
    }

    @media (max-width: 500px) {
        width: 100px;

        span {
            padding-left: 10px;
            line-height: 40px;
        }
        img {
            margin-top: 8px;
        }
    }
`

const SignupWithContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;

    @media ${device.tabletL} {
        margin-top: 2rem;
    }
`

const Line = styled.div`
    width: 130px;
    height: 1px;
    background-color: white;
`

const StyledText = styled(Text)`
    color: white;

    @media ${(props) => device.tabletL && props.notedBox} {
        width: 13rem;
    }
    @media (max-width: 340px) {
        width: 17rem;
    }
    @media ${device.tabletL} {
        font-size: ${(props) => props.tabletFontSize || 'var(--text-size-xxs)'};
    }
`

const ResponseWrapper = styled.div`
    justify-content: center;
    max-width: 33rem;
    margin: 0 auto;
    flex-direction: column;
    text-align: center;

    h3,
    p {
        margin: 2rem 0;
        color: white;
    }
`

const EmailImage = styled.img`
    margin: 0 auto;
    width: 20rem;
`

const GetEbook = ({ onSubmit, ebook_utm_code }) => {
    const [is_checked, setChecked] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [is_submitting, setIsSubmitting] = React.useState(false)
    const [submit_status, setSubmitStatus] = React.useState('')
    const [email_error_msg, setEmailErrorMsg] = React.useState('')
    const [submit_error_msg, setSubmitErrorMsg] = React.useState('')

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

    const handleInputChange = (e) => {
        const { value } = e.target

        setEmail(value)
        handleValidation(value)
    }

    const handleValidation = (param) => {
        const message = typeof param === 'object' ? param.target.value : param

        setEmailErrorMsg(validateEmail(message.replace(/\s/g, '')))
    }

    const validateEmail = (email) => {
        const error_message = validation.email(email) || submit_error_msg

        if (submit_error_msg) {
            setSubmitErrorMsg('')
            setSubmitStatus('')
        }

        return error_message
    }

    const clearEmail = () => {
        setEmail('')
        setEmailErrorMsg('')
    }

    const getVerifyEmailRequest = (email) => {
        const affiliate_token = Cookies.getJSON('affiliate_tracking')

        const cookies = getCookiesFields()
        const cookies_objects = getCookiesObject(cookies)
        const cookies_value = getDataObjFromCookies(cookies_objects, cookies)

        return {
            verify_email: email,
            type: 'account_opening',
            url_parameters: {
                ...(affiliate_token && { affiliate_token: affiliate_token }),
                ...(cookies_value && { ...cookies_value }),
                ...(ebook_utm_code && { utm_content: ebook_utm_code }),
            },
        }
    }

    const handleSocialSignup = (e) => {
        e.preventDefault()

        const data_provider = e.currentTarget.getAttribute('data-provider')
        Login.initOneAll(`${data_provider}&utm_content=${ebook_utm_code}`)
    }

    const handleEmailSignup = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const formattedEmail = email.replace(/\s/g, '')
        handleValidation(email)
        const has_error_email = validateEmail(formattedEmail)

        if (has_error_email || email_error_msg) {
            return setIsSubmitting(false)
        }

        const verify_email_req = getVerifyEmailRequest(formattedEmail)
        const binary_socket = BinarySocketBase.init()

        binary_socket.onopen = () => {
            binary_socket.send(JSON.stringify(verify_email_req))
        }
        binary_socket.onmessage = (msg) => {
            const response = JSON.parse(msg.data)
            if (response.error) {
                binary_socket.close()
                setIsSubmitting(false)
                setSubmitStatus('error')
                setSubmitErrorMsg(response.error.message)
                handleValidation(formattedEmail)
            } else {
                setIsSubmitting(false)
                setSubmitStatus('success')
                if (onSubmit) onSubmit(submit_status, email)
            }

            binary_socket.close()
        }
    }

    return submit_status === 'success' ? (
        <ResponseWrapper>
            <Header as="h3" type="section-title" align="center" weight="normal">
                {localize('Check your email')}
            </Header>
            <EmailImage src={ViewEmailImage} alt="Email image" />
            <Text align="center">
                <Localize
                    translate_text="We've sent a message to {{email}} with a link to activate your account."
                    values={{ email: email }}
                />
            </Text>
        </ResponseWrapper>
    ) : (
        <SignupFormWrapper>
            <div>
                <InputGroupForm onSubmit={handleEmailSignup} noValidate>
                    <InputWrapper>
                        <Input
                            id="email"
                            name="email"
                            type="text"
                            error={email_error_msg}
                            value={email}
                            background="white"
                            tabletBackground="green-1"
                            inputBackground="grey-8"
                            labelFocusColor="grey-7"
                            labelColor="black-3"
                            labelSize="16px"
                            labelTop="1.2rem"
                            placeholder={'email address'}
                            handleError={clearEmail}
                            onChange={handleInputChange}
                            onBlur={handleValidation}
                            autoFocus={true}
                            autoComplete="off"
                            required
                            border="unset"
                            height="40px"
                            focusBorder="var(--color-grey-7)"
                        />
                    </InputWrapper>
                    <AgreementLabel
                        isChecked={is_checked}
                        handleChangeCheckbox={handleChange}
                        color="white"
                    />
                    <EmailButton
                        isChecked={is_checked}
                        id="gtm-signup-email"
                        type="submit"
                        secondary="true"
                        disabled={is_submitting || !is_checked || email_error_msg || !email}
                    >
                        {localize('Get your free ebook now!')}
                    </EmailButton>
                </InputGroupForm>
                <SignupWithContainer>
                    <Line />
                    <StyledText color="grey-5" align="center" tabletFontSize="12px">
                        {localize('Or sign up with')}
                    </StyledText>
                    <Line />
                </SignupWithContainer>
                <SocialWrapper jc="unset" ai="center">
                    <SocialButton
                        onClick={handleSocialSignup}
                        provider="google"
                        data-provider="google"
                        id="gtm-signup-google"
                        type="button"
                        social
                    >
                        <SocialButtonText>
                            <img src={Google} alt="google" width="24" height="24" />
                            <span>Google</span>
                        </SocialButtonText>
                    </SocialButton>
                    <SocialButton
                        onClick={handleSocialSignup}
                        provider="facebook"
                        data-provider="facebook"
                        id="gtm-signup-facebook"
                        type="button"
                        social
                    >
                        <SocialButtonText>
                            <img src={Facebook} alt="facebook" width="24" height="24" />
                            <span>Facebook</span>
                        </SocialButtonText>
                    </SocialButton>
                    <SocialButton
                        onClick={handleSocialSignup}
                        provider="apple"
                        data-provider="apple"
                        id="gtm-signup-apple"
                        type="button"
                        social
                    >
                        <SocialButtonText>
                            <img src={Apple} alt="apple" width="24" height="24" />
                            <span>Apple</span>
                        </SocialButtonText>
                    </SocialButton>
                </SocialWrapper>
            </div>
        </SignupFormWrapper>
    )
}

GetEbook.propTypes = {
    ebook_utm_code: PropTypes.string,
    onSubmit: PropTypes.func,
}

export default GetEbook
