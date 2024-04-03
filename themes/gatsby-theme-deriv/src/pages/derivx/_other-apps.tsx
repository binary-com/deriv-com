import React from 'react'
import { MT5Icon, DTIcon, DGoIcon, DBIcon } from '../../images/svg/deriv-x'
import ctIcon from '../../images/svg/ctrader/light-ctrader-logo.svg'
import GenericCarousel, { TRenderableData } from 'components/custom/carousel/_platforms-carousel'
import { PlatformType } from 'features/pages/deriv-ctrader/other-platforms/data'
import PlatformsCarousel from 'features/components/templates/trade-platform/other-platforms'

const carouselData: PlatformType[] = [
    {
        id: 1,
        icon: MT5Icon,
        heading: 'Deriv MT5',
        paragraph: '_t_The all-in-one CFD trading platform._t_',
        link: {
            type: 'internal',
            to: '/dmt5/',
        }
    },
    {
        id: 2,
        icon: ctIcon,
        heading: 'Deriv cTrader',
        paragraph: '_t_Fast CFDs platform with inbuilt copy trading._t_',
        link: {
            type: 'internal',
            to: '/deriv-ctrader/',
        }
    },
    {
        id: 3,
        icon: DTIcon,
        heading: 'Deriv Trader',
        paragraph: '_t_Our flagship app for trading options and multipliers._t_',
        link: {
            type: 'internal',
            to: '/dtrader/',
        }
    },
    {
        id: 4,
        icon: DGoIcon,
        heading: 'Deriv GO',
        paragraph: '_t_Our best trading experience on your mobile._t_',
        link: {
            type: 'internal',
            to: '/deriv-go/',
        }
    },
    {
        id: 5,
        icon: DBIcon,
        heading: 'Deriv Bot',
        paragraph: '_t_Automate your trading. No coding required._t_',
        link: {
            type: 'internal',
            to: '/dbot/',
        }
    },
]

const OurPlatforms = () => (
    <PlatformsCarousel
        data={carouselData}
        heading="_t_Check out our other platforms_t_"
    />
)

export default OurPlatforms
