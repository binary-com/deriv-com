import React from 'react'
import PropTypes from 'prop-types'
import AvailablePlatforms from '../helper/_available-platforms.js'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments'
import { SectionContainer, Show } from 'components/containers'
import { Text } from 'components/elements'
import { localize } from 'components/localization'

const Multipliers = ({ market_content }) => (
    <SectionContainer padding="4rem 0 8rem">
        <ContentWrapper>
            <Descriptions>
                <StyledText align="center">
                    {localize(
                        'Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment.',
                    )}
                </StyledText>
                <AvailablePlatforms dtrader />
            </Descriptions>
            <StyledText font_size={'16px'} weight="bold" mt="2.4rem">
                {localize('Instruments available for multipliers trading')}
            </StyledText>
            <MarketInstruments market_content={market_content} />
            <Show.Eu>
                {market_content.eu_content?.map((text, index) => (
                    <Text key={index} mt="1.6rem" color="grey-5" size="var(--text-size-xs)">
                        {text}
                    </Text>
                ))}
            </Show.Eu>
        </ContentWrapper>
    </SectionContainer>
)

Multipliers.propTypes = {
    market_content: PropTypes.object,
}

export default Multipliers
