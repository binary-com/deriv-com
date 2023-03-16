import React from 'react'
import mt5Icon from '../../images/svg/dbot/mt5.svg'
import goIcon from '../../images/svg/dbot/go-icon.svg'
import ezIcon from '../../images/svg/dbot/ez-icon.svg'
import dxIcon from '../../images/svg/dbot/dx-icon.svg'
import dtIcon from '../../images/svg/dbot/dt-icon.svg'
import GenericCarousel from 'components/custom/carousel/_platforms-carousel'

const OurPlatforms = () => {
    const carouselData = [
        {
            icon: mt5Icon,
            heading: 'Deriv MT5',
            paragraph: 'The all-in-one CFD trading platform.',
            link: '/dmt5/',
        },
        {
            icon: dtIcon,
            heading: 'Deriv Trader',
            paragraph: 'Our flagship app for trading options and multipliers.',
            link: '/dtrader/',
        },
        {
            icon: goIcon,
            heading: 'Deriv GO',
            paragraph: 'Our best trading experience on your mobile.',
            link: '/deriv-go/',
        },
        {
            icon: dxIcon,
            heading: 'Deriv X',
            paragraph: 'The CFD trading platform to fit your style.',
            link: '/derivx/',
        },
        {
            icon: ezIcon,
            heading: 'Deriv EZ',
            paragraph: 'Our mobile-first CFD trading platform.',
            link: '/derivez/',
        },
    ]
    return (
        <>
            <GenericCarousel
                renderableData={carouselData}
                mainHeading="Check out our other platforms"
            />
        </>
    )
}

export default OurPlatforms
