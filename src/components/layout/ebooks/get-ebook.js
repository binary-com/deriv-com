import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { graphql, useStaticQuery } from 'gatsby'
import { Input, Button } from 'components/form'
import { Text } from 'components/elements' //QueryImage, LinkText
import { localize } from 'components/localization'
import { Flex } from 'components/containers' //Show
import AgreementLabel from 'components/custom/_agreement-label'
import device from 'themes/device.js'
// SVG
import Apple from 'images/svg/apple.svg'
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'

const SignupFormWrapper = styled(Flex)`
    width: 50%;
    align-items: center;
    justify-content: initial;
    
    @media ${device.mobileM} {
        width: 100%;

        & > div {
            width: 100%;
        }
    }
`

const InputWrapper = styled.div`
    width: 40rem;

    @media ${device.tabletL} {
        margin-right: 1rem;
    }

    @media ${device.tablet} {
        margin-right: 0;
        width: 100%;
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

const SocialWrapper = styled(Flex)`
    width: 100%;
    margin-top: 1.6rem;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
`
const SocialButton = styled(Button)`
    width: 12.5rem;
    min-width: 116px;
    line-height: 27px;
    padding: 5px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    background-color: var(--color-white);
    border: solid 1px var(--color-grey-7);
    min-height: 4rem;
    height: 40px;

    /* margin-left: 0.8rem; */

    &:nth-of-type(1) {
        margin-left: 0;
    }
    img {
        padding-right: 5px;
        object-fit: contain;
    }
    
    @media (max-width: 500px) {
        width: 100%;
        height: 43px;
        padding: 0;
        line-height: 14px;
        margin-bottom: 10px;

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
        text-align: left;
    }

    @media (max-width: 500px) {
        width: 100px;

        span {
            padding-left: 10px;
            line-height: 40px;
        }
        img {
            margin-top: 8px;
        }
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
