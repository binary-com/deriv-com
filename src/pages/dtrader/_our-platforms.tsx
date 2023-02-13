import React from 'react'
import styled from 'styled-components'
import mt5Icon from '../../images/svg/dtrader/deriv_app_core.svg'
import GenericCarousel from 'components/custom/carousel/_platforms-carousel'

const OurPlatforms = () => {
    const carouselData = [
        {
            icon: mt5Icon,
            heading: 'Deriv MT5',
            paragraph: 'The all-in-one CFD trading platform.',
            link: '/dbot/',
        },
        {
            icon: mt5Icon,
            heading: 'Deriv GO',
            paragraph: 'Our best trading experience on your mobile.',
            link: '/dbot/',
        },
        {
            icon: mt5Icon,
            heading: 'Deriv X',
            paragraph: 'The CFD trading platform to fit your style.',
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
