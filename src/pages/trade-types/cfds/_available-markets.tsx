import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import Forex from 'images/svg/trade-types/forex.svg'
import ETFs from 'images/svg/markets/etfs.svg'
import Cryptocurrencies from 'images/svg/trade-types/cryptocurrencies.svg'
import Commodities from 'images/svg/trade-types/commodities.svg'
import Derived from 'images/svg/trade-types/derived.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'

const MobileCardHeader = styled(Flex)`
    margin-bottom: 0.8rem;
    flex-direction: column;
    height: auto;
    @media (max-width: 680px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: start;

        > img {
            margin: 2.5rem 0;
            width: 48px;
            height: 48px;
        }
    }
`
const StyledText = styled(Text)`
    margin-top: 1.6rem;
    font-size: 20px;

    @media (max-width: 680px) {
        font-size: 16px;
        margin-top: 0;
    }
`

const StyledDescription = styled(Text)`
    font-size: 14px;
    margin-bottom: 2rem;

    @media (max-width: 425px) {
        font-size: 12px;
    }
`

const StyledCard = styled(Card)`
    max-block-size: 33rem;
`

const available_markets = [
    {
        name: 'Forex',
        img_src: Forex,
        img_alt: 'forex',
        text: <Localize translate_text="Forex" />,
        description: (
            <Localize translate_text="Access over 50 currency pairs and trade with leverage up to 1:1000 to increase your market exposure." />
        ),
        eu_description: (
            <Localize translate_text="Access over 30 currency pairs and trade with leverage up to 1:30 to increase your market exposure." />
        ),
        learn_more_path: '/markets/forex/',
    },
    {
        name: 'Derived',
        img_src: Derived,
        img_alt: 'derived',
        text: <Localize translate_text="Derived" />,
        description: (
            <Localize translate_text="Enjoy trading a wide range of offerings that mimic characteristics of financial markets or are derived from them." />
        ),
        eu_description: (
            <Localize translate_text="Enjoy trading a wide range of offerings that mimic characteristics of financial markets." />
        ),
        learn_more_path: '/markets/synthetic/',
    },
    {
        name: 'Stock Indices',
        img_src: StockIndices,
        img_alt: 'stock indices',
        text: <Localize translate_text="Stocks & indices" />,
        description: (
            <Localize translate_text="Go long or short on our OTC German index and utilise leverage to increase your potential profit." />
        ),
        learn_more_path: '/markets/stock/',
    },
    {
        name: 'ETFs',
        img_src: ETFs,
        img_alt: 'ETFs',
        text: <Localize translate_text="Exchange-traded funds (ETFs)" />,
        description: (
            <Localize translate_text="_t_ETFs allow you to diversify your portfolio with various assets that track bonds, commodities, and indices, without the high cost of owning the underlying assets._t_" />
        ),
        learn_more_path: '/markets/exchange-traded-funds/',
    },
    {
        name: 'Cryptocurrencies',
        img_src: Cryptocurrencies,
        img_alt: 'cryptocurrencies',
        text: <Localize translate_text="Cryptocurrencies" />,
        description: (
            <Localize translate_text="Trade on the world’s most popular cryptocurrencies and potentially profit from correctly anticipating price movements." />
        ),
        learn_more_path: '/markets/cryptocurrencies/',
    },
    {
        name: 'Commodities',
        img_src: Commodities,
        img_alt: 'commodities',
        text: <Localize translate_text="Commodities" />,
        description: (
            <Localize translate_text="Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits." />
        ),
        eu_description: (
            <Localize translate_text="Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits." />
        ),
        learn_more_path: '/markets/commodities/',
    },
]

const eu_restricted_markets = ['ETFs', 'Basket Indices']

const eu_available_markets = available_markets.filter(
    (el) => !eu_restricted_markets.includes(el.name),
)

const AvailableMarkets = () => {
    const { is_eu, is_row } = useRegion()

    return (
        <SectionContainer background="white" padding="8rem 0" position="relative">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="2.4rem">
                    {localize('Markets available for CFD trading')}
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
                                        <StyledCard>
                                            <MobileCardHeader>
                                                <img
                                                    src={market.img_src}
                                                    alt={market.img_alt}
                                                    width="48"
                                                    height="48"
                                                />

                                                <StyledText weight="bold">{market.text}</StyledText>
                                            </MobileCardHeader>
                                            <StyledDescription>
                                                {is_eu
                                                    ? market.eu_description || market.description
                                                    : market.description}
                                            </StyledDescription>
                                            <LearnMore
                                                text={<Localize translate_text="Learn more" />}
                                                to={market.learn_more_path}
                                            />
                                        </StyledCard>
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
                                        <StyledCard>
                                            <MobileCardHeader>
                                                <img
                                                    src={market.img_src}
                                                    alt={market.img_alt}
                                                    width="48"
                                                    height="48"
                                                />

                                                <StyledText weight="bold">{market.text}</StyledText>
                                            </MobileCardHeader>
                                            <StyledDescription>
                                                {is_eu
                                                    ? market.eu_description || market.description
                                                    : market.description}
                                            </StyledDescription>
                                            <LearnMore
                                                text={<Localize translate_text="Learn more" />}
                                                to={market.learn_more_path}
                                            />
                                        </StyledCard>
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
