import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/form'
import { Header, Text, Image } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { deriv_app_url } from 'common/utility'
import device from 'themes/device.js'
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'
import BackgroundPattern from 'images/common/bg_banner_signup.png'
import Chevron from 'images/svg/carousel-chevron.svg'

const ChevronRight = styled(Chevron)`
    transform: rotate(180deg);

    g {
        g {
            fill: var(--color-grey-8);
        }
    }
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 33.3rem;
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

    @media (max-width: 800px) {
        width: 100%;
    }
`

const BackgroundWrapper = styled(Flex)`
    width: 50%;
    background-image: url(${BackgroundPattern});
    clip-path: polygon(14rem 0, 100% 0%, 100% 100%, 0% 100%);

    @media (max-width: 800px) {
        display: none;
    }
`

const InputWrapper = styled.div`
    width: 28rem;
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
`
const SocialWrapper = styled(Flex)`
    width: 100%;
    margin-top: 1.8rem;
`
const SocialButton = styled(Button)`
    background-color: var(--color-white);
    border: solid 1px var(--color-grey-7);
    width: 6.4rem;
    height: 4rem;
    margin-right: 1.2rem;
`

const StyledHeader = styled(Header)`
    width: ${props => props.width || '48.6rem'};

    @media ${device.tablet} {
        width: auto;
    }
`
const StyledText = styled(Text)`
    width: auto;
    margin-right: 4rem;

    @media ${device.tablet} {
        width: auto;
    }
`
const ImageWrapper = styled(Flex)`
    position: relative;
    width: 41.1rem;
    left: -28%;
    z-index: 2;
    height: 100%;

    @media (max-width: 1350px) {
        width: 30rem;
    }
    @media (max-width: 800px) {
        display: none;
    }
`
const redirectToDerivApp = e => {
    e.preventDefault()
    window.open(deriv_app_url, '_blank')
}

const LinkFlex = styled(Flex)`
    margin-left: 16.5rem;

    &:hover {
        cursor: pointer;
    }
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
    return (
        <Wrapper>
            <div style={{ position: 'absolute', left: '50%', height: '100%' }}>
                <ImageWrapper ai="center">
                    <Image img_name="deriv-platform-banner.png" width="100%" />
                </ImageWrapper>
            </div>
            <SignupFormWrapper>
                <div>
                    <StyledHeader font_size="3.2rem">
                        {localize('Join over 1 million traders worldwide')}
                    </StyledHeader>
                    <br />
                    <StyledHeader as="h4" weight="500" font_size="2.6rem">
                        {localize('Sign up for your demo account now.')}
                    </StyledHeader>
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
                                labelFocusColor="grey-7"
                                label={localize('Email')}
                                placeholder={'example@mail.com'}
                                handleError={clearEmail}
                                onChange={handleInputChange}
                                onBlur={handleValidation}
                                autoFocus={autofocus}
                                autoComplete="off"
                                required
                                border="1px solid var(--color-grey-7)"
                                focusBorder="var(--color-grey-7)"
                            />
                        </InputWrapper>
                        <EmailButton type="submit" secondary disabled={is_submitting}>
                            {localize('Sign up')}
                        </EmailButton>
                    </InputGroup>
                    <SocialWrapper jc="unset" ai="center">
                        <StyledText>{localize('or sign up with')}</StyledText>
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
                        </SocialButton>
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
                        </SocialButton>
                    </SocialWrapper>
                </div>
            </SignupFormWrapper>
            <BackgroundWrapper direction="column" ai="center">
                <LinkFlex ai="center" onClick={redirectToDerivApp}>
                    <StyledHeader font_size="2.8rem" width="28.2rem" align="center" color="grey-8">
                        {localize('Get a taste of the Deriv experience')}
                    </StyledHeader>
                    <ChevronRight />
                </LinkFlex>
            </BackgroundWrapper>
        </Wrapper>
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
