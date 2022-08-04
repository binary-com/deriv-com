import React from 'react'
import styled from 'styled-components'
import MarketInstruments from '../../markets/components/sections/_market_instruments'
import AvailablePlatforms from '../../markets/components/helper/_available-platforms'
import type { MarketInstrumentsElement } from '../../markets/components/sections/_market_instruments'
import { MajorPairs } from '../../markets/instruments/_index'
import { Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { Localize, localize } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import device from 'themes/device'
import { DerivStore } from 'store'

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
    const { is_eu_country } = React.useContext(DerivStore)
    const { is_row } = useCountryRule()

    const major_pairs: MarketInstrumentsElement = {
        markets_list: {
            col: 5,
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

    return (
        <SectionContainer padding="4rem 0 8rem">
            <Flex max_width="720px" m="0 auto" direction="column">
                <Text align="center">
                    {is_eu_country ? (
                        <Localize translate_text="Trade forex with multipliers with tight spreads, and benefit from multiple opportunities to trade on world events." />
                    ) : (
                        <Localize translate_text="Trade forex with multipliers with high leverage and tight spreads, and benefit from multiple opportunities to trade on world events." />
                    )}
                </Text>
                <AvailablePlatformsWrapper mb="40px">
                    <AvailablePlatforms m_top="16px" dbot={is_row} dtrader />
                </AvailablePlatformsWrapper>
                <StyledTitle>
                    {localize('Forex pairs available for multipliers trading')}
                </StyledTitle>
                <MarketInstruments market_content={major_pairs} />
            </Flex>
        </SectionContainer>
    )
}

export default CFDs
