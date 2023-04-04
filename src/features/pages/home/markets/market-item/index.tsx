import React from 'react'
import { MarketItem } from '../types'
import Link from 'features/components/atoms/link'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import './market-item.scss'

interface IMarketSliderProps {
    item: MarketItem
}

const MarketSliderItem = ({ item }: IMarketSliderProps) => {
    return (
        <Link url={item.url} className={'link_container'} padding={'10x'}>
            <Flex.Box direction="col" gap="10x" className={'container'}>
                <Typography.Heading size="xs">
                    <Localize translate_text={item.header} />
                </Typography.Heading>
                <Typography.Paragraph size="medium" className="market_item_description">
                    <Localize translate_text={item.description} />
                </Typography.Paragraph>
            </Flex.Box>
            <div className={'image_container'}>{item.img}</div>
        </Link>
    )
}

export default MarketSliderItem
