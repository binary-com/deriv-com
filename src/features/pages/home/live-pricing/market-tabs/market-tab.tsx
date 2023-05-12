import React, { useState } from 'react'
import { TAvailableLiveMarkets } from '../types'
import LiveMarketTable from '../table-component/live-market-table'
import { market_buttons } from './utils'
import { tab_container, active_button, inactive_button, market_icon } from './tab-style.module.scss'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import Icon from 'features/components/atoms/icon'

const MarketTab = () => {
    const [selected_market, setSelectedMarket] = useState<TAvailableLiveMarkets>('forex')
    const [linkToMarketPage, setLinkToMarketPage] = useState('/markets/forex')
    const [displayName, setDisplayName] = useState('forex')
    const onMarketButtonClick = (selected) => {
        setSelectedMarket(selected)
    }

    return (
        <Container.Fluid>
            <Flex.Box className={tab_container}>
                {market_buttons.map((marketItem) => (
                    <Button.Base
                        className={
                            marketItem.market_name === selected_market
                                ? active_button
                                : inactive_button
                        }
                        key={marketItem.id}
                        selected={marketItem.market_name === selected_market}
                        onClick={() => {
                            onMarketButtonClick(marketItem.market_name)
                            setLinkToMarketPage(marketItem.to)
                            setDisplayName(marketItem.button_text)
                        }}
                    >
                        <Icon
                            className={market_icon}
                            size="medium"
                            selected={marketItem.market_name === selected_market}
                            key={marketItem.id}
                            src={`${marketItem.src}#${marketItem.market_name}`}
                            stroke={
                                marketItem.market_name === selected_market ? 'brand' : 'primary'
                            }
                        />
                        <Typography.Paragraph
                            size="large"
                            textcolor={
                                marketItem.market_name === selected_market ? 'brand' : 'primary'
                            }
                        >
                            <Localize translate_text={marketItem.button_text} />
                        </Typography.Paragraph>
                    </Button.Base>
                ))}
            </Flex.Box>
            {market_buttons.map(
                (marketItem) =>
                    marketItem.market_name === selected_market && (
                        <Typography.Paragraph
                            key={marketItem.market_name}
                            align="center"
                            pt="10x"
                            lg={{ padding_block: '10x', padding_inline: '40x' }}
                        >
                            <Localize translate_text={marketItem.market_description} />
                        </Typography.Paragraph>
                    ),
            )}

            <LiveMarketTable
                selected_market={selected_market}
                link_to={linkToMarketPage}
                display_name={displayName}
            />
        </Container.Fluid>
    )
}

export default MarketTab
