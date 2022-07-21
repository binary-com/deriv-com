import React from 'react'
import styled from 'styled-components'
import ReCAPTCHA from 'react-google-recaptcha'
import AffiliateSignupLayout, { SignUpWrapper } from './components/_layout'
import { localize, WithIntl } from 'components/localization'
import { Input, Button } from 'components/form'
import { Header, LinkText, LocalizedLinkText } from 'components/elements'
import device from 'themes/device'
import Google from 'images/svg/custom/googlenew.svg'
import Apple from 'images/svg/custom/applenew.svg'
import Facebook from 'images/svg/custom/facebooknew-blue.svg'

const StyledNote = styled.div`
    padding: 8px 0;
    margin: 24px 0 16px;
    height: 36px;
    width: 406px;
    border-radius: 4px;
    background-color: #f8f8f9;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;

    @media ${device.mobileL} {
        height: 54px;
        padding: 8px 7px;
        width: 100%;
    }
`
const StyledLinkText = styled(LinkText)`
    margin-left: 3px;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
const InputGroup = styled.div`
    width: 100%;
    margin-bottom: 16px;
`
const EmailButton = styled(Button)`
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
const StyledText = styled(LinkText)`
    font-size: 14px;
    line-height: 20px;
    @media (min-width: 768px) {
        width: 14rem;
    }
    @media (min-width: 820px) and (max-width: 1200px) {
        width: 17rem;
    }
`
const LoginText = styled(LinkText)`
    text-align: center;
    align-self: center;
    margin-top: 1.6rem;

    @media ${device.tabletL} {
        font-size: 2rem;
    }
`
const Line = styled.div`
    width: 132px;
    height: 1px;
    background-color: var(--color-grey-7);
`
const SignupWithContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2.4rem;

    @media ${device.tabletL} {
        margin-top: 4rem;
    }
`
const LoginContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    margin-top: 2.4rem;
`
const CaptchaContainer = styled.div`
    margin: auto;
`
const SocialWrapper = styled.div`
    width: 100%;
    margin-top: 2.4rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
`
const GoogleWrapper = styled.div`
    padding-right: 24px;
`
const AppleWrapper = styled.div`
    padding-left: 24px;
`
const FacebookWrapper = styled.div``

const onChange = (value) => {
    console.log('Captcha value:', value)
}
type AffiliateSignupProps = {
    autofocus: boolean
    email: string
    email_error_msg: string
    is_submitting: boolean
}

const AffiliateSignup = ({ autofocus, email, email_error_msg }: AffiliateSignupProps) => {
    return (
        <AffiliateSignupLayout>
            <SignUpWrapper>
                <Header as="h3" type="heading-3" mb="0.8rem">
                    {localize('Sign up')}
                </Header>
                <Header as="p" type="subtitle-1" weight="normal">
                    {localize('Enter your email address to begin')}
                </Header>

                <StyledNote>
                    <Header as="p" type="paragraph-2" weight="normal" align="center" color="grey-5">
                        {localize('Want to sign up as a trader?')}
                        <LocalizedLinkText to="/signup">
                            <StyledLinkText id="dm-new-login-button" size="14px" color="grey-5">
                                {localize('Create a Deriv account')}
                            </StyledLinkText>
                        </LocalizedLinkText>
                    </Header>
                </StyledNote>

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
                        autoFocus={autofocus}
                        autoComplete="off"
                        required
                    />
                </InputGroup>
                <CaptchaContainer>
                    <ReCAPTCHA
                        sitekey="6Ld_EwIhAAAAAI8eRUeCN9RtKzn5oKsHKKwwPaXf"
                        onChange={onChange}
                    />
                </CaptchaContainer>
                <EmailButton type="submit" secondary="true" id="partner-signup">
                    {localize('Create partner account')}
                </EmailButton>
                <SignupWithContainer>
                    <Line />
                    <StyledText color="grey-5" align="center">
                        {localize('Or sign up with')}
                    </StyledText>
                    <Line />
                </SignupWithContainer>
                <SocialWrapper>
                    <GoogleWrapper id="google-signup">
                        <img src={Google} alt="google" width="40" height="40" />
                    </GoogleWrapper>
                    <FacebookWrapper id="facebook-signup">
                        <img src={Facebook} alt="facebook" width="40" height="40" />
                    </FacebookWrapper>
                    <AppleWrapper id="apple-signup">
                        <img src={Apple} alt="apple" width="40" height="40" />
                    </AppleWrapper>
                </SocialWrapper>
                <LoginContainer>
                    <LoginText mt="3.75rem">
                        {localize('Already have a Deriv or Binary.com affiliate account?')}
                    </LoginText>
                    <StyledText id="dm-new-login-button" align="center" size="16px" color="red">
                        {localize('Log in')}
                    </StyledText>
                </LoginContainer>
            </SignUpWrapper>
        </AffiliateSignupLayout>
    )
}

export default WithIntl()(AffiliateSignup)
