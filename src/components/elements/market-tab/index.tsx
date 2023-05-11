import React, { useState } from 'react'
import styled from 'styled-components'
import { market_buttons } from './_utils'
import { TAvailableLiveMarkets } from './_types'
import { ContainerWrapper, MarketButton, MarketsContainer } from './_styles'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import TradingSpecificationTable from 'pages/trading-specification/components/_trading_spec_table'

const TabStyledHeader = styled(Header)`
    font-family: 'Ubuntu';
`

const MarketIcon = styled.img<{ is_selected?: boolean }>`
    inline-size: 24px;
    block-size: 24px;
    margin-block-end: 10px;
`

const MarketTab = () => {
    const [selected_market, setSelectedMarket] = useState<TAvailableLiveMarkets>('forex')
    const onMarketButtonClick = (selected) => {
        setSelectedMarket(selected)
    }

    return (
        <>
            <MarketsContainer>
                {market_buttons.map((marketItem) => (
                    <React.Fragment key={marketItem.id}>
                        <MarketButton
                            selected={marketItem.market_name === selected_market}
                            onClick={() => {
                                onMarketButtonClick(marketItem.market_name)
                            }}
                        >
                            <MarketIcon
                                src={
                                    marketItem.market_name === selected_market
                                        ? marketItem.selected_src
                                        : marketItem.src
                                }
                            />
                            <TabStyledHeader type="paragraph-2" as="p">
                                <Localize translate_text={marketItem.button_text} />
                            </TabStyledHeader>
                        </MarketButton>
                    </React.Fragment>
                ))}
            </MarketsContainer>
            <ContainerWrapper>
                {market_buttons.map(
                    (marketItem) =>
                        marketItem.market_name === selected_market && (
                            <Header
                                key={marketItem.market_name}
                                type="paragraph-1"
                                weight="normal"
                                align="center"
                                as="p"
                            >
                                <Localize translate_text={marketItem.market_description} />
                            </Header>
                        ),
                )}
            </ContainerWrapper>

            <TradingSpecificationTable market={selected_market} />
        </>
    )
}

export default MarketTab
