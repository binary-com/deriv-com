import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import AgreementLabel from './_agreement-label'
import { Input, Button } from 'components/form'
import { Header, LinkText, QueryImage, Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex, Show, Box, Container } from 'components/containers'
import { deriv_app_url } from 'common/constants'
import { useCountryRule } from 'components/hooks/use-country-rule'
import device from 'themes/device'
// SVG
import Apple from 'images/svg/custom/apple-40.svg'
import Facebook from 'images/svg/custom/facebook-40.svg'
import Google from 'images/svg/custom/google-40.svg'
import Arrow from 'images/svg/custom/chevron-right.svg'
import {
    SizeMixin,
    MarginMixin,
    PaddingMixin,
    BorderMixin,
    BorderRadiusMixin,
    PositionMixin,
} from 'themes/mixins'

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "sign-up/banner-phone.png" }) {
            ...fadeIn
        }
        deriv_platform_eu: file(relativePath: { eq: "sign-up/banner-phone-eu.png" }) {
            ...fadeIn
        }
        deriv_platform_uk: file(relativePath: { eq: "sign-up/banner-phone-uk.png" }) {
            ...fadeIn
        }
    }
`
const StyledSectionContainer = styled(Box).attrs({ as: 'section' })`
    ${SizeMixin({ width: '100%' })}
    ${PaddingMixin({ all: '80px 0' })}
    position: static;
    background-color: var(--color-white);

    @media ${device.tabletL} {
        ${PaddingMixin({ all: '0 0 40px' })}
    }
`
const Wrapper = styled.div`
    ${BorderRadiusMixin({ all: '8px' })}
    background: linear-gradient(241.92deg, #d74b56 12.96%, #d1632f 86.33%);
    background-repeat: round;
    position: relative;
    display: flex;
    flex-direction: row;
    ${SizeMixin({ min_height: '35.3rem', width: '100%' })}
    align-items: center;
    ${BorderMixin({
        top: '1px solid rgba(151, 151, 151, 0.2)',
        bottom: '1px solid rgba(151, 151, 151, 0.2)',
    })}
    @media (max-width: 991px) {
        flex-direction: column;
        ${SizeMixin({ height: 'auto' })}
    }
`
const MobileWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${SizeMixin({ width: '100%', height: '600px' })}
`
const SignupFormWrapper = styled(Flex)`
    ${SizeMixin({ width: '50%' })}
    align-items: center;
    @media ${device.tablet} {
        ${PaddingMixin({ all: '0 2rem' })}
    }
    @media ${device.mobileM} {
        ${SizeMixin({ width: '100%' })}

        & > div {
            ${SizeMixin({ width: '100%' })}
        }
    }
`
const MobileSignupFormWrapper = styled(Flex)`
    ${SizeMixin({ width: '50%' })}
    align-items: center;
    ${PaddingMixin({ all: '0 2rem' })}
    @media (max-width: 991px) {
        position: relative;
        box-shadow: 0 16px 16px 0 rgba(14, 14, 14, 0.04), 0 0 16px 0 rgba(14, 14, 14, 0.04);
        background: white;
        ${SizeMixin({ width: '100%' })}
        ${PaddingMixin({})}
        ${PaddingMixin({ start: '20px', bottom: '30px' })}
        ${BorderRadiusMixin({ all: '8px' })}
        ${PositionMixin({ top: '-10px' })}

        & > div {
            ${SizeMixin({ width: 'auto' })}
        }
    }
`
const BackgroundWrapper = styled(Flex)`
    position: relative;
    ${SizeMixin({ width: '50%', height: '100%', min_height: '35.3rem' })}

    @media screen and (max-width: 1040px) and (min-width: 992px) {
        ${SizeMixin({ width: '47%' })}
        ${MarginMixin({ start: '3%' })}
    }

    & > div {
        position: absolute;
        ${PositionMixin({ bottom: '-5px', left: '0' })}
    }
`
const InputWrapper = styled.div`
    ${SizeMixin({ width: '245px' })}
    line-height: 10px;
    font-weight: normal;
    ${MarginMixin({ end: '1rem' })}
    @media ${device.mobileL} {
        ${SizeMixin({ width: 'unset', max_width: '191px' })}
    }
`
const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    ${SizeMixin({ width: '100%' })}
    ${MarginMixin({ top: '2.5rem', bottom: '1.5rem' })}
`
const EmailButton = styled(Button)`
    font-weight: normal;
    ${MarginMixin({ start: '1rem' })}
    ${SizeMixin({ height: '40px', min_width: '125px' })}
    ${PaddingMixin({ all: '10px' })}
    ${BorderRadiusMixin({ all: '4px' })}
    @media ${device.tabletL} {
        ${PaddingMixin({ all: '10px 16px' })}
        white-space: nowrap;
        ${SizeMixin({ width: 'auto', height: '40px', min_width: 'unset' })}
        ${MarginMixin({ start: '0' })}
    }
`
const SocialWrapper = styled(Flex)`
    flex-wrap: wrap;
    ${SizeMixin({ width: '100%' })}
    ${MarginMixin({ top: '4rem' })}
`
const MobileSocialWrapper = styled(SocialWrapper)`
    > div {
        justify-content: left;
    }

    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const SocialButton = styled(Button)`
    display: flex;
    ${PaddingMixin({ all: '0' })}
    ${MarginMixin({ all: '0 1rem' })}
    border: none;

    @media ${device.tabletL} {
        justify-content: center;
    }
`
const StyledHeader = styled(Header)`
    ${(props) => SizeMixin({ width: props.width || '41.4rem' })}
    position: ${(props) => props.position || 'static'};
    @media ${device.tablet} {
        ${SizeMixin({ width: 'auto' })}
    }
    @media (max-width: 991px) {
        ${MarginMixin({ start: '3rem' })}
    }
    @media (max-width: 991px) {
        ${SizeMixin({ max_height: '290px' })}
    }
`
const StyledFormWrapper = styled.div`
    position: absolute;
    background: white;
    box-shadow: 0 16px 16px 0 rgba(14, 14, 14, 0.04), 0 0 16px 0 rgba(14, 14, 14, 0.04);
    ${SizeMixin({ max_width: '414px' })}
    ${PaddingMixin({ all: '20px 20px 30px' })}
    ${MarginMixin({ start: '30px' })}
    ${BorderRadiusMixin({ all: '8px' })}
    ${PositionMixin({ bottom: '-50px' })}

    h1 {
        @media (min-width: 991px) {
            line-height: 3.5rem;
        }
    }

    @media (min-width: 1600px) {
        ${SizeMixin({ min_width: '430px' })}
    }
`
const StyledHeaderText = styled(Text)`
    ${(props) => SizeMixin({ width: props.width || '41.4rem' })}
    @media ${device.tablet} {
        ${SizeMixin({ min_width: 'auto' })}
    }
    @media (max-width: 991px) {
        font-size: 2rem;
        ${MarginMixin({ top: '1rem', bottom: '3rem' })}
    }
`
const SignInText = styled(Text)`
    display: block;
    ${SizeMixin({ width: 'auto' })}
    ${MarginMixin({ end: '2rem', bottom: '10px' })}
    flex-basis: 100%;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333333;
    @media ${device.tabletL} {
        ${SizeMixin({ width: '90px' })}
        ${MarginMixin({ end: '0' })}
    }
`

const MobileSignInText = styled(SignInText)`
    @media ${device.tabletL} {
        ${SizeMixin({ width: 'unset' })}
        ${MarginMixin({ all: '0 auto 0.8rem 0.8rem' })}
    }
`
const LinkFlex = styled(LinkText)`
    display: flex;
    align-items: center;

    &:hover {
        text-decoration: none;
    }
`
const MobileBackground = styled.div`
    background-image: linear-gradient(73deg, #ff6444, #ff444f);
    background-size: cover;
    background-repeat: no-repeat;
    ${SizeMixin({ width: '100%' })}
    flex-direction: column;
    align-items: center;
    position: relative;
    ${BorderRadiusMixin({ top_right: '10px', top_left: '10px', bottom_right: '10px' })}
`
const DerivExperience = styled(LinkText)`
    display: flex;
    align-items: center;
    position: absolute;
    transform: translateY(-50%) !important;
    z-index: 99;
    ${SizeMixin({ max_width: '310px' })}
    ${PositionMixin({ top: '41%', end: '30px' })}

    &:hover {
        text-decoration: none;
    }

    @media ${device.mobileL} {
        ${SizeMixin({ width: 'unset', max_width: '230px' })}
        ${MarginMixin({ all: '0 auto 0.8rem 0.8rem' })}
    }

    img {
        z-index: 10;
    }
    ${Header} {
        ${SizeMixin({ max_width: '35rem' })}
        z-index: 10;
        color: var(--color-white);
    }
`
const MobilePlatform = styled.div`
    ${SizeMixin({ width: '100%', max_width: '35.7rem' })}
    z-index: 10;

    @media screen and (max-width: 991px) {
        img {
            ${PositionMixin({ top: '20px !important' })}
        }
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
    const data = useStaticQuery(query)
    const { is_row, is_eu, is_uk } = useCountryRule()
    const [is_checked, setChecked] = useState(false)
    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }
    return (
        <StyledSectionContainer>
            <Show.Desktop>
                <Container>
                    <Wrapper>
                        <SignupFormWrapper>
                            <StyledFormWrapper>
                                <StyledHeader type="section-title" width="100%">
                                    {localize('Join over 1 million traders worldwide')}
                                </StyledHeader>
                                <br />
                                <StyledHeaderText weight="normal" size="1.6rem">
                                    {localize('Sign up for your demo account now.')}
                                </StyledHeaderText>
                                <InputGroup>
                                    <InputWrapper>
                                        <Input
                                            id="dm-email-input"
                                            name="email"
                                            type="text"
                                            error={email_error_msg}
                                            value={email}
                                            background="white"
                                            tablet_background="green-1"
                                            inputColor="grey-5"
                                            input_background="grey-8"
                                            label_focus_color="grey-7"
                                            label_color="black-3"
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
                                            height="40px"
                                            focus_border="var(--color-grey-7)"
                                        />
                                    </InputWrapper>
                                    <EmailButton
                                        isChecked={is_checked}
                                        id="dm-public-signup"
                                        type="submit"
                                        secondary="true"
                                        disabled={
                                            is_submitting ||
                                            !is_checked ||
                                            email_error_msg ||
                                            !email
                                        }
                                    >
                                        {localize('Sign up')}
                                    </EmailButton>
                                </InputGroup>
                                <AgreementLabel
                                    isChecked={is_checked}
                                    handleChangeCheckbox={handleChange}
                                />
                                <SocialWrapper jc="unset" ai="center">
                                    <SignInText>{localize('Or sign up with')}</SignInText>
                                    <SocialButton
                                        onClick={handleSocialSignup}
                                        provider="google"
                                        data-provider="google"
                                        id="gtm-signup-google"
                                        type="button"
                                        social
                                    >
                                        <img src={Google} alt="google" width="40" height="40" />
                                    </SocialButton>
                                    <SocialButton
                                        onClick={handleSocialSignup}
                                        provider="facebook"
                                        data-provider="facebook"
                                        id="gtm-signup-facebook"
                                        type="button"
                                        social
                                    >
                                        <img src={Facebook} alt="facebook" width="40" height="40" />
                                    </SocialButton>
                                    <SocialButton
                                        onClick={handleSocialSignup}
                                        provider="apple"
                                        data-provider="apple"
                                        id="gtm-signup-apple"
                                        type="button"
                                        social
                                    >
                                        <img src={Apple} alt="apple" width="40" height="40" />
                                    </SocialButton>
                                </SocialWrapper>
                            </StyledFormWrapper>
                        </SignupFormWrapper>
                        <BackgroundWrapper direction="row" ai="center">
                            <QueryImage
                                data={
                                    (is_row && data['deriv_platform']) ||
                                    (is_eu && data['deriv_platform_eu']) ||
                                    (is_uk && data['deriv_platform_uk'])
                                }
                                alt="DTrader platform black theme"
                                width="225px"
                            />
                            <LinkFlex
                                ai="center"
                                external="true"
                                href={deriv_app_url}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                <StyledHeader
                                    size="4rem"
                                    width="330px"
                                    align="left"
                                    color="grey-8"
                                    mr="1.2rem"
                                    ml="-4rem"
                                    position="relative"
                                >
                                    {localize('Get a taste of the Deriv experience')}
                                </StyledHeader>
                                <img src={Arrow} alt="arrow desktop" />
                            </LinkFlex>
                        </BackgroundWrapper>
                    </Wrapper>
                </Container>
            </Show.Desktop>
            <Show.Mobile>
                <Container>
                    <MobileWrapper>
                        <MobileBackground>
                            <MobilePlatform>
                                <QueryImage
                                    data={
                                        (is_row && data['deriv_platform']) ||
                                        (is_eu && data['deriv_platform_eu']) ||
                                        (is_uk && data['deriv_platform_uk'])
                                    }
                                    alt="DTrader platform black theme"
                                    width="100%"
                                />
                            </MobilePlatform>
                            <DerivExperience
                                external="true"
                                href={deriv_app_url}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                <Header size="4rem">
                                    {localize('Get a taste of the Deriv experience')}
                                </Header>
                                <img src={Arrow} alt="arrow mobile" width="32" height="33" />
                            </DerivExperience>
                        </MobileBackground>
                        <MobileSignupFormWrapper>
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
                                            tablet_background="green-1"
                                            inputColor="grey-5"
                                            input_background="grey-8"
                                            label_focus_color="grey-7"
                                            label_color="black-3"
                                            label={localize('Email')}
                                            placeholder={'example@mail.com'}
                                            handleError={clearEmail}
                                            onChange={handleInputChange}
                                            onBlur={handleValidation}
                                            autoFocus={autofocus}
                                            autoComplete="off"
                                            required
                                            border="unset"
                                            focus_border="var(--color-grey-7)"
                                        />
                                    </InputWrapper>
                                    <EmailButton
                                        isChecked={is_checked}
                                        id="dm-mobile-public-signup"
                                        type="submit"
                                        secondary="true"
                                        disabled={
                                            is_submitting ||
                                            !is_checked ||
                                            email_error_msg ||
                                            !email
                                        }
                                    >
                                        {localize('Sign up')}
                                    </EmailButton>
                                </InputGroup>
                                <AgreementLabel
                                    isChecked={is_checked}
                                    handleChangeCheckbox={handleChange}
                                />
                                <MobileSocialWrapper jc="unset" ai="center">
                                    <MobileSignInText>
                                        {localize('Or sign in with')}
                                    </MobileSignInText>
                                    <Flex>
                                        <SocialButton
                                            onClick={handleSocialSignup}
                                            provider="google"
                                            data-provider="google"
                                            id="gtm-signup-google"
                                            type="button"
                                            social
                                        >
                                            <img src={Google} alt="google" width="40" height="40" />
                                        </SocialButton>
                                        <SocialButton
                                            onClick={handleSocialSignup}
                                            provider="facebook"
                                            data-provider="facebook"
                                            id="gtm-signup-facebook"
                                            type="button"
                                            social
                                        >
                                            <img
                                                src={Facebook}
                                                alt="facebook"
                                                width="40"
                                                height="40"
                                            />
                                        </SocialButton>
                                        <SocialButton
                                            onClick={handleSocialSignup}
                                            provider="apple"
                                            data-provider="apple"
                                            id="gtm-signup-apple"
                                            type="button"
                                            social
                                        >
                                            <img src={Apple} alt="apple" width="40" height="40" />
                                        </SocialButton>
                                    </Flex>
                                </MobileSocialWrapper>
                            </div>
                        </MobileSignupFormWrapper>
                    </MobileWrapper>
                </Container>
            </Show.Mobile>
        </StyledSectionContainer>
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
