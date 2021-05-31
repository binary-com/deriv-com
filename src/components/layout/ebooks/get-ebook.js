import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { graphql, useStaticQuery } from 'gatsby'
import { Input, Button } from 'components/form'
import { Text } from 'components/elements' //QueryImage, LinkText
import { localize } from 'components/localization'
import { Flex } from 'components/containers' //Show
import AgreementLabel from 'components/custom/_agreement-label'
// import { deriv_app_url } from 'common/constants'
import device from 'themes/device.js'
// SVG
import Apple from 'images/svg/apple.svg'
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'
// import Arrow from 'images/svg/chevron-right.svg'
// import BackgroundPattern from 'images/common/bg_banner_signup.png'
// import RedBanner from 'images/svg/bg_banner_signup_mobile.svg'

const SignupFormWrapper = styled(Flex)`
    width: 50%;
    align-items: center;
    justify-content: initial;
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

// const StyledHeader = styled(Header)`
//     width: ${(props) => props.width || '41.4rem'};
//     @media ${device.tablet} {
//         width: auto;
//     }
//     @media (max-width: 991px) {
//         margin-top: 2rem;
//     }
// `

// const StyledHeaderText = styled(Text)`
//     width: ${(props) => props.width || '41.4rem'};
//     font-size: var(--text-size-m);
//     @media ${device.tablet} {
//         width: auto;
//     }
//     @media (max-width: 991px) {
//         margin-top: 0;
//         font-size: 2rem;
//     }
// `
// const SignInText = styled(Text)`
//     width: auto;
//     margin-right: 2rem;
//     @media ${device.tabletL} {
//         width: 90px;
//         margin-right: 0;
//     }
// `

const InputWrapper = styled.div`
    width: 40rem;
    @media ${device.tabletL} {
        margin-right: 1rem;
    }
`
const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2.4rem;
`
const EmailButton = styled(Button)`
    min-width: 40rem;
    height: 4rem;
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
// const Wrapper = styled.div`
//     background-image: linear-gradient(73deg, #ff6444, #ff444f);
//     background-repeat: round;
//     position: relative;
//     display: flex;
//     flex-direction: row;
//     min-height: 35.3rem;
//     align-items: center;
//     width: 100%;
//     border-top: 1px solid rgba(151, 151, 151, 0.2);
//     border-bottom: 1px solid rgba(151, 151, 151, 0.2);
//     @media (max-width: 991px) {
//         flex-direction: column;
//         height: auto;
//     }
// `
// const MobileWrapper = styled.div`
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     max-width: 600px;
// `

// const MobileSignupFormWrapper = styled(Flex)`
//     width: 50%;
//     align-items: center;
//     padding: 0 2rem;
//     @media (max-width: 991px) {
//         width: 100%;
//         box-shadow: 0 16px 16px 0 rgba(14, 14, 14, 0.04), 0 0 16px 0 rgba(14, 14, 14, 0.04);
//         background: white;
//         padding-bottom: 30px;
//         border-radius: 8px;
//         position: relative;
//         top: -10px;

//         & > div {
//             width: 100%;
//         }
//     }
// `
// const BackgroundWrapper = styled(Flex)`
//     position: relative;
//     min-height: 35.3rem;
//     height: 100%;
//     width: 50%;

//     & > div {
//         position: absolute;
//         bottom: -5px;
//         left: 0;
//     }
// `

const SocialWrapper = styled(Flex)`
    width: 100%;
    margin-top: 1.6rem;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
`
// const MobileSocialWrapper = styled(SocialWrapper)`
//     @media ${device.tabletL} {
//         flex-direction: column;
//     }
// `
const SocialButton = styled(Button)`
    width: 12.5rem;
    line-height: 27px;
    padding: 5px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    background-color: var(--color-white);
    border: solid 1px var(--color-grey-7);
    height: 4rem;

    /* margin-left: 0.8rem; */

    &:nth-of-type(1) {
        margin-left: 0;
    }
    img {
        padding-right: 5px;
        object-fit: contain;
    }
    @media ${device.tabletL} {
        width: 114px;
        height: 48px;
        padding: 0;
        justify-content: center;
        align-items: center;

        img {
            margin-top: 12px;
            width: 30px;
        }
    }
    @media (max-width: 500px) {
        width: 100%;
        height: 40px;
        padding: 0;
        line-height: 14px;

        img {
            margin-top: 3px;
            padding-right: 0;
        }
    }
`
const SocialButtonText = styled.div`
    display: flex;

    span {
        display: block;
        width: 100%;
    }
`

// const StyledHeader = styled(Header)`
//     width: ${(props) => props.width || '41.4rem'};
//     position: ${(props) => props.position || 'static'};
//     @media ${device.tablet} {
//         width: auto;
//     }
//     @media (max-width: 991px) {
//         margin-top: 3rem;
//     }
//     @media (max-width: 991px) {
//         max-width: 290px;
//     }
// `
// const StyledFormWrapper = styled.div`
//     background: white;
//     max-width: 414px;
//     padding: 20px 20px 30px;
//     margin-left: 30px;
//     border-radius: 8px;
//     position: absolute;
//     bottom: -50px;
//     box-shadow: 0 16px 16px 0 rgba(14, 14, 14, 0.04), 0 0 16px 0 rgba(14, 14, 14, 0.04);

//     h1 {
//         @media (min-width: 991px) {
//             line-height: 3.5rem;
//         }
//     }
// `
// const StyledHeaderText = styled(Text)`
//     width: ${(props) => props.width || '41.4rem'};
//     @media ${device.tablet} {
//         width: auto;
//     }
//     @media (max-width: 991px) {
//         margin-top: 1rem;
//         font-size: 2rem;
//         margin-bottom: 3rem;
//     }
// `
// const SignInText = styled(Text)`
//     display: block;
//     width: auto;
//     margin-right: 2rem;
//     flex-basis: 100%;
//     margin-bottom: 10px;
//     font-size: 14px;
//     font-weight: normal;
//     font-style: normal;
//     line-height: 1.5;
//     letter-spacing: normal;
//     color: #333333;
//     @media ${device.tabletL} {
//         width: 90px;
//         margin-right: 0;
//     }
// `

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
    width: 130px;
    height: 1px;
    background-color: white;
`

const StyledText = styled(Text)`
    color: white;

    @media ${(props) => device.tabletL && props.notedBox} {
        width: 13rem;
    }
    @media (max-width: 340px) {
        width: 17rem;
    }
    @media ${device.tabletL} {
        font-size: ${(props) => props.tabletFontSize || 'var(--text-size-xxs)'};
    }
`

// const MobileSignInText = styled(SignInText)`
//     @media ${device.tabletL} {
//         width: unset;
//         margin: 0 auto 0.8rem 0.8rem;
//     }
// `
// const redirectToDerivApp = (e) => {
//     e.preventDefault()
//     window.open(deriv_app_url, '_blank')
// }
// const LinkFlex = styled(LinkText)`
//     display: flex;
//     align-items: center;

//     &:hover {
//         text-decoration: none;
//     }
// `
// const MobileBackground = styled.div`
//     background-image: linear-gradient(73deg, #ff6444, #ff444f);
//     background-size: cover;
//     background-repeat: no-repeat;
//     width: 100%;
//     flex-direction: column;
//     align-items: center;
//     position: relative;
//     border-top-right-radius: 10px;
//     border-bottom-right-radius: 10px;
// `
// const DerivExperience = styled.div`
//     display: flex;
//     align-items: center;
//     position: absolute;
//     top: 41%;
//     transform: translateY(-50%) !important;
//     z-index: 99;
//     right: 20px;
//     max-width: 310px;

//     @media ${device.mobileL} {
//         width: unset;
//         margin: 0 auto 0.8rem 0.8rem;
//         max-width: 230px;
//     }

//     img {
//         z-index: 10;
//     }
//     ${Header} {
//         max-width: 35rem;
//         z-index: 10;
//         color: var(--color-white);
//     }
// `
// const MobilePlatform = styled.div`
//     width: 100%;
//     max-width: 35.7rem;
//     z-index: 10;
// `

const GetEbook = ({
    email_error_msg,
    email,
    clearEmail,
    handleInputChange,
    handleValidation,
    autofocus,
    handleSocialSignup,
    is_submitting,
}) => {
    const [is_checked, setChecked] = React.useState(false)
    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }
    return (
        <SignupFormWrapper>
            <div>
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
                            placeholder={'email address'}
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
                    <AgreementLabel
                        isChecked={is_checked}
                        handleChangeCheckbox={handleChange}
                        color="white"
                    />
                    <EmailButton
                        isChecked={is_checked}
                        id="gtm-signup-email"
                        type="submit"
                        secondary="true"
                        disabled={is_submitting || !is_checked || email_error_msg || !email}
                    >
                        {localize('Get your free ebook now!')}
                    </EmailButton>
                </InputGroup>
                <SignupWithContainer>
                    <Line />
                    <StyledText color="grey-5" align="center" tabletFontSize="12px">
                        {localize('Or sign up with')}
                    </StyledText>
                    <Line />
                </SignupWithContainer>
                <SocialWrapper jc="unset" ai="center">
                    <SocialButton
                        onClick={handleSocialSignup}
                        provider="google"
                        data-provider="google"
                        id="gtm-signup-google"
                        type="button"
                        social
                    >
                        <SocialButtonText>
                            <img src={Google} alt="google" width="24" height="24" />
                            <span>Google</span>
                        </SocialButtonText>
                    </SocialButton>
                    <SocialButton
                        onClick={handleSocialSignup}
                        provider="facebook"
                        data-provider="facebook"
                        id="gtm-signup-facebook"
                        type="button"
                        social
                    >
                        <SocialButtonText>
                            <img src={Facebook} alt="facebook" width="24" height="24" />
                            <span>Facebook</span>
                        </SocialButtonText>
                    </SocialButton>
                    <SocialButton
                        onClick={handleSocialSignup}
                        provider="apple"
                        data-provider="apple"
                        id="gtm-signup-apple"
                        type="button"
                        social
                    >
                        <SocialButtonText>
                            <img src={Apple} alt="apple" width="24" height="24" />
                            <span>Apple</span>
                        </SocialButtonText>
                    </SocialButton>
                </SocialWrapper>
            </div>
        </SignupFormWrapper>
    )
}

GetEbook.propTypes = {
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

export default GetEbook
