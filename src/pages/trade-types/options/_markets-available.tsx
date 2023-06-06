import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import Forex from 'images/svg/trade-types/forex.svg'
import Commodities from 'images/svg/trade-types/commodities.svg'
import Derived from 'images/svg/trade-types/derived.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'

const MobileCardHeader = styled(Flex)`
    margin-bottom: 0.8rem;
    flex-direction: column;
    height: auto;

    @media (max-width: 680px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: start;

        > img {
            width: 48px;
            margin: 1.5rem 0;
            height: 48px;
        }
    }
`
const StyledText = styled(Text)`
    margin-top: 1.6rem;
    font-size: 20px;

    @media (max-width: 680px) {
        font-size: 16px;
        margin-top: 0;
    }
`
const StyledDescription = styled(Text)`
    font-size: 14px;
    margin-bottom: 2rem;

    @media (max-width: 425px) {
        font-size: 12px;
    }
`

const StyledCard = styled(Card)`
    max-block-size: 30.2rem;
`

const MarketsAvailable = () => {
    return (
        <>
            <SectionContainer background="white" padding="8rem 0" position="relative">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" type="section-title" mb="2.4rem">
                        {localize('Markets available for options trading')}
                    </Header>
                </SmallContainer>
                <MarketsCarousel>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <StyledCard>
                                <MobileCardHeader>
                                    <img src={Forex} alt="Forex" width="48" height="48" />

                                    <StyledText weight="bold">{localize('Forex')}</StyledText>
                                </MobileCardHeader>
                                <StyledDescription>
                                    {localize(
                                        'Take part in the world’s largest financial market. Trade digital options and Call/Put Spreads on major, minor, and smart forex pairs.',
                                    )}
                                </StyledDescription>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets/forex/"
                                />
                            </StyledCard>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <StyledCard>
                                <MobileCardHeader>
                                    <img
                                        src={Derived}
                                        alt="Synthetic indices"
                                        width="48"
                                        height="48"
                                    />
                                    <StyledText weight="bold">{localize('Derived')}</StyledText>
                                </MobileCardHeader>
                                <StyledDescription>
                                    {localize(
                                        'Enjoy trading a wide range of offerings that mimic characteristics of financial markets or are derived from them.',
                                    )}
                                </StyledDescription>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets/synthetic/"
                                />
                            </StyledCard>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <StyledCard>
                                <MobileCardHeader>
                                    <img
                                        src={StockIndices}
                                        alt="Stocks & indices"
                                        width="48"
                                        height="48"
                                    />

                                    <StyledText weight="bold">
                                        {localize('Stocks & indices')}
                                    </StyledText>
                                </MobileCardHeader>
                                <StyledDescription>
                                    {localize(
                                        'Go long or short on our OTC German index and utilise leverage to increase your potential profit.',
                                    )}
                                </StyledDescription>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets/stock/"
                                />
                            </StyledCard>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <StyledCard>
                                <MobileCardHeader>
                                    <img
                                        src={Commodities}
                                        alt="Commodities"
                                        width="48"
                                        height="48"
                                    />
                                    <StyledText weight="bold">{localize('Commodities')}</StyledText>
                                </MobileCardHeader>
                                <StyledDescription>
                                    {localize(
                                        'Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits.',
                                    )}
                                </StyledDescription>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets/commodities/"
                                />
                            </StyledCard>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                </MarketsCarousel>
            </SectionContainer>
        </>
    )
}

export default MarketsAvailable
