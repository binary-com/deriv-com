import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
import Forex from 'images/svg/trade-types/forex.svg'
import Commodities from 'images/svg/trade-types/commodities.svg'
import Derived from 'images/svg/trade-types/derived.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'

const MobileCardHeader = styled(Flex)`
    margin-bottom: 0.8rem;
    flex-direction: column;
    height: auto;

    @media (max-width: 680px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;

        > img {
            width: 48px;
            height: 48px;
        }
    }
`
const StyledText = styled(Header)`
    margin-top: 1.6rem;

    @media (max-width: 680px) {
        font-size: 18px;
        margin-top: 0;
    }
`

const MarketsAvailable = () => {
    return (
        <>
            <SectionContainer background="white" padding="8rem 0" position="relative">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" type="section-title" mb="2.4rem">
                        <Localize translate_text="_t_Markets available for options trading_t_" />
                    </Header>
                </SmallContainer>
                <MarketsCarousel>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img src={Forex} alt="Forex" width="64" height="64" />

                                    <StyledText type="paragraph-1">
                                        <Localize translate_text="_t_Forex_t_" />
                                    </StyledText>
                                </MobileCardHeader>
                                <Text>
                                    <Localize translate_text="_t_Take part in the world’s largest financial market. Trade digital options and Call/Put Spreads on major, minor, and smart forex pairs._t_" />
                                </Text>
                                <LearnMore text="_t_Learn more_t_" to="/markets/forex/" />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img
                                        src={Derived}
                                        alt="Synthetic indices"
                                        width="64"
                                        height="64"
                                    />
                                    <StyledText type="paragraph-1">
                                        <Localize translate_text="_t_Derived_t_" />
                                    </StyledText>
                                </MobileCardHeader>
                                <Text>
                                    <Localize translate_text="_t_Trade digital options, lookbacks, and Call/Put Spreads 24/7 on our synthetic indices that are free from real-world disruptions._t_" />
                                </Text>
                                <LearnMore text="_t_Learn more_t_" to="/markets/synthetic/" />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img
                                        src={StockIndices}
                                        alt="Stocks & indices"
                                        width="64"
                                        height="64"
                                    />

                                    <StyledText type="paragraph-1">
                                        <Localize translate_text="_t_Stocks & indices_t_" />
                                    </StyledText>
                                </MobileCardHeader>
                                <Text>
                                    <Localize translate_text="_t_Trade digital options on stocks & indices and profit from the price movements in our competitively priced asset baskets._t_" />
                                </Text>
                                <LearnMore text="_t_Learn more_t_" to="/markets/stock/" />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img
                                        src={Commodities}
                                        alt="Commodities"
                                        width="64"
                                        height="64"
                                    />
                                    <StyledText type="paragraph-1">
                                        <Localize translate_text="_t_Commodities_t_" />
                                    </StyledText>
                                </MobileCardHeader>
                                <Text>
                                    <Localize translate_text="_t_Speculate on the price movements of the world's major commodities – silver, gold, oil, and energy._t_" />
                                </Text>
                                <LearnMore text="_t_Learn more_t_" to="/markets/commodities/" />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                </MarketsCarousel>
            </SectionContainer>
        </>
    )
}

export default MarketsAvailable
