import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import Forex from 'images/svg/trade-types/forex.svg'
import Derived from 'images/svg/trade-types/derived.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'

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
        name: 'Derived',
        img_src: Derived,
        img_alt: 'derived',
        text: <Localize translate_text="Derived" />,
        description: (
            <Localize translate_text="Enjoy trading markets and indices mimicking actual market movements, with little to no disruption from real-world events." />
        ),
        learn_more_path: '/markets/synthetic/',
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
    const { is_uk, is_eu, is_row } = useCountryRule()
    return (
        <>
            <SectionContainer background="white" padding="8rem 0" position="relative">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" size="3.2rem" mb="2.4rem">
                        {localize('Markets available for multipliers trading')}
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
                                                        {market.text}
                                                    </StyledText>
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
                    </>
                )}
                {is_uk && (
                    <>
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

                                                    <StyledText weight="bold">
                                                        {market.text}
                                                    </StyledText>
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
                                                        {market.text}
                                                    </StyledText>
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
                    </>
                )}
            </SectionContainer>
        </>
    )
}

export default MarketsAvailable
