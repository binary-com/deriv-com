import {
    DBotIcon,
    DMT5Icon,
    DerivXIcon,
    DerivGoIcon,
    DTraderIcon,
} from 'images/svg/deriv-trade-types'
import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'

export type PlatformType = {
    id: number
    icon: string
    heading: string
    paragraph: TString
    link: LinkUrlType
}

export const carousel_data: PlatformType[] = [
    {
        id: 1,
        icon: DMT5Icon,
        heading: 'Deriv MT5',
        paragraph: '_t_The all-in-one CFD trading platform._t_',
        link: {
            type: 'internal',
            to: '/dmt5/',
        },
    },
    {
        id: 2,
        icon: DTraderIcon,
        heading: 'Deriv Trader',
        paragraph: '_t_Our flagship app for trading options and multipliers._t_',
        link: {
            type: 'internal',
            to: '/dtrader/',
        },
    },
    {
        id: 3,
        icon: DerivGoIcon,
        heading: 'Deriv Go',
        paragraph: '_t_Our best trading experience on your mobile._t_',
        link: {
            type: 'internal',
            to: '/deriv-go/',
        },
    },
    {
        id: 4,
        icon: DerivXIcon,
        heading: 'Deriv X',
        paragraph: '_t_The CFD trading platform to fit your style._t_',
        link: {
            type: 'internal',
            to: '/derivx/',
        },
    },
    {
        id: 5,
        icon: DBotIcon,
        heading: 'Deriv Bot',
        paragraph: '_t_Automate your trading. No coding required._t_',
        link: {
            type: 'internal',
            to: '/dbot/',
        },
    },
]
