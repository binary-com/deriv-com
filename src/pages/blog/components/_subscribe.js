import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import { Title, TextWrapper } from './_common';
import paperPlane from 'images/common/blog/paperplanes.png';
import { getCookiesObject, getCookiesFields, getDataObjFromCookies } from 'common/cookies'
import validation from 'common/validation'
import { BinarySocketBase } from 'common/websocket/socket_base'
import { Input, Button } from 'components/form'
import { Header, Text } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { Flex } from 'components/containers'
import AgreementLabel from 'components/custom/_agreement-label'
import device from 'themes/device.js'
import ViewEmailImage from 'images/common/view-email.png'

const SignupFormWrapper = styled(Flex)`
    width: 100%;
    align-items: initial;
    justify-content: initial;
    background: #252E4F;
    padding: 40px 80px;
    border-radius: 8px;
    position: relative;

    .paperplane-img{
        position: absolute;
        right: 50px;
        bottom: 0;
    }

    @media ${device.tabletL} {
        padding: 200px 20px 40px;

        .paperplane-img{
            position: absolute;
            top: 20px;
            left: 20px;
        }
        .form-content, .form-content h3, .form-content p {
            width: 100%;
            max-width: 100%;
        }
    }

    @media ${device.tabletS} {
        width: 100%;

        & > div {
            width: 100%;
        }
    }
`

const InputWrapper = styled.div`
    display: flex;

    input#name {
        width: 212px;
    }
    input#email {
        width: 300px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-left: 10px;
    }
    @media ${device.tabletL} {
        margin-right: 10px;
        flex-direction: column;

        input {
            margin-left: 0 !important;
            width: 100% !important;
        }
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
    margin-top: 24px;

    @media ${device.tabletL} {
        > div {
            flex-direction: column;
        }
    }
`
const EmailButton = styled(Button)`
    height: 4rem;
    padding: 10px 28px;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    
    @media ${device.tabletL} {
        padding: 10px 16px;
        white-space: nowrap;
        min-width: unset;
        margin-left: 0;
        height: 40px;
        width: auto;
    }
`
const ResponseWrapper = styled.div`
    justify-content: center;
    max-width: 330px;
    flex-direction: column;
    text-align: center;
    border: 1px solid var(--color-white);
    padding: 20px;
    position: relative;
    border-radius: 10px;
    margin: 30px 0;

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
    const [name, setName] = React.useState('')
    const [is_submitting, setIsSubmitting] = React.useState(false)
    const [submit_status, setSubmitStatus] = React.useState('')
    const [email_error_msg, setEmailErrorMsg] = React.useState('')
    const [name_error_msg, setNameErrorMsg] = React.useState('')
    const [submit_error_msg, setSubmitErrorMsg] = React.useState('')

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

    const handleInputNameChange = (e) => {
        const { value } = e.target

        setName(value)
        handleValidation(value)
    }

    const handleInputChange = (e) => {
        const { value } = e.target

        setEmail(value)
        handleValidation(value)
    }

    const handleValidation = (param) => {
        const message = typeof param === 'object' ? param.target.value : param
        setNameErrorMsg(validateName(message.replace(/\s/g, '')))
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

    const validateName = (name) => {
        const error_message = validation.name(name) || submit_error_msg

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

    const clearName = () => {
        setName('')
        setNameErrorMsg('')
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

    const handleEmailSignup = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const formattedEmail = email.replace(/\s/g, '')
        handleValidation(email)
        handleValidation(name)
        const has_error_email = validateEmail(formattedEmail)
        const has_error_name = validateName(formattedEmail)

        if (has_error_email || has_error_name || email_error_msg || name_error_msg) {
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
            <EmailImage src={ViewEmailImage} alt="Email" />
            <Header as="h3" type="section-title" align="center" weight="normal">
                {localize('Check your email')}
            </Header>
            <Text align="center">
                <Localize
                    translate_text="We've sent a message to {{email}} with a link to activate your account."
                    values={{ email: email }}
                />
            </Text>
        </ResponseWrapper>
    ) : (
        <SignupFormWrapper>
            <img className="paperplane-img" src={paperPlane} alt="Paper Plane" />
            <div className="form-content">
                <Title
                    as="h3"
                    color={'white'}
                    text_align={'left'}
                    font_size={['24px', '18px']}
                    line_height={['36px', '26px']}
                >
                    {localize('Subscribe to our blog via email')}
                </Title>
                <TextWrapper
                    color={'white'}
                    font_size={['14px', '12px']}
                    line_height={['20px', '18px']}
                    max_width={['684px', '291px']}
                >
                    {localize('Be among the first to get new content delivered to your inbox once a month by subscribing to our blog updates.')}
                </TextWrapper>
                <InputGroupForm onSubmit={handleEmailSignup} noValidate>
                    <Flex jc="flex-start">
                        <InputWrapper>
                            <Input
                                required
                                id="name"
                                className="name-input"
                                name="text"
                                type="text"
                                error={name_error_msg}
                                value={name}
                                background="white"
                                tabletBackground="green-1"
                                inputBackground="grey-8"
                                labelFocusColor="grey-7"
                                labelColor="black-3"
                                labelSize="16px"
                                labelTop="1.2rem"
                                placeholder={'Name'}
                                handleError={clearName}
                                onChange={handleInputNameChange}
                                onBlur={handleValidation}
                                autoFocus={true}
                                autoComplete="off"
                                border="unset"
                                height="40px"
                                focusBorder="var(--color-grey-7)"
                            />
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
                        <EmailButton
                            isChecked={is_checked}
                            id="gtm-signup-email"
                            type="submit"
                            secondary="true"
                            disabled={is_submitting || !is_checked || email_error_msg || !email || name_error_msg || !name}
                        >
                            {localize('Subscribe')}
                        </EmailButton>
                    </Flex>
                    <AgreementLabel
                        isChecked={is_checked}
                        handleChangeCheckbox={handleChange}
                        color="white"
                    />
                </InputGroupForm>
            </div>
        </SignupFormWrapper>
    )
}

GetEbook.propTypes = {
    ebook_utm_code: PropTypes.string,
    onSubmit: PropTypes.func,
}

export default GetEbook
