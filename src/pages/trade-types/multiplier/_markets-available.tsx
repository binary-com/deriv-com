import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
import Forex from 'images/svg/trade-types/forex.svg'
import Derived from 'images/svg/trade-types/derived.svg'
import useRegion from 'components/hooks/use-region'
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
const StyledText = styled(Header)`
    margin-top: 1.6rem;

    @media (max-width: 680px) {
        font-size: 18px;
        margin-top: 0;
    }
`

type TAvailableMarket = {
    name: string
    img_src: string
    img_alt: string
    text: TString
    description: TString
    learn_more_path: string
}

const available_markets: TAvailableMarket[] = [
    {
        name: 'Forex',
        img_src: Forex,
        img_alt: 'forex',
        text: '_t_Forex_t_',
        description:
            '_t_Speculate on the price movements of major forex pairs and increase your profit potential without losing more than your stake._t_',
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
]

const eu_restricted_markets = ['Basket Indices']

const eu_available_markets = available_markets.filter(
    (el) => !eu_restricted_markets.includes(el.name),
)

const MarketsAvailable = () => {
    const { is_eu, is_row } = useRegion()
    return (
        <>
            <SectionContainer background="white" padding="8rem 0" position="relative">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" size="3.2rem" mb="2.4rem">
                        <Localize translate_text="_t_Markets available for multipliers trading_t_" />
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

                                                    <StyledText type="paragraph-1">
                                                        <Localize translate_text={market.text} />
                                                    </StyledText>
                                                </MobileCardHeader>
                                                <Text>
                                                    <Localize translate_text={market.description} />
                                                </Text>
                                                <LearnMore
                                                    text="_t_Learn more_t_"
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

                                                    <StyledText type="paragraph-1">
                                                        <Localize translate_text={market.text} />
                                                    </StyledText>
                                                </MobileCardHeader>
                                                <Text>
                                                    <Localize translate_text={market.description} />
                                                </Text>
                                                <LearnMore
                                                    text="_t_Learn more_t_"
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
