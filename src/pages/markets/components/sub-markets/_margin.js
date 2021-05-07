import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AvailablePlatforms from '../helper/_available-platforms.js'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments.js'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 24px 0 40px;
    }
`

const Margin = ({ market_content }) => (
    <StyledSection padding="4rem 0 8rem">
        <ContentWrapper>
            <Descriptions>
                <StyledText align="center" font_size="16px">
                    {localize(
                        'Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss.',
                    )}
                </StyledText>
                <AvailablePlatforms dmt5 />
            </Descriptions>
            <StyledText font_size={'16px'} weight="bold" mt="4rem">
                {localize('Instruments available for margin trading')}
            </StyledText>
            <MarketInstruments market_content={market_content} />
        </ContentWrapper>
    </StyledSection>
)

Margin.propTypes = {
    market_content: PropTypes.object,
}

export default Margin
