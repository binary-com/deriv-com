import { TSmartNavContent } from '../../../types'
import Career from 'images/svg/menu/careers.svg'
import Choose from 'images/svg/menu/choose.svg'
import Contact from 'images/svg/menu/contact.svg'
import DerivLife from 'images/svg/menu/deriv-life.svg'
import Partner from 'images/svg/menu/partner.svg'
import RegulatoryInfo from 'images/svg/menu/regulatory.svg'
import Story from 'images/svg/menu/story.svg'

export const aboutUsNavSectionContent: TSmartNavContent[] = [
    {
        id: 0,
        data: {
            icon: {
                src: Story,
                alt: 'who we are',
            },
            title: '_t_Who we are_t_',
            to: '/who-we-are/',
        },
    },
    {
        id: 1,
        data: {
            icon: {
                src: RegulatoryInfo,
                alt: 'regulatory information',
            },
            title: '_t_Regulatory information_t_',
            to: '/regulatory/',
        },
    },
    {
        id: 2,
        data: {
            icon: {
                src: Choose,
                alt: 'why choose us',
            },
            title: '_t_Why choose us_t_',
            to: '/why-choose-us/',
        },
    },
    {
        id: 3,
        data: {
            icon: {
                src: Partner,
                alt: 'partnership programmes',
            },
            title: '_t_Partnership programmes_t_',
            to: '/partners/',
        },
    },
    {
        id: 4,
        data: {
            icon: {
                src: Contact,
                alt: 'contact us',
            },
            title: '_t_Contact us_t_',
            to: '/contact_us/',
        },
    },
    {
        id: 5,
        data: {
            icon: {
                src: Career,
                alt: 'careers',
            },
            title: '_t_Careers_t_',
            to: '/careers/',
        },
    },
    {
        id: 6,
        data: {
            icon: {
                src: DerivLife,
                alt: 'Deriv life',
            },
            title: '_t_Deriv life_t_',
            external: true,
            target: '_blank',
            to: 'https://derivlife.com/',
        },
    },
]
