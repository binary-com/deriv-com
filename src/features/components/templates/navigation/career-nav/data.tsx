import { NavItems } from '../types'

const career_nav_items: NavItems = [
    {
        id: 0,
        data: {
            type: 'single-item',
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
            title: '_t_Locations_t_',
            content: {
                type: 'internal',
                to: '/careers/locations/',
            },
        },
    },
]

export default career_nav_items
