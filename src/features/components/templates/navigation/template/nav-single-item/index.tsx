import React from 'react'
import { TNavSingleItem } from '../../types'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'

const NavSingleItem = <T extends string>({
    item,
    is_mobile,
}: {
    is_mobile?: boolean
    item: TNavSingleItem<T>
}) => {
    return (
        <Link
            size={is_mobile ? 'large' : 'medium'}
            padding_block="2x"
            padding_inline="5x"
            url={item.content}
            weight={is_mobile ? 'bold' : 'normal'}
        >
            <Localize translate_text={item.title} />
        </Link>
    )
}

export default NavSingleItem
