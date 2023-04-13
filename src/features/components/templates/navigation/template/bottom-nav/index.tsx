import React from 'react'
import { marketItems } from './data'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'

const BottomNav = () => {
    return (
        <Flex.Box bgcolor="secondary" padding_block="8x" gap="10x" justify="center" align="center">
            {marketItems.map((item) => (
                <Link key={item.title} size="medium" url={item.link}>
                    <Localize translate_text={item.title} />
                </Link>
            ))}
        </Flex.Box>
    )
}

export default BottomNav
