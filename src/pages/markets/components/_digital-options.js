import React from 'react'
import PropTypes from 'prop-types'
import AvailablePlatforms from '../_available-platforms.js'
import {
    // Col,
    ContentWrapper,
    Descriptions,
    // MarketsList,
    // Row,
    // Options,
    StyledText,
    // Title,
} from '../_markets-style'
import { SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'

const DigitalOptions = ({ market_name }) => (
    <SectionContainer padding="4rem 0 8rem">
        <ContentWrapper>
            <Descriptions>
                <StyledText align="center">
                    <Localize
                        translate_text="Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options on {{market_name}}."
                        values={{ market_name }}
                    />
                </StyledText>
                <AvailablePlatforms dtrader dbot smarttrader tablet_direction="column" />
            </Descriptions>
            <StyledText weight="bold" mt="2.4rem">
                <Localize
                    translate_text="Option trades available on {{market_name}}"
                    values={{ market_name }}
                />
            </StyledText>
        </ContentWrapper>
    </SectionContainer>
)

DigitalOptions.propTypes = {
    market_name: PropTypes.string,
}

export default DigitalOptions
