import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex, ROW, UK, EU } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import Forex from 'images/svg/trade-types/forex.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import BasketIndices from 'images/svg/trade-types/basket-indices.svg'

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

const available_markets = [
    {
        name: 'Forex',
        img_src: Forex,
        img_alt: 'forex',
        text: <Localize translate_text="Forex" />,
        description: (
            <Localize translate_text="Speculate on the price movements of major forex pairs and increase your profit potential without losing more than your stake." />
        ),
        learn_more_path: '/markets/forex/',
    },
    {
        name: 'Synthetic Indices',
        img_src: SyntheticIndices,
        img_alt: 'synthetic indices',
        text: <Localize translate_text="Synthetic indices" />,
        description: (
            <Localize translate_text="Trade multipliers on synthetic indices that are available 24/7 and increase your profit potential multiples times while limiting your risk." />
        ),
        learn_more_path: '/markets/synthetic/',
    },
    {
        name: 'Basket Indices',
        img_src: BasketIndices,
        img_alt: 'basket indices',
        text: <Localize translate_text="Basket indices" />,
        description: (
            <Localize translate_text="In trading basket indices, the change in the value of one currency is measured against a basket of the most liquid currencies in the world." />
        ),
        learn_more_path: '/markets/basket-indices/',
    },
]

const uk_restricted_markets = ['Synthetic Indices', 'Basket Indices']
const eu_restricted_markets = ['Basket Indices']

const uk_available_markets = available_markets.filter(
    (el) => !uk_restricted_markets.includes(el.name),
)
const eu_available_markets = available_markets.filter(
    (el) => !eu_restricted_markets.includes(el.name),
)

const MarketsAvailable = () => {
    return (
        <>
            <SectionContainer background="white" padding="8rem 0" position="relative">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" size="3.2rem" mb="2.4rem">
                        {localize('Markets available for multipliers trading')}
                    </Header>
                </SmallContainer>
                {/* TODO: refactor to make it more DRY */}
                <ROW>
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

                                                <StyledText weight="bold">{market.text}</StyledText>
                                            </MobileCardHeader>
                                            <Text>{market.description}</Text>
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
                </ROW>
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
                                            <Text>{market.description}</Text>
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
                <EU>
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

                                                <StyledText weight="bold">{market.text}</StyledText>
                                            </MobileCardHeader>
                                            <Text>{market.description}</Text>
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
                </EU>
            </SectionContainer>
        </>
    )
}

export default MarketsAvailable
