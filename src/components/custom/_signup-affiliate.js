import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from '../containers'
import { Input, Button } from 'components/form'
import { Header, LinkText, LocalizedLinkText } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const StyledFlex = styled(Flex)`
    height: fit-content;
    min-height: 450px;
    background-color: var(--color-white);
    border-radius: 6px;
    box-shadow: 0 1.6rem 2rem 0 rgba(0, 0, 0, 0.1);

    @media ${device.tabletL} {
        margin: 0 auto;
        padding: 40px 16px 0;
        min-height: 392px;
    }
`
const StyledNote = styled.div`
    padding: 8px 0;
    margin: 24px 0 16px;
    height: 36px;
    border-radius: 4px;
    background-color: rgba(248, 248, 249, 1);

    @media ${device.mobileS} {
        height: 54px;
        padding: 8px 7px;
    }
`
const InputGroup = styled.div`
    width: 100%;
    margin-bottom: 16px;
`
const EmailButton = styled(Button)`
    width: 100%;
    font-size: 1.4rem;
    margin: 24px auto 14px;

    @media ${device.tabletL} {
        margin-bottom: 8px;
        font-size: 12px;
    }
`
const LoginText = styled(Header)`
    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
    }
    @media ${device.mobileS} {
        font-size: 10px;
    }
`
const StyledLinkText = styled(LinkText)`
    margin-left: 3px;
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
}) => (
    <StyledFlex jc="flex-start" fd="column" p="40px">
        <Header as="h4" type="heading-3" mb="8px">
            {localize('Sign up')}
        </Header>
        <Header as="p" type="subtitle-1" weight="normal">
            {localize('Enter your email address to begin')}
        </Header>
        {!is_ppc && (
            <StyledNote>
                <Header as="p" type="paragraph-2" weight="normal" align="center" color="grey-5">
                    {localize('Want to sign up as a trader?')}
                    <LocalizedLinkText to="/signup">
                        <StyledLinkText id="dm-new-login-button" size="14px" color="grey-5">
                            {localize('Create a Deriv account')}
                        </StyledLinkText>
                    </LocalizedLinkText>
                </Header>
            </StyledNote>
        )}
        <InputGroup>
            <Input
                id="dm-email-input"
                name="email"
                type="text"
                border="solid 1px var(--color-grey-7)"
                label_color="grey-5"
                label_hover_color="grey-5"
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
        <EmailButton
            type="submit"
            secondary="true"
            disabled={is_submitting || email_error_msg || !email}
            id="dm-new-signup-affiliate"
        >
            {localize('Create partner account')}
        </EmailButton>
        <LoginText as="p" align="center" weight="normal" type="paragraph-2">
            <div>{localize('Already have a Deriv or Binary.com affiliate account?')}</div>
            <StyledLinkText
                id="dm-new-login-button"
                size="1.4rem"
                color="red"
                onClick={handleLogin}
            >
                {localize('Log in')}
            </StyledLinkText>
        </LoginText>
    </StyledFlex>
)

SignupAffiliate.propTypes = {
    autofocus: PropTypes.bool,
    clearEmail: PropTypes.func,
    email: PropTypes.string,
    email_error_msg: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleLogin: PropTypes.func,
    handleValidation: PropTypes.func,
    is_ppc: PropTypes.bool,
    is_submitting: PropTypes.bool,
}

export default SignupAffiliate
