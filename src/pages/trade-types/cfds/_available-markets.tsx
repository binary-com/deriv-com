import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import Forex from 'images/svg/trade-types/forex.svg'
import Commodities from 'images/svg/trade-types/commodities.svg'
import Derived from 'images/svg/trade-types/derived.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'
import Cryptocurrencies from 'images/svg/trade-types/cryptocurrencies.svg'
import { TString } from 'types/generics'

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

type AvailableMarket = {
    name: string
    img_src: string
    img_alt: string
    text: TString
    description: TString
    eu_description?: TString
    learn_more_path: string
}

const available_markets: AvailableMarket[] = [
    {
        name: 'Forex',
        img_src: Forex,
        img_alt: 'forex',
        text: '_t_Forex_t_',
        description:
            '_t_Access over 50 currency pairs and trade with leverage up to 1:1000 to increase your market exposure._t_',
        eu_description:
            '_t_Access over 30+ currency pairs and trade with leverage up to 1:30 to increase your market exposure._t_',
        learn_more_path: '/markets/forex/',
    },
    {
        name: 'Derived',
        img_src: Derived,
        img_alt: 'derived',
        text: '_t_Derived_t_',
        description:
            '_t_Enjoy trading markets and indices mimicking actual market movements, with little to no disruption from real-world events._t_',
        learn_more_path: '/markets/synthetic/',
    },
    {
        name: 'Stock Indices',
        img_src: StockIndices,
        img_alt: 'stock indices',
        text: '_t_Stocks & indices_t_',
        description:
            '_t_Go long or short on our OTC German index and utilise leverage to increase your potential profit._t_',
        learn_more_path: '/markets/stock/',
    },
    {
        name: 'Cryptocurrencies',
        img_src: Cryptocurrencies,
        img_alt: 'cryptocurrencies',
        text: '_t_Cryptocurrencies_t_',
        description:
            '_t_Trade on the world’s most popular cryptocurrencies and potentially profit from correctly anticipating price movements._t_',
        learn_more_path: '/markets/cryptocurrencies/',
    },
    {
        name: 'Commodities',
        img_src: Commodities,
        img_alt: 'commodities',
        text: '_t_Commodities_t_',
        description:
            '_t_Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits._t_',
        eu_description:
            '_t_Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits._t_',
        learn_more_path: '/markets/commodities/',
    },
]

const eu_restricted_markets = ['Basket Indices']

const eu_available_markets: AvailableMarket[] = available_markets.filter(
    (el) => !eu_restricted_markets.includes(el.name),
)

const AvailableMarkets = () => {
    const { is_eu, is_row } = useRegion()

    return (
        <SectionContainer background="white" padding="8rem 0" position="relative">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="2.4rem">
                    <Localize translate_text="_t_Markets available for CFD trading_t_" />
                </Header>
            </SmallContainer>
            {/* TODO: refactor to make it more DRY */}
            {is_row && (
                <>
                    <MarketsCarousel>
                        {available_markets.map((market) => {
                            return (
                                <MarketsCarousel.Item key={market.name}>
                                    <MarketsItem>
                                        <Card>
                                            <MobileCardHeader>
                                                <img
                                                    src={market.img_src}
                                                    alt={market.img_alt}
                                                    width="64"
                                                    height="64"
                                                />

                                                <StyledText weight="bold">
                                                    <Localize translate_text={market.text} />
                                                </StyledText>
                                            </MobileCardHeader>
                                            <Text>
                                                <Localize
                                                    translate_text={
                                                        is_eu
                                                            ? market.eu_description ||
                                                              market.description
                                                            : market.description
                                                    }
                                                />
                                            </Text>
                                            <LearnMore
                                                text={<Localize translate_text="Learn more" />}
                                                to={market.learn_more_path}
                                            />
                                        </Card>
                                    </MarketsItem>
                                </MarketsCarousel.Item>
                            )
                        })}
                    </MarketsCarousel>
                </>
            )}
            {is_eu && (
                <>
                    <MarketsCarousel>
                        {eu_available_markets.map((market) => {
                            return (
                                <MarketsCarousel.Item key={market.name}>
                                    <MarketsItem>
                                        <Card>
                                            <MobileCardHeader>
                                                <img
                                                    src={market.img_src}
                                                    alt={market.img_alt}
                                                    width="64"
                                                    height="64"
                                                />

                                                <StyledText weight="bold">
                                                    <Localize translate_text={market.text} />
                                                </StyledText>
                                            </MobileCardHeader>
                                            <Text>
                                                <Localize
                                                    translate_text={
                                                        is_eu
                                                            ? market.eu_description ||
                                                              market.description
                                                            : market.description
                                                    }
                                                />
                                            </Text>
                                            <LearnMore
                                                text={<Localize translate_text="Learn more" />}
                                                to={market.learn_more_path}
                                            />
                                        </Card>
                                    </MarketsItem>
                                </MarketsCarousel.Item>
                            )
                        })}
                    </MarketsCarousel>
                </>
            )}
        </SectionContainer>
    )
}

export default AvailableMarkets
