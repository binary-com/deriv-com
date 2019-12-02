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
    justify-content: flex-end;
    background-color: ${props => (props.dark ? 'var(--color-black)' : 'var(--color-white)')};
    height: 26.9rem;

    @media ${device.tabletL} {
        height: auto;
    }
`
const CenterWrapper = styled.div`
    width: 49rem;
    height: 100%;

    @media ${device.tabletL} {
        width: 100%;
    }
`
const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 18rem;
    height: 100%;
    margin-left: 5.8rem;

    @media ${device.tabletL} {
        display: none;
    }
`

const InputWrapper = styled.div`
    width: 60%;

    @media ${device.mobileL} {
        width: 100%;
    }
`
const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 1.6rem;

    @media ${device.mobileL} {
        height: auto;
        flex-direction: column;
    }
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
`
const SocialButton = styled(Button)`
    background-color: ${props => (props.dark ? 'var(--color-black)' : 'var(--color-white)')};
    border: none;
`

const StyledHeader = styled(Header)`
    width: auto;
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
const Splitter = styled.div`
    background-color: ${props => (props.dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)')};
    height: 20rem;
    width: 0.2rem;
    margin-top: 1rem;

    @media ${device.tabletL} {
        display: none;
    }
`
const handleExternalLink = () => {
    window.open(deriv_app_url, '_blank')
}

const SignupFlat = props => {
    return (
        <Wrapper dark={props.dark}>
            <CenterWrapper>
                <StyledHeader as="h3" weight="bold" color={props.dark ? 'white' : 'black'}>
                    {localize('Join over 1 million traders worldwide')}
                </StyledHeader>
                <br />
                <Text color={props.dark ? 'white' : 'black'}>
                    {localize('Get your free account now.')}
                </Text>
                <InputGroup>
                    <InputWrapper>
                        <Input
                            id="email"
                            name="email"
                            background={props.dark ? 'black' : 'white'}
                            inputColor={props.dark ? 'grey-7' : 'black'}
                            type="text"
                            error={props.parameters.email_error_msg}
                            value={props.parameters.email}
                            label={localize('Email address')}
                            placeholder={'example@mail.com'}
                            handleError={props.parameters.clearEmail}
                            onChange={props.parameters.handleInputChange}
                            onBlur={props.parameters.handleValidation}
                            autoFocus={props.parameters.autofocus}
                            autoComplete="off"
                            required
                        />
                    </InputWrapper>
                    <EmailButton type="submit" secondary disabled={props.parameters.is_submitting}>
                        {localize('Sign up')}
                    </EmailButton>
                </InputGroup>
                <SocialWrapper>
                    <StyledText color={props.dark ? 'white' : 'black'}>
                        {localize('or sign up with')}
                    </StyledText>
                    <SocialButton
                        dark={props.dark}
                        onClick={props.parameters.handleSocialSignup}
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
                        dark={props.dark}
                        onClick={props.parameters.handleSocialSignup}
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
            <Splitter dark={props.dark}></Splitter>
            <RightWrapper>
                <Text align="left" secondary color={props.dark ? 'white' : 'black'} weight="bold">
                    {localize('Get a taste of the Deriv experience')}
                </Text>
                <DemoButton secondary onClick={handleExternalLink}>
                    {localize('See live demo')}
                </DemoButton>
            </RightWrapper>
        </Wrapper>
    )
}

SignupFlat.propTypes = {
    dark: PropTypes.bool,
    parameters: PropTypes.object,
}

export default SignupFlat
