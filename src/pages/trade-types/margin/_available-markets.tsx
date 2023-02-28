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
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'
import useRegion from 'components/hooks/use-region'

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
const StyledText = styled(Text)`
    margin-top: 1.6rem;

    @media (max-width: 680px) {
        font-size: 18px;
        margin-top: 0;
    }
`

const AvailableMarkets = () => {
    const { is_eu } = useRegion()
    return (
        <>
            <SectionContainer background="white" padding="8rem 0" position="relative">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" type="section-title" mb="2.4rem">
                        <Localize translate_text="_t_Markets available for margin trading_t_" />
                    </Header>
                </SmallContainer>
                <MarketsCarousel>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img src={Forex} alt="Forex" width="64" height="64" />

                                    <StyledText weight="bold">
                                        <Localize translate_text="_t_Forex_t_" />
                                    </StyledText>
                                </MobileCardHeader>
                                <Text>
                                    {is_eu ? (
                                        <Localize translate_text="_t_Access over 30 assets and also trade with up to 1:30 leverage and zero commission on trades._t_" />
                                    ) : (
                                        <Localize translate_text="_t_Access over 50 assets and also trade with up to 1:1000 leverage and zero commission on trades._t_" />
                                    )}
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
                                        src={SyntheticIndices}
                                        alt="Synthetic indices"
                                        width="64"
                                        height="64"
                                    />

                                    <StyledText weight="bold">
                                        <Localize translate_text="_t_Synthetic indices_t_" />
                                    </StyledText>
                                </MobileCardHeader>
                                <Text>
                                    <Localize translate_text="_t_Trade synthetic indices on margin 24/7 without being affected by natural events and liquidity risks._t_" />
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
                                        src={Commodities}
                                        alt="Commodities"
                                        width="64"
                                        height="64"
                                    />

                                    <StyledText weight="bold">
                                        <Localize translate_text="_t_Commodities_t_" />
                                    </StyledText>
                                </MobileCardHeader>
                                <Text>
                                    <Localize translate_text="_t_Speculate on the price movements of silver, gold, oil, and more and use margin to amplify your possible profits._t_" />
                                </Text>
                                <LearnMore text="_t_Learn more_t_" to="/markets/commodities/" />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img
                                        src={StockIndices}
                                        alt="Stock indices"
                                        width="64"
                                        height="64"
                                    />

                                    <StyledText weight="bold">
                                        <Localize translate_text="_t_Stock indices_t_" />
                                    </StyledText>
                                </MobileCardHeader>
                                <Text>
                                    <Localize translate_text="_t_Go long or short on our OTC German index and utilise leverage to increase your potential profit._t_" />
                                </Text>
                                <LearnMore text="_t_Learn more_t_" to="/markets/stock/" />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                </MarketsCarousel>
            </SectionContainer>
        </>
    )
}

export default AvailableMarkets
