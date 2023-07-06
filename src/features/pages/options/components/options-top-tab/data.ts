import { TString } from 'types/generics'
import DigitalOptionIcon from 'images/svg/trade-types/options/digital-options-icon.svg'
import VanillaOptionIcon from 'images/svg/trade-types/options/vanilla-options-icon.svg'
import AccumulatorsOptionIcon from 'images/svg/trade-types/options/accumulators-options-icon.svg'
import DigitalOptionActiveIcon from 'images/svg/trade-types/options/digital-options-active-icon.svg'
import VanillaOptionActiveIcon from 'images/svg/trade-types/options/vanilla-options-active-icon.svg'
import AccumulatorsOptionActiveIcon from 'images/svg/trade-types/options/accumulators-options-active-icon.svg'
import { InternalLinkType } from 'features/types'

export interface OptionsTopTab {
    icon: string
    active_icon: string
    alt: TString
    title: TString
    url: InternalLinkType
}

export const OptionsTopTabData: OptionsTopTab[] = [
    {
        icon: DigitalOptionIcon,
        active_icon: DigitalOptionActiveIcon,
        alt: '_t_Digital options_t_',
        title: '_t_Digital options_t_',
        url: {
            type: 'internal',
            to: '/trade-types/options/digital-options/up-and-down',
        },
    },
    {
        icon: AccumulatorsOptionIcon,
        active_icon: AccumulatorsOptionActiveIcon,
        alt: '_t_Accumulator options_t_',
        title: '_t_Accumulator options_t_',
        url: {
            type: 'internal',
            to: '/trade-types/options/accumulators-options',
        },
    },
    {
        icon: VanillaOptionIcon,
        active_icon: VanillaOptionActiveIcon,
        alt: '_t_Vanilla options_t_',
        title: '_t_Vanilla options_t_',
        url: {
            type: 'internal',
            to: '/trade-types/options/vanilla-options',
        },
    },
]
