import React, { useState } from 'react'
import styled from 'styled-components'
import AgreementLabel from './_agreement-label'
import { Input, Button } from 'components/form'
import { Header, LinkText, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// SVG
import Apple from 'images/svg/custom/apple-white.svg'
import Facebook from 'images/svg/custom/facebook-social-button.svg'
import Google from 'images/svg/custom/google.svg'
import useRegion from 'components/hooks/use-region'
import Logo from 'images/svg/ctrader/logo.svg'
import Watermark from 'images/svg/ctrader/watermark.svg'

type SignupCtraderProps = {
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
    margin-top: 8rem;
    width: 48.4rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 4rem;
    background-color: var(--color-white);
    border-radius: 0.6rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);

    @media ${device.tablet} {
        width: 53rem;
    }
    @media ${device.mobileL} {
        width: 100%;
        padding: 6rem 2rem;
    }
`
const StyledHeader = styled(Header)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    @media ${device.tabletL} {
        margin-bottom: 3rem;
    }
`

const SubTitle = styled(Text)`
    padding: 2rem 0;
`

const InputGroup = styled.div`
    position: relative;
    width: 100%;

    @media ${device.mobileL} {
        margin: 25px 0 16px 0;
    }
`

const StyledInput = styled(Input)`
    border-radius: 16px;
    block-size: 40px;
`

const EmailButton = styled(Button)<{ isChecked?: boolean }>`
    width: 100%;
    height: 40px;
    border-radius: 16px;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    margin-top: 2rem;

    @media ${device.tabletL} {
        margin-top: 24px;
    }

    @media ${device.mobileL} {
        font-size: 1.75rem;
    }
`

const SocialButton = styled(Button)<SocialButtonProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    background-color: ${(props) => props.bgColor || 'var(--color-white)'};
    border: solid 1px var(--color-grey-21);
    border-radius: 16px;
    width: 100%;
    height: 40px;
    margin: 3px 0;

    &:hover {
        background-color: ${(props) => props.bgColor || 'var(--color-white)'};
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
    font-weight: 700;
    font-size: 1.2rem;
    color: ${(props) => props.color || '#414652'};

    @media ${device.tabletL} {
        margin-left: 2.7rem;
        font-size: 14px;
    }
`
const StyledLinkText = styled(LinkText)`
    font-size: ${(props) => props.size || '14px'};
`

const SignupCtrader = ({
    autofocus,
    clearEmail,
    email,
    email_error_msg,
    handleInputChange,
    handleLogin,
    handleSocialSignup,
    handleValidation,
    is_submitting,
}: SignupCtraderProps) => {
    const [is_checked, setChecked] = useState(false)
    const { is_eu } = useRegion()

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

    return (
        <SignupContent>
            <StyledHeader as="h4" type="sub-section-title" mb="0.8rem">
                <img src={Logo} alt="ctrader" width="43" height="43" />
                <img src={Watermark} alt="deriv-ctrader" width="160" height="22" />
            </StyledHeader>
            <SubTitle>
                <Localize translate_text="_t_Enter your email address to begin_t_" />
            </SubTitle>
            <InputGroup>
                <StyledInput
                    id="dm-email-input"
                    name="email"
                    type="text"
                    border="solid 1.5px var(--color-grey-7)"
                    border_radius="18px"
                    label_color="grey-5"
                    label_hover_color="grey-5"
                    background="white"
                    error={email_error_msg}
                    value={email}
                    label={localize('_t_Email_t_')}
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
                <Localize translate_text="_t_Create demo account_t_" />
            </EmailButton>
            <Header as="p" type="small" weight="400" color="grey-5" mt="0.8rem" mb="2rem">
                <Localize translate_text="_t_By pressing “Create demo account”, you confirm that you are 18 or older. You understand that we may use your email address to send you information about Deriv products and services as well as market news. You can always unsubscribe from these emails in your account settings. For more information, please take a look at Deriv’s Security and privacy._t_" />
            </Header>
            <SocialButton
                onClick={handleSocialSignup}
                provider="google"
                data-provider="google"
                id="dm-signup-google"
                type="button"
                social
            >
                <img src={Google} alt="google" width="24" height="24" />
                <SocialText>
                    <Localize translate_text="_t_Sign up with Google_t_" />
                </SocialText>
            </SocialButton>
            <SocialButton
                onClick={handleSocialSignup}
                provider="facebook"
                data-provider="facebook"
                id="dm-signup-facebook"
                type="button"
                social
                bgColor="#1877F2"
            >
                <img src={Facebook} alt="facebook" width="24" height="24" />
                <SocialText color="#ffffff">
                    <Localize translate_text="_t_Sign up with Facebook_t_" />
                </SocialText>
            </SocialButton>
            <SocialButton
                onClick={handleSocialSignup}
                provider="apple"
                data-provider="apple"
                id="dm-signup-apple"
                type="button"
                social
                bgColor="#000000"
            >
                <img src={Apple} alt="apple" width="24" height="24" />
                <SocialText color="#ffffff">
                    <Localize translate_text="_t_Sign up with Apple_t_" />
                </SocialText>
            </SocialButton>
            <LoginText mt="3.75rem" mb={is_eu ? '100px' : '0'}>
                <Localize translate_text="_t_Already have an account?_t_" />
                <StyledLinkText
                    id="dm-new-login-button"
                    ml="0.4rem"
                    size="16px"
                    color="red"
                    onClick={handleLogin}
                >
                    <Localize translate_text="_t_Log in_t_" />
                </StyledLinkText>
            </LoginText>
        </SignupContent>
    )
}

export default SignupCtrader
