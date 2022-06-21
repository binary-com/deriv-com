import { useState, useEffect } from 'react'
import {
    checkElemInArray,
    getLocationHash,
    isBrowser,
    routeBack,
    scrollTop,
    setLocationHash,
} from 'common/utility'

export const useTabStateQuery = (tab_list, has_no_query = false) => {
    const locationHash = getLocationHash()
    const isTabInLocation = checkElemInArray(tab_list, locationHash)

    const isPathSensitive = !has_no_query

    // Set the intial value based on the passed props
    const [active_tab, setActiveTab] = useState(() => {
        if (locationHash && isTabInLocation && isPathSensitive) {
            return locationHash
        }
        return tab_list[0]
    })

    // if tab state is path sensitive sync the active tab with location hash on active tab or location hash change
    useEffect(() => {
        if (isPathSensitive) {
            if (!locationHash || !isTabInLocation) {
                setLocationHash(active_tab)
            } else {
                setActiveTab(locationHash)
                scrollTop()
            }
        }
    }, [active_tab, isTabInLocation, locationHash, isPathSensitive])

    // if tab state is path sensitive and locationHash and active tab are not sync, sync them
    useEffect(() => {
        if (isPathSensitive) {
            if (locationHash !== active_tab && isBrowser()) {
                setLocationHash(active_tab)
            }
        }
    }, [active_tab, locationHash, isPathSensitive])

    // if tab state is path sensitive,
    // if location hash exists in tab_list array and active tab and location hash are not in sync, sync them
    // if location hash does not exist tab_list it means the route is wrong and should go back
    useEffect(() => {
        if (isPathSensitive) {
            if (locationHash !== active_tab && isTabInLocation) {
                setActiveTab(locationHash)
                scrollTop()
            } else if (!isTabInLocation) {
                routeBack()
            }
        }
    }, [active_tab, isTabInLocation, locationHash, isPathSensitive])

    return [active_tab, setActiveTab]
}
