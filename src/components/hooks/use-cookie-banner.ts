import React from 'react'
import { isBrowser } from 'common/utility'
import { RegionContext } from 'store/RegionContext'
import { CookieStorage } from 'common/storage'
import useGTMData from 'components/hooks/use-gtm-data'

export const useCookieBanner = () => {
    const [should_show, setShouldShow] = React.useState(false)
    const [gtm_data, setGTMData] = useGTMData()
    const { is_region_loading, is_eu } = React.useContext(RegionContext)
    const has_dataLayer = isBrowser() && window.dataLayer
    const TRACKING_STATUS_KEY = 'tracking_status'
    const tracking_status_cookie = React.useMemo(
        () => new CookieStorage(TRACKING_STATUS_KEY),
        [TRACKING_STATUS_KEY],
    )

    const accept = () => {
        tracking_status_cookie.set(TRACKING_STATUS_KEY, 'accepted')

        if (!gtm_data && has_dataLayer) setGTMData({ event: 'allow_tracking' })

        setShouldShow(false)
    }

    const decline = () => {
        tracking_status_cookie.set(TRACKING_STATUS_KEY, 'declined')

        setShouldShow(false)
    }

    React.useEffect(() => {
        if (!is_region_loading) {
            const tracking_status = tracking_status_cookie.get(TRACKING_STATUS_KEY)
            const is_tracking_accepted = tracking_status === 'accepted'
            const allow_tracking = (!is_eu || is_tracking_accepted) && !gtm_data && has_dataLayer

            if (is_eu && !tracking_status) setShouldShow(true)

            if (allow_tracking) {
                window.onload = () => {
                    window.setTimeout(() => {
                        setGTMData({ event: 'allow_tracking' })
                    }, 2000)
                }
            }
        }
    }, [is_eu, gtm_data, has_dataLayer, is_region_loading, setGTMData, tracking_status_cookie])

    return {
        should_show,
        accept,
        decline,
    }
}
