import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/form'
import { FlexGridContainer } from 'components/containers'
import { Header, Text, Checkbox, StyledLink } from 'components/elements'
import device from 'themes/device.js'
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'
import { localize, Localize } from 'components/localization'

const SignupContent = styled.div`
    width: 48.4rem;
    height: 55.5rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 4rem;
    background-color: var(--color-white);
    border-radius: 0.6rem;
    box-shadow: 0 1.6rem 2rem 0 rgba(0, 0, 0, 0.1);
`

const Line = styled.div`
    width: 130px;
    height: 1px;
    background-color: var(--color-grey-7);
    margin-top: 2.4rem;
`
const StyledText = styled(Text)`
    font-size: ${props => props.fontSize || 'var(--text-size-xs)'};

    @media ${device.tabletL} {
        width: 15rem;
    }
`
const NoteBox = styled.div`
    width: 100%;
    padding: 1.6rem 1.6rem;
    margin-top: 1.6rem;
    border-radius: 0.6rem;
    background-color: var(--color-grey-8);
    border: solid 1px var(--color-grey-17);
`
const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: 2.5rem 0;
`
const EmailButton = styled(Button)`
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    margin-top: 2.4rem;
`
const SignupWithContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: baseline;
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
    margin-right: 1.4rem;
    margin-left: 2.7rem;
    font-weight: 500;
    font-size: var(--text-size-xxs);
    color: var(--color-grey-13);
    vertical-align: super;

    @media ${device.tabletL} {
        display: none;
    }
`
const CheckboxSpan = styled.span`
    font-size: var(--text-size-xs);
`
const LoginLink = styled.a`
    font-size: var(--text-size-s);
    font-weight: bold;
    color: var(--color-red);
    text-decoration: none;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
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
    const [checkBoxState, setCheckBoxState] = useState(false)

    const handleChange = event => {
        setCheckBoxState(event.currentTarget.checked)
    }
    return (
        <SignupContent>
            <Header as="h4" weight="bold">
                {localize('Sign up')}
            </Header>
            <br />
            <Text>{localize('Enter your email address to begin')}</Text>
            <NoteBox>
                <StyledText fontSize="var(--text-size-xs)" color="grey-16" lh="1.14" align="center">
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
                    background="white"
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
            <label>
                <Checkbox onChange={handleChange} checked={checkBoxState} />
                <CheckboxSpan>
                    <Localize
                        fontSize="var(--text-size-xs)"
                        translate_text="I agree to the <0>Terms and Conditions</0>"
                        components={[
                            <StyledLink
                                size="var(--text-size-xs)"
                                weight="bold"
                                key={0}
                                target="_blank"
                                to="/terms-and-conditions/"
                            />,
                        ]}
                    />
                </CheckboxSpan>
            </label>
            <EmailButton
                checkBoxState={checkBoxState}
                type="submit"
                secondary
                disabled={is_submitting || !checkBoxState}
            >
                {localize('Create a free account')}
            </EmailButton>
            <SignupWithContainer>
                <Line />
                <StyledText color="grey-16" align="center" fontSize="var(--text-size-xxs)">
                    {localize('OR SIGN UP WITH ')}
                </StyledText>
                <Line />
            </SignupWithContainer>

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
                {localize('Already have an account? ')}
                <LoginLink weight="bold" onClick={handleLogin}>
                    {localize('Log in')}
                </LoginLink>
            </LoginText>
        </SignupContent>
    )
}

SignupDefault.propTypes = {
    autofocus: PropTypes.bool,
    clearEmail: PropTypes.func,
    email: PropTypes.string,
    email_error_msg: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleLogin: PropTypes.func,
    handleSocialSignup: PropTypes.func,
    handleValidation: PropTypes.func,
    is_submitting: PropTypes.bool,
}

export default SignupDefault
