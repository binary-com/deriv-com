import React from 'react'
import styled from 'styled-components'
import { CryptocurrenciesTradeType } from '../../markets/instruments/_submarkets'
import MarketsAccordion from '../../markets/components/helper/_markets_accordion'
import AvailablePlatforms from '../../markets/components/helper/_available-platforms'
import { Desktop, Mobile } from 'components/containers/visibility'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

const StyledText = styled(Text)`
    @media ${device.tabletL} {
        text-align: left;
    }
`

const Col = styled(Flex)`
    max-width: 130px;

    @media ${device.tabletL} {
        max-width: 180px;
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
        grid-template-columns: repeat(1, 1fr);

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

const CryptocurrenciesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="Cryptocurrency contracts traded with multipliers have a time limit. It depends on the asset you are trading and appears on the DTrader dashboard before you place a trade."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

const Cryptocurrencies = () => {
    const { is_non_uk } = useCountryRule()
    return (
        is_non_uk && (
            <SectionContainer padding="4rem 0 8rem">
                <Flex max_width="79.2rem" m="0 auto" direction="column">
                    <StyledText mb="12px" align="center">
                        {localize(
                            'Trade cryptocurrencies with multipliers and take advantage of 24/7 trading, including weekends and holidays.',
                        )}
                    </StyledText>
                    <AvailablePlatformsWrapper mb="40px">
                        <AvailablePlatforms dtrader />
                    </AvailablePlatformsWrapper>
                    <Text weight="bold">
                        {localize('Instruments available for multipliers trading')}
                    </Text>

                    <MarketsWrapper direction="column">
                        <MarketsAccordion
                            renderTitle={() => (
                                <Flex jc="flex-start" ai="center">
                                    <Col>
                                        <Desktop>
                                            <Title weight="bold" max_width="auto" align="center">
                                                {localize('Crypto Pairs')}
                                            </Title>
                                        </Desktop>
                                        <Mobile>
                                            <Title weight="bold" max_width="auto" align="center">
                                                {localize('Crypto Pairs')}
                                            </Title>
                                        </Mobile>
                                    </Col>
                                    <MarketsList>
                                        <CryptocurrenciesTradeType />
                                    </MarketsList>
                                </Flex>
                            )}
                            renderDetails={CryptocurrenciesDetails}
                        />
                    </MarketsWrapper>
                </Flex>
            </SectionContainer>
        )
    )
}

export default Cryptocurrencies
