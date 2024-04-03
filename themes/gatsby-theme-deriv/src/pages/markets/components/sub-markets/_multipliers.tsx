import React, { useEffect, useState } from 'react'
import AvailablePlatforms from '../helper/_available-platforms'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments'
import { SectionContainer } from 'components/containers'
import { Text } from 'components/elements'
import { Localize } from 'components/localization'
import { TMarketContent } from 'pages/markets/static/content/_types'
import useBuildVariant from 'features/hooks/use-build-variant'

type MultipliersProps = {
    market_content: TMarketContent
    is_crypto?: boolean
}

const Multipliers = ({ market_content }: MultipliersProps) => {
    const { region } = useBuildVariant()
    const show_eu_content = region === 'eu' ? true : false

    return (
        <SectionContainer padding="4rem 0 8rem">
            <ContentWrapper>
                <Descriptions>
                    <StyledText align="center">
                        <Localize translate_text="_t_Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment._t_" />
                    </StyledText>
                    <AvailablePlatforms dtrader dbot={region === 'row'} deriv_go={region === 'row'} />
                </Descriptions>
                <StyledText font_size="16px" weight="bold" mt="0.8rem">
                    <Localize translate_text="_t_Instruments available for multipliers trading_t_" />
                </StyledText>
                <MarketInstruments market_content={market_content} />
                {show_eu_content &&
                    market_content.eu_content?.map((text) => (
                        <Text key={text} mt="1.6rem" color="grey-5" size="var(--text-size-xs)">
                            <Localize translate_text={text} />
                        </Text>
                    ))}
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Multipliers
