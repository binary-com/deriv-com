import React from 'react'
import AvailablePlatforms from '../helper/_available-platforms'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments'
import { SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'
import { TMarketContent } from 'pages/markets/static/content/_types'

type AccumulatorsProps = {
    market_content: TMarketContent
    is_crypto?: boolean
}

const Accumulators = ({ market_content }: AccumulatorsProps) => {
    return (
        <SectionContainer padding="4rem 0 8rem">
            <ContentWrapper>
                <Descriptions>
                    <StyledText align="center">
                        <Localize translate_text="_t_With accumulators, your potential profit increases exponentially, but your risk is limited to your stake. As long as the price moves within the trade barriers, your potential profit will rise regardless of market movement._t_" />
                    </StyledText>
                    <AvailablePlatforms dtrader />
                </Descriptions>
                <StyledText font_size="16px" weight="bold" mt="2.4rem">
                    <Localize translate_text="_t_Instruments available for accumulators trading_t_" />
                </StyledText>
                <MarketInstruments market_content={market_content} />
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Accumulators
