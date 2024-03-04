import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AvailablePlatforms from '../helper/_available-platforms'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments'
import { SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { Header } from 'components/elements'
import { TMarketContent } from 'pages/markets/static/content/_types'
import { TString } from 'types/generics'
import useBuildVariant from 'features/hooks/use-build-variant'

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

interface TextsType {
    first: TString
    second: TString
}

const CFDs = ({ market_content }: CFDProps) => {
    const { region } = useBuildVariant()
    const texts:TextsType = region === 'eu' ? {
        first: '_t_CFD trading allows you to make a potential profit from the price movement of the underlying asset without purchasing it._t_',
        second: '_t_On Deriv, trading CFDs on leverage lets you pay only a small fraction of the contract’s value and amplify your potential profit, similarly increasing your potential loss._t_',
    }:
    {
        first: '_t_CFD trading allows you to trade on the price movement of an asset without buying or owning the underlying asset._t_',
        second: '_t_On Deriv, you can trade CFDs with high leverage, enabling you to pay just a fraction of the contract’s value. It will amplify your potential gain and also increase your potential loss._t_',
    }
    const platforms = region === 'eu' ? {
        dmt5: true,
        derivx: false,
        deriv_ez: false,
        deriv_ctrader: false,
    }:{
        dmt5: true,
        derivx: true,
        deriv_ez: true,
        deriv_ctrader: true,
    }

    return (
        <StyledSection padding="4rem 0 8rem">
            <ContentWrapper>
                <Descriptions>
                    <StyledText align="center" font_size="14px">
                        <Localize translate_text={texts.first} />
                    </StyledText>
                    <StyledText align="center" mt="16px" font_size="14px">
                        <Localize translate_text={texts.second} />
                    </StyledText>

                    <AvailablePlatforms
                        dmt5={platforms.dmt5}
                        derivx={platforms.derivx}
                        deriv_ez={platforms.deriv_ez}
                        deriv_ctrader={platforms.deriv_ctrader}
                    />
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
