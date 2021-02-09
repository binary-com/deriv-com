import React from 'react'
import PropTypes from 'prop-types'
import AvailablePlatforms from '../helper/_available-platforms.js'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments.js'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'

const Margin = ({ market_content }) => (
    <SectionContainer padding="4rem 0 8rem">
        <ContentWrapper>
            <Descriptions>
                <StyledText align="center">
                    {localize(
                        'Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss.',
                    )}
                </StyledText>
                <AvailablePlatforms dmt5 />
            </Descriptions>
            <StyledText font_size={'16px'} weight="bold" mt="2.4rem">
                {localize('Instruments available for margin trading')}
            </StyledText>
            <MarketInstruments market_content={market_content} />
        </ContentWrapper>
    </SectionContainer>
)

Margin.propTypes = {
    market_content: PropTypes.object,
}

export default Margin
