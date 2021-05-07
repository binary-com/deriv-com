import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Input, Button } from 'components/form'
import { Header, Text, QueryImage, LinkText } from 'components/elements'
import { localize } from 'components/localization'
import { Flex, Show } from 'components/containers'
import { deriv_app_url } from 'common/constants'
import device from 'themes/device.js'
// SVG
import Apple from 'images/svg/apple.svg'
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'
import Arrow from 'images/svg/chevron-right.svg'
import BackgroundPattern from 'images/common/bg_banner_signup.png'
import RedBanner from 'images/svg/bg_banner_signup_mobile.svg'

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "deriv-platform-banner.png" }) {
            ...fadeIn
        }
    }
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    min-height: 35.3rem;
    align-items: center;
    width: 100%;
    overflow: hidden;
    border-top: 1px solid rgba(151, 151, 151, 0.2);
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);
    @media (max-width: 991px) {
        flex-direction: column;
        height: auto;
    }
`

const MobileWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    border-top: 1px solid rgba(151, 151, 151, 0.2);
`

const SignupFormWrapper = styled(Flex)`
    width: 50%;
    align-items: center;
    @media ${device.tablet} {
        padding: 0 2rem;
    }
    @media ${device.mobileM} {
        width: 100%;

        & > div {
            width: 100%;
        }
    }
`

const MobileSignupFormWrapper = styled(Flex)`
    width: 50%;
    align-items: center;
    padding: 0 2rem;
    @media ${device.mobileL} {
        width: 100%;

        & > div {
            width: 100%;
        }
    }
`

const BackgroundWrapper = styled(Flex)`
    min-height: 35.3rem;
    height: 100%;
    width: 50%;
    background-image: url(${BackgroundPattern});
    clip-path: polygon(14rem 0, 100% 0%, 100% 100%, 0% 100%);
`

const InputWrapper = styled.div`
    width: 28rem;
    @media ${device.tabletL} {
        margin-right: 1rem;
    }
`
const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 3.5rem;
`
const EmailButton = styled(Button)`
    margin-left: 1rem;
    min-width: 105px;
    height: 40px;
    padding: 10px 28px;
    border-radius: 4px;
    @media ${device.tabletL} {
        padding: 10px 16px;
        white-space: nowrap;
        min-width: unset;
        margin-left: 0;
        height: 40px;
        width: auto;
    }
`
const SocialWrapper = styled(Flex)`
    width: 100%;
    margin-top: 1.8rem;
`

const MobileSocialWrapper = styled(SocialWrapper)`
    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const SocialButton = styled(Button)`
    width: 70px;
    padding: 7px 24px;
    border-radius: 4px;
    justify-content: center;
    display: flex;
    background-color: var(--color-white);
    border: solid 1px var(--color-grey-7);
    height: 4rem;
    margin: 0 0.8rem;
    @media ${device.tabletL} {
        width: 114px;
        height: 48px;
        padding: 14px 15px 14px 13px;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 500px) {
        width: 100%;
        height: 40px;
        padding: 14px 15px 12px 13px;
    }
`

const StyledHeader = styled(Header)`
    width: ${(props) => props.width || '41.4rem'};
    @media ${device.tablet} {
        width: auto;
    }
    @media (max-width: 991px) {
        margin-top: 2rem;
    }
`

const StyledHeaderText = styled(Text)`
    width: ${(props) => props.width || '41.4rem'};
    font-size: var(--text-size-m);
    @media ${device.tablet} {
        width: auto;
    }
    @media (max-width: 991px) {
        margin-top: 0;
        font-size: 2rem;
    }
`
const SignInText = styled(Text)`
    width: auto;
    margin-right: 2rem;
    @media ${device.tabletL} {
        width: 90px;
        margin-right: 0;
    }
`

const MobileSignInText = styled(SignInText)`
    @media ${device.tabletL} {
        width: unset;
        margin: 0 auto 0.8rem 0.8rem;
    }
`

const ImageWrapper = styled(Flex)`
    position: relative;
    width: 41.1rem;
    left: -28%;
    z-index: 2;
    height: 100%;

    div {
        width: 100%;
    }
    @media (max-width: 1350px) {
        width: 25rem;
    }
`
const redirectToDerivApp = (e) => {
    e.preventDefault()
    window.open(deriv_app_url, '_blank')
}

const LinkFlex = styled(LinkText)`
    display: flex;
    align-items: center;
    margin-left: 16.5rem;
`
const MobileBackground = styled.div`
    width: 100%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 4rem;
`

const DerivExperience = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4rem;

    img {
        z-index: 10;
    }
    ${Header} {
        max-width: 25rem;
        z-index: 10;
        color: var(--color-white);
    }
`
const MobileRedBanner = styled.div`
    position: absolute;
    width: 100%;
    bottom: -2px;
    max-height: 100%;
    overflow: hidden;
`
const MobilePlatform = styled.div`
    width: 100%;
    max-width: 35.7rem;
    z-index: 10;
`
const SignupPublic = ({
    email_error_msg,
    email,
    clearEmail,
    handleInputChange,
    handleValidation,
    autofocus,
    handleSocialSignup,
    is_submitting,
}) => {
    const data = useStaticQuery(query)
    return (
        <>
            <Show.Desktop>
                <Wrapper>
                    <div style={{ position: 'absolute', left: '50%', height: '100%' }}>
                        <ImageWrapper ai="center">
                            <QueryImage
                                data={data['deriv_platform']}
                                alt="deriv platform"
                                width="100%"
                            />
                        </ImageWrapper>
                    </div>
                    <SignupFormWrapper>
                        <div>
                            <StyledHeader type="section-title">
                                {localize('Join over 1 million traders worldwide')}
                            </StyledHeader>
                            <br />
                            <StyledHeaderText weight="normal" size="1.6rem">
                                {localize('Sign up for your demo account now.')}
                            </StyledHeaderText>
                            <InputGroup>
                                <InputWrapper>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="text"
                                        error={email_error_msg}
                                        value={email}
                                        background="white"
                                        tabletBackground="green-1"
                                        inputColor="grey-5"
                                        inputBackground="grey-8"
                                        labelFocusColor="grey-7"
                                        labelColor="black-3"
                                        labelSize="16px"
                                        labelTop="1.2rem"
                                        label={localize('Email')}
                                        placeholder={'example@mail.com'}
                                        handleError={clearEmail}
                                        onChange={handleInputChange}
                                        onBlur={handleValidation}
                                        autoFocus={autofocus}
                                        autoComplete="off"
                                        required
                                        border="unset"
                                        height="40px"
                                        focusBorder="var(--color-grey-7)"
                                    />
                                </InputWrapper>
                                <EmailButton
                                    id="gtm-signup-email"
                                    type="submit"
                                    secondary="true"
                                    disabled={is_submitting}
                                >
                                    {localize('Sign up')}
                                </EmailButton>
                            </InputGroup>
                            <SocialWrapper jc="unset" ai="center">
                                <SignInText>{localize('Or sign in with')}</SignInText>
                                <SocialButton
                                    onClick={handleSocialSignup}
                                    provider="facebook"
                                    data-provider="facebook"
                                    id="gtm-signup-facebook"
                                    type="button"
                                    social
                                >
                                    <span>
                                        <img src={Facebook} alt="facebook" width="24" height="24" />
                                    </span>
                                </SocialButton>
                                <SocialButton
                                    onClick={handleSocialSignup}
                                    provider="google"
                                    data-provider="google"
                                    id="gtm-signup-google"
                                    type="button"
                                    social
                                >
                                    <span>
                                        <img src={Google} alt="google" width="24" height="24" />
                                    </span>
                                </SocialButton>
                                <SocialButton
                                    onClick={handleSocialSignup}
                                    provider="apple"
                                    data-provider="apple"
                                    id="gtm-signup-apple"
                                    type="button"
                                    social
                                >
                                    <span>
                                        <img src={Apple} alt="apple" width="24" height="24" />
                                    </span>
                                </SocialButton>
                            </SocialWrapper>
                        </div>
                    </SignupFormWrapper>
                    <BackgroundWrapper direction="column" ai="center">
                        <LinkFlex
                            ai="center"
                            external="true"
                            href={deriv_app_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <StyledHeader
                                size="2.8rem"
                                max_width="28.2rem"
                                align="center"
                                color="grey-8"
                                mr="1.2rem"
                            >
                                {localize('Get a taste of the Deriv experience')}
                            </StyledHeader>
                            <img src={Arrow} alt="arrow desktop" />
                        </LinkFlex>
                    </BackgroundWrapper>
                </Wrapper>
            </Show.Desktop>
            <Show.Mobile>
                <MobileWrapper>
                    <MobileSignupFormWrapper>
                        <div>
                            <StyledHeader type="section-title">
                                {localize('Join over 1 million traders worldwide')}
                            </StyledHeader>
                            <br />
                            <StyledHeaderText weight="bold" size="1.6rem">
                                {localize('Sign up for your demo account now.')}
                            </StyledHeaderText>
                            <InputGroup>
                                <InputWrapper>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="text"
                                        error={email_error_msg}
                                        value={email}
                                        background="white"
                                        tabletBackground="green-1"
                                        inputColor="grey-5"
                                        inputBackground="grey-8"
                                        labelFocusColor="grey-7"
                                        labelColor="black-3"
                                        label={localize('Email')}
                                        placeholder={'example@mail.com'}
                                        handleError={clearEmail}
                                        onChange={handleInputChange}
                                        onBlur={handleValidation}
                                        autoFocus={autofocus}
                                        autoComplete="off"
                                        required
                                        border="unset"
                                        focusBorder="var(--color-grey-7)"
                                    />
                                </InputWrapper>
                                <EmailButton
                                    id="gtm-signup-email"
                                    type="submit"
                                    secondary="true"
                                    disabled={is_submitting}
                                >
                                    {localize('Sign up')}
                                </EmailButton>
                            </InputGroup>
                            <MobileSocialWrapper jc="unset" ai="center">
                                <MobileSignInText>{localize('Or sign in with')}</MobileSignInText>
                                <Flex>
                                    <SocialButton
                                        onClick={handleSocialSignup}
                                        provider="google"
                                        data-provider="google"
                                        id="gtm-signup-google"
                                        type="button"
                                        social
                                    >
                                        <span>
                                            <img src={Google} alt="google" width="24" height="24" />
                                        </span>
                                    </SocialButton>
                                    <SocialButton
                                        onClick={handleSocialSignup}
                                        provider="facebook"
                                        data-provider="facebook"
                                        id="gtm-signup-facebook"
                                        type="button"
                                        social
                                    >
                                        <span>
                                            <img
                                                src={Facebook}
                                                alt="facebook"
                                                width="24"
                                                height="24"
                                            />
                                        </span>
                                    </SocialButton>
                                    <SocialButton
                                        onClick={handleSocialSignup}
                                        provider="apple"
                                        data-provider="apple"
                                        id="gtm-signup-apple"
                                        type="button"
                                        social
                                    >
                                        <span>
                                            <img src={Apple} alt="apple" width="24" height="24" />
                                        </span>
                                    </SocialButton>
                                </Flex>
                            </MobileSocialWrapper>
                        </div>
                    </MobileSignupFormWrapper>
                    <MobileBackground>
                        <MobilePlatform>
                            <QueryImage
                                data={data['deriv_platform']}
                                alt="deriv platform"
                                width="100%"
                            />
                        </MobilePlatform>
                        <MobileRedBanner>
                            <img src={RedBanner} alt="redbanner" width="100%" height="248" />
                        </MobileRedBanner>
                        <DerivExperience onClick={redirectToDerivApp}>
                            <Header size="3rem">
                                {localize('Get a taste of the Deriv experience')}
                            </Header>
                            <img src={Arrow} alt="arrow mobile" width="32" height="33" />
                        </DerivExperience>
                    </MobileBackground>
                </MobileWrapper>
            </Show.Mobile>
        </>
    )
}

SignupPublic.propTypes = {
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

export default SignupPublic
