import React, { useState } from 'react'
import { TAvailableLiveMarkets } from '../types'
import LiveMarketTable from '../table-component/live-market-table'
import { market_buttons } from './utils'
import { tab_container } from './tab-style.module.scss'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import TabMenu from 'features/components/templates/tabs/menu'
import { LinkUrlType } from 'features/types'

const MarketTab = () => {
    const [selected_market, setSelectedMarket] = useState<TAvailableLiveMarkets>('forex')
    const [tab_name, setTabName] = useState('Forex')
    const [linkToMarketPage, setLinkToMarketPage] = useState<LinkUrlType>({
        type: 'internal',
        to: '/markets/forex/',
    })
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
                        direction="col"
                        className="tab_container"
                        key={market_item.button_text}
                        onClick={() => {
                            onMarketButtonClick(market_item.market_name)
                            setLinkToMarketPage(market_item.url)
                        }}
                    >
                        <TabMenu
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

            <LiveMarketTable selected_market={selected_market} link={linkToMarketPage} />
        </Container.Fluid>
    )
}

export default MarketTab
