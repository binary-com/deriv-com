import React, { useState } from 'react'
import { TAvailableLiveMarkets } from '../types'
import LiveMarketTable from '../table-component/live-market-table'
import { market_buttons } from './utils'
import { tab_container, inactive_button, active_button } from './tab-style.module.scss'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import Icon from 'features/components/atoms/icon'

const MarketTab = () => {
    const [selected_market, setSelectedMarket] = useState<TAvailableLiveMarkets>('forex')
    const [linkToMarketPage, setLinkToMarketPage] = useState('/markets/forex/')
    const [displayName, setDisplayName] = useState('Forex')
    const onMarketButtonClick = (selected) => {
        setSelectedMarket(selected)
    }

    return (
        <Container.Fluid>
            <Flex.Box
                className={tab_container}
                padding_block="10x"
                md={{ justify: 'center', padding: '10x' }}
            >
                {market_buttons.map((market_item) => (
                    <Button.Base
                        className={
                            market_item.market_name === selected_market
                                ? active_button
                                : inactive_button
                        }
                        key={market_item.market_name}
                        onClick={() => {
                            onMarketButtonClick(market_item.market_name)
                            setLinkToMarketPage(market_item.to)
                            setDisplayName(market_item.button_text)
                        }}
                    >
                        <Icon
                            size="medium"
                            key={market_item.market_name}
                            src={
                                market_item.market_name === selected_market
                                    ? `${market_item.selected_src}#${market_item.market_name}`
                                    : `${market_item.src}#${market_item.market_name}`
                            }
                        />
                        <Typography.Paragraph
                            size="large"
                            textcolor={
                                market_item.market_name === selected_market ? 'brand' : 'secondary'
                            }
                        >
                            <Localize translate_text={market_item.button_text} />
                        </Typography.Paragraph>
                    </Button.Base>
                ))}
            </Flex.Box>
            {market_buttons.map(
                (market_item) =>
                    market_item.market_name === selected_market && (
                        <Typography.Paragraph
                            key={market_item.market_name}
                            align="center"
                            pt="10x"
                            lg={{ padding_block: '10x', padding_inline: '40x' }}
                        >
                            <Localize translate_text={market_item.market_description} />
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
