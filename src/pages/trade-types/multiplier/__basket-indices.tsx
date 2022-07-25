import React from 'react'
import styled from 'styled-components'
import BasketIndicesCfds from '../../markets/instruments/_basket_indices_cfds'
import BasketIndicesCommodities from '../../markets/instruments/_basket_indices_commodities'
import MarketsAccordion from '../../markets/components/helper/_markets_accordion'
import AvailablePlatforms from '../../markets/components/helper/_available-platforms'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize, Localize } from 'components/localization'
import { Desktop, Mobile } from 'components/containers/visibility'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

const StyledText = styled(Text)`
    @media ${device.tabletL} {
        text-align: left;
    }
`

const Col = styled(Flex)`
    max-width: 13.2rem;
    @media ${device.tabletL} {
        max-width: 15rem;
    }
`

const MarketsWrapper = styled(Flex)`
    flex-direction: column;

    > div {
        margin-top: 2.4rem;
    }
`
const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    border-right: 1px solid var(--color-grey-22);
    width: 100%;
    padding: 2.4rem 0.7rem;
    grid-row-gap: 1.6rem;
    grid-template-columns: repeat(3, 1fr);

    @media ${device.tabletL} {
        grid-template-columns: repeat(2, 1fr);

        img {
            width: 16px;
            height: 16px;
            margin-right: 4px;
        }
        ${Text} {
            font-size: 12px;
            line-height: 1.5;
        }
    }
    @media ${device.tabletS} {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Title = styled(Text)`
    text-align: center;
    @media ${device.tabletL} {
        font-weight: 600;
    }
`

const DetailsContainer = styled(Flex)`
    flex-direction: column;

    ${Text} {
        font-size: 1.4rem;
        margin-top: 1.6rem;
        @media ${device.tabletL} {
            margin-top: 1rem;
        }
    }
`
const AvailablePlatformsWrapper = styled(Flex)`
    border-bottom: 1px solid var(--color-grey-21);
    padding-bottom: 40px;
    @media ${device.tabletL} {
        margin-bottom: 24px;
        padding-bottom: 16px;
    }
`

const BasketFXDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="<0>AUD Basket</0> measures the value of the Australian dollar against a basket of five global currencies (USD, EUR, GBP, JPY, CAD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>EUR Basket</0> measures the value of the Euro against a basket of five global currencies (USD, AUD, GBP, JPY, CAD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>GBP Basket</0> measures the value of the British pound against a basket of five global currencies (USD, EUR, AUD, JPY, CAD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>USD Basket</0> measures the value of the US dollar against a basket of five global currencies (EUR, GBP, JPY, CAD, AUD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)
const BasketCommoditiesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="<0>Gold Basket</0> measures the value of gold against a basket of five global currencies (EUR, GBP, JPY, AUD, USD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

//
const BasketIndices = () => {
    const { is_row } = useCountryRule()
    return (
        <SectionContainer padding="4rem 0 8rem">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <StyledText mb="12px" align="center">
                    {localize(
                        'Trade basket indices with multipliers and benefit from high leverage to amplify your potential gains multiple times.',
                    )}
                </StyledText>
                <AvailablePlatformsWrapper mb="40px">
                    <AvailablePlatforms m_top="16px" dbot={is_row} dtrader />
                </AvailablePlatformsWrapper>
                <Text weight="bold">
                    {localize('Instruments available for multipliers trading')}
                </Text>
                {
                    <MarketsWrapper direction="column">
                        <MarketsAccordion
                            renderTitle={() => (
                                <Flex jc="flex-start" ai="center">
                                    <Col max_width="13.2rem">
                                        <Desktop>
                                            <Title weight="bold" max_width="9.7rem" align="center">
                                                {localize('Commodities Basket')}
                                            </Title>
                                        </Desktop>
                                        <Mobile>
                                            <Title weight="bold" max_width="9.7rem" align="center">
                                                {localize('Commodities Basket')}
                                            </Title>
                                        </Mobile>
                                    </Col>
                                    <MarketsList>
                                        <BasketIndicesCommodities />
                                    </MarketsList>
                                </Flex>
                            )}
                            renderDetails={BasketCommoditiesDetails}
                        />
                    </MarketsWrapper>
                }

                <MarketsWrapper direction="column">
                    <MarketsAccordion
                        renderTitle={() => (
                            <Flex jc="flex-start" ai="center">
                                <Col max_width="13.2rem">
                                    <Desktop>
                                        <Title weight="bold" max_width="9.7rem" align="center">
                                            {localize('Forex Basket')}
                                        </Title>
                                    </Desktop>
                                    <Mobile>
                                        <Title weight="bold" max_width="9.7rem" align="center">
                                            {localize('Forex Basket')}
                                        </Title>
                                    </Mobile>
                                </Col>
                                <MarketsList>
                                    <BasketIndicesCfds />
                                </MarketsList>
                            </Flex>
                        )}
                        renderDetails={BasketFXDetails}
                    />
                </MarketsWrapper>
            </Flex>
        </SectionContainer>
    )
}

export default BasketIndices
