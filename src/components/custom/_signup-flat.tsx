import React from 'react'
import styled from 'styled-components'
import { Input, Button, LinkButton } from 'components/form'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import { Container } from 'components/containers'
import device from 'themes/device'
// SVG
import Facebook from 'images/svg/custom/facebook-blue.svg'
import Google from 'images/svg/custom/google.svg'

type SignupFlatProps = {
    autofocus?: boolean
    clearEmail?: () => void
    dark?: boolean
    email?: string
    email_error_msg?: string
    handleInputChange?: (event) => void
    handleLogin?: (event) => void
    handleSocialSignup?: (event) => void
    handleValidation?: (event) => void
    is_submitting?: boolean
}

type DarkType = {
    dark?: boolean
}
const Wrapper = styled.div<DarkType>`
    padding: 3.3rem 8.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: ${(props) => (props.dark ? 'var(--color-black)' : 'var(--color-white)')};
    height: 26.9rem;
    width: 100%;

    @media ${device.tabletL} {
        height: auto;
    }
`
const FormWrapper = styled(Wrapper)`
    background-color: transparent;
    padding: 0;
    height: 100%;
    width: 70%;
`
const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
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
const SocialButton = styled(Button)<DarkType>`
    background-color: ${(props) => (props.dark ? 'var(--color-black)' : 'var(--color-white)')};
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
const DemoButton = styled(LinkButton)`
    margin-top: 2.2rem;
    width: auto;
`
const Splitter = styled.div<DarkType>`
    background-color: ${(props) => (props.dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)')};
    height: 20rem;
    width: 0.2rem;
    margin-top: 1rem;

    @media ${device.tabletL} {
        display: none;
    }
`
const SignupFlat = ({
    email_error_msg,
    email,
    clearEmail,
    handleInputChange,
    handleValidation,
    autofocus,
    handleSocialSignup,
    is_submitting,
    dark,
}: SignupFlatProps) => {
    return (
        <Wrapper dark={dark}>
            <FormWrapper>
                <Container>
                    <StyledHeader
                        as="h3"
                        type="section-title"
                        weight="bold"
                        color={dark ? 'white' : 'black'}
                    >
                        {localize('Join over 1 million traders worldwide')}
                    </StyledHeader>
                    <br />
                    <Text color={dark ? 'white' : 'black'}>
                        {localize('Sign up for your demo account now.')}
                    </Text>
                    <InputGroup>
                        <InputWrapper>
                            <Input
                                id="dm-email-input"
                                name="email"
                                background={dark ? 'black' : 'white'}
                                inputColor={dark ? 'grey-7' : 'black'}
                                type="text"
                                error={email_error_msg}
                                value={email}
                                label={localize('Email address')}
                                placeholder={'example@mail.com'}
                                handleError={clearEmail}
                                onChange={handleInputChange}
                                onBlur={handleValidation}
                                autoFocus={autofocus}
                                autoComplete="off"
                                required
                            />
                        </InputWrapper>
                        <EmailButton
                            id="dm-flat-signup"
                            type="submit"
                            secondary
                            disabled={is_submitting}
                        >
                            {localize('Sign up')}
                        </EmailButton>
                    </InputGroup>
                    <SocialWrapper>
                        <StyledText color={dark ? 'white' : 'black'}>
                            {localize('or sign up with')}
                        </StyledText>
                        <SocialButton
                            dark={dark}
                            onClick={handleSocialSignup}
                            provider="google"
                            data-provider="google"
                            id="dm-signup-google"
                            type="button"
                            social
                        >
                            <span>
                                <img src={Google} alt="google" width="22" height="23" />
                            </span>
                        </SocialButton>
                        <SocialButton
                            dark={dark}
                            onClick={handleSocialSignup}
                            provider="facebook"
                            data-provider="facebook"
                            id="dm-signup-facebook"
                            type="button"
                            social
                        >
                            <span>
                                <img src={Facebook} alt="facebook" width="12" height="22" />
                            </span>
                        </SocialButton>
                    </SocialWrapper>
                </Container>
                <Splitter dark={dark}></Splitter>
                <RightWrapper>
                    <Text
                        align="center"
                        size="var(--text-size-sm)"
                        color={dark ? 'white' : 'black'}
                        weight="bold"
                    >
                        {localize('Get a taste of the Deriv experience')}
                    </Text>
                    <DemoButton
                        secondary
                        external
                        type="deriv_app"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        {localize('See live demo')}
                    </DemoButton>
                </RightWrapper>
            </FormWrapper>
        </Wrapper>
    )
}

export default SignupFlat
