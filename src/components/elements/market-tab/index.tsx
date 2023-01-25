import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { market_buttons } from './_utils'
import { TAvailableLiveMarkets } from './_types'
import { ContainerWrapper, MarketsContainer, StyledIcon } from './_styles'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import LiveMarketTable from 'pages/home/live-pricing/components/_live_market_table'
import TradingSpecificationTable from 'pages/trading-specification/components/_trading_spec_table'

const MarketButton = styled.button<{ selected: boolean }>`
    margin: 0;
    min-height: 48px;
    position: relative;
    border-bottom: 2px solid red;
    background: none;
    border: none;
    padding: 16px 40px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    white-space: nowrap;

    ${Header} {
        font-weight: normal;
        font-size: 2rem;
        color: var(--color-grey-5);
    }

    ${({ selected }) =>
        selected
            ? css`
                  border-bottom: 2px solid red;
                  & ${Header} {
                      color: var(--color-red);
                  }
              `
            : css`
                  border-bottom: 2px solid var(--color-grey-8);
                  & ${Header} {
                  }
              `}
`

type MarketTabProps = {
    is_home: boolean
}

const MarketTab = ({ is_home }: MarketTabProps) => {
    const [selected_market, setSelectedMarket] = useState<TAvailableLiveMarkets>('forex')
    const onMarketButtonClick = (selected) => {
        setSelectedMarket(selected)
    }
    return (
        <>
            <MarketsContainer>
                {market_buttons.map((marketItem) => (
                    <>
                        <MarketButton
                            selected={marketItem.market_name === selected_market}
                            key={marketItem.id}
                            onClick={() => {
                                onMarketButtonClick(marketItem.market_name)
                            }}
                        >
                            <StyledIcon src={marketItem.src} alt={marketItem.button_text} />
                            <Header type="paragraph-2">
                                <Localize translate_text={marketItem.button_text} />
                            </Header>
                        </MarketButton>
                    </>
                ))}
            </MarketsContainer>
            <ContainerWrapper>
                {market_buttons.map(
                    (marketItem) =>
                        marketItem.market_name === selected_market && (
                            <Header type="paragraph-1" weight="normal" align="center">
                                <Localize translate_text={marketItem.market_description} />
                            </Header>
                        ),
                )}
            </ContainerWrapper>
            {is_home ? (
                <>
                    <LiveMarketTable market={selected_market} />
                </>
            ) : (
                <TradingSpecificationTable market={selected_market} />
            )}
        </>
    )
}

export default MarketTab
