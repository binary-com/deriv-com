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

const CFDs = ({ market_content, market_tab_name }) => (
    <StyledSection padding="4rem 0 8rem">
        <ContentWrapper>
            <Descriptions>
                <StyledText align="center" font_size="16px">
                    {localize(
                        'CFD trading allows you to bet on the price movement of the underlying asset without purchasing it.',
                    )}
                </StyledText>
                <StyledText align="center" mt="16px" font_size="16px">
                {localize(
                        'On Deriv, trading CFDs with high leverage lets you pay only a small fraction of the contract’s value and amplify your potential profit, similarly increasing your potential loss.',
                    )}
                </StyledText>
                {
                    market_tab_name === 'stock-indices'
                    ? <AvailablePlatforms dmt5 />
                    : <AvailablePlatforms dmt5 derivx />
                }
            </Descriptions>
            <StyledText font_size={'16px'} weight="bold" mt="4rem">
                {localize('Instruments available for CFD trading')}
            </StyledText>
            <MarketInstruments market_content={market_content} />
        </ContentWrapper>
    </StyledSection>
)

CFDs.propTypes = {
    market_content: PropTypes.object,
    market_tab_name: PropTypes.String,
}

export default CFDs
