import React, { useState } from 'react'
import styled from 'styled-components'
import { market_buttons } from './_utils'
import { TAvailableLiveMarkets } from './_types'
import { ContainerWrapper, MarketButton, MarketsContainer, SVGWrapper } from './_styles'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import TradingSpecificationTable from 'pages/trading-specification/components/_trading_spec_table'
import LiveMarketTable from 'features/pages/home/live-pricing/components/_live_market_table'

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
                                key={marketItem.id}
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

            {is_home ? (
                <LiveMarketTable
                    selected_market={selected_market}
                    to={linkToMarketPage}
                    display_name={displayName}
                />
            ) : (
                <TradingSpecificationTable market={selected_market} />
            )}
        </>
    )
}

export default MarketTab
