import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import Forex from 'images/svg/trade-types/forex.svg'
import ETFs from 'images/svg/markets/etfs.svg'
import Cryptocurrencies from 'images/svg/markets/cryptocurrencies-new.svg'
import Commodities from 'images/svg/trade-types/commodities.svg'
import Derived from 'images/svg/trade-types/derived.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'
import { TString } from 'types/generics'
import useBuildVariant from 'features/hooks/use-build-variant'

type TAvailableMarkets = {
    name: string
    img_src: string
    img_alt: TString
    text: TString
    description: TString
    eu_description?: TString
    learn_more_path: string
}

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

const available_markets: TAvailableMarkets[] = [
    {
        name: 'Forex',
        img_src: Forex,
        img_alt: '_t_forex_t_',
        text: '_t_Forex_t_',
        description:
            '_t_Access over 50 currency pairs and trade with leverage up to 1:1000 to increase your market exposure._t_',
        eu_description:
            '_t_Access over 30 currency pairs and trade with leverage up to 1:30 to increase your market exposure._t_',
        learn_more_path: '/markets/forex/',
    },
    {
        name: 'Derived',
        img_src: Derived,
        img_alt: '_t_derived_t_',
        text: '_t_Derived indices_t_',
        description:
            '_t_Enjoy trading a wide range of offerings that mimic characteristics of financial markets or are derived from them._t_',
        eu_description:
            '_t_Enjoy trading a wide range of offerings that mimic characteristics of financial markets._t_',
        learn_more_path: '/markets/synthetic/',
    },
    {
        name: 'Stock Indices',
        img_src: StockIndices,
        img_alt: '_t_stock indices_t_',
        text: '_t_Stocks & indices_t_',
        description:
            '_t_Go long or short on our OTC German index and utilise leverage to increase your potential profit._t_',
        learn_more_path: '/markets/stock/',
    },
    {
        name: 'ETFs',
        img_src: ETFs,
        img_alt: '_t_ETFs_t_',
        text: '_t_Exchange-traded funds (ETFs)_t_',
        description:
            '_t_ETFs allow you to diversify your portfolio with various assets that track bonds, commodities, and indices, without the high cost of owning the underlying assets._t_',
        learn_more_path: '/markets/exchange-traded-funds/',
    },
    {
        name: 'Cryptocurrencies',
        img_src: Cryptocurrencies,
        img_alt: '_t_cryptocurrencies_t_',
        text: '_t_Cryptocurrencies_t_',
        description:
            '_t_Trade on the world’s most popular cryptocurrencies and potentially profit from correctly anticipating price movements._t_',
        learn_more_path: '/markets/cryptocurrencies/',
    },
    {
        name: 'Commodities',
        img_src: Commodities,
        img_alt: '_t_commodities_t_',
        text: '_t_Commodities_t_',
        description:
            '_t_Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits._t_',
        eu_description:
            '_t_Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits._t_',
        learn_more_path: '/markets/commodities/',
    },
]

const eu_restricted_markets = ['Basket Indices']

const eu_available_markets = available_markets.filter(
    (el) => !eu_restricted_markets.includes(el.name),
)

const AvailableMarkets = () => {
    const { region } = useBuildVariant()

    return (
        <SectionContainer background="white" padding="8rem 0" position="relative">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="2.4rem">
                    <Localize translate_text="_t_Markets available for CFD trading_t_" />
                </Header>
            </SmallContainer>
            {/* TODO: refactor to make it more DRY */}
            {region === "row" && (
                <MarketsCarousel>
                    {available_markets.map(
                        ({
                            name,
                            description,
                            eu_description,
                            img_alt,
                            img_src,
                            learn_more_path,
                            text,
                        }) => {
                            return (
                                <MarketsCarousel.Item key={name}>
                                    <MarketsItem>
                                        <StyledCard>
                                            <MobileCardHeader>
                                                <img
                                                    src={img_src}
                                                    alt={localize(img_alt)}
                                                    width="48"
                                                    height="48"
                                                />
                                                <StyledText weight="bold">
                                                    <Localize translate_text={text} />
                                                </StyledText>
                                            </MobileCardHeader>
                                            <StyledDescription>
                                                {region !== "row" && eu_description ? (
                                                    <Localize translate_text={eu_description} />
                                                ) : (
                                                    <Localize translate_text={description} />
                                                )}
                                            </StyledDescription>
                                            <LearnMore
                                                text="_t_Learn more_t_"
                                                to={learn_more_path}
                                            />
                                        </StyledCard>
                                    </MarketsItem>
                                </MarketsCarousel.Item>
                            )
                        },
                    )}
                </MarketsCarousel>
            )}
            {region === "eu" && (
                <MarketsCarousel>
                    {eu_available_markets.map(
                        ({
                            name,
                            img_src,
                            img_alt,
                            text,
                            eu_description,
                            description,
                            learn_more_path,
                        }) => {
                            return (
                                <MarketsCarousel.Item key={name}>
                                    <MarketsItem>
                                        <StyledCard>
                                            <MobileCardHeader>
                                                <img
                                                    src={img_src}
                                                    alt={localize(img_alt)}
                                                    width="48"
                                                    height="48"
                                                />

                                                <StyledText weight="bold">
                                                    <Localize translate_text={text} />
                                                </StyledText>
                                            </MobileCardHeader>
                                            <StyledDescription>
                                                {region === "eu" && eu_description ? (
                                                    <Localize translate_text={eu_description} />
                                                ) : (
                                                    <Localize translate_text={description} />
                                                )}
                                            </StyledDescription>
                                            <LearnMore
                                                text="_t_Learn more_t_"
                                                to={learn_more_path}
                                            />
                                        </StyledCard>
                                    </MarketsItem>
                                </MarketsCarousel.Item>
                            )
                        },
                    )}
                </MarketsCarousel>
            )}
        </SectionContainer>
    )
}

export default AvailableMarkets
