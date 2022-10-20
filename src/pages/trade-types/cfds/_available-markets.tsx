import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import Forex from 'images/svg/trade-types/forex.svg'
import Commodities from 'images/svg/trade-types/commodities.svg'
import Derived from 'images/svg/trade-types/derived.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'
import Cryptocurrencies from 'images/svg/trade-types/cryptocurrencies.svg'
import { TString } from 'types/generics'

type TAvailableMarketContent = {
    name: string
    img_src: string
    text: TString
    description: TString
    learn_more_path: string
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
const StyledText = styled(Header)`
    margin-top: 1.6rem;
    font-size: 1.6rem;

    @media (max-width: 680px) {
        font-size: 18px;
        margin-top: 0;
    }
`

const available_markets_non_uk: TAvailableMarketContent = [
    {
        img_src: Forex,
        name: 'Forex',
        text: '_t_Forex_t_',
        description:
            '_t_Access over 50 currency pairs and trade with leverage up to 1:1000 to increase your market exposure._t_',
        learn_more_path: '/markets/forex/',
    },
    {
        img_src: Derived,
        name: 'Derived',
        text: '_t_Derived_t_',
        description:
            '_t_Enjoy trading markets and indices mimicking actual market movements, with little to no disruption from real-world events._t_',
        learn_more_path: '/markets/synthetic/',
    },
    {
        img_src: StockIndices,
        name: 'Stock indices',
        text: '_t_Stocks & indices_t_',
        description:
            '_t_Go long or short on our OTC German index and utilise leverage to increase your potential profit._t_',
        learn_more_path: '/markets/stock/',
    },
    {
        img_src: Cryptocurrencies,
        name: 'Cryptocurrencies',
        text: '_t_Cryptocurrencies_t_',
        description:
            '_t_Trade on the world’s most popular cryptocurrencies and potentially profit from correctly anticipating price movements._t_',
        learn_more_path: '/markets/cryptocurrencies/',
    },
    {
        img_src: Commodities,
        name: 'Commodities',
        text: '_t_Commodities_t_',
        description:
            '_t_Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits._t_',
        learn_more_path: '/markets/commodities/',
    },
]

const available_markets_uk: TAvailableMarketContent = [
    {
        img_src: Forex,
        name: 'Corex',
        text: '_t_Forex_t_',
        description:
            '_t_Access over 30+ currency pairs and trade with leverage up to 1:30 to increase your market exposure._t_',
        learn_more_path: '/markets/forex/',
    },
    {
        img_src: Derived,
        name: 'Derived',
        text: '_t_Derived_t_',
        description:
            '_t_Enjoy trading markets and indices mimicking actual market movements, with little to no disruption from real-world events._t_',
        learn_more_path: '/markets/synthetic/',
    },
    {
        img_src: StockIndices,
        name: 'Stock indices',
        text: '_t_Stocks & indices_t_',
        description:
            '_t_Go long or short on our OTC German index and utilise leverage to increase your potential profit._t_',
        learn_more_path: '/markets/stock/',
    },
    {
        img_src: Commodities,
        name: 'Commodities',
        text: '_t_Commodities_t_',
        description:
            '_t_Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits._t_',
        learn_more_path: '/markets/commodities/',
    },
]

const AvailableMarkets = () => {
    const { is_uk } = useCountryRule()
    const available_markets = is_uk ? available_markets_uk : available_markets_non_uk

    return (
        <SectionContainer background="white" padding="8rem 0" position="relative">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="2.4rem">
                    {localize('Markets available for CFD trading')}
                </Header>
            </SmallContainer>
            <>
                <MarketsCarousel>
                    {available_markets.map((market) => (
                        <MarketsCarousel.Item key={market.name}>
                            <MarketsItem>
                                <Card>
                                    <MobileCardHeader>
                                        <img
                                            src={market.img_src}
                                            alt={market.name}
                                            width="64"
                                            height="64"
                                        />
                                        <StyledText weight="bold">
                                            {localize(market.text)}
                                        </StyledText>
                                    </MobileCardHeader>
                                    <Header weight="normal" type="main-paragraph">
                                        {localize(market.description)}
                                    </Header>
                                    <LearnMore
                                        text={<Localize translate_text="_t_Learn more_t_" />}
                                        to={market.learn_more_path}
                                    />
                                </Card>
                            </MarketsItem>
                        </MarketsCarousel.Item>
                    ))}
                </MarketsCarousel>
            </>
        </SectionContainer>
    )
}

export default AvailableMarkets
