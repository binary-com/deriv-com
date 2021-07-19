/* eslint-disable no-console */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Title, TextWrapper } from './_common'
import paperPlane from 'images/common/blog/paperplanes.png'
import validation from 'common/validation'
import { Input, Button } from 'components/form'
import { Localize, localize } from 'components/localization'
import { Flex } from 'components/containers'
import AgreementLabel from 'components/custom/_agreement-label'
import device from 'themes/device.js'

const SignupFormWrapper = styled(Flex)`
    width: 100%;
    align-items: initial;
    justify-content: initial;
    background: var(--color-blue-3);
    padding: 40px 80px;
    border-radius: 8px;
    position: relative;

    @media ${device.tabletL} {
        padding: 200px 20px 40px;
    }
    @media ${device.tabletS} {
        width: 100%;

        & > div {
            width: 100%;
        }
    }
`
const PaperPlaneImage = styled.img`
    position: absolute;
    right: 50px;
    bottom: 0;

    @media screen and (max-width: 1330px) and (min-width: 991px) {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 240px;
    }

    @media ${device.tabletL} {
        position: absolute;
        top: 20px;
        width: 280px;
        left: 50%;
        transform: translateX(-50%);
    }
`
const StyledFormContent = styled.div`
    @media ${device.tabletL} {
        width: 100%;
        max-width: 100%;

        h3,
        p {
            width: 100%;
            max-width: 100%;
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
    @media screen and (max-width: 1330px) and (min-width: 991px) {
        input#name {
            width: 100%;
        }
        input#email {
            width: 200px;
        }
    }
    @media ${device.tabletL} {
        margin-right: 0;
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

    .link-text {
        color: var(--color-grey-19);
        font-weight: bold;
    }

    @media ${device.tabletL} {
        > div {
            flex-direction: column;
        }
    }
`
const EmailButton = styled(Button)`
    padding: 10px 28px 9px;
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
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
`

const Subscribe = () => {
    const [is_checked, setChecked] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [is_submitting, setIsSubmitting] = React.useState(false)
    const [submit_status, setSubmitStatus] = React.useState('')
    const [email_error_msg, setEmailErrorMsg] = React.useState('')
    const [name_error_msg, setNameErrorMsg] = React.useState('')
    const [submit_error_msg, setSubmitErrorMsg] = React.useState('')

    useEffect(() => {
        const options = {
            headers: new Headers({ 'content-type': 'application/json' }),
            mode: 'no-cors',
        }
        fetch('https://assets.customer.io/assets/track.js', options)
            .then((response) => {
                console.log(response)
                setSubmitStatus(true)
            })
            .catch((error) => {
                console.log('error', error)
                setSubmitStatus(false)
            })
    }, [])

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

    const customerioData = () => {
        window._cio.identify({
            id: email,
            email,
            created_at: Math.round(Date.now() / 1000),
            name,
        })
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

        customerioData(formattedEmail)
        submit_status && setSubmitStatus('success')
        clearName()
        clearEmail()
    }

    return (
        <SignupFormWrapper>
            <PaperPlaneImage src={paperPlane} alt="Paper Plane" />
            <StyledFormContent>
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
                    {localize(
                        'Be among the first to get new content delivered to your inbox once a month by subscribing to our blog updates.',
                    )}
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
                            disabled={
                                is_submitting ||
                                !is_checked ||
                                email_error_msg ||
                                !email ||
                                name_error_msg ||
                                !name
                            }
                        >
                            {localize('Subscribe')}
                        </EmailButton>
                    </Flex>
                    {submit_status === true && (
                        <AgreementLabel
                            isChecked={is_checked}
                            handleChangeCheckbox={handleChange}
                            color="#C2C2C2"
                        />
                    )}
                    {submit_status === 'success' && (
                        <TextWrapper color={'#01a79f'} font_size={15} margin_top={'10px'}>
                            <Localize translate_text="Thanks for subscribing. We've sent a confirmation email to your inbox" />
                        </TextWrapper>
                    )}
                    {submit_status === false && (
                        <TextWrapper color={'#ff444f'} font_size={15} margin_top={'10px'}>
                            <Localize translate_text="Please disable Adblock for Deriv to subscribe successfully" />
                        </TextWrapper>
                    )}
                </InputGroupForm>
            </StyledFormContent>
        </SignupFormWrapper>
    )
}

Subscribe.propTypes = {
    ebook_utm_code: PropTypes.string,
    onSubmit: PropTypes.func,
}

export default Subscribe
