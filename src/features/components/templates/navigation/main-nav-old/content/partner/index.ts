import { SmartNavContent } from '../../../types'

export const partnerNavSectionContent: SmartNavContent[] = [
    {
        id: 0,
        data: {
            title: '_t_Deriv Prime_t_',
            url: { type: 'internal', to: '/partners/deriv-prime/' },
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Affiliates and IBs_t_',
            url: { type: 'internal', to: '/partners/affiliate-ib/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 2,
        data: {
            title: '_t_Affiliates_t_',
            url: { type: 'internal', to: '/partners/affiliate-ib/' },
        },
        visibility: {
            is_eu: true,
        },
    },
    {
        id: 3,
        data: {
            title: '_t_Payment agents_t_',
            url: { type: 'internal', to: '/partners/payment-agent/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 4,
        data: {
            title: '_t_API_t_',
            url: { type: 'company', url_name: 'api', target: '_blank' },
        },
    },
]
