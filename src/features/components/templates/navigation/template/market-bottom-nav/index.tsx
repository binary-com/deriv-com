import React from 'react'
import { marketItems } from './data'
import BottomNavItem from './bottom-nav.item'
import Flex from 'features/components/atoms/flex-box'

const MarketBottomNav = () => {
    return (
        <Flex.Box bgcolor="secondary" padding_block="8x" gap="10x" justify="center" align="center">
            {marketItems.map((item) => (
                <BottomNavItem key={item.title} item={item} />
            ))}
        </Flex.Box>
    )
}

export default MarketBottomNav
