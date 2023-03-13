import { TNavItems } from '../../types'
import { aboutUsNavSectionContent } from './about'
import { legalNavSectionContent } from './legal'
import { marketSectionContent } from './market'
import { partnerNavSectionContent } from './partner'
import { trade_nav_section_items } from './platform'
import { resourcesNavSectionContent } from './resources/data'

type TMainSectionNames = 'trade' | 'markets' | 'about' | 'resources' | 'partner' | 'legal'

export const mainItems: TNavItems<TMainSectionNames> = [
    {
        id: 0,
        data: {
            title: '_t_Trade_t_',
            active: 'trade',
            content: trade_nav_section_items,
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Markets_t_',
            active: 'markets',
            content: marketSectionContent,
        },
    },
    {
        id: 2,
        data: {
            title: '_t_About_t_',
            active: 'about',
            content: aboutUsNavSectionContent,
        },
    },
    {
        id: 3,
        data: {
            title: '_t_Resources_t_',
            active: 'resources',
            content: resourcesNavSectionContent,
        },
    },
    {
        id: 4,
        data: {
            title: '_t_Legal_t_',
            active: 'legal',
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
            active: 'partner',
            content: partnerNavSectionContent,
        },
        visibility: {
            is_mobile: true,
        },
    },
]
