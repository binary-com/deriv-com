import { TNavItems } from '../../types'
import { aboutUsNavSectionContent, aboutUsNavSectionContentMobile } from './about'
import { legalNavSectionContent } from './legal'
import { marketSectionContent } from './market'
import { partnerNavSectionContent } from './partner'
import { trade_nav_section_items } from './platform'
import { resourcesNavSectionContent } from './resources/data'

export const mainItems: TNavItems = [
    {
        id: 0,
        data: {
            title: '_t_Trade_t_',
            type: 'multi-column',
            content: trade_nav_section_items,
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Markets_t_',
            type: 'single-column',
            content: marketSectionContent,
        },
    },
    {
        id: 2,
        data: {
            title: '_t_About us_t_',
            type: 'single-column',
            content: aboutUsNavSectionContent,
        },
        visibility: {
            is_mobile: false,
        },
    },
    {
        id: 22,
        data: {
            title: '_t_About us_t_',
            type: 'single-column',
            content: aboutUsNavSectionContentMobile,
        },
        visibility: {
            is_mobile: true,
        },
    },

    {
        id: 3,
        data: {
            title: '_t_Resources_t_',
            type: 'single-column',
            content: resourcesNavSectionContent,
        },
    },
    {
        id: 4,
        data: {
            title: '_t_Legal_t_',
            type: 'single-column',
            content: legalNavSectionContent,
        },
        visibility: {
            is_mobile: true,
        },
    },
    {
        id: 5,
        data: {
            title: '_t_Partner_t_',
            type: 'single-column',
            content: partnerNavSectionContent,
        },
        visibility: {
            is_mobile: true,
        },
    },
]
