import React from 'react'
import { NavLinkItems } from '@deriv-com/providers'
import { Localize } from 'components/localization'

export const partnersItems: NavLinkItems = {
    trade: {
        id: 0,
        type: 'direct',
        href: '/deriv-prime',
        text: <Localize translate_text="_t_Deriv Prime_t_" />,
    },
    affiliates: {
        id: 1,
        href: '/affiliates-and-ibs',
        text: <Localize translate_text="_t_Affiliates and IBs_t_" />,
        type: 'direct',
    },
    'payment-agents': {
        id: 2,
        href: '/payment-agents',
        text: <Localize translate_text="_t_Payment agents_t_" />,
        type: 'direct',
    },
    'deriv-api': {
        id: 3,
        href: '/api',
        text: <Localize translate_text="_t_API_t_" />,
        type: 'direct',
    },
}

export const partnersEUItems: NavLinkItems = {
    trade: {
        id: 0,
        type: 'direct',
        href: '/deriv-prime',
        text: <Localize translate_text="_t_Deriv Prime_t_" />,
    },
    affiliates: {
        id: 1,
        href: '/affiliates-and-ibs',
        text: <Localize translate_text="_t_Affiliates and IBs_t_" />,
        type: 'direct',
    },
    'deriv-api': {
        id: 3,
        href: '/api',
        text: <Localize translate_text="_t_API_t_" />,
        type: 'direct',
    },
}
