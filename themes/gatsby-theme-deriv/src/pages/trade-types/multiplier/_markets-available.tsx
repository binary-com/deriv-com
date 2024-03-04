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
import { TString } from 'types/generics'
import useBuildVariant from 'features/hooks/use-build-variant'

type TAvailableMarkets = {
    name: string
    img_src: string
    img_alt: TString
    text: TString
    description: TString
    eu_description: TString
    learn_more_path: string
}

const MobileCardHeader = styled(Flex)`
    margin-bottom: 0.8rem;
    flex-direction: column;
    height: auto;

    @media (max-width: 680px) {
        > img {
            width: 48px;
            height: 48px;
            margin-bottom: 2rem;
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
    max-block-size: 30.2rem;
`

const available_markets: TAvailableMarkets[] = [
    {
        name: 'Forex',
        img_src: Forex,
        img_alt: '_t_forex_t_',
        text: '_t_Forex_t_',
        description:
            '_t_Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market._t_',
        eu_description:
            '_t_Speculate on the price movements of major forex pairs and increase your profit potential without losing more than your stake._t_',
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
]

const eu_restricted_markets = ['Basket Indices']
const eu_available_markets = available_markets.filter(
    (el) => !eu_restricted_markets.includes(el.name),
)

const MarketsAvailable = () => {
    const { region } = useBuildVariant()

    return (
        <SectionContainer background="white" padding="8rem 0" position="relative">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" size="3.2rem" mb="2.4rem">
                    <Localize translate_text="_t_Markets available for multipliers trading_t_" />
                </Header>
            </SmallContainer>
            {/* TODO: refactor to make it more DRY */}
            {region === "row" && (
                <MarketsCarousel>
                    {available_markets.map(
                        ({ description, img_alt, img_src, learn_more_path, name, text }) => {
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
                                                <Localize translate_text={description} />
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
                        ({ eu_description, img_alt, img_src, learn_more_path, name, text }) => {
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
                                                <Localize translate_text={eu_description} />
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

export default MarketsAvailable
