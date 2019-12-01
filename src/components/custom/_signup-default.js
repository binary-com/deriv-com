import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/form'
import { FlexGridContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device.js'
import Facebook from 'images/svg/facebook.svg'
import Google from 'images/svg/google.svg'

const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: var(--text-size-m) 0;
`
const EmailButton = styled(Button)`
    width: auto;
    font-size: 1.4rem;
    margin-bottom: 2rem;
`

const SocialButton = styled(Button)`
    box-shadow: none;
    flex: inherit !important;
    width: 48%;
`
const MutedText = styled(Text)`
    text-align: left;
    color: var(--color-grey);
    align-self: start;
`
const SocialWrapper = styled(FlexGridContainer)`
    width: 100%;
    margin-top: var(--text-size-s);
`
export const LoginText = styled(MutedText)`
    text-align: center;
    align-self: center;
    margin-top: 2.4rem;

    @media ${device.tabletL} {
        margin-bottom: 0;
    }
`
const NoteText = styled(LoginText)`
    margin-top: 3rem;
`

const LoginLink = styled.a`
    color: var(--color-red);
    text-decoration: none;
    cursor: pointer;
`

const SignupDefault = props => {
    return (
        <>
            <Header as="h3" weight="bold">
                {localize('Sign up for free now!')}
            </Header>
            <InputGroup>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    error={props.email_error_msg}
                    value={props.email}
                    label={localize('Email')}
                    placeholder={'example@mail.com'}
                    handleError={props.clearEmail}
                    onChange={props.handleInputChange}
                    onBlur={props.handleValidation}
                    autoFocus={props.autofocus}
                    autoComplete="off"
                    required
                />
            </InputGroup>
            <EmailButton type="submit" secondary disabled={props.is_submitting}>
                {localize('Create a free account')}
            </EmailButton>
            <Text color="grey" align="center">
                {localize('Or sign up with')}
            </Text>
            <SocialWrapper justify="space-between" gap="0" grid="2">
                <SocialButton
                    onClick={props.handleSocialSignup}
                    provider="google"
                    id="google"
                    type="button"
                    social
                >
                    <span>
                        <Google />
                    </span>
                </SocialButton>
                <SocialButton
                    onClick={props.handleSocialSignup}
                    provider="facebook"
                    id="facebook"
                    type="button"
                    social
                >
                    <span>
                        <Facebook />
                    </span>
                </SocialButton>
            </SocialWrapper>
            <LoginText>
                {localize('Already have an account?')}
                <LoginLink onClick={props.handleLogin}> {localize('Log in.')}</LoginLink>
            </LoginText>
            <NoteText>
                <Localize
                    translate_text="Got a <0>Binary.com</0> account? You can <1>log in</1> to <0>Deriv</0> with your <0>Binary.com</0> username and password"
                    components={[
                        <strong key={0} />,
                        <LoginLink key={1} onClick={props.handleLogin} />,
                    ]}
                />
            </NoteText>
        </>
    )
}

SignupDefault.propTypes = {
    autofocus: PropTypes.func,
    clearEmail: PropTypes.bool,
    email: PropTypes.string,
    email_error_msg: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleLogin: PropTypes.func,
    handleSocialSignup: PropTypes.func,
    handleValidation: PropTypes.func,
    is_submitting: PropTypes.bool,
}

export default SignupDefault
