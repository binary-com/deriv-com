import React, { useState } from 'react'
import styled from 'styled-components'
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

type SignupPublicProps = {
    autofocus?: boolean
    clearEmail?: () => void
    email?: string
    email_error_msg?: string
    handleInputChange?: (event) => void
    handleLogin?: (event) => void
    handleSocialSignup?: (event) => void
    handleValidation?: (event) => void
    is_submitting?: boolean
}

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
    width: 100%;
    padding: 80px 0;
    position: static;
    background-color: var(--color-white);

    @media ${device.tabletL} {
        padding: 0 0 40px;
    }
`
const Wrapper = styled.div`
    border-radius: 8px;
    background: linear-gradient(241.92deg, #d74b56 12.96%, #d1632f 86.33%);
    background-repeat: round;
    position: relative;
    display: flex;
    flex-direction: row;
    min-height: 35.3rem;
    align-items: center;
    width: 100%;
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
    max-width: 600px;
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
    @media (max-width: 991px) {
        width: 100%;
        box-shadow: 0 16px 16px 0 rgba(14, 14, 14, 0.04), 0 0 16px 0 rgba(14, 14, 14, 0.04);
        background: white;
        padding-bottom: 30px;
        border-radius: 8px;
        position: relative;
        top: -10px;
        padding-left: 20px;

        & > div {
            width: auto;
        }
    }
`
const BackgroundWrapper = styled(Flex)`
    position: relative;
    min-height: 35.3rem;
    height: 100%;
    width: 50%;

    @media screen and (max-width: 1040px) and (min-width: 992px) {
        width: 47%;
        margin-left: 3%;
    }

    & > div {
        position: absolute;
        bottom: -5px;
        left: 0;
    }
`
const InputWrapper = styled.div`
    width: 245px;
    line-height: 10px;
    font-weight: normal;
    margin-right: 1rem;
    @media ${device.mobileL} {
        width: unset;
        max-width: 191px;
    }
`
const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
`
const EmailButton = styled(Button)<{ isChecked?: boolean }>`
    margin-left: 1rem;
    min-width: 125px;
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    font-weight: normal;
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
    margin-top: 4rem;
    flex-wrap: wrap;
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
    padding: 0;
    margin: 0 1rem;
    border: none;

    @media ${device.tabletL} {
        justify-content: center;
    }
`
const StyledHeader = styled(Header)`
    width: ${(props) => props.width || '41.4rem'};
    position: ${(props) => props.position || 'static'};
    @media ${device.tablet} {
        width: auto;
    }
    @media (max-width: 991px) {
        margin-top: 3rem;
    }
    @media (max-width: 991px) {
        max-width: 290px;
    }
`
const StyledFormWrapper = styled.div`
    background: white;
    max-width: 414px;
    padding: 20px 20px 30px;
    margin-left: 30px;
    border-radius: 8px;
    position: absolute;
    bottom: -50px;
    box-shadow: 0 16px 16px 0 rgba(14, 14, 14, 0.04), 0 0 16px 0 rgba(14, 14, 14, 0.04);

    h1 {
        @media (min-width: 991px) {
            line-height: 3.5rem;
        }
    }

    @media (min-width: 1600px) {
        min-width: 430px;
    }
`
const StyledHeaderText = styled(Text)`
    width: ${(props) => props.width || '41.4rem'};
    @media ${device.tablet} {
        width: auto;
    }
    @media (max-width: 991px) {
        margin-top: 1rem;
        font-size: 2rem;
        margin-bottom: 3rem;
    }
`
const SignInText = styled(Text)`
    display: block;
    width: auto;
    margin-right: 2rem;
    flex-basis: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333333;
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
    width: 100%;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
`
const DerivExperience = styled(LinkText)`
    display: flex;
    align-items: center;
    position: absolute;
    top: 41%;
    transform: translateY(-50%) !important;
    z-index: 99;
    right: 20px;
    max-width: 310px;

    &:hover {
        text-decoration: none;
    }

    @media ${device.mobileL} {
        width: unset;
        margin: 0 auto 0.8rem 0.8rem;
        max-width: 230px;
    }

    img {
        z-index: 10;
    }
    ${Header} {
        max-width: 35rem;
        z-index: 10;
        color: var(--color-white);
    }
`
const MobilePlatform = styled.div`
    width: 100%;
    max-width: 35.7rem;
    z-index: 10;

    @media screen and (max-width: 991px) {
        img {
            left: 20px !important;
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
}: SignupPublicProps) => {
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
                                        secondary
                                        disabled={
                                            is_submitting ||
                                            !is_checked ||
                                            email_error_msg !== '' ||
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
                                external
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
                                external
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
                                        secondary
                                        disabled={
                                            is_submitting ||
                                            !is_checked ||
                                            email_error_msg !== '' ||
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

export default SignupPublic
