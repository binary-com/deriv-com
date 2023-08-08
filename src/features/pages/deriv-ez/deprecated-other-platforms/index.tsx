import React, { useEffect, useState } from 'react'
import { DbIcon, DGoIcon, Dmt5Icon, DtIcon, DxIcon } from 'images/svg/deriv-ez'
import GenericCarousel, { TRenderableData } from 'components/custom/carousel/_platforms-carousel'

const OurPlatforms = () => {
    const [is_loaded, setLoaded] = useState(false)

    useEffect(() => {
        // added force rerendering because whole page is on new approach and only this component is on old approach. Need to refactor
        setLoaded(true)
    }, [])

    const carouselData: TRenderableData[] = [
        {
            icon: Dmt5Icon,
            heading: 'Deriv MT5',
            paragraph: '_t_The all-in-one CFD trading platform._t_',
            link: '/dmt5/',
        },
        {
            icon: DtIcon,
            heading: 'Deriv Trader',
            paragraph: '_t_Our flagship app for trading options and multipliers._t_',
            link: '/dtrader/',
        },
        {
            icon: DGoIcon,
            heading: 'Deriv Go',
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
            icon: DbIcon,
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
            ) : null}
        </>
    )
}

export default OurPlatforms
