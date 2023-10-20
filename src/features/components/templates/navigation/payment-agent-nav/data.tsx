import { NavItems } from '../types'

const affiliateNavItems: NavItems = [
    {
        id: 0,
        data: {
            type: 'single-item',
            title: '_t_Deriv Prime_t_',
            content: {
                type: 'internal',
                to: '/partners/deriv-prime/',
            },
        },
    },
    {
        id: 1,
        data: {
            type: 'single-item',
            title: '_t_Affiliates and IBs_t_',
            content: {
                type: 'internal',
                to: '/partners/affiliate-ib/',
            },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 2,
        data: {
            type: 'single-item',
            title: '_t_Affiliates_t_',
            content: {
                type: 'internal',
                to: '/partners/affiliate-ib/',
            },
        },
        visibility: {
            is_eu: true,
        },
    },
    {
        id: 3,
        data: {
            type: 'single-item',
            title: '_t_Payment agents_t_',
            content: {
                type: 'internal',
                to: '/partners/payment-agent/',
            },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 4,
        data: {
            type: 'single-item',
            title: '_t_API_t_',
            content: {
                type: 'company',
                url_name: 'api',
            },
        },
    },
]
export default affiliateNavItems
