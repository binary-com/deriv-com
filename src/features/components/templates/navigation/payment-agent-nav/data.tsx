import { TNavItems } from '../types'

const affiliateNavItems: TNavItems = [
    {
        id: 0,
        data: {
            type: 'single-item',
            title: '_t_Affiliates and IBs_t_',
            content: {
                type: 'internal',
                to: '/partners/affiliate-ib/',
            },
        },
    },
    {
        id: 1,
        data: {
            type: 'single-item',
            title: '_t_Payment agents_t_',
            content: {
                type: 'internal',
                to: '/partners/payment-agent/',
            },
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 2,
        data: {
            type: 'single-item',
            title: '_t_API_t_',
            content: {
                type: 'company',
                url_name: 'api',
            },
        },
    },
    {
        id: 3,
        data: {
            type: 'single-item',
            title: '_t_Bug bounty_t_',
            content: {
                type: 'internal',
                to: '/bug-bounty/',
            },
        },
    },
]
export default affiliateNavItems
