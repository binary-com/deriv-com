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

const MarketsAvailable = () => {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/css/swiper.css" />
            </Helmet>
            <SectionContainer background="white" padding="8rem 0" position="relative">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" mb="2.4rem">
                        {localize('Markets available for options trading')}
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
                                        'Take part in the world’s largest financial market. Trade digital options on major, minor, and smart forex pairs.',
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
                                        'Trade digital options, lookbacks, and Spread Up/Spread down 24/7 on our synthetic indices that are free from real-world disruptions.',
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
                                        "Speculate on the price movements of the world's major commodities – silver, gold, oil, and energy.",
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
                                        'Trade digital options on stock indices and profit from the price movements in our competitively priced asset baskets.',
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

export default MarketsAvailable
