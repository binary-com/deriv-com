import React from 'react'
import styled from 'styled-components'
import RightAd from 'images/svg/right-ad.svg'
import SettlePayment from 'images/svg/settle-payment.svg'
import CompleteOrder from 'images/svg/complete-order.svg'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex-grow: 0;
    width: 10rem;

    :first-child {
        flex-basis: 10%;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    padding: 8rem auto;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 1px 0 0 var(--color-grey-8);

    @media ${device.tablet} {
        padding: 40px 16px;
    }
`
const CardContainer = styled(Flex)`
    @media ${device.laptopM} {
        max-width: 58rem;
        flex-wrap: wrap;
    }
`
const Card = styled(Flex)`
    flex-direction: column;
    width: 38.4rem;
    height: auto;
    margin-right: 2.4rem;
    margin-bottom: 2rem;
    justify-content: flex-start;

    :last-child {
        margin-right: 0;
    }

    @media ${device.laptopM} {
        margin-right: 0;
        width: 328px;
    }
    @media ${device.tablet} {
        margin-bottom: 40px;
        max-width: 100%;

        :last-child {
            margin-bottom: 0;
        }
    }
    @media ${device.mobileL} {
        height: auto;

        :last-child {
            padding-bottom: 0;
        }
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        margin-bottom: 24px;
    }
    @media ${device.mobileL} {
        font-size: 24px;
    }
`
const StyledCardHeader = styled(Header)`
    font-size: 24px;

    @media ${device.mobileL} {
        font-size: 20px;
        margin-bottom: 8px;
        margin-top: 16px;
        line-height: 1.2;
    }
`
const StyledText = styled(Text)`
    font-size: 2.4rem;

    @media ${device.tabletL} {
        font-size: 16px;
    }
`
const ExchangeSteps = () => {
    return (
        <Section>
            <StyledHeader align="center" mb="4rem" as="h2">
                {localize('Exchange in 3 easy steps')}
            </StyledHeader>
            <CardContainer>
                <Card>
                    <Row>
                        <img src={RightAd} alt="right ad" width="100%" />
                    </Row>
                    <Row>
                        <Column>
                            <StyledCardHeader mt="0.8rem" mb="0.8rem" as="h4">
                                {'1.'}
                            </StyledCardHeader>
                        </Column>
                        <Column>
                            <StyledCardHeader mt="0.8rem" mb="0.8rem" as="h4">
                                {localize('Find the right ad or create your own')}
                            </StyledCardHeader>
                            <StyledText>
                                {localize(
                                    'Look for the right rates and create an order. Don’t see the rates you want? Create your own ad!',
                                )}
                            </StyledText>
                        </Column>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <img src={SettlePayment} alt="settle payments" width="100%" />
                    </Row>
                    <Row>
                        <Column>
                            <StyledCardHeader mt="0.8rem" mb="0.8rem" as="h4">
                                {'2.'}
                            </StyledCardHeader>
                        </Column>
                        <Column>
                            <StyledCardHeader mt="0.8rem" mb="0.8rem" as="h4">
                                {localize('Settle the payment')}
                            </StyledCardHeader>
                            <StyledText>
                                {localize('Send or receive payment via funds transfer.')}
                            </StyledText>
                        </Column>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <img src={CompleteOrder} alt="complete order" width="100%" />
                    </Row>
                    <Row>
                        <Column>
                            <StyledCardHeader mt="0.8rem" mb="0.8rem" as="h4">
                                {'3.'}
                            </StyledCardHeader>
                        </Column>
                        <Column>
                            <StyledCardHeader mt="0.8rem" mb="0.8rem" as="h4">
                                {localize('Complete the exchange')}
                            </StyledCardHeader>
                            <StyledText>
                                {localize('Every order must be completed within 2 hours.')}
                            </StyledText>
                        </Column>
                    </Row>
                </Card>
            </CardContainer>
        </Section>
    )
}

export default ExchangeSteps
