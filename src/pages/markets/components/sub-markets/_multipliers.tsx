import React from 'react'
import AvailablePlatforms from '../helper/_available-platforms'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments'
import type {
    ForexAndBasketMultiplier,
    CryptoMultiplier,
    SyntheticMultiplier,
} from '../../static/content/_multipliers'
import { SectionContainer } from 'components/containers'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

type MultipliersProps = {
    market_content: ForexAndBasketMultiplier | CryptoMultiplier | SyntheticMultiplier
    is_crypto?: boolean
}
const Multipliers = ({ market_content }: MultipliersProps) => {
    const { is_eu } = useRegion()
    return (
        <SectionContainer padding="4rem 0 8rem">
            <ContentWrapper>
                <Descriptions>
                    <StyledText align="center">
                        {localize(
                            '_t_Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment._t_',
                        )}
                    </StyledText>
                    {is_eu ? (
                        <AvailablePlatforms dtrader />
                    ) : (
                        <AvailablePlatforms dtrader dbot deriv_go />
                    )}
                </Descriptions>
                <StyledText font_size={'16px'} weight="bold" mt="2.4rem">
                    {localize('_t_Instruments available for multipliers trading_t_')}
                </StyledText>
                <MarketInstruments market_content={market_content} />
                {/* deprecated?? */}
                {is_eu &&
                    market_content.eu_content?.map((text, index) => (
                        <Text key={index} mt="1.6rem" color="grey-5" size="var(--text-size-xs)">
                            {text}
                        </Text>
                    ))}
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Multipliers
