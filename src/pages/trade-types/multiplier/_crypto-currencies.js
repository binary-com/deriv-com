import React from 'react'
import styled from 'styled-components'
import MarketInstruments from '../../markets/components/sections/_market_instruments.js'
import { CryptocurrenciesMultipliers } from '../../markets/instruments/_submarkets.js'
import AvailablePlatforms from '../../markets/components/helper/_available-platforms.js'
import { CryptocurrenciesDetails } from '../../markets/static/content/_details'
import { Text } from 'components/elements'
import { SectionContainer, Show, Flex } from 'components/containers'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'

const StyledText = styled(Text)`
    @media ${device.tabletL} {
        text-align: left;
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

const StyledTitle = styled(Text)`
    text-align: left;
    font-weight: bold;
`

const CryptoCurrencies = () => {
    const crypto_multiplier_desktop = {
        template: 2,
        content: [
            {
                title: <Localize translate_text="Cryptocurrencies" />,
                component: <CryptocurrenciesMultipliers />,
                details: CryptocurrenciesDetails,
                col: 3,
                tablet_col: 2,
            },
        ],
    }

    const crypto_multiplier_mobile = {
        content: [
            {
                title: <Localize translate_text="Cryptocurrencies" />,
                component: <CryptocurrenciesMultipliers />,
                details: CryptocurrenciesDetails,
            },
        ],
    }

    return (
        <SectionContainer padding="4rem 0 8rem">
            <Flex max_width="720px" m="0 auto" direction="column">
                <StyledText align="center">
                    {localize(
                        'Trade cryptocurrencies with multipliers and take advantage of 24/7 trading, including weekends and holidays.',
                    )}
                </StyledText>
                <AvailablePlatformsWrapper mb="40px">
                    <AvailablePlatforms m_top="16px" dtrader />
                </AvailablePlatformsWrapper>
                <StyledTitle>
                    {localize('Cryptocurrencies available for multipliers trading')}
                </StyledTitle>
                <Show.Desktop>
                    <MarketInstruments market_content={crypto_multiplier_desktop} />
                </Show.Desktop>
                <Show.Mobile>
                    <MarketInstruments market_content={crypto_multiplier_mobile} />
                </Show.Mobile>
            </Flex>
        </SectionContainer>
    )
}

export default CryptoCurrencies
