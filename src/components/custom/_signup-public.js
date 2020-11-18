import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Input, Button } from 'components/form'
import { Header, Text, QueryImage, LinkText } from 'components/elements'
import { localize } from 'components/localization'
import { Flex, Show } from 'components/containers'
import { deriv_app_url } from 'common/utility'
import device from 'themes/device.js'
// SVG
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
    @media ${device.mobileM} {
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
    margin-left: 2rem;
    height: 4rem;
    @media ${device.tabletL} {
        width: auto;
        font-size: 1.4rem;
        margin-left: 0;
        height: 5rem;
        min-width: 15rem;
    }
`
const SocialWrapper = styled(Flex)`
    width: 100%;
    margin-top: 1.8rem;
    @media ${device.tabletL} {
        button {
            width: 14.25rem;
        }
    }
`
const SocialButton = styled(Button)`
    width: 56px;
    justify-content: center;
    display: flex;
    background-color: var(--color-white);
    border: solid 1px var(--color-grey-7);
    height: 4rem;
    margin: 0 0.8rem;
    @media ${device.tabletL} {
        justify-content: center;
        align-items: center;
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
const StyledText = styled(Text)`
    width: auto;
    margin-right: 2rem;
    @media ${device.tabletL} {
        width: max-content-fit;
        margin-right: 1rem;
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
                            <StyledHeader size="3.2rem">
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
                                        inputColor="var(grey-5)"
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
                            <SocialWrapper jc="unset" ai="center">
                                <StyledText>{localize('or sign up with')}</StyledText>
                                <SocialButton
                                    onClick={handleSocialSignup}
                                    provider="facebook"
                                    data-provider="facebook"
                                    id="gtm-signup-facebook"
                                    type="button"
                                    social
                                >
                                    <span>
                                        <img src={Facebook} alt="facebook" width="12" height="22" />
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
                                        <img src={Google} alt="google" width="22" height="23" />
                                    </span>
                                </SocialButton>
                            </SocialWrapper>
                        </div>
                    </SignupFormWrapper>
                    <BackgroundWrapper direction="column" ai="center">
                        <LinkFlex ai="center" external="true" href={deriv_app_url} target="_blank">
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
                            <StyledHeader size="3.2rem">
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
                                        inputColor="var(grey-5)"
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
                            <SocialWrapper jc="unset" ai="center">
                                <StyledText>{localize('or sign up with')}</StyledText>
                                <SocialButton
                                    onClick={handleSocialSignup}
                                    provider="facebook"
                                    data-provider="facebook"
                                    id="gtm-signup-facebook"
                                    type="button"
                                    social
                                >
                                    <span>
                                        <img src={Facebook} alt="facebook" width="12" height="22" />
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
                                        <img src={Google} alt="google" width="22" height="23" />
                                    </span>
                                </SocialButton>
                            </SocialWrapper>
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
