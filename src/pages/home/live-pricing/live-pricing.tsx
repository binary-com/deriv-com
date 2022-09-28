import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import LiveMarketTable from './_components/live_market_table'
import { TAvailableLiveMarkets } from './_types'
import { Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'

const LivePricingSection = styled(SectionContainer)`
    background-color: #f9fbff;
    min-height: 880px;
`

const ContainerWrapper = styled(Flex)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    margin: 80px auto;
    width: 60vw;
`

const MarketsContainer = styled(Flex)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
`
const MarketButton = styled.button<{ selected: boolean }>`
    min-height: 48px;
    background-color: #f2f3f4;
    border: none;
    padding: 12px;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.1s ease-in;
    ${({ selected }) =>
        selected
            ? css`
                  color: unset;
                  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08), 0px 8px 8px rgba(0, 0, 0, 0.08);
                  background-color: #ffffff;
              `
            : css`
                  & ${Header} {
                      color: #999999;
                  }
              `}
`

type TMarketButtons = {
    id: number
    button_text: string
    market_name: TAvailableLiveMarkets
}

const market_buttons: TMarketButtons[] = [
    {
        id: 0,
        button_text: 'Derived',
        market_name: 'synthetic_index',
    },
    {
        id: 1,
        button_text: 'Forex',
        market_name: 'forex',
    },
    {
        id: 2,
        button_text: 'Stock & Indices',
        market_name: 'indices',
    },
    {
        id: 3,
        button_text: 'Cryptocurrency',
        market_name: 'cryptocurrency',
    },
    {
        id: 4,
        button_text: 'Commodities',
        market_name: 'commodities',
    },
    {
        id: 6,
        button_text: 'Basket Indices',
        market_name: 'basket_index',
    },
]

const LivePricing = () => {
    const [selected_market, setSelectedMarket] = useState<TAvailableLiveMarkets>('synthetic_index')

    const onMarketButtonClick = (selected) => {
        setSelectedMarket(selected)
    }

    return (
        <LivePricingSection>
            <ContainerWrapper>
                <MarketsContainer>
                    {market_buttons.map((marketItem) => (
                        <MarketButton
                            selected={marketItem.market_name === selected_market}
                            key={marketItem.id}
                            onClick={() => {
                                onMarketButtonClick(marketItem.market_name)
                            }}
                        >
                            <Header type="paragraph-2">{marketItem.button_text}</Header>
                        </MarketButton>
                    ))}
                </MarketsContainer>
                <Header type="paragraph-2" weight="normal" align="center">
                    Benefit from round-the-clock trading hours (Monday to Friday), high liquidity,
                    low barriers to entry, a wide range of offerings, and opportunitiesto trade on
                    world events.
                </Header>
                <LiveMarketTable market={selected_market} />
            </ContainerWrapper>
        </LivePricingSection>
    )
}

export default LivePricing
