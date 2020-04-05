import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getLanguage } from 'common/utility'
import { Input, Button } from 'components/form'
import { FlexGridContainer } from 'components/containers'
import { Header, Text, LinkText, Checkbox } from 'components/elements'
import { localize, Localize } from 'components/localization'
import Login from 'common/login'
import device from 'themes/device.js'
// SVG
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'

const SignupContent = styled.div`
    width: 48.4rem;
    max-height: 55.5rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 4rem;
    background-color: var(--color-white);
    border-radius: 0.6rem;
    box-shadow: 0 1.6rem 2rem 0 rgba(0, 0, 0, 0.1);

    @media ${device.mobileL} {
        width: 100%;
    }
`

const Line = styled.div`
    width: 130px;
    height: 1px;
    background-color: var(--color-grey-7);
`
const StyledText = styled(Text)`
    @media ${(props) => device.tabletL && props.notedBox} {
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

    @media ${device.tabletS} {
        padding: 1rem 1rem;
    }
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
    align-items: center;
    margin-top: 2rem;
`

const SocialButton = styled(Button)`
    box-shadow: none;
    width: 48%;
    background-color: ${(props) => props.bgColor || 'var(--color-white)'};
    border: solid 1px var(--color-grey-7);

    &:hover {
        background: ${(props) => {
            if (props.provider === 'facebook') return 'var(--color-grey-4)'
        }};
    }
`

const SocialWrapper = styled(FlexGridContainer)`
    width: 100%;
    margin-top: var(--text-size-s);
`
const LoginText = styled(Text)`
    text-align: center;
    align-self: center;
    margin-top: 2.4rem;

    @media ${device.tabletL} {
        margin-bottom: 0;
    }
`
const Span = styled.span`
    margin-right: 1.4rem;
    margin-left: 0.7rem;
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

const SignupNew = ({
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

    const handleChange = (event) => {
        setCheckBoxState(event.currentTarget.checked)
    }
    const url =
        getLanguage() === 'en' || getLanguage() == null
            ? '/terms-and-conditions/'
            : `/${getLanguage()}/terms-and-conditions/`
    return (
        <SignupContent>
            <Header as="h4" mb="0.8rem">
                {localize('Sign up')}
            </Header>

            <Text>{localize('Enter your email address to begin')}</Text>
            <NoteBox>
                <StyledText
                    notedBox
                    size="var(--text-size-xs)"
                    color="grey-16"
                    lh="1.14"
                    align="center"
                >
                    <Localize
                        translate_text="Got a Binary.com account? Simply <0>log in</0> to Deriv.com with your Binary.com credentials"
                        components={[
                            <LinkText
                                weight="bold"
                                color="red"
                                size="var(--text-size-xs)"
                                onClick={() => Login.redirectToLogin()}
                                key={0}
                            />,
                        ]}
                    />
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
                        translate_text="I agree to the <0>terms and conditions</0>"
                        components={[
                            <LinkText
                                href={url}
                                target="_blank"
                                color="red"
                                rel="noopener noreferrer"
                                key={0}
                                size="var(--text-size-xs)"
                                weight="bold"
                            />,
                        ]}
                    />
                </CheckboxSpan>
            </label>
            <EmailButton
                checkBoxState={checkBoxState}
                type="submit"
                secondary="true"
                disabled={is_submitting || !checkBoxState}
            >
                {localize('Create demo account')}
            </EmailButton>
            <SignupWithContainer>
                <Line />
                <StyledText color="grey-5" align="center" size="var(--text-size-xs)">
                    {localize('Or sign up with ')}
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
                <LinkText color="red" weight="bold" onClick={handleLogin}>
                    {localize('Log in')}
                </LinkText>
            </LoginText>
        </SignupContent>
    )
}

SignupNew.propTypes = {
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

export default SignupNew
