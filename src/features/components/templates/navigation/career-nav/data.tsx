import { TNavItems } from '../types'

type TCareerNavNames = 'home' | 'location' | 'besquare'

const career_nav_items: TNavItems<TCareerNavNames> = [
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
                to: '/careers/locations/',
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

export default career_nav_items
