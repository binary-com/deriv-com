import React from 'react'
import dxIcon from '../../images/svg/dmt5/dx-icon.svg'
import dtIcon from '../../images/svg/dmt5/dt-icon.svg'
import ezIcon from '../../images/svg/dmt5/ez-icon.svg'
import dGoIcon from '../../images/svg/dmt5/go-icon.svg'
import dbIcon from '../../images/svg/dmt5/db-icon.svg'
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
            icon: ezIcon,
            heading: 'Deriv EZ',
            paragraph: 'Our mobile-first CFD trading platform.',
            link: '/derivez/',
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
                mainHeading="Check out ours other platforms"
            />
        </>
    )
}

export default OurPlatforms
