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
import Cryptocurrencies from 'images/svg/trade-types/cryptocurrencies.svg'
import { DerivStore, DerivStoreType } from 'store'
import { EU, NonEU } from 'components/containers/visibility'

type AllMarketsType = {
    image: string
    title: 'Forex' | 'Synthetic indices' | 'Commodities' | 'Stock indices' | 'Cryptocurrencies'
    text: string | React.ReactNode
    url: string
}[]

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

const all_markets: AllMarketsType = [
    {
        image: Forex,
        title: 'Forex',
        text: (
            <>
                <EU>
                    <Localize translate_text="Access over 30+ currency pairs and trade with leverage up to 1:30 to increase your market exposure." />
                </EU>
                <NonEU>
                    <Localize translate_text="Access over 50 currency pairs and trade with leverage up to 1:1000 to increase your market exposure." />
                </NonEU>
            </>
        ),
        url: '/markets/forex/',
    },
    {
        image: SyntheticIndices,
        title: 'Synthetic indices',
        text: 'Trade synthetic indices on margin 24/7 without being affected by natural events and liquidity risks.',
        url: '/markets/synthetic/',
    },
    {
        image: Commodities,
        title: 'Commodities',
        text: 'Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits.',
        url: '/markets/commodities/',
    },
    {
        image: StockIndices,
        title: 'Stock indices',
        text: 'Go long or short on our OTC German index and utilise leverage to increase your potential profit.',
        url: '/markets/stock/',
    },
    {
        image: Cryptocurrencies,
        title: 'Cryptocurrencies',
        text: 'Trade on the world’s most popular cryptocurrencies and potentially profit from correctly anticipating price movements.',
        url: '/markets/cryptocurrencies/',
    },
]

const uk_exceptions = ['Synthetic indices', 'Cryptocurrencies']

const filterByUkExeptions = (markets: AllMarketsType) =>
    markets.filter(({ title }) => !uk_exceptions.includes(title))

const AvailableMarkets = () => {
    const { is_uk_country } = React.useContext<DerivStoreType>(DerivStore)

    return (
        <SectionContainer background="white" padding="8rem 0" position="relative">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="2.4rem">
                    {localize('Markets available for CFD trading')}
                </Header>
            </SmallContainer>
            <MarketsCarousel>
                {(is_uk_country ? filterByUkExeptions(all_markets) : all_markets).map(
                    ({ image, title, text, url }) => (
                        <MarketsCarousel.Item key={title}>
                            <MarketsItem>
                                <Card>
                                    <MobileCardHeader>
                                        <img src={image} alt={title} width="64" height="64" />
                                        <StyledText weight="bold">{localize(title)}</StyledText>
                                    </MobileCardHeader>
                                    <Text>{text}</Text>
                                    <LearnMore
                                        text={<Localize translate_text="Learn more" />}
                                        to={url}
                                    />
                                </Card>
                            </MarketsItem>
                        </MarketsCarousel.Item>
                    ),
                )}
            </MarketsCarousel>
        </SectionContainer>
    )
}

export default AvailableMarkets
