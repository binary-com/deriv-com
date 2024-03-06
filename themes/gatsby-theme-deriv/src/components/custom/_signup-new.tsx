import React, { useState, CSSProperties } from 'react'
import styled from 'styled-components'
import AgreementLabel from './_agreement-label'
import Apple from 'images/svg/custom/apple-signup.svg'
import Facebook from 'images/svg/custom/fb-signup.svg'
import { Input, Button } from 'components/form'
import { Header, LinkText, LocalizedLinkText } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// SVG
import Google from 'images/svg/custom/google.svg'
import useBuildVariant from 'features/hooks/use-build-variant'

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
    bg_color?: string
}

const SignupContent = styled.div`
    width: 48.4rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 4rem;
    background-color: var(--color-white);
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    @media ${device.tablet} {
        width: auto;
        box-shadow: none;
        padding: 2rem;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 2rem;
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
const Line = styled.div`
    width: 30rem;
    height: 1px;
    background-color: var(--color-grey-7);
`
const SubTitle = styled(Header)`
    margin-top: 8px;
`
const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: 2.4rem 0 0.6rem;

    @media ${device.tabletL} {
        margin: 25px 0 16px 0;
    }
`
const EmailButton = styled(Button)<{ isChecked?: boolean }>`
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    margin-top: 3.2rem;
    border-radius: 16px;

    @media ${device.tabletL} {
        margin-top: 24px;
    }
`
const SocialButton = styled(Button)<SocialButtonProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    height: 4rem;
    background-color: ${(props) => props.bg_color || 'var(--color-white)'};
    border: solid 1px var(--color-grey-21);
    padding: 0.5rem 0;
    border-radius: 16px;

    &:hover {
        background-color: ${(props) => props.bg_color || 'var(--color-white)'};
    }
    @media ${device.tabletL} {
        height: 4.8rem;
    }
`
const SocialText = styled(Header)`
    width: auto;
    margin-right: 1.4rem;
    margin-left: 0.7rem;
    color: ${({ color }) => color || 'var(--color-black-9)'};
    @media ${device.tabletL} {
        margin-left: 2.7rem;
    }
`
const SocialWrapper = styled.div<CSSProperties>`
    width: 100%;
    margin-top: 2.4rem;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media ${device.tabletL} {
        gap: 8px;
    }
`
const LoginText = styled(Header)`
    text-align: center;
    align-self: center;
    margin-top: 2.6rem;

    @media ${device.tabletL} {
        margin-top: ${(props) => props.mt};
        margin-bottom: ${(props) => props.mb};
        font-size: 2rem;
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

const SignupNew = ({
    autofocus,
    clearEmail,
    email,
    email_error_msg,
    handleInputChange,
    handleLogin,
    handleSocialSignup,
    handleValidation,
    is_submitting,
}: SignupNewProps) => {
    const [is_checked, setChecked] = useState(false)
    const { region } = useBuildVariant()

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

    return (
        <SignupContent>
            <StyledHeader as="h4" type="sub-section-title" mb="0.8rem">
                <Localize translate_text="_t_Sign up_t_" />
            </StyledHeader>
            <SubTitle type="paragraph-1" as="p" weight="normal">
                <Localize translate_text="_t_Enter your email address to begin._t_" />
            </SubTitle>

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
            <Header as="p" type="small" weight="400" color="grey-5" mt="0.8rem">
                <Localize
                    translate_text="_t_By pressing “Create demo account”, you confirm that you are 18 or older. You understand that we may use your email address to send you information about Deriv products and services as well as market news. You can always unsubscribe from these emails in your account settings. For more information, please take a look at Deriv’s <0>Security and privacy.</0>_t_"
                    components={[
                        <StyledLocalizedLink
                            key={0}
                            to={`/tnc${region === "eu" ? '/eu' : ''}/security-and-privacy.pdf`}
                            size="1.2rem"
                            color="red"
                            rel="noopener noreferrer"
                            target="_blank"
                            external
                        />,
                    ]}
                />
            </Header>
            <SignupWithContainer>
                <Line />
                <Header color="grey-5" weight="normal" align="center" as="p" type="paragraph-2">
                    <Localize translate_text="_t_Or sign up with_t_" />
                </Header>
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
                    <img src={Google} alt={localize('_t_google_t_')} width="24" height="24" />
                    <SocialText type="paragraph-2" as="p" align="center">
                        Google
                    </SocialText>
                </SocialButton>
                <SocialButton
                    onClick={handleSocialSignup}
                    provider="facebook"
                    data-provider="facebook"
                    id="dm-signup-facebook"
                    type="button"
                    social
                    bg_color="var(--color-blue-15)"
                >
                    <img src={Facebook} alt={localize('_t_facebook_t_')} width="24" height="24" />
                    <SocialText type="paragraph-2" color="var(--color-white)" as="p" align="center">
                        Facebook
                    </SocialText>
                </SocialButton>
                <SocialButton
                    onClick={handleSocialSignup}
                    provider="apple"
                    data-provider="apple"
                    id="dm-signup-apple"
                    type="button"
                    social
                    bg_color="var(--color-black)"
                >
                    <img src={Apple} alt={localize('_t_apple_t_')} width="24" height="24" />
                    <SocialText type="paragraph-2" color="var(--color-white)" as="p" align="center">
                        Apple
                    </SocialText>
                </SocialButton>
            </SocialWrapper>
            <LoginText weight="normal" type="paragraph-1">
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

export default SignupNew
