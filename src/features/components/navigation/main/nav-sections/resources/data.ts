import { TSmartNavContent } from '../../types'
// icons
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
            to: '/help-centre/',
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
            external: true,
            target: '_blank',
            to: 'https://community.deriv.com/',
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
            to: '/payment-methods/',
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
            to: '/dmt5-trading-signals/#signal-subscriber/',
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
            external: true,
            target: '_blank',
            to: 'https://academy.deriv.com/',
        },
    },
]
