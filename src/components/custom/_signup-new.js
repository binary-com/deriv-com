import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/form'
import { FlexGridContainer } from 'components/containers'
import { Header, Text, Checkbox } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'

const Wrapper = stryled.div`display: flex; justify-content: center; flex-direction: row;`
const NoteBox = styled.div`
    width: 40.4rem;
    padding: 1.6rem 1.6rem;
    margin-top: 1.6rem;
    border-radius: 0.6rem;
    background-color: var(--color-grey-8);
    border: solid 1px var(--color-grey-11);
`

const StyledText = styled(Text)`
    font-size: ${props => props.fontSize || 'var(--text-size-s)'};
`

const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: var(--text-size-m) 0;
`
const EmailButton = styled(Button)`
    width: 40.4rem;
    font-size: 1.4rem;
    margin-bottom: 2rem;
    margin-top: 2.4rem;
`

const SocialButton = styled(Button)`
    box-shadow: none;
    width: 48%;
    background-color: ${props => props.bgColor || 'var(--color-white)'};
    border: solid 1px var(--color-grey-7);
`
const MutedText = styled(Text)`
    text-align: left;
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
const Span = styled.span`
    margin-right: 5.4rem;
    margin-left: 1.3rem;
    font-weight: 500;
    font-size: var(--text-size-xxs);
    color: var(--color-grey-13);
`
const LoginLink = styled.a`
    color: var(--color-red);
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 1.4rem;
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
}) => {
    return (
        <Wrapper>
            <Header as="h4" weight="bold">
                {localize('Sign up')}
            </Header>
            <br />
            <Text>{localize('Enter your email address to begin')}</Text>
            <NoteBox>
                <StyledText fontSize="var(--text-size-xs)" color="grey-10" lh="1.14" align="center">
                    {localize(
                        'Got a Binary.com account? Simply Log in to Deriv.com with your Binary.com credentials',
                    )}
                </StyledText>
            </NoteBox>
            <InputGroup>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    error={email_error_msg}
                    value={email}
                    label={localize('Email')}
                    placeholder={'Email'}
                    handleError={clearEmail}
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                    autoFocus={autofocus}
                    autoComplete="off"
                    required
                />
            </InputGroup>
            <Checkbox label={localize('I agree to the Terms and Conditions')}> </Checkbox>
            <EmailButton type="submit" secondary disabled={is_submitting}>
                {localize('Create a free account')}
            </EmailButton>
            <StyledText color="grey-10" align="center" fontSize="var(--text-size-xxs)">
                {localize('OR SIGN UP WITH ')}
            </StyledText>
            <SocialWrapper justify="space-between" gap="0" grid="2">
                <SocialButton
                    onClick={handleSocialSignup}
                    provider="google"
                    id="google"
                    type="button"
                    social
                >
                    <span>
                        <Google />
                    </span>
                    <Span>Google</Span>
                </SocialButton>
                <SocialButton
                    onClick={handleSocialSignup}
                    provider="facebook"
                    id="facebook"
                    type="button"
                    social
                >
                    <span>
                        <Facebook />
                    </span>
                    <Span>Facebook</Span>
                </SocialButton>
            </SocialWrapper>
            <LoginText>
                {localize('Already have an account?')}
                <LoginLink onClick={handleLogin}> {localize('Log in.')}</LoginLink>
            </LoginText>
        </Wrapper>
    )
}

SignupDefault.propTypes = {
    autofocus: PropTypes.bool,
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
