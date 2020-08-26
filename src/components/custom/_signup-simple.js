import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/form'
import { Container } from 'components/containers'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const Wrapper = styled.div`
    padding: 4rem 0;
`
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
const SignupSimple = ({
    email_error_msg,
    email,
    clearEmail,
    handleInputChange,
    handleValidation,
    autofocus,
    is_submitting,
}) => {
    return (
        <Wrapper>
            <Container>
                <StyledHeader weight="bold">
                    {localize('Ready to join us?')}
                    <br></br>
                    {localize('Sign up for your demo account now.')}
                </StyledHeader>
                <InputGroup>
                    <InputWrapper>
                        <Input
                            id="email"
                            name="email"
                            type="text"
                            error={email_error_msg}
                            value={email}
                            label={localize('E-mail address')}
                            placeholder={'example@mail.com'}
                            handleError={clearEmail}
                            onChange={handleInputChange}
                            onBlur={handleValidation}
                            autoFocus={autofocus}
                            autoComplete="off"
                            background="white"
                            required
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
            </Container>
        </Wrapper>
    )
}

SignupSimple.propTypes = {
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

export default SignupSimple
