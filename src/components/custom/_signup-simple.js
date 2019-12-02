import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/form'
import { Container } from 'components/containers'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 44rem;

    @media ${device.mobileL} {
        flex-direction: column;
    }
`
const InputWrapper = styled.div`
    width: 75%;

    @media ${device.mobileL} {
        width: 100%;
    }
`
const StyledHeader = styled(Text)`
    font-size: 2.7rem;
    width: 28.8rem;

    @media ${device.mobileL} {
        text-align: center;
    }
`

const EmailButton = styled(Button)`
    margin-left: 0.8rem;
    height: 4rem;
`
const SignupSimple = props => {
    return (
        <Container>
            <StyledHeader weight="bold">
                {localize('Ready to join us?')}
                <br></br>
                {localize('Try for free ')}
            </StyledHeader>
            <InputGroup>
                <InputWrapper>
                    <Input
                        id="email"
                        name="email"
                        type="text"
                        error={props.parameters.email_error_msg}
                        value={props.parameters.email}
                        label={localize('E-mail address')}
                        placeholder={'example@.parameters.com'}
                        handleError={props.parameters.clearEmail}
                        onChange={props.parameters.handleInputChange}
                        onBlur={props.parameters.handleValidation}
                        autoFocus={props.parameters.autofocus}
                        autoComplete="off"
                        background="white"
                        required
                    />
                </InputWrapper>
                <EmailButton type="submit" secondary disabled={props.parameters.is_submitting}>
                    {localize('Sign up')}
                </EmailButton>
            </InputGroup>
        </Container>
    )
}

SignupSimple.propTypes = {
    parameters: PropTypes.object,
}

export default SignupSimple
