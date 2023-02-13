import React, { useState } from 'react'
import { market_buttons } from './_utils'
import { TAvailableLiveMarkets } from './_types'
import { ContainerWrapper, MarketButton, MarketsContainer, SVGWrapper } from './_styles'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import LiveMarketTable from 'pages/home/live-pricing/components/_live_market_table'
import TradingSpecificationTable from 'pages/trading-specification/components/_trading_spec_table'

type MarketTabProps = {
    is_home: boolean
}

const MarketTab = ({ is_home }: MarketTabProps) => {
    const [selected_market, setSelectedMarket] = useState<TAvailableLiveMarkets>('forex')
    const [linkToMarketPage, setLinkToMarketPage] = useState('/markets/forex')
    const [displayName, setDisplayName] = useState('forex')
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
                                setLinkToMarketPage(marketItem.to)
                                setDisplayName(marketItem.button_text)
                            }}
                        >
                            <SVGWrapper
                                selected={marketItem.market_name === selected_market}
                                width={24}
                                height={24}
                            >
                                <use href={`${marketItem.src}#${marketItem.market_name}`} />
                            </SVGWrapper>
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
                            <Header
                                key={marketItem.id}
                                type="paragraph-1"
                                weight="normal"
                                align="center"
                            >
                                <Localize translate_text={marketItem.market_description} />
                            </Header>
                        ),
                )}
            </ContainerWrapper>
            {is_home ? (
                <>
                    <LiveMarketTable
                        market={selected_market}
                        to={linkToMarketPage}
                        display_name={displayName}
                    />
                </>
            ) : (
                <TradingSpecificationTable market={selected_market} />
            )}
        </>
    )
}

export default MarketTab
