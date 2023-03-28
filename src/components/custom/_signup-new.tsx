import React, { useState, CSSProperties, useEffect } from 'react'
import styled from 'styled-components'
import AgreementLabel from './_agreement-label'
import { Input, Button } from 'components/form'
import { Header, LinkText, LocalizedLinkText, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import Login, { TSocialProvider } from 'common/login'
// SVG
import Apple from 'images/svg/custom/apple.svg'
import Facebook from 'images/svg/custom/facebook-blue.svg'
import Google from 'images/svg/custom/google.svg'
import useRegion from 'components/hooks/use-region'
import { isBrowser } from 'common/utility'

type SignupNewProps = {
    autofocus?: boolean
    clearEmail?: () => void
    email?: string
    email_error_msg?: string
    handleInputChange?: (event) => void
    handleLogin?: (event) => void
    handleValidation?: (event) => void
    is_ppc?: boolean
    is_submitting?: boolean
}

type SocialButtonProps = {
    bgColor?: string
    provider?: string
    id?: string
}

type StyledTextProps = {
    tabletFontSize?: string
}

type SocialLoginContent = {
    name: string
    provider: TSocialProvider
    id: string
    img: string
    url: string
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
const StyledText = styled(Text)<StyledTextProps>`
    @media (max-width: 340px) {
        width: 17rem;
    }
    @media ${device.tabletL} {
        font-size: ${(props) => props.tabletFontSize || 'var(--text-size-xxs)'};
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

const SocialButton = styled(LocalizedLink)<SocialButtonProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    background-color: ${(props) => props.bgColor || 'var(--color-white)'};
    border: solid 1px var(--color-grey-21);
    width: 12.5rem;
    height: 3.8rem;
    padding: 0.5rem 0;
    text-decoration: none;
    inline-size: 12.5rem;
    block-size: 3.8rem;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.25s ease 0s;
    font-weight: bold;

    &:hover {
        background: var(--color-grey-4);
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
    handleValidation,
    is_ppc,
    is_submitting,
}: SignupNewProps) => {
    const [is_checked, setChecked] = useState(false)
    const { is_eu } = useRegion()

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

    const [social_url, setSocialURL] = useState({ google: '', facebook: '', apple: '' })
    useEffect(() => {
        if (isBrowser()) {
            setSocialURL({
                google: Login.socialLoginUrl('google'),
                facebook: Login.socialLoginUrl('facebook'),
                apple: Login.socialLoginUrl('apple'),
            })
        }
    }, [isBrowser])

    const social_login_content: SocialLoginContent[] = [
        {
            name: 'Google',
            provider: 'google',
            id: 'dm-signup-google',
            img: Google,
            url: social_url.google,
        },
        {
            name: 'Facebook',
            provider: 'facebook',
            id: 'dm-signup-facebook',
            img: Facebook,
            url: social_url.facebook,
        },
        {
            name: 'Apple',
            provider: 'apple',
            id: 'dm-signup-apple',
            img: Apple,
            url: social_url.apple,
        },
    ]

    return (
        <SignupContent>
            <StyledHeader as="h4" type="sub-section-title" mb="0.8rem">
                {localize('Sign up')}
            </StyledHeader>
            <SubTitle>{localize('Enter your email address to begin')}</SubTitle>

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
                <Localize translate_text="By signing up for a Deriv account, you agree to receive occasional updates about our products, services, and events. You can unsubscribe at any time in your account settings." />
            </Header>
            <SignupWithContainer>
                <Line />
                <StyledText color="grey-5" align="center" tabletFontSize="12px">
                    {localize('Or sign up with')}
                </StyledText>
                <Line />
            </SignupWithContainer>

            <SocialWrapper gap="0" grid="2">
                {social_login_content.map(({ name, provider, id, img, url }) => (
                    <SocialButton
                        key={provider}
                        provider={provider}
                        data-provider={provider}
                        id={id}
                        external
                        to={url}
                    >
                        <img src={img} alt={provider} width="24" height="24" />
                        <SocialText>{name}</SocialText>
                    </SocialButton>
                ))}
            </SocialWrapper>
            <LoginText mt="3.75rem" mb={is_eu ? '100px' : '0'}>
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
