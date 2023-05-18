import React from 'react'
import { MarketItem } from '../types'
import Link from 'features/components/atoms/link'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import './market-item.scss'

interface IMarketSliderProps {
    item: MarketItem
    is_eu?: boolean
}

const MarketSliderItem = ({ item, is_eu }: IMarketSliderProps) => {
    const img = typeof item.img === 'function' ? item.img({ is_eu }) : item.img
    return (
        <Link url={item.url} className={'link_container'} padding={'10x'} no_hover>
            <Flex.Box direction="col" gap="5x" className={'container'}>
                <Typography.Heading size="xs">
                    <Localize translate_text={item.header} />
                </Typography.Heading>
                <Typography.Paragraph size="medium" className="market_item_description">
                    <Localize translate_text={item.description} />
                </Typography.Paragraph>
            </Flex.Box>
            <div className={'image_container'}>{img}</div>
        </Link>
    )
}

export default MarketSliderItem
