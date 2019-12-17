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
    padding: 4rem 12rem 4rem 32.4rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 33.3rem;
    width: 100%;
    background-image: url(${SignupImg});

    @media ${device.laptopL} {
        justify-content: flex-start;
        padding: 4rem 2rem 4rem 2rem;
    }

    @media ${device.tabletL} {
        flex-direction: column;
        height: auto;
    }
`
const FormWrapper = styled(Wrapper)`
    background-color: transparent;
    padding: 0;
    height: 100%;
`
const LeftWrapper = styled.div`
    height: 100%;
`
const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-left: 5.8rem;

    @media ${device.tabletL} {
        margin-left: 0;
        align-items: flex-start;
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

    @media ${device.tabletL} {
        text-align: left;
        width: auto;
    }
`
const StyledText = styled(Text)`
    font-size: var(--text-size-xs);
    width: auto;
    margin-right: 4rem;
`
const DemoButton = styled(Button)`
    margin-top: 2.2rem;
    width: auto;
`

const handleExternalLink = () => {
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
                                background="transparent"
                                inputColor="var(--color-grey-5)"
                                label={localize('Email')}
                                placeholder={'example@mail.com'}
                                handleError={clearEmail}
                                onChange={handleInputChange}
                                onBlur={handleValidation}
                                autoFocus={autofocus}
                                autoComplete="off"
                                required
                                border="1px solid var(--color-grey-7);"
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
                    <DemoButton tertiary PonClick={handleExternalLink}>
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
