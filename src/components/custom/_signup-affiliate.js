import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from '../containers'
import AgreementLabel from './_agreement-label'
import { Input, Button } from 'components/form'
import { Header, LinkText, LocalizedLinkText } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const StyledFlex = styled(Flex)`
    height: 44rem;
    background-color: var(--color-white);
    border-radius: 0.6rem;
    box-shadow: 0 1.6rem 2rem 0 rgba(0, 0, 0, 0.1);

    @media ${device.tabletL} {
        width: 53rem;
        height: 48.6rem;
    }
    @media ${device.mobileL} {
        width: 100%;
        height: 57rem;
        padding: 6rem 2rem;
    }
`
const StyledNoteFlex = styled(Flex)`
    height: auto;
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
    margin: 3.2rem auto 0.4rem;

    @media ${device.tabletL} {
        margin-top: 24px;
    }

    @media ${device.mobileL} {
        font-size: 12px;
    }
`
const LoginText = styled(Header)`
    text-align: center;
    align-self: center;
    margin-top: 1.6rem;

    @media ${device.tabletL} {
        display: flex;
        margin-bottom: 0;
        margin-top: 3.75rem;
    }
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
const StyledLinkText = styled(LinkText)`
    @media ${device.tabletL} {
        font-size: 12px;
    }
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
        <StyledFlex jc="flex-start" fd="column" p="4rem">
            <Header as="h4" type="heading-3" mb="0.8rem">
                {localize('Sign up')}
            </Header>
            <Header type="subtitle-1" weight="normal">
                {localize('Enter your email address to begin')}
            </Header>
            {!is_ppc && (
                <StyledNoteFlex fd="row" width="100%" p="8px 14px" mt="1.6rem">
                    <div>
                        <Header
                            mb="0.2rem"
                            weight="normal"
                            notedBox
                            color="grey-16"
                            size="var(--text-size-xs)"
                            tabletFontSize="12px"
                        >
                            {localize('Want to sign up as a trader?')}
                            <LocalizedLinkText to="/signup">
                                <StyledLinkText
                                    id="dm-new-login-button"
                                    ml="0.5rem"
                                    size="14px"
                                    color="grey"
                                >
                                    Create a Deriv account
                                </StyledLinkText>
                            </LocalizedLinkText>
                        </Header>
                    </div>
                </StyledNoteFlex>
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
            <LoginText weight="normal" type="paragraph-1">
                <div>{localize('Already have a Deriv or Binary.com affiliate account?')}</div>
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
        </StyledFlex>
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
