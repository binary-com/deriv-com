import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import AgreementLabel from './_agreement-label'
import Login, { TSocialProvider } from 'common/login'
import { Input, Button } from 'components/form'
import { Header, LinkText, QueryImage, Text, ImageWithDireciton } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { Flex, Box, Container, Desktop, Mobile } from 'components/containers'
import { deriv_app_url } from 'common/constants'
import device from 'themes/device'
// SVG
import Apple from 'images/svg/custom/apple.svg'
import Facebook from 'images/svg/custom/facebook-blue.svg'
import Google from 'images/svg/custom/google.svg'
import Arrow from 'images/svg/custom/chevron-right.svg'
import { useIsRtl } from 'components/hooks/use-isrtl'

type SocialButtonContent = {
    provider: string
    id: string
    img: string
    text: string
}

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
    }
`

const StyledSectionContainer = styled(Box)`
    width: 100%;
    padding-top: 80px;
    padding-bottom: 140px;
    position: static;
    background-color: var(--color-white);

    @media ${device.tabletL} {
        padding: 0 0 40px;
        margin-top: 40px;
    }
`
const Wrapper = styled.div`
    border-radius: 8px;
    background: var(--color-red);
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
    width: 42%;
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
    padding: 0 2.4rem;
    @media (max-width: 991px) {
        width: 100%;
        box-shadow: 0 16px 16px 0 rgba(14, 14, 14, 0.04), 0 0 16px 0 rgba(14, 14, 14, 0.04);
        background: white;
        padding-bottom: 30px;
        border-radius: 8px;
        position: relative;
        top: -10px;
    }
`
const MobileSignupContainer = styled(Flex)`
    flex-direction: column;
    padding: 0 6px;
`
const BackgroundWrapper = styled(Flex)`
    position: relative;
    min-height: 35.3rem;
    height: 100%;
    width: 50%;

    @media screen and (max-width: 1040px) and (min-width: 992px) {
        width: 47%;
        margin-left: 5%;
    }

    & > div {
        position: absolute;
        bottom: -5px;
        left: 0;
    }
`
const InputWrapper = styled.div`
    width: 232px;
    line-height: 10px;
    font-weight: normal;
    margin-right: 1rem;
    border-radius: 16px;
    @media ${device.tabletL} {
        width: 95%;
        border-radius: 4px;
        padding: 10px 0;
    }
`
const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 8px;

    @media ${device.tabletL} {
        flex-direction: column;
        margin-bottom: 20px;
    }
`
const EmailButton = styled(Button)<{ isChecked?: boolean }>`
    min-width: 125px;
    height: 40px;
    padding: 10px;
    border-radius: 16px;
    font-weight: normal;

    @media ${device.tabletL} {
        padding: 10px 16px;
        white-space: nowrap;
        margin-left: 0;
        height: 40px;
        width: 96%;
    }
`
const SocialWrapper = styled(Flex)`
    width: 100%;
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    height: 40%;
`
const MobileSocialWrapper = styled(SocialWrapper)`
    > div {
        justify-content: flex-start;
        gap: 6px;
    }

    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const SocialButton = styled(Button)`
    display: flex;
    padding: 0;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    width: 10.6rem;
    height: 4rem;
    background-color: white;
    border: 1px solid var(--color-grey-7);
    border-radius: 16px;
    gap: 10px;

    @media ${device.laptop} {
        justify-content: center;
        width: 33%;
        height: 6rem;
        margin: 0 0.6rem;
    }
`
const StyledHeader = styled(Header)<{ position?: string }>`
    position: ${(props) => props.position || 'static'};
    width: auto;

    @media ${device.tablet} {
        width: auto;
    }
    @media (max-width: 991px) {
        margin-top: 4rem;
    }
    @media (max-width: 991px) {
        max-width: 290px;
    }
`
const StyledFormWrapper = styled.div`
    background: white;
    max-width: 416px;
    padding: 40px;
    border-radius: 8px;
    margin-top: 3rem;
    top: 1rem;
    display: inline-block;
    position: absolute;
    height: fit-content;
    bottom: -50px;
    box-shadow: 0 16px 16px 0 rgba(14, 14, 14, 0.04), 0 0 16px 0 rgba(14, 14, 14, 0.04);

    h1 {
        @media (min-width: 991px) {
            line-height: 3.5rem;
        }
    }
`
const StyledHeaderText = styled(Text)`
    width: ${(props) => props.width || '41.4rem'};
    padding: 10px 0;

    @media ${device.tabletL} {
        width: auto;
        font-size: 2rem;
        padding: 10px 0 0 0;
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
    padding: 20px 0 0 0;
    @media ${device.tabletL} {
        width: 90px;
        margin-right: 0;
    }
`
const MobileSignInText = styled(SignInText)`
    @media ${device.tabletL} {
        width: unset;
        margin: 0 auto 0.8rem 0;
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
    background: var(--color-red);
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

    @media ${device.tabletL} {
        top: 50%;
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
const MobilePlatform = styled.div<{ is_rtl: boolean }>`
    width: 100%;
    max-width: 35.7rem;
    z-index: 10;

    @media screen and (max-width: 991px) {
        img {
            width: 85%;
            top: 28px;
            ${({ is_rtl }) =>
                is_rtl
                    ? css`
                          left: 0px !important;
                      `
                    : css`
                          left: 20px !important;
                      `}
        }
    }
`

const social_button_content: SocialButtonContent[] = [
    {
        provider: 'google',
        id: 'dm-signup-google',
        img: Google,
        text: 'Google',
    },
    {
        provider: 'facebook',
        id: 'dm-signup-facebook',
        img: Facebook,
        text: 'Facebook',
    },
    {
        provider: 'apple',
        id: 'dm-signup-apple',
        img: Apple,
        text: 'Apple',
    },
]

const SignupPublic = ({
    email_error_msg,
    email,
    clearEmail,
    handleInputChange,
    handleValidation,
    autofocus,
    is_submitting,
}: SignupPublicProps) => {
    const data = useStaticQuery(query)
    const [is_checked, setChecked] = useState(false)
    const is_rtl = useIsRtl()

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

    const handleSocialSignup = (e) => {
        e.preventDefault()

        const data_provider: TSocialProvider = e.currentTarget.getAttribute('data-provider')
        Login.initOneAll(data_provider)
    }

    return (
        <StyledSectionContainer>
            <Desktop>
                <Container>
                    <Wrapper>
                        <SignupFormWrapper>
                            <StyledFormWrapper>
                                <StyledHeader type="section-title" width="100%">
                                    <Localize translate_text="_t_Join over 2.5 million traders worldwide_t_" />
                                </StyledHeader>
                                <StyledHeaderText weight="normal" size="1.6rem">
                                    <Localize translate_text="_t_Sign up for your demo account now._t_" />
                                </StyledHeaderText>
                                <InputGroup>
                                    <InputWrapper>
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
                                            label={localize('_t_Email address_t_')}
                                            placeholder={'Email'}
                                            handleError={clearEmail}
                                            onChange={handleInputChange}
                                            onBlur={handleValidation}
                                            autoFocus={autofocus}
                                            autoComplete="off"
                                            required
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
                                        <Localize translate_text="_t_Sign up_t_" />
                                    </EmailButton>
                                </InputGroup>
                                <AgreementLabel
                                    isChecked={is_checked}
                                    handleChangeCheckbox={handleChange}
                                />
                                <SignInText>
                                    <Localize translate_text="_t_Or sign up with_t_" />
                                </SignInText>
                                <SocialWrapper jc="unset" ai="center">
                                    {social_button_content.map(({ provider, id, img, text }) => (
                                        <SocialButton
                                            key={provider}
                                            onClick={handleSocialSignup}
                                            provider={provider}
                                            data-provider={provider}
                                            id={id}
                                            type="button"
                                            social
                                        >
                                            <img src={img} alt={provider} width="24" height="24" />
                                            {text}
                                        </SocialButton>
                                    ))}
                                </SocialWrapper>
                            </StyledFormWrapper>
                        </SignupFormWrapper>
                        <BackgroundWrapper direction="row" ai="center">
                            <QueryImage
                                data={data['deriv_platform']}
                                alt={localize('_t_forex trading on mobile_t_')}
                                width="255px"
                            />
                            <LinkFlex
                                external
                                href={deriv_app_url}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                <StyledHeader
                                    size="48px"
                                    align="start"
                                    color="grey-8"
                                    mr="1.2rem"
                                    ml="6rem"
                                    position="relative"
                                >
                                    <Localize translate_text="_t_Get a taste of the Deriv experience_t_" />
                                </StyledHeader>
                                <ImageWithDireciton
                                    src={Arrow}
                                    alt={localize('_t_arrow desktop_t_')}
                                />
                            </LinkFlex>
                        </BackgroundWrapper>
                    </Wrapper>
                </Container>
            </Desktop>
            <Mobile>
                <Container>
                    <MobileWrapper>
                        <MobileBackground>
                            <MobilePlatform is_rtl={is_rtl}>
                                <QueryImage
                                    data={data['deriv_platform']}
                                    alt={localize('_t_forex trading on mobile_t_')}
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
                                    <Localize translate_text="_t_Get a taste of the Deriv experience_t_" />
                                </Header>
                                <ImageWithDireciton
                                    src={Arrow}
                                    alt={localize('_t_arrow mobile_t_')}
                                    width="32"
                                    height="33"
                                />
                            </DerivExperience>
                        </MobileBackground>
                        <MobileSignupFormWrapper>
                            <MobileSignupContainer>
                                <StyledHeader type="section-title">
                                    <Localize translate_text="_t_Join over 2.5 million traders worldwide_t_" />
                                </StyledHeader>
                                <StyledHeaderText weight="normal" size="1.6rem">
                                    <Localize translate_text="_t_Sign up for your demo account now._t_" />
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
                                            inputColor="black-3"
                                            input_background="grey-8"
                                            label_focus_color="grey-5"
                                            label_color="grey-5"
                                            labelSize="4px"
                                            labelTop="1.2rem"
                                            label={localize('_t_Email address_t_')}
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
                                        <Localize translate_text="_t_Sign up_t_" />
                                    </EmailButton>
                                </InputGroup>
                                <AgreementLabel
                                    isChecked={is_checked}
                                    handleChangeCheckbox={handleChange}
                                />
                                <MobileSocialWrapper jc="unset" ai="center">
                                    <MobileSignInText>
                                        <Localize translate_text="_t_Or sign up with_t_" />
                                    </MobileSignInText>
                                    <Flex>
                                        {social_button_content.map(({ provider, id, img }) => (
                                            <SocialButton
                                                key={provider}
                                                onClick={handleSocialSignup}
                                                provider={provider}
                                                data-provider={provider}
                                                id={id}
                                                type="button"
                                                social
                                            >
                                                <img
                                                    src={img}
                                                    alt={provider}
                                                    width="24"
                                                    height="24"
                                                />
                                            </SocialButton>
                                        ))}
                                    </Flex>
                                </MobileSocialWrapper>
                            </MobileSignupContainer>
                        </MobileSignupFormWrapper>
                    </MobileWrapper>
                </Container>
            </Mobile>
        </StyledSectionContainer>
    )
}

export default SignupPublic
