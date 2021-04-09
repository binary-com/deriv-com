import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/form'
import { Header, Text, LinkText, Checkbox } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device.js'
// SVG
import Apple from 'images/svg/apple.svg'
import Facebook from 'images/svg/facebook-blue.svg'
import BinaryLogo from 'images/svg/binary-logo.svg'
import Google from 'images/svg/google.svg'

const SignupContent = styled.div`
    width: 48.4rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 4rem;
    background-color: var(--color-white);
    border-radius: 0.6rem;
    box-shadow: 0 1.6rem 2rem 0 rgba(0, 0, 0, 0.1);

    @media ${device.tablet} {
        width: 53rem;
    }
    @media ${device.mobileL} {
        width: 100%;
        padding: 6rem 2rem;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 3rem;
        margin-bottom: 3rem;
    }
`

const SubTitle = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`
const Line = styled.div`
    width: 130px;
    height: 1px;
    background-color: var(--color-grey-7);
`
const StyledText = styled(Text)`
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
const NoteBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 7.7rem;
    padding: 8px 8px;
    margin-top: 1.6rem;
    border-radius: 0.4rem;
    background-color: rgba(242, 243, 244, 0.56);

    @media ${device.mobileL} {
        min-height: 80px;
        padding: 13px 16px;
    }
`
const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: 2.5rem 0 0.6rem;

    @media ${device.mobileL} {
        margin: 25px 0 16px 0;
    }
`
const EmailButton = styled(Button)`
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    margin-top: 3.2rem;

    @media ${device.mobileL} {
        font-size: 1.75rem;
    }
`
const SignupWithContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    margin-top: 2.4rem;

    @media ${device.tabletL} {
        margin-top: 4rem;
    }
`

const SocialButton = styled(Button)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    background-color: ${(props) => props.bgColor || 'var(--color-white)'};
    border: solid 1px var(--color-grey-21);
    width: 12.5rem;
    height: 3.8rem;
    padding: 0.5rem 0;

    &:hover {
        background: ${(props) => {
            if (props.provider === 'facebook') return 'var(--color-grey-4)'
        }};
    }

    @media ${device.tabletL} {
        width: 100%;
        height: 6rem;
        margin-top: 1rem;
    }
    @media ${device.mobileM} {
        &:first-child {
            margin-right: 1.2rem;
        }
    }
`

const SocialWrapper = styled.div`
    width: 100%;
    margin-top: 2.4rem;
    display: flex;
    justify-content: space-between;

    @media ${device.tabletL} {
        flex-direction: column;
        margin-top: 1rem;
    }
    @media ${device.mobile} {
        justify-content: space-around;
    }
    @media ${device.mobileS} {
        justify-content: space-between;
    }
`
const LoginText = styled(Text)`
    text-align: center;
    align-self: center;
    margin-top: 1.6rem;

    @media ${device.tabletL} {
        margin-bottom: 0;
        margin-top: 3.75rem;
    }
    @media ${device.tabletL} {
        font-size: 2rem;
    }
`
const SocialText = styled(Text)`
    margin-right: 1.4rem;
    margin-left: 0.7rem;
    font-weight: 500;
    font-size: 1.2rem;
    color: var(--color-grey-16);

    @media ${device.tabletL} {
        margin-left: 2.7rem;
        font-size: 14px;
    }
`
const CheckboxSpan = styled.span`
    font-size: var(--text-size-xs);

    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`
const StyledLinkText = styled(LinkText)`
    font-size: ${(props) => props.size || '14px'};
`
const StyledBinaryLogo = styled.img`
    height: 42px;
    width: 43px;
    margin-right: 8px;
    margin-top: 1rem;

    @media ${device.mobileL} {
        margin-top: 8px;
        height: 40px;
        width: 40px;
    }
`
const SignupNew = ({
    autofocus,
    clearEmail,
    email,
    email_error_msg,
    handleInputChange,
    handleLogin,
    handleSocialSignup,
    handleValidation,
    is_ppc,
    is_submitting,
}) => {
    const [checkBoxState, setCheckBoxState] = useState(false)
    const [language_code, setLanguageCode] = useState('en')

    useEffect(() => {
        setLanguageCode(localStorage.getItem('i18n'))
    }, [])

    const handleChange = (event) => {
        setCheckBoxState(event.currentTarget.checked)
    }

    const url = `/${language_code}/terms-and-conditions/`

    return (
        <SignupContent>
            <StyledHeader as="h4" type="sub-section-title" mb="0.8rem">
                {localize('Sign up')}
            </StyledHeader>
            <SubTitle>{localize('Enter your email address to begin')}</SubTitle>

            {!is_ppc && (
                <NoteBox>
                    <StyledBinaryLogo src={BinaryLogo} alt="binarylogo" />
                    <div>
                        <StyledText
                            mb="0.4rem"
                            notedBox
                            color="grey-16"
                            size="var(--text-size-xs)"
                            tabletFontSize="12px"
                        >
                            <Localize
                                translate_text="Got a <0>Binary.com</0> account?"
                                components={[<strong key={0} />]}
                            />
                        </StyledText>
                        <StyledText
                            notedBox
                            size="var(--text-size-xxs)"
                            tabletFontSize="12px"
                            color="grey-16"
                            lh="18px"
                        >
                            <Localize
                                translate_text="Log in to <0>Deriv.com</0> with your <0>Binary.com</0> username and password."
                                components={[<strong key={0} />]}
                            />
                        </StyledText>
                    </div>
                </NoteBox>
            )}

            <InputGroup>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    border="solid 1px var(--color-grey-7)"
                    labelColor="grey-5"
                    labelHoverColor="grey-5"
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
                <Checkbox
                    id="signup_agree_tnc"
                    secondary
                    onChange={handleChange}
                    checked={checkBoxState}
                />
                <CheckboxSpan>
                    <Localize
                        fontSize="var(--text-size-xs)"
                        translate_text="I agree to the <0>terms and conditions</0>"
                        components={[
                            <StyledLinkText
                                href={url}
                                target="_blank"
                                color="red"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                        ]}
                    />
                </CheckboxSpan>
            </label>
            <EmailButton
                checkBoxState={checkBoxState}
                type="submit"
                secondary="true"
                disabled={is_submitting || !checkBoxState || email_error_msg}
                id="gtm-signup-email"
            >
                {localize('Create demo account')}
            </EmailButton>
            <SignupWithContainer>
                <Line />
                <StyledText color="grey-5" align="center" tabletFontSize="12px">
                    {localize('Or sign up with')}
                </StyledText>
                <Line />
            </SignupWithContainer>

            <SocialWrapper justify="space-between" gap="0" grid="2">
                <SocialButton
                    onClick={handleSocialSignup}
                    provider="google"
                    data-provider="google"
                    id="gtm-signup-google"
                    type="button"
                    social
                >
                    <img src={Google} alt="google" width="24" height="24" />
                    <SocialText>Google</SocialText>
                </SocialButton>
                <SocialButton
                    onClick={handleSocialSignup}
                    provider="facebook"
                    data-provider="facebook"
                    id="gtm-signup-facebook"
                    type="button"
                    social
                >
                    <img src={Facebook} alt="facebook" width="24" height="24" />
                    <SocialText>Facebook</SocialText>
                </SocialButton>
                <SocialButton
                    onClick={handleSocialSignup}
                    provider="apple"
                    data-provider="apple"
                    id="gtm-signup-apple"
                    type="button"
                    social
                >
                    <img src={Apple} alt="apple" width="24" height="24" />
                    <SocialText>Apple</SocialText>
                </SocialButton>
            </SocialWrapper>
            <LoginText>
                {localize('Already have an account?')}
                <StyledLinkText ml="0.4rem" size="16px" color="red" onClick={handleLogin}>
                    {localize('Log in')}
                </StyledLinkText>
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
    is_ppc: PropTypes.bool,
    is_submitting: PropTypes.bool,
}

export default SignupNew
