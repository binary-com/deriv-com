import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import Login from 'common/login'
import { LocalStore } from 'common/storage'
import TrafficSource from 'common/traffic-source'
import validation from 'common/validation'
import { BinarySocketBase } from 'common/websocket/socket_base'
import Wrapper from 'components/containers/wrapper'
import SignupDefault from 'components/custom/_signup-default'
import SignupFlat from 'components/custom/_signup-flat'
import SignupNew from 'components/custom/_signup-new'
import SignupPublic from 'components/custom/_signup-public'
import SignupSimple from 'components/custom/_signup-simple'
import { Header, Image, StyledLink, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device.js'

const Form = styled.form`
    width: 100%;
    height: 100%;
    background-color: ${props => props.bgColor || 'var(--color-white)'};
`
const ResponseWrapper = styled.div`
    justify-content: center;
    max-width: 33rem;
    margin: 0 auto;
    flex-direction: column;
    padding: 2rem 1rem;
`
const MutedText = styled(Text)`
    text-align: left;
    color: var(--color-grey);
    align-self: start;
`
export const LoginText = styled(MutedText)`
    text-align: center;
    align-self: center;
    margin-top: 2.4rem;

    @media ${device.tabletL} {
        margin-bottom: 0;
    }
`
const EmailImgWrapper = styled(Wrapper)`
    display: flex;
    justify-content: center;
`
const EmailLink = styled(StyledLink)`
    display: table;
    font-size: 1.4rem;
    margin-top: 1.8rem;
    text-decoration: underline;
    width: 100%;
`

const validateEmail = email => {
    const error_message = validation.email(email)

    return error_message
}

export const Appearances = {
    default: 'default',
    simple: 'simple',
    darkFlat: 'darkFlat',
    lightFlat: 'lightFlat',
    public: 'public',
    newSignup: 'newSignup',
}
class Signup extends Component {
    state = {
        email: '',
        is_submitting: false,
        email_error_msg: '',
        submit_status: '',
        submit_error_msg: '',
    }

    handleValidation = param => {
        const message = typeof param === 'object' ? param.target.value : param

        this.setState({
            email_error_msg: validateEmail(message),
        })
    }

    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value,
        })

        this.handleValidation(value)
    }

    getVerifyEmailRequest = email => {
        const utm_data = TrafficSource.getData()
        const affiliate_token = Cookies.getJSON('affiliate_tracking')
        const signup_device = LocalStore.get('signup_device')
        const date_first_contact = LocalStore.get('date_first_contact')
        const gclid = LocalStore.get('gclid')

        return {
            verify_email: email,
            type: 'account_opening',
            url_parameters: {
                utm_source: TrafficSource.getSource(utm_data),
                ...(utm_data.utm_campaign && {
                    utm_medium: utm_data.utm_medium,
                    utm_campaign: utm_data.utm_campaign,
                }),
                ...(affiliate_token && { affiliate_token: affiliate_token }),
                ...(gclid && { gclid_url: gclid }),
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
        const { email, email_error_msg } = this.state

        this.handleValidation(email)

        const has_error_email = validateEmail(email)

        if (has_error_email || email_error_msg) {
            return this.setState({ is_submitting: false })
        }

        const verify_email_req = this.getVerifyEmailRequest(email)
        BinarySocketBase.send(verify_email_req).then(response => {
            if (response.error) {
                return this.setState({
                    is_submitting: false,
                    submit_status: 'error',
                    submit_error_msg: response.error.message,
                })
            }

            this.setState({
                is_submitting: false,
                submit_status: 'success',
            })
        })
    }

    clearEmail = () => this.setState({ email: '', email_error_msg: '' })

    handleSocialSignup = e => {
        e.preventDefault()
        Login.initOneAll(e.currentTarget.id)
    }

    handleLogin = e => {
        e.preventDefault()
        Login.redirectToLogin()
    }

    handleModalClose = () => {
        const { closeModal } = this.props

        if (closeModal) closeModal()
    }

    renderSwitch(param) {
        const parameters = {
            autofocus: this.props.autofocus,
            clearEmail: this.clearEmail,
            email: this.state.email,
            email_error_msg: this.state.email_error_msg,
            handleInputChange: this.handleInputChange,
            handleLogin: this.handleLogin,
            handleSocialSignup: this.handleSocialSignup,
            handleValidation: this.handleValidation,
            is_submitting: this.state.is_submitting,
        }
        switch (param) {
            case Appearances.simple:
                return <SignupSimple {...parameters}></SignupSimple>
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

    render() {
        return (
            <>
                {!this.state.submit_status && (
                    <Form onSubmit={this.handleEmailSignup} noValidate bgColor={this.props.bgColor}>
                        {this.renderSwitch(this.props.appearance)}
                    </Form>
                )}
                {this.state.submit_status === 'success' && (
                    <ResponseWrapper>
                        <Header as="h3" align="center" weight="normal">
                            {localize('Check your email')}
                        </Header>
                        <EmailImgWrapper width="100%" margin={{ top: '1rem', bottom: '1.6rem' }}>
                            <Image img_name="view-email.png" alt="Email image" width="80%" />
                        </EmailImgWrapper>
                        <Text align="center">
                            <Localize
                                translate_text="We've sent a message to {{email}} with a link to activate your account."
                                values={{ email: this.state.email }}
                            />
                        </Text>
                        <EmailLink to="/check-email/" onClick={this.handleModalClose}>
                            {localize("Didn't receive your email?")}
                        </EmailLink>
                    </ResponseWrapper>
                )}
                {this.state.submit_status === 'error' && this.state.submit_error_msg && (
                    <ResponseWrapper>
                        <Text align="center">{this.state.submit_error_msg}</Text>
                    </ResponseWrapper>
                )}
            </>
        )
    }
}

Signup.propTypes = {
    appearance: PropTypes.oneOf(Object.keys(Appearances)),
    autofocus: PropTypes.bool,
    bgColor: PropTypes.string,
    closeModal: PropTypes.func,
}

export default Signup
