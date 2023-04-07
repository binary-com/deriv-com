import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'

const TopNav = () => {
    return (
        <Flex.Box padding_block="3x" container="fluid" gap="10x">
            <Link size="medium" url={{ type: 'internal', to: '/' }}>
                <Localize translate_text="_t_Deriv website_t_" />
            </Link>
            <Link size="medium" url={{ type: 'internal', to: '/who-we-are/' }}>
                <Localize translate_text="_t_Who we are_t_" />
            </Link>
            <Link size="medium" url={{ type: 'internal', to: '/contact_us/' }}>
                <Localize translate_text="_t_Contact us_t_" />
            </Link>
        </Flex.Box>
    )
}

export default TopNav
