import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Carousel from '../components/_carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import Forex from 'images/svg/trade-types/forex.svg'
import Commodities from 'images/svg/trade-types/commodities.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'

const MobileCardHeader = styled(Flex)`
    margin-bottom: 0.8rem;
    flex-direction: column;
    height: auto;

    @media (max-width: 680px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;

        > svg {
            width: 48px;
            height: 48px;
        }
        ${Text} {
            font-size: 16px;
        }
    }
`

const AvailableMarkets = () => {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/css/swiper.css" />
            </Helmet>
            <SectionContainer background="white" padding="8rem 0" position="relative">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" mb="2.4rem">
                        {localize('Markets available for margin trading')}
                    </Header>
                </SmallContainer>
                <Carousel>
                    <Carousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <Forex />

                                    <Text weight="bold" mt="1.6rem">
                                        {localize('Forex')}
                                    </Text>
                                </MobileCardHeader>
                                <Text>
                                    {localize(
                                        'Access over 50 assets and also trade with up to 1000:1 leverage and zero commission on trades.',
                                    )}
                                </Text>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets#forex"
                                />
                            </Card>
                        </MarketsItem>
                    </Carousel.Item>
                    <Carousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <SyntheticIndices />

                                    <Text weight="bold" mt="1.6rem">
                                        {localize('Synthetic indices')}
                                    </Text>
                                </MobileCardHeader>
                                <Text>
                                    {localize(
                                        'Trade synthetic indices on margin 24/7 without being affected by natural events and liquidity risks.',
                                    )}
                                </Text>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets#synthetic"
                                />
                            </Card>
                        </MarketsItem>
                    </Carousel.Item>
                    <Carousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <Commodities />

                                    <Text weight="bold" mt="1.6rem">
                                        {localize('Commodities')}
                                    </Text>
                                </MobileCardHeader>
                                <Text>
                                    {localize(
                                        'Speculate on the price movements of silver, gold, oil, and more and use margin to amplify your possible profits.',
                                    )}
                                </Text>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets#commodities"
                                />
                            </Card>
                        </MarketsItem>
                    </Carousel.Item>
                    <Carousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <StockIndices />

                                    <Text weight="bold" mt="1.6rem">
                                        {localize('Stock indices')}
                                    </Text>
                                </MobileCardHeader>
                                <Text>
                                    {localize(
                                        'Go long or short on our OTC German index and utilise leverage to increase your potential profit.',
                                    )}
                                </Text>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets#stock"
                                />
                            </Card>
                        </MarketsItem>
                    </Carousel.Item>
                </Carousel>
            </SectionContainer>
        </>
    )
}

export default AvailableMarkets
