import React from 'react'
import mt5Icon from '../../images/svg/deriv-x/mt5.svg'
import dtIcon from '../../images/svg/deriv-x/dt-icosn.svg'
import ezIcon from '../../images/svg/deriv-x/ez-icon.svg'
import dGoIcon from '../../images/svg/deriv-x/go-icon.svg'
import dbIcon from '../../images/svg/deriv-x/db-icon.svg'
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
            icon: dGoIcon,
            heading: 'Deriv Go',
            paragraph: 'Our best trading experience on your mobile.',
            link: '/deriv-go/',
        },
        {
            icon: dtIcon,
            heading: 'Deriv Trader',
            paragraph: 'Our flagship app for trading options and multipliers.',
            link: '/dtrader/',
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
