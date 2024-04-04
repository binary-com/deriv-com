import { useEffect, useMemo, useState } from 'react'
import { isBrowser } from 'common/utility'
import { CookieStorage } from 'common/storage'
import useGTMData from 'components/hooks/use-gtm-data'
import useBuildVariant from 'features/hooks/use-build-variant'

export const useCookieBanner = () => {
    const [should_show, setShouldShow] = useState(false)
    const [gtm_data, setGTMData] = useGTMData()
    const {region} = useBuildVariant()
    const has_dataLayer = isBrowser() && window.dataLayer
    const TRACKING_STATUS_KEY = 'tracking_status'
    const tracking_status_cookie = useMemo(
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

    useEffect(() => {
        const tracking_status = tracking_status_cookie.get(TRACKING_STATUS_KEY)
        const is_tracking_accepted = tracking_status === 'accepted'
        const allow_tracking = (region !== "eu" || is_tracking_accepted) && !gtm_data && has_dataLayer

        if (region === "eu" && !tracking_status) setShouldShow(true)

        if (allow_tracking && document.readyState === 'complete') {
            setGTMData({ event: 'allow_tracking' })
        }
    }, [region, gtm_data, has_dataLayer, setGTMData, tracking_status_cookie])

    return {
        should_show,
        accept,
        decline,
    }
}
