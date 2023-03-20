import { TSmartNavContent } from '../../../types'
import AffiliateIb from 'images/svg/menu/affiliate-ib.svg'
import BugBounty from 'images/svg/menu/bug-bounty.svg'
import API from 'images/svg/menu/developers.svg'
import PaymentAgent from 'images/svg/menu/payment-agent.svg'

export const partnerNavSectionContent: TSmartNavContent[] = [
    {
        id: 0,
        data: {
            icon: {
                src: AffiliateIb,
                alt: 'affiliates and IBs',
            },
            title: '_t_Affiliates and IBs_t_',
            url: { type: 'internal', to: '/partners/affiliate-ib/' },
        },
    },
    {
        id: 1,
        data: {
            icon: {
                src: PaymentAgent,
                alt: 'Payment agents',
            },
            title: '_t_Terms and conditions_t_',
            url: { type: 'internal', to: '/partners/payment-agent/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 2,
        data: {
            icon: {
                src: API,
                alt: 'API',
            },
            title: '_t_API_t_',
            url: { type: 'company', url_name: 'api', target: '_blank' },
        },
    },
    {
        id: 3,
        data: {
            icon: {
                src: BugBounty,
                alt: 'bug bounty',
            },
            title: '_t_bug bounty_t_',
            url: { type: 'internal', to: '/bug-bounty/' },
        },
    },
]
