import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/form'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'
import { deriv_app_url } from 'common/utility'

const Wrapper = styled.div`
    padding: 3.3rem 8.5rem;
    display: flex;
    flex-direction: row;
    background-color: var(--color-black);
    height: 26.9rem;
`
const CenterWrapper = styled.div`
    width: 49rem;
    height: 100%;
    margin: auto;
`
const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 21rem;
    height: 100%;
    align-items: center;
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
    width: auto;
    font-size: 1.4rem;
    margin-left: 0.6rem;
`
const SocialWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
`
const SocialButton = styled(Button)`
    width: auto;
    background-color: var(--color-black);
    border: none;
`

const StyledHeader = styled(Header)`
    width: 49rem;
    color: var(--color-white);
`
const StyledText = styled(Text)`
    font-size: var(--text-size-xs);
    width: auto;
    margin-right: 4rem;
`
const DemoButton = styled(Button)`
    margin-top: 2.2rem;
    width: 13.4rem;
`
const handleExternalLink = () => {
    window.open(deriv_app_url, '_blank')
}

const SignupDark = props => {
    return (
        <Wrapper>
            <CenterWrapper>
                <StyledHeader as="h3" weight="bold">
                    {localize('Join over 1 million traders worldwide')}
                </StyledHeader>
                <br />
                <Text color="white">{localize('Get your free account now.')}</Text>
                <InputGroup>
                    <InputWrapper>
                        <Input
                            id="email"
                            name="email"
                            background="black"
                            type="text"
                            error={props.email_error_msg}
                            value={props.email}
                            label={localize('Email address')}
                            placeholder={'example@mail.com'}
                            handleError={props.clearEmail}
                            onChange={props.handleInputChange}
                            onBlur={props.handleValidation}
                            autoFocus={props.autofocus}
                            autoComplete="off"
                            required
                        />
                    </InputWrapper>
                    <EmailButton type="submit" secondary disabled={props.is_submitting}>
                        {localize('Sign up')}
                    </EmailButton>
                </InputGroup>
                <SocialWrapper>
                    <StyledText color="white">{localize('or sign up with')}</StyledText>
                    <SocialButton
                        onClick={props.handleSocialSignup}
                        provider="google"
                        id="google"
                        type="button"
                        social
                    >
                        <span>
                            <Google />
                        </span>
                    </SocialButton>
                    <SocialButton
                        onClick={props.handleSocialSignup}
                        provider="facebook"
                        id="facebook"
                        type="button"
                        social
                    >
                        <span>
                            <Facebook />
                        </span>
                    </SocialButton>
                </SocialWrapper>
            </CenterWrapper>
            <RightWrapper>
                <Text secondary color="white">
                    {localize('Get a taste of the Deriv experience')}
                </Text>
                <DemoButton secondary onClick={handleExternalLink}>
                    {localize('See live demo')}
                </DemoButton>
            </RightWrapper>
        </Wrapper>
    )
}

SignupDark.propTypes = {
    autofocus: PropTypes.func,
    clearEmail: PropTypes.bool,
    email: PropTypes.string,
    email_error_msg: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleLogin: PropTypes.func,
    handleSocialSignup: PropTypes.func,
    handleValidation: PropTypes.func,
    is_submitting: PropTypes.bool,
}

export default SignupDark
