import React from 'react'
import styled from 'styled-components'
import SEO from 'components/containers/seo'
import LayoutStatic from 'components/layout/layout-static'
import { localize, WithIntl } from 'components/localization'
import Container from 'components/containers/container'
import { Header } from 'components/elements/typography'
import Input from 'components/form/input'
import Button from 'components/form/button'

const StyledContainer = styled(Container)`
    text-align: center;
    margin-top: 8rem;
`

const ButtonContainer = styled(Container)`
    margin-top: 2rem;
`

const SecondaryHeader = styled(Header)`
    margin-top: 0.5rem;
    margin-bottom: 3.8rem;
`

const InputGroup = styled.div`
    width: 40rem;
    margin-bottom: 3.4rem;
`

const StyledButton = styled(Button)`
    margin: 0 0.4rem;
`

const ResetPassword = () => (
    <LayoutStatic>
        <SEO
            title={localize('Reset-password')}
            description={localize('Reset password')}
        />
        <StyledContainer justify="center" align="center" direction="column">
            <Header as="h2" align="center">
                {localize('Reset password')}
            </Header>
            <SecondaryHeader as="h4" align="center" weight="500">
                {localize(
                    "We'll email you instructions to reset your password.",
                )}
            </SecondaryHeader>
            <InputGroup>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    label={localize('Email')}
                    background="white"
                    placeholder={'example@mail.com'}
                    required
                />
            </InputGroup>
            <ButtonContainer>
                <StyledButton tertiary>Return to log in</StyledButton>
                <StyledButton secondary>Reset my password</StyledButton>
            </ButtonContainer>
        </StyledContainer>
    </LayoutStatic>
)

export default WithIntl()(ResetPassword)
