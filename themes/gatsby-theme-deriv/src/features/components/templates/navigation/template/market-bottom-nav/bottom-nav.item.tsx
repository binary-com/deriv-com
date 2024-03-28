import React from 'react'
import { TMarketNavItemType } from './types'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'

interface IBottomNavItemProps {
    item: TMarketNavItemType
}

const BottomNavItem = ({ item }: IBottomNavItemProps) => {
    return (
        <Flex.Item grow="0" shrink="0">
            <Link size="medium" url={item.link} font_family="UBUNTU" active_urls={item.active_urls}>
                <Localize translate_text={item.title} />
            </Link>
        </Flex.Item>
    )
}

export default BottomNavItem
