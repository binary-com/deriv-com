import React, { useEffect } from 'react'
import { isBrowser } from 'common/utility'

const useGTMData = () => {
    const [gtm_data, setGTMData] = React.useState(null)
    const has_dataLayer = isBrowser() && window.dataLayer

    useEffect(() => {
        if (gtm_data) {
            has_dataLayer && window.dataLayer.push(gtm_data)
        }
    }, [gtm_data])

    return [gtm_data, setGTMData]
}

export default useGTMData
