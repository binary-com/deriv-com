import React, { useEffect, useState } from 'react'
import dxIcon from 'images/svg/deriv-ez/dx-icon.svg'
import dtIcon from 'images/svg/deriv-ez/dt-icon.svg'
import dmt5Icon from 'images/svg/deriv-ez/dmt5-icon.svg'
import dGoIcon from 'images/svg/deriv-ez/go-icon.svg'
import dbIcon from 'images/svg/deriv-ez/db-icon.svg'
import GenericCarousel, { TRenderableData } from 'components/custom/carousel/_platforms-carousel'

const OurPlatforms = () => {
    const [is_loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    const carouselData: TRenderableData[] = [
        {
            icon: dmt5Icon,
            heading: 'Deriv MT5',
            paragraph: '_t_The all-in-one CFD trading platform._t_',
            link: '/dmt5/',
        },
        {
            icon: dtIcon,
            heading: 'Deriv Trader',
            paragraph: '_t_Our flagship app for trading options and multipliers._t_',
            link: '/dtrader/',
        },
        {
            icon: dGoIcon,
            heading: 'Deriv Go',
            paragraph: '_t_Our best trading experience on your mobile._t_',
            link: '/deriv-go/',
        },
        {
            icon: dxIcon,
            heading: 'Deriv X',
            paragraph: '_t_The CFD trading platform to fit your style._t_',
            link: '/derivx/',
        },
        {
            icon: dbIcon,
            heading: 'Deriv Bot',
            paragraph: '_t_Automate your trading. No coding required._t_',
            link: '/dbot/',
        },
    ]
    return (
        <>
            {is_loaded ? (
                <GenericCarousel
                    renderableData={carouselData}
                    mainHeading="_t_Check out our other platforms_t_"
                />
            ) : (
                <></>
            )}
        </>
    )
}

export default OurPlatforms
