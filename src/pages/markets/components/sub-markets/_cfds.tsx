import React from 'react'
import styled from 'styled-components'
import AvailablePlatforms from '../helper/_available-platforms'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments'
import type { MarketInstrumentsElement } from 'pages/markets/components/sections/_market_instruments'
import { SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { DerivStore } from 'store'

type CFDProps = {
    market_content: MarketInstrumentsElement
    market_tab_name?: string
}

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 24px 0 40px;
    }
`

const CFDs = ({ market_content, market_tab_name }: CFDProps) => {
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <StyledSection padding="4rem 0 8rem">
            <ContentWrapper>
                <Descriptions>
                    <StyledText align="center" font_size="14px">
                        {is_eu_country ? (
                            <Localize translate_text="CFD trading allows you to make a potential profit from the price movement of the underlying asset without purchasing it." />
                        ) : (
                            <Localize translate_text="CFD trading allows you to trade on the price movement of an asset without buying or owning the underlying asset." />
                        )}
                    </StyledText>
                    <StyledText align="center" mt="16px" font_size="14px">
                        {is_eu_country ? (
                            <Localize translate_text="On Deriv, trading CFDs on leverage lets you pay only a small fraction of the contract’s value and amplify your potential profit, similarly increasing your potential loss." />
                        ) : (
                            <Localize translate_text="On Deriv, you can trade CFDs with high leverage, enabling you to pay just a fraction of the contract’s value. It will amplify your potential gain and also increase your potential loss." />
                        )}
                    </StyledText>
                    {market_tab_name && market_tab_name === 'stock-indices' ? (
                        <AvailablePlatforms dmt5 />
                    ) : (
                        <AvailablePlatforms dmt5 derivx />
                    )}
                </Descriptions>
                <StyledText font_size="14px" weight="bold" mt="4rem">
                    <Localize translate_text="Instruments available for CFD trading" />
                </StyledText>
                <MarketInstruments market_content={market_content} />
            </ContentWrapper>
        </StyledSection>
    )
}

export default CFDs
