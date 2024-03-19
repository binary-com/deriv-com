import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'

const TopNav = () => {
    return (
        <Flex.Box padding_block="3x" container="fluid" gap="16x">
            <Link size="medium" url={{ type: 'internal', to: '/' }} font_family="UBUNTU">
                <Localize translate_text="_t_Deriv website_t_" />
            </Link>
            <Link size="medium" url={{ type: 'internal', to: '/who-we-are/' }} font_family="UBUNTU">
                <Localize translate_text="_t_Who we are_t_" />
            </Link>
            <Link size="medium" url={{ type: 'internal', to: '/contact-us/' }} font_family="UBUNTU">
                <Localize translate_text="_t_Contact us_t_" />
            </Link>
        </Flex.Box>
    )
}

export default TopNav
