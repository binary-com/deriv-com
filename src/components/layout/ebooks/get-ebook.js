import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { graphql, useStaticQuery } from 'gatsby'
import { Input, Button } from 'components/form'
import { Text } from 'components/elements' //QueryImage, LinkText
import { localize } from 'components/localization'
import { Flex } from 'components/containers' //Show
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
const SignInText = styled(Text)`
    width: auto;
    margin-right: 2rem;
    @media ${device.tabletL} {
        width: 90px;
        margin-right: 0;
    }
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

// const MobileSocialWrapper = styled(SocialWrapper)`
//     @media ${device.tabletL} {
//         flex-direction: column;
//     }
// `
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

// const MobileSignupFormWrapper = styled(Flex)`
//     width: 50%;
//     align-items: center;
//     padding: 0 2rem;
//     @media ${device.mobileL} {
//         width: 100%;

//         & > div {
//             width: 100%;
//         }
//     }
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
