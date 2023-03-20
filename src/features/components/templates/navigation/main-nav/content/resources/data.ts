import { TSmartNavContent } from '../../../types'
import Blog from 'images/svg/custom/blog-nav.svg'
import Community from 'images/svg/menu/community.svg'
import Help from 'images/svg/menu/help-center.svg'
import Payment from 'images/svg/menu/payment-methods.svg'
import Signals from 'images/svg/menu/signals.svg'

export const resourcesNavSectionContent: TSmartNavContent[] = [
    {
        id: 0,
        data: {
            icon: {
                src: Help,
                alt: 'help centre',
            },
            title: '_t_Help centre_t_',
            url: { type: 'internal', to: '/help-centre/' },
        },
    },
    {
        id: 1,
        data: {
            icon: {
                src: Community,
                alt: 'community',
            },
            title: '_t_Community_t_',
            url: { type: 'company', url_name: 'community', target: '_blank' },
        },
    },
    {
        id: 2,
        data: {
            icon: {
                src: Payment,
                alt: 'payment methods',
            },
            title: '_t_Payment methods_t_',
            url: { type: 'internal', to: '/payment-methods/' },
        },
    },
    {
        id: 3,
        data: {
            icon: {
                src: Signals,
                alt: 'Deriv MT5 signals',
            },
            title: '_t_Deriv MT5 Signals_t_',
            url: { type: 'internal', to: '/dmt5-trading-signals/#signal-subscriber/' },
        },
    },
    {
        id: 4,
        data: {
            icon: {
                src: Blog,
                alt: 'academy',
            },
            title: '_t_Academy_t_',
            url: { type: 'company', url_name: 'academy', target: '_blank' },
        },
    },
]
