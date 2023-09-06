import React, { useState } from 'react'
import { TAvailableLiveMarkets } from '../types'
import LiveMarketTable from '../table-component/live-market-table'
import { market_buttons } from './utils'
import { tab_container, markets_menu_tab_item } from './tab-style.module.scss'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import TabMenu from 'features/components/templates/tabs/menu'

const MarketTab = () => {
    const [selected_market, setSelectedMarket] = useState<TAvailableLiveMarkets>('forex')
    const [tab_name, setTabName] = useState('Forex')
    const [linkToMarketPage, setLinkToMarketPage] = useState('/markets/forex/')
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
                    <Flex.Box
                        key={market_item.button_text}
                        direction="col"
                        className="tab_container"
                        onClick={() => {
                            onMarketButtonClick(market_item.market_name)
                            setLinkToMarketPage(market_item.to)
                        }}
                    >
                        <TabMenu
                            item_className={markets_menu_tab_item}
                            tab_names={[market_item.button_text]}
                            current_tab={tab_name}
                            setCurrentTab={setTabName}
                            icon={
                                market_item.market_name === selected_market
                                    ? `${market_item.selected_src}#${market_item.market_name}`
                                    : `${market_item.src}#${market_item.market_name}`
                            }
                        />
                    </Flex.Box>
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

            <LiveMarketTable selected_market={selected_market} link_to={linkToMarketPage} />
        </Container.Fluid>
    )
}

export default MarketTab
