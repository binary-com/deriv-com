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
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'
import { DerivStore, DerivStoreType } from 'store'

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
    const { is_eu_country } = React.useContext<DerivStoreType>(DerivStore)
    return (
        <>
            <SectionContainer background="white" padding="8rem 0" position="relative">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" type="section-title" mb="2.4rem">
                        {localize('Markets available for margin trading')}
                    </Header>
                </SmallContainer>
                <MarketsCarousel>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img src={Forex} alt="" width="64" height="64" />

                                    <StyledText weight="bold">{localize('Forex')}</StyledText>
                                </MobileCardHeader>
                                <Text>
                                    {is_eu_country ? (
                                        <Localize translate_text="Access over 30 assets and also trade with up to 1:30 leverage and zero commission on trades." />
                                    ) : (
                                        <Localize translate_text="Access over 50 assets and also trade with up to 1:1000 leverage and zero commission on trades." />
                                    )}
                                </Text>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets/forex/"
                                />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img src={SyntheticIndices} alt="" width="64" height="64" />

                                    <StyledText weight="bold">
                                        {localize('Synthetic indices')}
                                    </StyledText>
                                </MobileCardHeader>
                                <Text>
                                    {localize(
                                        'Trade synthetic indices on margin 24/7 without being affected by natural events and liquidity risks.',
                                    )}
                                </Text>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets/synthetic/"
                                />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img src={Commodities} alt="" width="64" height="64" />

                                    <StyledText weight="bold">{localize('Commodities')}</StyledText>
                                </MobileCardHeader>
                                <Text>
                                    {localize(
                                        'Speculate on the price movements of silver, gold, oil, and more and use margin to amplify your possible profits.',
                                    )}
                                </Text>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets/commodities/"
                                />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img src={StockIndices} alt="" width="64" height="64" />

                                    <StyledText weight="bold">
                                        {localize('Stock indices')}
                                    </StyledText>
                                </MobileCardHeader>
                                <Text>
                                    {localize(
                                        'Go long or short on our OTC German index and utilise leverage to increase your potential profit.',
                                    )}
                                </Text>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets/stock/"
                                />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                </MarketsCarousel>
            </SectionContainer>
        </>
    )
}

export default AvailableMarkets
