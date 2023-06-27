import React from 'react'
import styled from 'styled-components'
import AvailablePlatforms from '../helper/_available-platforms'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments'
import { SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import { Header } from 'components/elements'
import { TMarketContent } from 'pages/markets/static/content/types'

type CFDProps = {
    market_content: TMarketContent
}

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 24px 0 24px;
    }
`
const StyledHeader = styled(Header)`
    margin-top: 0.8rem;
`

const CFDs = ({ market_content }: CFDProps) => {
    const { is_eu } = useRegion()
    const first_text = is_eu
        ? '_t_CFD trading allows you to make a potential profit from the price movement of the underlying asset without purchasing it._t_'
        : '_t_CFD trading allows you to trade on the price movement of an asset without buying or owning the underlying asset._t_'
    const second_text = is_eu
        ? '_t_On Deriv, trading CFDs on leverage lets you pay only a small fraction of the contract’s value and amplify your potential profit, similarly increasing your potential loss._t_'
        : '_t_On Deriv, you can trade CFDs with high leverage, enabling you to pay just a fraction of the contract’s value. It will amplify your potential gain and also increase your potential loss._t_'

    return (
        <StyledSection padding="4rem 0 8rem">
            <ContentWrapper>
                <Descriptions>
                    <StyledText align="center" font_size="14px">
                        <Localize translate_text={first_text} />
                    </StyledText>
                    <StyledText align="center" mt="16px" font_size="14px">
                        <Localize translate_text={second_text} />
                    </StyledText>

                    <AvailablePlatforms dmt5 derivx={!is_eu} deriv_ez={!is_eu} />
                </Descriptions>

                <StyledHeader as="h3" size="16px">
                    <Localize translate_text="_t_Instruments available for CFD trading_t_" />
                </StyledHeader>
                <MarketInstruments market_content={market_content} />
            </ContentWrapper>
        </StyledSection>
    )
}

export default CFDs
