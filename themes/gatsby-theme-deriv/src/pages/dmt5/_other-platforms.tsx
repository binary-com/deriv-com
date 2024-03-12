import React from 'react'
import dxIcon from '../../images/svg/custom/rebranding/deriv-x-icon.svg'
import ctIcon from '../../images/svg/ctrader/light-ctrader-logo.svg'
import dtIcon from '../../images/svg/custom/rebranding/dtrader-icon.svg'
import dGoIcon from '../../images/svg/custom/rebranding/deriv-go-icon.svg'
import dbIcon from '../../images/svg/dmt5/db-icon.svg'
import GenericCarousel, { TRenderableData } from 'components/custom/carousel/_platforms-carousel'

const carouselData: TRenderableData[] = [
    {
        icon: ctIcon,
        heading: 'Deriv cTrader',
        paragraph: '_t_Fast CFDs platform with inbuilt copy trading._t_',
        link: '/deriv-ctrader/',
    },
    {
        icon: dtIcon,
        heading: 'Deriv Trader',
        paragraph: '_t_Our flagship app for trading options and multipliers._t_',
        link: '/dtrader/',
    },
    {
        icon: dxIcon,
        heading: 'Deriv X',
        paragraph: '_t_The CFD trading platform to fit your style._t_',
        link: '/derivx/',
    },
    {
        icon: dGoIcon,
        heading: 'Deriv GO',
        paragraph: '_t_Our best trading experience on your mobile._t_',
        link: '/deriv-go/',
    },
    {
        icon: dbIcon,
        heading: 'Deriv Bot',
        paragraph: '_t_Automate your trading. No coding required._t_',
        link: '/dbot/',
    },
]

const OurPlatforms = () => (
    <GenericCarousel
        renderableData={carouselData}
        mainHeading="_t_Check out our other platforms_t_"
    />
)

export default OurPlatforms
