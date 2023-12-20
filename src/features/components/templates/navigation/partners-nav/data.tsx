import React from 'react'
import { NavLinkItems } from '@deriv-com/providers'
import { Localize } from 'components/localization'
import { deriv_api_url } from 'common/constants'

export const partnersItems: NavLinkItems = {
    trade: {
        id: 0,
        type: 'direct',
        href: '/partners/deriv-prime',
        text: <Localize translate_text="_t_Deriv Prime_t_" />,
    },
    affiliates: {
        id: 1,
        href: '/partners/affiliate-ib',
        text: <Localize translate_text="_t_Affiliates and IBs_t_" />,
        type: 'direct',
    },
    'payment-agents': {
        id: 2,
        href: '/partners/payment-agent',
        text: <Localize translate_text="_t_Payment agents_t_" />,
        type: 'direct',
    },
    'deriv-api': {
        id: 3,
        href: deriv_api_url,
        text: <Localize translate_text="_t_Deriv API_t_" />,
        type: 'direct',
    },
}

export const partnersEUItems: NavLinkItems = {
    trade: {
        id: 0,
        type: 'direct',
        href: '/partners/deriv-prime',
        text: <Localize translate_text="_t_Deriv Prime_t_" />,
    },
    affiliates: {
        id: 1,
        href: '/partners/affiliate-ib',
        text: <Localize translate_text="_t_Affiliates_t_" />,
        type: 'direct',
    },
    'deriv-api': {
        id: 3,
        href: deriv_api_url,
        text: <Localize translate_text="_t_Deriv API_t_" />,
        type: 'direct',
    },
}
