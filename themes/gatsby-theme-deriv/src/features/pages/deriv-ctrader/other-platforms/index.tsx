import React, { useEffect, useState } from 'react'
import { carousel_data } from './data'
import PlatformsCarousel from 'features/components/templates/trade-platform/other-platforms'

const OtherPlatforms = () => {
    const [is_loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <>
            {is_loaded ? (
                <PlatformsCarousel
                    data={carousel_data}
                    heading="_t_Check out our other platforms_t_"
                />
            ) : null}
        </>
    )
}

export default OtherPlatforms
