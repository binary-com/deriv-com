import React from 'react'
import styled from 'styled-components'
import { Text, Header } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import { ReactComponent as Checklist } from 'images/svg/checklist.svg'

const WhyDerivMobileContainer = styled.div`
    padding: 4rem 0 2rem 0;
    background-color: var(--color-grey-1);
`
const Card = styled.section`
    width: 90%;
    margin: 0 auto;
    min-height: 41.75rem;
    padding: 3rem 2rem;
    margin-top: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);

    div:first-child {
        margin-top: 0;
    }
`

const CardItem = styled.div`
    display: flex;
    margin-top: 3rem;

    svg {
        width: 3rem;
        height: 3rem;
    }
    ${Text} {
        margin-left: 2.5rem;
        width: 80%;
        height: 3.75rem;
        padding-top: 1%;
        font-size: var(--text-size-sm);
        font-weight: normal;
    }
`
const ButtonWrapper = styled.div`
    text-align: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
`

const SignupButton = styled(LinkButton)`
    width: 100%;
    max-width: 36rem;
    font-size: var(--text-size-sm);
`

const WhyDerivMobile = () => {
    return (
        <WhyDerivMobileContainer>
            <Header align="center" size="4rem">
                {localize('Why choose Deriv?')}
            </Header>
            <Card>
                <CardItem>
                    <Checklist />
                    <Text>{localize('Exclusive synthetic market available 24/7')}</Text>
                </CardItem>
                <CardItem>
                    <Checklist />
                    <Text>{localize('USD 5 minimum deposit')}</Text>
                </CardItem>
                <CardItem>
                    <Checklist />
                    <Text>{localize('Stakes as low as USD 0.35')}</Text>
                </CardItem>
                <CardItem>
                    <Checklist />
                    <Text>{localize('Payouts up to USD 50,000')}</Text>
                </CardItem>
                <CardItem>
                    <Checklist />
                    <Text>{localize('Patented, licensed, and regulated')}</Text>
                </CardItem>
                <CardItem>
                    <Checklist />
                    <Text>{localize('Short to long-term trades')}</Text>
                </CardItem>
            </Card>
            <ButtonWrapper>
                <SignupButton secondary="true" to="/signup/">
                    {localize('Create free demo account')}
                </SignupButton>
            </ButtonWrapper>
        </WhyDerivMobileContainer>
    )
}

export default WhyDerivMobile
