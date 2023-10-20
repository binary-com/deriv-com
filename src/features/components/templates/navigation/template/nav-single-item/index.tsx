import React from 'react'
import { useNavContext } from '../nav-context'
import type { NavLinkItem } from '../../types'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'

interface NavSingleItemProps {
    is_mobile?: boolean
    item: NavLinkItem
}

const NavSingleItem = ({ item, is_mobile }: NavSingleItemProps) => {
    const { onCloseMenu } = useNavContext()
    return (
        <Link
            size={is_mobile ? 'large' : 'medium'}
            padding_block="2x"
            padding_inline="8x"
            url={item?.content}
            weight={is_mobile ? 'bold' : 'normal'}
            font_family="UBUNTU"
            onClick={onCloseMenu}
            md={{
                padding_inline: '0x',
            }}
            break_word="normal"
        >
            <Localize translate_text={item.title} />
        </Link>
    )
}

export default NavSingleItem
