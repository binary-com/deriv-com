import React from 'react'
import AvailablePlatforms from '../helper/_available-platforms'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments'
import type { MarketInstrumentsElement } from 'pages/markets/components/sections/_market_instruments'
import { SectionContainer } from 'components/containers'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

type AccumulatorsProps = {
    market_content: MarketInstrumentsElement
    is_crypto?: boolean
}
const Accumulators = ({ market_content }: AccumulatorsProps) => {
    return (
        <SectionContainer padding="4rem 0 8rem">
            <ContentWrapper>
                <Descriptions>
                    <StyledText align="center">
                        {localize(
                            'With accumulators, your potential profit increases exponentially, but your risk is limited to your stake. As long as the price moves within the trade barriers, your potential profit will rise regardless of market movement.',
                        )}
                    </StyledText>
                    <AvailablePlatforms dtrader />
                </Descriptions>
                <StyledText font_size={'16px'} weight="bold" mt="2.4rem">
                    {localize('Instruments available for accumulators trading')}
                </StyledText>
                <MarketInstruments market_content={market_content} />
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Accumulators
