import React from 'react'
import { NavLinkItems } from '@deriv-com/providers'
import { Localize } from 'components/localization'

export const career_nav_items: NavLinkItems = {
    trade: {
        id: 0,
        type: 'direct',
        href: '/careers/locations',
        text: <Localize translate_text="_t_Locations_t_" />,
    },
}

export default career_nav_items
