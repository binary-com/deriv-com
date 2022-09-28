import React, { useState, CSSProperties } from 'react'
import styled from 'styled-components'
import AgreementLabel from './_agreement-label'
import { Input, Button } from 'components/form'
import { Header, LinkText, LocalizedLinkText, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { DerivStore } from 'store'
// SVG
import Apple from 'images/svg/custom/apple.svg'
import Facebook from 'images/svg/custom/facebook-blue.svg'
import BinaryLogo from 'images/svg/custom/binary-logo.svg'
import Google from 'images/svg/custom/google.svg'

type SignupNewProps = {
    autofocus?: boolean
    clearEmail?: () => void
    email?: string
    email_error_msg?: string
    handleInputChange?: (event) => void
    handleLogin?: (event) => void
    handleSocialSignup?: (event) => void
    handleValidation?: (event) => void
    is_ppc?: boolean
    is_submitting?: boolean
}

type SocialButtonProps = {
    bgColor?: string
}

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
const EmailButton = styled(Button)<{ isChecked?: boolean }>`
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    margin-top: 3.2rem;

    @media ${device.tabletL} {
        margin-top: 24px;
    }

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

const SocialButton = styled(Button)<SocialButtonProps>`
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
const SocialWrapper = styled.div<CSSProperties>`
    width: 100%;
    margin-top: 2.4rem;
    display: flex;
    justify-content: space-between;

    @media ${device.tabletL} {
        flex-direction: column;
        margin-top: 1rem;
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
        margin-top: ${(props) => props.mt};
        margin-bottom: ${(props) => props.mb};
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
const StyledLinkText = styled(LinkText)`
    font-size: ${(props) => props.size || '14px'};
`

const StyledLocalizedLink = styled(LocalizedLinkText)`
    @media ${device.tabletL} {
        font-size: 10px;
    }
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
}: SignupNewProps) => {
    const [is_checked, setChecked] = useState(false)
    const { is_eu_country } = React.useContext(DerivStore)

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

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
                    id="dm-email-input"
                    name="email"
                    type="text"
                    border="solid 1px var(--color-grey-7)"
                    label_color="grey-5"
                    label_hover_color="grey-5"
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
            <AgreementLabel isChecked={is_checked} handleChangeCheckbox={handleChange} />
            <EmailButton
                isChecked={is_checked}
                type="submit"
                secondary
                disabled={is_submitting || !is_checked || email_error_msg !== '' || !email}
                id="dm-new-signup"
            >
                {localize('Create demo account')}
            </EmailButton>
            <Header as="p" type="small" weight="400" color="grey-5" mt="0.8rem">
                <Localize
                    translate_text="By pressing “Create demo account”, you confirm that you are 18 or older. You understand that we may use your email address to send you information about Deriv products and services as well as market news. You can always unsubscribe from these emails in your account settings. For more information, please take a look at Deriv’s <0>Security and privacy</0>."
                    components={[
                        <StyledLocalizedLink
                            external
                            key={0}
                            to="/tnc/security-and-privacy.pdf"
                            size="1.2rem"
                            color="red"
                            rel="noopener noreferrer"
                            target="_blank"
                        />,
                    ]}
                />
            </Header>
            <SignupWithContainer>
                <Line />
                <StyledText color="grey-5" align="center" tabletFontSize="12px">
                    {localize('Or sign up with')}
                </StyledText>
                <Line />
            </SignupWithContainer>

            <SocialWrapper gap="0" grid="2">
                <SocialButton
                    onClick={handleSocialSignup}
                    provider="google"
                    data-provider="google"
                    id="dm-signup-google"
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
                    id="dm-signup-facebook"
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
                    id="dm-signup-apple"
                    type="button"
                    social
                >
                    <img src={Apple} alt="apple" width="24" height="24" />
                    <SocialText>Apple</SocialText>
                </SocialButton>
            </SocialWrapper>
            <LoginText mt="3.75rem" mb={is_eu_country ? '100px' : '0'}>
                {localize('Already have an account?')}
                <StyledLinkText
                    id="dm-new-login-button"
                    ml="0.4rem"
                    size="16px"
                    color="red"
                    onClick={handleLogin}
                >
                    {localize('Log in')}
                </StyledLinkText>
            </LoginText>
        </SignupContent>
    )
}

export default SignupNew
