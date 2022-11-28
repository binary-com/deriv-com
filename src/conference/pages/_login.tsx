import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import device from 'themes/device'
import { localize } from 'components/localization'

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 120px;

    @media ${device.laptopM} {
        padding: 40px 80px;
    }
`
const LoginHeader = styled(Header)`
    text-align: center;
    padding-bottom: 32px;
`
const StyledButton = styled(Button)`
    font-size: 1.6rem;
`

const Login = () => {
    return (
        <LoginWrapper>
            <LoginHeader as="h3" type="subtitle-1">
                {localize('Three days of content, networking and news.')}
            </LoginHeader>
            <StyledButton secondary>{localize('Register here')}</StyledButton>
            <LoginHeader as="div" weight="normal" type="subtitle-1" pt="32px">
                {localize('or, if you already have access to the event')}
            </LoginHeader>
            <StyledButton primary>{localize('Sign in')}</StyledButton>
        </LoginWrapper>
    )
}

export default Login
