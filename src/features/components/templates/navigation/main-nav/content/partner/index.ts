import { SmartNavContent } from '../../../types'

export const partnerNavSectionContent: SmartNavContent[] = [
    {
        id: 0,
        data: {
            title: '_t_Affiliates and IBs_t_',
            url: { type: 'internal', to: '/partners/affiliate-ib/' },
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Payment agents_t_',
            url: { type: 'internal', to: '/partners/payment-agent/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 2,
        data: {
            title: '_t_API_t_',
            url: { type: 'company', url_name: 'api', target: '_blank' },
        },
    },
    {
        id: 3,
        data: {
            title: '_t_Bug bounty_t_',
            url: { type: 'internal', to: '/bug-bounty/' },
        },
    },
]
