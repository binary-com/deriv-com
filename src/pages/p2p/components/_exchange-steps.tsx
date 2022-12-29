import React from 'react'
import styled from 'styled-components'
import RightAd from 'images/svg/p2p/right-ad.svg'
import SettlePayment from 'images/svg/p2p/settle-payment.svg'
import CompleteOrder from 'images/svg/p2p/complete-order.svg'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'

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
    gap: 24px;

    @media ${device.laptopM} {
        max-width: 58rem;
        flex-wrap: wrap;
    }
    @media ${device.tabletL} {
        gap: 0;
    }
`
const Card = styled(Flex)`
    flex-direction: column;
    width: 38.1rem;
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
        max-width: 100%;

        :last-child {
            margin-bottom: 40px;
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
    margin-bottom: 60px;

    @media ${device.mobileL} {
        font-size: 28px;
        padding: 0 2px;
        margin-bottom: 0;
    }
`
const StyledCardHeader = styled(Header)`
    font-size: 24px;

    @media ${device.tabletL} {
        text-align: center;
        font-size: 18px;
        margin-bottom: 16px;
        margin-top: 16px;
        line-height: 1.2;
    }
`
const StyledText = styled(Text)`
    font-size: 2.4rem;

    @media ${device.tabletL} {
        font-size: 18px;
        text-align: center;
    }
`
const StyledNote = styled(Text)`
    font-size: 20px;
    line-height: 30px;
    color: #999999;
    margin-top: 10px;

    @media ${device.tabletL} {
        font-size: 16px;
        text-align: center;
    }
`
const ImageTag = styled.img`
    width: 100%;
    height: 100%;
`
const ExchangeSteps = () => {
    return (
        <Section>
            <StyledHeader type="page-title" align="center" as="h2">
                {localize('3 steps for faster deposits and withdrawals')}
            </StyledHeader>
            <CardContainer>
                <Card>
                    <Row>
                        <ImageTag src={RightAd} alt="" />
                    </Row>
                    <StyledCardHeader mt="0.8rem" mb="0.8rem" as="h4">
                        {localize('1. Find or create an ad')}
                    </StyledCardHeader>
                    <StyledText>
                        {localize(
                            'Pick the best rates and place an order, or create an ad for the rates you want.',
                        )}
                    </StyledText>
                </Card>
                <Card>
                    <Row>
                        <ImageTag src={SettlePayment} alt="" />
                    </Row>
                    <StyledCardHeader mt="0.8rem" mb="0.8rem" as="h4">
                        {localize('2. Send or receive payment')}
                    </StyledCardHeader>
                    <StyledText>
                        {localize('Settle the payment with the counterparty of your transaction.')}
                    </StyledText>
                </Card>
                <Card>
                    <Row>
                        <ImageTag src={CompleteOrder} alt="" />
                    </Row>
                    <StyledCardHeader mt="0.8rem" mb="0.8rem" as="h4">
                        {localize('3. Complete the transaction')}
                    </StyledCardHeader>
                    <StyledText>
                        {localize('Every order must be completed and confirmed within 1 hour.')}
                    </StyledText>
                    <StyledNote>
                        {localize(
                            'Note: Funds are only released when the transaction is complete.',
                        )}
                    </StyledNote>
                </Card>
            </CardContainer>
        </Section>
    )
}

export default ExchangeSteps
