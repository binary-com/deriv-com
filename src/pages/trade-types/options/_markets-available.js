import React from 'react'
import { Helmet } from 'react-helmet'
import Carousel from '../components/_carousel'
import { SmallContainer, Card } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import Forex from 'images/svg/trade-types/forex.svg'
import Commodities from 'images/svg/trade-types/commodities.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'

const MarketsAvailable = () => {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/css/swiper.css" />
            </Helmet>
            <SectionContainer background="white" padding="8rem 0">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" mb="2.4rem">
                        {localize('Markets available for options trading')}
                    </Header>
                    <Carousel>
                        <Carousel.Item>
                            <Flex ai="center" height="unset" p="4px 0">
                                <Card>
                                    <div>
                                        <Forex />
                                    </div>
                                    <Text weight="bold" mt="1.6rem" mb="0.8rem">
                                        {localize('Forex')}
                                    </Text>
                                    <Text>
                                        {localize(
                                            'Take part in the world’s largest financial market. Trade digital options on major, minor, and smart forex pairs.',
                                        )}
                                    </Text>
                                </Card>
                            </Flex>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Flex ai="center" height="unset" p="4px 0">
                                <Card>
                                    <div>
                                        <SyntheticIndices />
                                    </div>
                                    <Text weight="bold" mt="1.6rem" mb="0.8rem">
                                        {localize('Synthetic indices')}
                                    </Text>
                                    <Text>
                                        {localize(
                                            'Trade digital options, lookbacks, and Spread Up/Spread down 24/7 on our synthetic indices that are free from real-world disruptions.',
                                        )}
                                    </Text>
                                </Card>
                            </Flex>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Flex ai="center" height="unset" p="4px 0">
                                <Card>
                                    <div>
                                        <Commodities />
                                    </div>
                                    <Text weight="bold" mt="1.6rem" mb="0.8rem">
                                        {localize('Commodities')}
                                    </Text>
                                    <Text>
                                        {localize(
                                            "Speculate on the price movements of the world's major commodities – silver, gold, oil, and energy.",
                                        )}
                                    </Text>
                                </Card>
                            </Flex>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Flex ai="center" height="unset" p="4px 0">
                                <Card>
                                    <div>
                                        <StockIndices />
                                    </div>
                                    <Text weight="bold" mt="1.6rem" mb="0.8rem">
                                        {localize('Stock indices')}
                                    </Text>
                                    <Text>
                                        {localize(
                                            'Trade digital options on stock indices and profit from the price movements in our competitively priced asset baskets.',
                                        )}
                                    </Text>
                                </Card>
                            </Flex>
                        </Carousel.Item>
                    </Carousel>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default MarketsAvailable
