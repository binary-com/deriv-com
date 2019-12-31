import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/form'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'
import SignupImg from 'images/svg/signup-public.svg'
import { deriv_app_url } from 'common/utility'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    height: 33.3rem;
    width: 100%;
`

const FormWrapper = styled(Wrapper)`
    position: absolute;
    padding-left: 32.4rem;
    padding-right: 12rem;
    height: 100%;

    @media ${device.laptop} {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    @media ${device.tablet} {
        background-color: var(--color-green-1);
    }
`

const SignupBackground = styled(SignupImg)`
    @media ${device.laptop} {
        height: auto;
    }
    @media ${device.tablet} {
        display: none;
    }
`

const LeftWrapper = styled.div`
    margin-top: 4rem;

    @media ${device.tablet} {
        padding-left: 5rem;
    }
`
const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media ${device.tablet} {
        display: none;
    }
`

const InputWrapper = styled.div`
    width: 60%;
`
const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 1.6rem;
`
const EmailButton = styled(Button)`
    margin-left: 0.6rem;
    height: 4rem;
`
const SocialWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: 2.6rem;
`
const SocialButton = styled(Button)`
    background-color: var(--color-white);
    border: solid 1px var(--color-grey-7);
    width: 6.4rem;
    height: 4rem;
    margin-right: 1.3rem;
`

const StyledHeader = styled(Header)`
    width: ${props => props.width || '48.6rem'};

    @media ${device.tablet} {
        width: auto;
    }
`
const StyledText = styled(Text)`
    font-size: var(--text-size-xs);
    width: auto;
    margin-right: 4rem;

    @media ${device.tablet} {
        width: auto;
    }
`
const DemoButton = styled(Button)`
    margin-top: 2.2rem;
    width: auto;
`

const handleExternalLink = e => {
    e.preventDefault()
    window.open(deriv_app_url, '_blank')
}

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
            <SignupBackground />
            <FormWrapper>
                <LeftWrapper>
                    <StyledHeader font_size="2.8rem">
                        {localize('Join over 1 million traders worldwide')}
                    </StyledHeader>
                    <br />
                    <StyledHeader as="h4" weight="500">
                        {localize('Get your free account now.')}
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
                    <SocialWrapper>
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
                </LeftWrapper>
                <RightWrapper>
                    <StyledHeader font_size="2.8rem" width="28.2rem" align="center">
                        {localize('Get a taste of the Deriv experience')}
                    </StyledHeader>
                    <DemoButton tertiary onClick={handleExternalLink}>
                        {localize('See live demo')}
                    </DemoButton>
                </RightWrapper>
            </FormWrapper>
        </Wrapper>
    )
}

SignupPublic.propTypes = {
    autofocus: PropTypes.bool,
    clearEmail: PropTypes.bool,
    email: PropTypes.string,
    email_error_msg: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleLogin: PropTypes.func,
    handleSocialSignup: PropTypes.func,
    handleValidation: PropTypes.func,
    is_submitting: PropTypes.bool,
}

export default SignupPublic
