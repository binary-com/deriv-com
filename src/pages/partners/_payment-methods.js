import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { localize } from 'components/localization'
import { Header } from 'components/elements/typography.js'
import { LinkButton } from 'components/form'
import Fasapay from 'images/svg/payment-fasapay-large.svg'
import Maestro from 'images/svg/payment-maestro-large.svg'
import Mastercard from 'images/svg/payment-mastercard-large.svg'
import Neteller from 'images/svg/payment-neteller-large.svg'
import Paytrust from 'images/svg/payment-paytrust-88-large.svg'
import Perfectmoney from 'images/svg/payment-perfectmoney-large.svg'
import Skrill from 'images/svg/payment-skrill-large.svg'
import Visa from 'images/svg/payment-visa-large.svg'

const StyledSection = styled(SectionContainer)`
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.1);
`
const StyledButton = styled(LinkButton)`
    color: var(--color-red);
`
const PaymentMethods = () => {
    return (
        <StyledSection>
            <Container direction="column">
                <Header font_size="3.6rem" align="center">
                    {localize('Receive your earnings through your favourite payment method')}
                </Header>
                <Flex jc="space-between" wrap="wrap" mt="4.6rem">
                    <Visa />
                    <Mastercard />
                    <Maestro />
                    <Neteller />
                    <Fasapay />
                    <Skrill />
                    <Paytrust />
                    <Perfectmoney />
                </Flex>
                <StyledButton to="/">{localize('Show more')}</StyledButton>
            </Container>
        </StyledSection>
    )
}

export default PaymentMethods
