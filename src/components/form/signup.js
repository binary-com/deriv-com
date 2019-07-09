import React, { Component } from 'react'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import Button from './button'
import Input from './input'
import Row from '../containers/row'
import Facebook from 'images/svg/facebook.svg'
import Google from 'images/svg/google.svg'
import { Header, Text } from '../elements/typography'
import ErrorIcon from 'images/svg/error-icon.svg'
import { localize } from '../localization'
import TrafficSource from 'common/traffic-source'
import { State, LocalStore } from 'common/storage'
import { BinarySocketBase } from 'common/websocket/socket_base'
import Image from '../elements/image'
import Login from 'common/login'

const Title = styled(Header)`
    margin: 10rem 0 3rem 0;
`
const Form = styled.form`
    width: 80%;
`
const SuccessWrapper = styled.div`
    align-items: center;
    justify-content: center;
    max-width: 26.5rem;
    height: 57.3rem;
    display: flex;
    flex-direction: column;
`
const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: var(--text-size-m) 0;
`
const EmailButton = styled(Button)`
    width: 100%;
    font-size: var(--text-size-s);
    margin-bottom: 4rem;
`

const StyledError = styled(ErrorIcon)`
    position: absolute;
    right: 0.8rem;
    top: 1.2rem;
    height: 1.6rem;
    width: 1.6rem;
`

const ErrorMessages = styled(Text)`
    padding-left: 0.8rem;
    font-size: 1.2rem;
`
const SocialButton = styled(Button)`
    box-shadow: none;
    flex: inherit !important;
    width: 48%;
    background: ${props => {
        if (props.provider === 'google') return 'var(--color-white)'
        if (props.provider === 'facebook') return 'var(--color-blue)'
    }};
    padding: 1rem;

    svg {
        width: 2.2rem;
        height: 2.2rem;
    }
`
const MutedText = styled(Text)`
    text-align: left;
    color: var(--color-grey);
    align-self: start;
`
const SocialWrapper = styled(Row)`
    width: 100%;
    justify-content: space-between;
    margin-top: var(--text-size-s);
    margin-bottom: 4rem;
`
const LoginText = styled(MutedText)`
    text-align: center;
    align-self: center;
    margin-bottom: 8rem;
`
const LoginLink = styled.a`
    color: var(--color-red);
    text-decoration: none;
    cursor: pointer;
`

const validation_message = {
    email: {
        required: localize('Email is required'),
        valid: localize('Invalid email address'),
    },
}

class Signup extends Component {
    state = {
        email: '',
        is_submitting: false,
        error_msg: '',
        submit_status: '',
    }

    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value,
        })
        this.validateEmail()
    }

    validateEmail = () => {
        const { email } = this.state
        const required = email.length
        const valid = /[^@]+@[^.]+\..+/g.test(email)

        if (required && valid) {
            return this.setState({ error_msg: null })
        }
        if (!required) {
            this.setState({
                error_msg: validation_message.email.required,
            })
        }
        if (!valid) {
            this.setState({
                error_msg: validation_message.email.valid,
            })
        }
    }

    checkCountry = req => {
        const clients_country = State.getResponse(
            'website_status.clients_country',
        )
        const is_binary_email = /@binary\.com$/.test(req.verify_email)

        if (clients_country !== 'my' || is_binary_email) {
            return true
        }

        return false
    }

    getVerifyEmailRequest = email => {
        const utm_data = TrafficSource.getData()
        const affiliate_token = Cookies.getJSON('affiliate_tracking')
        const signup_device = LocalStore.get('signup_device')
        const date_first_contact = LocalStore.get('date_first_contact')

        return {
            verify_email: email,
            type: 'account_opening',
            url_parameters: {
                utm_source: TrafficSource.getSource(utm_data),
                ...(utm_data.utm_campaign && {
                    utm_medium: utm_data.utm_medium,
                    utm_campaign: utm_data.utm_campaign,
                }),
                ...(affiliate_token && { affiliate_token: affiliate_token.t }),
                ...(signup_device && { signup_device: signup_device }),
                ...(date_first_contact && {
                    date_first_contact: date_first_contact,
                }),
            },
        }
    }

    handleEmailSignup = e => {
        e.preventDefault()
        this.setState({ is_submitting: true })
        this.validateEmail()

        if (this.state.error_msg) {
            return this.setState({ is_submitting: false })
        }

        const { email } = this.state
        const verify_email_req = this.getVerifyEmailRequest(email)

        if (this.checkCountry(verify_email_req)) {
            BinarySocketBase.send(verify_email_req).then(() => {
                this.setState({
                    is_submitting: false,
                    submit_status: 'success',
                })
            })
        } else {
            this.setState({ is_submitting: false, submit_status: 'invalid' })
        }
    }

    handleSocialSignup = e => {
        e.preventDefault()
        Login.initOneAll(e.target.id)
    }

    handleLogin = e => {
        e.preventDefault()
        Login.redirectToLogin()
    }

    render() {
        return (
            <>
                {!this.state.submit_status && (
                    <Form onSubmit={this.handleEmailSignup} noValidate>
                        <Title as="h3" weight="normal">
                            {localize('Sign up for free now!')}
                        </Title>
                        <InputGroup>
                            <Input
                                id="email"
                                name="email"
                                type="text"
                                value={this.state.email}
                                label={localize('Email')}
                                placeholder={'example@mail.com'}
                                onChange={this.handleInputChange}
                                onBlur={this.validateEmail}
                                autofocus
                                required
                            />
                            {this.state.error_msg && (
                                <>
                                    <ErrorMessages
                                        lh="1.4"
                                        align="left"
                                        color="red-1"
                                    >
                                        {this.state.error_msg}
                                    </ErrorMessages>
                                    <StyledError />
                                </>
                            )}
                        </InputGroup>
                        <EmailButton
                            type="submit"
                            secondary
                            disabled={this.state.is_submitting}
                        >
                            {localize('Create a free account')}
                        </EmailButton>
                        <Text color="grey">{localize('Or sign up with')}</Text>
                        <SocialWrapper>
                            <SocialButton
                                onClick={this.handleSocialSignup}
                                provider="google"
                                id="google"
                                type="button"
                                secondary
                            >
                                <span>
                                    <Google />
                                </span>
                            </SocialButton>
                            <SocialButton
                                onClick={this.handleSocialSignup}
                                provider="facebook"
                                id="facebook"
                                type="button"
                                secondary
                            >
                                <span>
                                    <Facebook />
                                </span>
                            </SocialButton>
                        </SocialWrapper>
                        <LoginText>
                            {localize('Already have an account?')}
                            <LoginLink onClick={this.handleLogin}>
                                {' '}
                                {localize('Log in.')}
                            </LoginLink>
                        </LoginText>
                    </Form>
                )}
                {this.state.submit_status === 'success' && (
                    <SuccessWrapper>
                        <Header as="h3" align="center" weight="normal">
                            {localize('Check your email')}
                        </Header>
                        <Image
                            img_name="open-email.png"
                            alt="Email image"
                            width="80%"
                            my="1.6rem"
                        />
                        <Text align="center">
                            {localize(
                                'Please check your email and click on the link provided to verify your email address.',
                            )}
                        </Text>
                    </SuccessWrapper>
                )}
            </>
        )
    }
}

export default Signup
