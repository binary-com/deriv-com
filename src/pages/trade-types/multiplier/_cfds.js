import React from 'react'
import styled from 'styled-components'
import MarketInstruments from '../../markets/components/sections/_market_instruments.js'
import { MajorPairs, SmartFX } from '../../markets/instruments/_submarkets.js'
import AvailablePlatforms from '../../markets/components/helper/_available-platforms.js'
import { SmartFXDetails } from '../../markets/static/content/_details'
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

const CFDs = () => {
    const major_pairs = {
        markets_list: {
            col: 4,
            tablet_col: 3,
            mobile_col: 2,
        },
        content: [
            {
                title: <Localize translate_text="Major pairs" />,
                component: <MajorPairs />,
            },
        ],
    }

    const forex_cfds_desktop = {
        template: 2,
        content: [
            {
                title: <Localize translate_text="SmartFX" />,
                component: <SmartFX />,
                details: SmartFXDetails,
                col: 3,
                tablet_col: 2,
            },
        ],
    }

    const forex_cfds_mobile = {
        content: [
            {
                title: <Localize translate_text="SmartFX" />,
                component: <SmartFX />,
                details: SmartFXDetails,
            },
        ],
    }

    return (
        <SectionContainer padding="4rem 0 8rem">
            <Flex max_width="720px" m="0 auto" direction="column">
                <StyledText align="center">
                    {localize(
                        'Trade Forex with multipliers for high leverage, tight spreads and benefit from multiple opportunities to trade on world events.',
                    )}
                </StyledText>
                <AvailablePlatformsWrapper mb="40px">
                    <AvailablePlatforms m_top="16px" dtrader />
                </AvailablePlatformsWrapper>
                <StyledTitle>
                    {localize('Forex pairs available for Multipliers trading')}
                </StyledTitle>
                <MarketInstruments market_content={major_pairs} />
                <Show.Desktop>
                    <MarketInstruments market_content={forex_cfds_desktop} />
                </Show.Desktop>
                <Show.Mobile>
                    <MarketInstruments market_content={forex_cfds_mobile} />
                </Show.Mobile>
            </Flex>
        </SectionContainer>
    )
}

export default CFDs
