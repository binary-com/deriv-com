import React from 'react'
import styled from 'styled-components'
import { Input, Button } from 'components/form'
import { FlexGridContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// SVG
import Facebook from 'images/svg/custom/facebook.svg'
import Google from 'images/svg/custom/google.svg'

type SignupDefaultProps = {
    autofocus?: boolean
    clearEmail?: () => void
    email?: string
    email_error_msg?: string
    handleInputChange?: (event) => void
    handleLogin?: (event) => void
    handleSocialSignup?: (event) => void
    handleValidation?: (event) => void
    is_submitting?: boolean
}

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`

const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: 2.4rem 0;
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
const SocialWrapper = styled(FlexGridContainer)`
    width: 100%;
    margin-top: var(--text-size-s);
`
const LoginText = styled(Text)`
    text-align: center;
    align-self: center;
    margin-top: 2.4rem;
    color: var(--color-grey);

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
const SignupDefault = ({
    email_error_msg,
    email,
    clearEmail,
    handleInputChange,
    handleValidation,
    autofocus,
    handleSocialSignup,
    handleLogin,
    is_submitting,
}: SignupDefaultProps) => {
    return (
        <Wrapper>
            <Header as="h3" weight="bold">
                {localize('Sign up for your demo account now.')}
            </Header>
            <InputGroup>
                <Input
                    id="dm-email-input"
                    name="email"
                    type="text"
                    error={email_error_msg}
                    value={email}
                    label={localize('Email')}
                    placeholder={'example@mail.com'}
                    handleError={clearEmail}
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                    autoFocus={autofocus}
                    autoComplete="off"
                    required
                />
            </InputGroup>
            <EmailButton
                id="dm-default-signup-button"
                type="submit"
                secondary
                disabled={is_submitting}
            >
                {localize('Create free demo account')}
            </EmailButton>
            <Text color="grey" align="center">
                {localize('Or sign up with')}
            </Text>
            <SocialWrapper justify="space-between" gap="0" grid="2">
                <SocialButton
                    onClick={handleSocialSignup}
                    provider="google"
                    data-provider="google"
                    id="dm-signup-google"
                    type="button"
                    social
                >
                    <span>
                        <img src={Google} alt="google" width="22" height="23" />
                    </span>
                </SocialButton>
                <SocialButton
                    onClick={handleSocialSignup}
                    provider="facebook"
                    data-provider="facebook"
                    id="dm-signup-facebook"
                    type="button"
                    social
                >
                    <span>
                        <img src={Facebook} alt="facebook" width="12" height="22" />
                    </span>
                </SocialButton>
            </SocialWrapper>
            <LoginText>
                {localize('Already have an account?')}
                <LoginLink id="dm-default-login-button" onClick={handleLogin}>
                    {' '}
                    {localize('Log in.')}
                </LoginLink>
            </LoginText>
            <NoteText>
                <Localize
                    translate_text="Got a <0>Binary.com</0> account? You can <1>log in</1> to <0>Deriv</0> with your <0>Binary.com</0> username and password"
                    components={[<strong key={0} />, <LoginLink key={1} onClick={handleLogin} />]}
                />
            </NoteText>
        </Wrapper>
    )
}

export default SignupDefault
