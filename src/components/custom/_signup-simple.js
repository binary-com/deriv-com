import React from 'react'
import styled from 'styled-components'
import { Input, Button } from 'components/form'
import { Container } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device.js'

const Wrapper = styled(Container)`

    @media ${device.mobileL} {
        flex-direction: column;
    }
`
const StyledHeader = styled(Header)`
    width: auto;

    @media ${device.mobileL} {
        text-align: center;
    }
`
const InputGroup = styled.div`
    position: relative;
    width: 36.1rem;
    margin: var(--text-size-m) 0;
    margin-left: 4.7rem;
`
const EmailButton = styled(Button)`
    width: auto;
    font-size: 1.4rem;
    border-radius: 4px;
    margin-left: 0.8rem;
`
const MutedText = styled(Text)`
    text-align: left;
    color: var(--color-grey);
    align-self: start;
`
export const LoginText = styled(MutedText)`
    text-align: center;
    align-self: center;
    margin-top: 2.4rem;

    @media ${device.tabletL} {
        margin-bottom: 0;
    }
`
const SignupSimple = props => {
    return (
        <Wrapper>
            <StyledHeader as="h3" weight="bold">
                {localize('Ready to join us?')}
                <br></br>
                {localize('Try for free ')}
            </StyledHeader>

            <InputGroup>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    error={props.email_error_msg}
                    value={props.email}
                    label={localize('Email')}
                    placeholder={'example@mail.com'}
                    handleError={props.clearEmail}
                    onChange={props.handleInputChange}
                    onBlur={props.handleValidation}
                    autoFocus={props.autofocus}
                    autoComplete="off"
                    required
                />
            </InputGroup>
            <EmailButton type="submit" secondary disabled={props.is_submitting}>
                {localize('Sign up')}
            </EmailButton>
        </Wrapper>
    )
}
export default SignupSimple
