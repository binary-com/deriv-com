import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import AgreementLabel from './_agreement-label'
import { Input, Button } from 'components/form'
import { Header, Text, LinkText } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const SignupContent = styled.div`
    width: 48.4rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 4rem;
    background-color: var(--color-white);
    border-radius: 0.6rem;
    box-shadow: 0 1.6rem 2rem 0 rgba(0, 0, 0, 0.1);

    @media ${device.tablet} {
        width: 53rem;
    }
    @media ${device.mobileL} {
        width: 100%;
        padding: 6rem 2rem;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 3rem;
        margin-bottom: 3rem;
    }
`

const SubTitle = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`
const StyledText = styled(Text)`
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
const NoteBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 1.7rem;
    padding: 8px 14px;
    margin-top: 1.6rem;
    border-radius: 0.4rem;
    background-color: rgba(242, 243, 244, 0.56);

    @media ${device.mobileL} {
        min-height: auto;
        padding: 13px 16px;
    }
`
const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: 2.5rem 0 0.6rem;

    @media ${device.mobileL} {
        margin: 25px 0 16px 0;
    }
`
const EmailButton = styled(Button)`
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    margin-top: 3.2rem;

    @media ${device.tabletL} {
        margin-top: 24px;
    }

    @media ${device.mobileL} {
        font-size: 1.75rem;
    }
`
const LoginText = styled(Text)`
    text-align: center;
    align-self: center;
    margin-top: 1.6rem;
    font-size: 15px;

    @media ${device.tabletL} {
        margin-bottom: 0;
        margin-top: 3.75rem;
    }
    @media ${device.tabletL} {
        font-size: 2rem;
    }
`
const StyledLinkText = styled(LinkText)`
    font-size: ${(props) => props.size || '14px'};
`
const SignupAffiliate = ({
    autofocus,
    clearEmail,
    email,
    email_error_msg,
    handleInputChange,
    handleLogin,
    handleValidation,
    is_ppc,
    is_submitting,
}) => {
    const [is_checked, setChecked] = useState(false)

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
    }

    return (
        <SignupContent>
            <StyledHeader as="h4" type="sub-section-title" mb="0.8rem">
                {localize('Sign up')}
            </StyledHeader>
            <SubTitle>{localize('Enter your email address to begin')}</SubTitle>

            {!is_ppc && (
                <NoteBox>
                    <div>
                        <StyledText
                            mb="0.4rem"
                            notedBox
                            color="grey-16"
                            size="var(--text-size-xs)"
                            tabletFontSize="12px"
                        >
                            {localize('Want to sign up as a trader?')}
                            <StyledLinkText
                                id="dm-new-login-button"
                                ml="0.5rem"
                                size="14px"
                                color="grey"
                                onClick={() => navigate('/signup')}
                            >
                                {localize('Create a Deriv account')}
                            </StyledLinkText>
                        </StyledText>
                    </div>
                </NoteBox>
            )}

            <InputGroup>
                <Input
                    id="dm-email-input"
                    name="email"
                    type="text"
                    border="solid 1px var(--color-grey-7)"
                    labelColor="grey-5"
                    labelHoverColor="grey-5"
                    background="white"
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
            <AgreementLabel isChecked={is_checked} handleChangeCheckbox={handleChange} />
            <EmailButton
                isChecked={is_checked}
                type="submit"
                secondary="true"
                disabled={is_submitting || !is_checked || email_error_msg || !email}
                id="dm-new-signup"
            >
                {localize('Create partner account')}
            </EmailButton>
            <LoginText>
                {localize('Already have a Deriv or Binary.com affiliate account?')}
                <StyledLinkText
                    id="dm-new-login-button"
                    ml="0.4rem"
                    size="14px"
                    color="red"
                    onClick={handleLogin}
                >
                    {localize('Log in')}
                </StyledLinkText>
            </LoginText>
        </SignupContent>
    )
}

SignupAffiliate.propTypes = {
    autofocus: PropTypes.bool,
    clearEmail: PropTypes.func,
    email: PropTypes.string,
    email_error_msg: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleLogin: PropTypes.func,
    handleSocialSignup: PropTypes.func,
    handleValidation: PropTypes.func,
    is_ppc: PropTypes.bool,
    is_submitting: PropTypes.bool,
}

export default SignupAffiliate
