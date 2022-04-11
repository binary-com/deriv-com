import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex, NonUK, UK } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { getCountryRule } from 'components/containers/visibility'
import Forex from 'images/svg/trade-types/forex.svg'
import Commodities from 'images/svg/trade-types/commodities.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'
import Cryptocurrencies from 'images/svg/trade-types/cryptocurrencies.svg'

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

const non_uk_available_markets = [
    {
        name: 'Forex',
        img_src: Forex,
        img_alt: 'forex',
        text: localize('Forex'),
        description: (
            <Localize translate_text="Access over 50 currency pairs and trade with leverage up to 1:1000 to increase your market exposure." />
        ),
        uk_eu_description: (
            <Localize translate_text="Access over 30+ currency pairs and trade with leverage up to 1:30 to increase your market exposure." />
        ),
        learn_more_path: '/markets/forex/',
    },
    {
        name: 'Synthetic Indices',
        img_src: SyntheticIndices,
        img_alt: 'synthetic indices',
        text: localize('Synthetic indices'),
        description: localize(
            'Trade synthetic indices on margin 24/7 without being affected by natural events and liquidity risks.',
        ),
        uk_eu_description: localize(
            'Trade synthetic indices on margin 24/7 without being affected by natural events and liquidity risks.',
        ),
        learn_more_path: '/markets/synthetic/',
    },
    {
        name: 'Commodities',
        img_src: Commodities,
        img_alt: 'commodities',
        text: localize('Commodities'),
        description: localize(
            'Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits.',
        ),
        uk_eu_description: localize(
            'Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits.',
        ),
        learn_more_path: '/markets/commodities/',
    },
    {
        name: 'Stock Indices',
        img_src: StockIndices,
        img_alt: 'stock indices',
        text: localize('Stock indices'),
        description: localize(
            'Go long or short on our OTC German index and utilise leverage to increase your potential profit.',
        ),
        uk_eu_description: localize(
            'Go long or short on our OTC German index and utilise leverage to increase your potential profit.',
        ),
        learn_more_path: '/markets/stock/',
    },
    {
        name: 'Cryptocurrencies',
        img_src: Cryptocurrencies,
        img_alt: 'cryptocurrencies',
        text: localize('Cryptocurrencies'),
        description: localize(
            'Trade on the world’s most popular cryptocurrencies and potentially profit from correctly anticipating price movements.',
        ),
        learn_more_path: '/markets/cryptocurrencies/',
    },
]

const uk_restricted_markets = ['Synthetic Indices', 'Cryptocurrencies']

const uk_available_markets = non_uk_available_markets.filter(
    (el) => !uk_restricted_markets.includes(el.name),
)

const AvailableMarkets = () => {
    const { is_uk_eu } = getCountryRule()

    return (
        <SectionContainer background="white" padding="8rem 0" position="relative">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="2.4rem">
                    {localize('Markets available for CFD trading')}
                </Header>
            </SmallContainer>
            <NonUK>
                <MarketsCarousel>
                    {non_uk_available_markets.map((market) => {
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

                                            <StyledText weight="bold">{market.text}</StyledText>
                                        </MobileCardHeader>
                                        <Text>
                                            {is_uk_eu
                                                ? market.uk_eu_description
                                                : market.description}
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
            </NonUK>
            <UK>
                <MarketsCarousel>
                    {uk_available_markets.map((market) => {
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

                                            <StyledText weight="bold">{market.text}</StyledText>
                                        </MobileCardHeader>
                                        <Text>
                                            {is_uk_eu
                                                ? market.uk_eu_description
                                                : market.description}
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
            </UK>
        </SectionContainer>
    )
}

export default AvailableMarkets
