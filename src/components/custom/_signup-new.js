import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/form'
import { FlexGridContainer } from 'components/containers'
import { Header, Text, Checkbox } from 'components/elements'
import device from 'themes/device.js'
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'
import { localize } from 'components/localization'
import Award from 'images/svg/award-winning.svg'
import Complaint from 'images/svg/complaint.svg'
import Security from 'images/svg/security.svg'

const Wrapper = styled.section`
    padding-top: 0;
    width: 100%;
    height: fit-cpntent;
    justify-content: center;
    display: flex;
    flex-direction: row;
    background-color: var(--color-grey-8);
`

const Content = styled.div`
    width: 40rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 55.5rem;
    padding: 4rem 0;
    margin-right: 5.6rem;
    margin-left: 2rem;

    @media ${device.tablet} {
        display: none;
    }
`

const SignupContent = styled.div`
    width: 48.4rem;
    height: 55.5rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 4rem;
    background-color: var(--color-white);
`

const Item = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 2.4rem;

    * {
        margin-right: 1.6rem;
        width: fit-content;
    }
    :last-child {
        margin-bottom: 0;
    }
`
const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--color-red);
    margin-top: 2.4rem;
`
const StyledText = styled(Text)`
    font-size: ${props => props.fontSize || 'var(--text-size-xs)'};
    margin-top: ${props => props.marginTop || 'none'};
`
const NoteBox = styled.div`
    width: 100%;
    padding: 1.6rem 1.6rem;
    margin-top: 1.6rem;
    border-radius: 0.6rem;
    background-color: var(--color-grey-8);
    border: solid 1px var(--color-grey-11);
`
const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: var(--text-size-m) 0;
`
const EmailButton = styled(Button)`
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 2rem;
    margin-top: 2.4rem;
`

const SocialButton = styled(Button)`
    box-shadow: none;
    width: 48%;
    background-color: ${props => props.bgColor || 'var(--color-white)'};
    border: solid 1px var(--color-grey-7);
`
const MutedText = styled(Text)`
    text-align: left;
    align-self: start;
`
const SocialWrapper = styled(FlexGridContainer)`
    width: 100%;
    margin-top: var(--text-size-s);
`
export const LoginText = styled(MutedText)`
    text-align: center;
    align-self: center;
    margin-top: 2.4rem;

    @media ${device.tabletL} {
        margin-bottom: 0;
    }
`
const Span = styled.span`
    margin-right: 5.4rem;
    margin-left: 1.3rem;
    font-weight: 500;
    font-size: var(--text-size-xxs);
    color: var(--color-grey-13);

    @media ${device.tabletL} {
        display: none;
    }
`
const LoginLink = styled.a`
    color: var(--color-red);
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 1.4rem;
`
const SignupDefault = ({
    email_error_msg,
    email,
    clearEmail,
    handleInputChange,
    handleValidation,
    autofocus,
    handleSocialSignup,
    handleLogin,
    is_submitting,
}) => {
    return (
        <Wrapper>
            <Content>
                <Header as="h4">{localize('Start trading with Deriv')}</Header>
                <br />
                <Text>{localize('Join over 1 million traders worldwide')}</Text>
                <Line />
                <Item>
                    <Award />
                    <Text>
                        {localize(
                            'Deriv is the next evolution of Binary.com — an award-winning platform that’s been trusted for 20 years.',
                        )}
                    </Text>
                </Item>
                <Item>
                    <Complaint />
                    <Text>{localize('We’re compliant with regulators around the world.')}</Text>
                </Item>
                <Item>
                    <Security />
                    <Text>
                        {localize(
                            'Your privacy and security are our top priority. We’ll never use your details without consent.',
                        )}
                    </Text>
                </Item>
                <Line />
                <StyledText color="grey-12" marginTop="2.4rem">
                    {localize(
                        'By giving us your email address, you agree to receive marketing emails from us. You may unsubscribe from these emails at any time.',
                    )}
                </StyledText>
            </Content>

            <SignupContent>
                <Header as="h4" weight="bold">
                    {localize('Sign up')}
                </Header>
                <br />
                <Text>{localize('Enter your email address to begin')}</Text>
                <NoteBox>
                    <StyledText
                        fontSize="var(--text-size-xs)"
                        color="grey-10"
                        lh="1.14"
                        align="center"
                    >
                        {localize(
                            'Got a Binary.com account? Simply Log in to Deriv.com with your Binary.com credentials',
                        )}
                    </StyledText>
                </NoteBox>
                <InputGroup>
                    <Input
                        id="email"
                        name="email"
                        type="text"
                        error={email_error_msg}
                        value={email}
                        label={localize('Email')}
                        placeholder={'Email'}
                        handleError={clearEmail}
                        onChange={handleInputChange}
                        onBlur={handleValidation}
                        autoFocus={autofocus}
                        autoComplete="off"
                        required
                    />
                </InputGroup>
                <Checkbox label={localize('I agree to the Terms and Conditions')}> </Checkbox>
                <EmailButton type="submit" secondary disabled={is_submitting}>
                    {localize('Create a free account')}
                </EmailButton>
                <StyledText color="grey-10" align="center" fontSize="var(--text-size-xxs)">
                    {localize('OR SIGN UP WITH ')}
                </StyledText>
                <SocialWrapper justify="space-between" gap="0" grid="2">
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
                        <Span>Google</Span>
                    </SocialButton>
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
                        <Span>Facebook</Span>
                    </SocialButton>
                </SocialWrapper>
                <LoginText>
                    {localize('Already have an account?')}
                    <LoginLink onClick={handleLogin}> {localize('Log in.')}</LoginLink>
                </LoginText>
            </SignupContent>
        </Wrapper>
    )
}

SignupDefault.propTypes = {
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

export default SignupDefault
