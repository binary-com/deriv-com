import React from 'react'
import styled from 'styled-components'
import RightAd from 'images/svg/lamp.svg'
import SettlePayment from 'images/svg/24.svg'
import CompleteOrder from 'images/svg/relaxing.svg'
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
    justify-content: center;
`

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    padding: 8rem auto;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 1px 0 0 var(--color-grey-8);

    @media ${device.tabletL} {
        padding: 40px 16px;
    }
`
const CardContainer = styled(Flex)`
    @media ${device.tabletL} {
        max-width: 58rem;
        flex-wrap: wrap;
    }
`
const Card = styled(Flex)`
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
        width: 390px;
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
        margin-top: 1.5rem;
        margin-bottom: 5rem;
    }
    @media ${device.mobileL} {
        margin-top: 0;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
`
const StyledCardHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
    }

    @media ${device.mobileL} {
        margin-bottom: 20px;
        margin-top: 50px;
    }
`
const StyledText = styled(Text)`
    line-height: 31.2px;
    @media ${device.tabletL} {
        text-align: center;
        line-height: 26px;
    }
`

const IconTextRow = () => {
    return (
        <Section>
            <StyledHeader
                type="heading-2"
                align="center"
                mb="8rem"
                pl="5rem"
                pr="5rem"
                as="h2"
                color="black-3"
            >
                {localize('Enjoy weekend trading on Deriv and get the most out of your trades')}
            </StyledHeader>
            <CardContainer>
                <Card direction="column">
                    <Row>
                        <img src={RightAd} alt="" width="95px" />
                    </Row>
                    <Row>
                        <Column></Column>
                        <Column>
                            <StyledCardHeader
                                mt="6.5rem"
                                mb="0.8rem"
                                type="subtitle-1"
                                as="h4"
                                color="black-3"
                            >
                                {localize('Opportunity knocks')}
                            </StyledCardHeader>
                            <StyledText size="var(--text-size-m)" color="black-3">
                                {localize(
                                    'Maximise your trading time on the markets that are open on weekends.',
                                )}
                            </StyledText>
                        </Column>
                    </Row>
                </Card>
                <Card direction="column">
                    <Row>
                        <img src={SettlePayment} alt="" width="95px" />
                    </Row>
                    <Row>
                        <Column></Column>
                        <Column>
                            <StyledCardHeader
                                mt="6.5rem"
                                mb="0.8rem"
                                type="subtitle-1"
                                as="h4"
                                color="black-3"
                            >
                                {localize('Trade anytime')}
                            </StyledCardHeader>
                            <StyledText size="var(--text-size-m)" color="black-3">
                                {localize('Trade any time of the day, at your convenience.')}
                            </StyledText>
                        </Column>
                    </Row>
                </Card>
                <Card direction="column">
                    <Row>
                        <img src={CompleteOrder} alt="" width="120px" />
                    </Row>
                    <Row>
                        <Column></Column>
                        <Column>
                            <StyledCardHeader
                                mt="6.5rem"
                                mb="0.8rem"
                                type="subtitle-1"
                                as="h4"
                                color="black-3"
                            >
                                {localize('Fewer distractions')}
                            </StyledCardHeader>
                            <StyledText size="var(--text-size-m)" color="black-3">
                                {localize(
                                    'Trade when you’re free from the distractions of weekday responsibilities.',
                                )}
                            </StyledText>
                        </Column>
                    </Row>
                </Card>
            </CardContainer>
        </Section>
    )
}

export default IconTextRow
