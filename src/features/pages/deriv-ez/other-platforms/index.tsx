import React from 'react'
import dxIcon from '../../../../images/svg/deriv-ez/dx-icon.svg'
import dtIcon from '../../../../images/svg/deriv-ez/dt-icon.svg'
import dmt5Icon from '../../../../images/svg/deriv-ez/dmt5-icon.svg'
import dGoIcon from '../../../../images/svg/deriv-ez/go-icon.svg'
import dbIcon from '../../../../images/svg/deriv-ez/db-icon.svg'
import GenericCarousel from 'components/custom/carousel/_platforms-carousel'

const OurPlatforms = () => {
    const carouselData = [
        {
            icon: dtIcon,
            heading: 'Deriv Trader',
            paragraph: 'Our flagship app for trading options and multipliers.',
            link: '/dtrader/',
        },
        {
            icon: dGoIcon,
            heading: 'Deriv Go',
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
            icon: dmt5Icon,
            heading: 'Deriv MT5',
            paragraph: 'The all-in-one CFD trading platform.',
            link: '/dmt5/',
        },
        {
            icon: dbIcon,
            heading: 'Deriv Bot',
            paragraph: 'Automate your trading. No coding required.',
            link: '/dbot/',
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
