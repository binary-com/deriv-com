import { SmartNavContent } from '../../../types'

export const resourcesNavSectionContent: SmartNavContent[] = [
    {
        id: 0,
        data: {
            title: '_t_Help centre_t_',
            url: { type: 'internal', to: '/help-centre/' },
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Community_t_',
            url: { type: 'company', url_name: 'community', target: '_blank' },
        },
    },
    {
        id: 2,
        data: {
            title: '_t_Traders’ tools_t_',
            url: { type: 'internal', to: '/trader-tools/' },
        },
    },
    {
        id: 3,
        data: {
            title: '_t_Payment methods_t_',
            url: { type: 'internal', to: '/payment-methods/' },
        },
    },
    {
        id: 4,
        data: {
            title: '_t_Deriv MT5 Signals_t_',
            url: { type: 'internal', to: '/dmt5-trading-signals/#signal-subscriber/' },
        },
    },
    {
        id: 5,
        data: {
            title: '_t_Status page_t_',
            url: { type: 'non-company', href: 'https://deriv.statuspage.io', show_eu_modal: true },
        },
        visibility: {
            is_mobile: true,
        },
    },
    {
        id: 6,
        data: {
            title: '_t_ Deriv Blog_t_',
            url: { type: 'company', url_name: 'academy', target: '_blank' },
        },
    },
]
