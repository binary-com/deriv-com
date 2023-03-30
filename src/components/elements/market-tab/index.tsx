import React, { useState } from 'react'
import { market_buttons } from './_utils'
import { TAvailableLiveMarkets } from './_types'
import { ContainerWrapper, MarketButton, MarketsContainer, SVGWrapper } from './_styles'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import TradingSpecificationTable from 'pages/trading-specification/components/_trading_spec_table'

const MarketTab = () => {
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
                            <SVGWrapper
                                selected={marketItem.market_name === selected_market}
                                width={24}
                                height={24}
                            >
                                <use href={`${marketItem.src}#${marketItem.market_name}`} />
                            </SVGWrapper>
                            <Header type="paragraph-2" as="p">
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
