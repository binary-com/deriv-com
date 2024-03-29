import React from 'react'
import { NavLinkItems } from '@deriv-com/providers'
import { Localize } from 'components/localization'

export const career_nav_items: NavLinkItems = {
    home: {
        id: 0,
        type: 'direct',
        href: '/careers',
        text: <Localize translate_text="_t_Home_t_" />,
    },
    trade: {
        id: 1,
        type: 'direct',
        href: '/careers/locations/#europe',
        text: <Localize translate_text="_t_Locations_t_" />,
    },
}

export default career_nav_items
