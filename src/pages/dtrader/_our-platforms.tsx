import React from 'react'
import { GoIcon, EzIcon, DxIcon, Mt5Icon, DbIcon } from 'images/svg/deriv-trade-types'
import GenericCarousel, { TRenderableData } from 'components/custom/carousel/_platforms-carousel'

const carouselData: TRenderableData[] = [
    {
        icon: Mt5Icon,
        heading: 'Deriv MT5',
        paragraph: '_t_The all-in-one CFD trading platform._t_',
        link: '/dmt5/',
    },
    {
        icon: GoIcon,
        heading: 'Deriv GO',
        paragraph: '_t_Our best trading experience on your mobile._t_',
        link: '/deriv-go/',
    },
    {
        icon: DxIcon,
        heading: 'Deriv X',
        paragraph: '_t_The CFD trading platform to fit your style._t_',
        link: '/derivx/',
    },
    {
        icon: EzIcon,
        heading: 'Deriv EZ',
        paragraph: '_t_Our mobile-first CFD trading platform._t_',
        link: '/deriv-ez/',
    },
    {
        icon: DbIcon,
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
