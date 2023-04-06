import { TNavItems } from '../types'

type TcareerNavNames = 'home' | 'location' | 'besquare'

const careerNavItems: TNavItems<TcareerNavNames> = [
    {
        id: 0,
        data: {
            type: 'single-item',
            active: 'home',
            title: '_t_Home_t_',
            content: {
                type: 'internal',
                to: '/careers/',
            },
        },
    },
    {
        id: 1,
        data: {
            type: 'single-item',
            active: 'location',
            title: '_t_Location_t_',
            content: {
                type: 'internal',
                to: '/careers/locations/#europe',
            },
        },
    },
    {
        id: 2,
        data: {
            type: 'single-item',
            active: 'besquare',
            title: '_t_Besquare_t_',
            content: {
                type: 'internal',
                to: '/careers/besquare/',
            },
        },
    },
]

export default careerNavItems
