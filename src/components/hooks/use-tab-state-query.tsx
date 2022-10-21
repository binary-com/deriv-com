import { useState, useEffect, useMemo } from 'react'
import {
    checkElemInArray,
    getLocationHash,
    isBrowser,
    routeBack,
    scrollTop,
    setLocationHash,
} from 'common/utility'

/**
 * @description this hook will handle the current active tab of your tabs container, by default it will put the active tab in location hash in the url, if you don't need it pass has_no_query as true
    if it's path sensitive and there is no location hash in the url it will use the first item in tab_list as location hash and if the location hash in the url is not valid it will route you back to the previous page.
 * @param tab_list {string[]} the array of tabs
 * @param has_no_query {boolean} to check if we should handle location hash on active tab changes
 * @returns [active_tab , setActiveTab]
 */
export const useTabStateQuery = (tab_list, has_no_query = false, starting_index = 0) => {
    const locationHash = getLocationHash()
    const [active_tab, setActiveTab] = useState(null)

    const hashExistInTabList = useMemo(() => {
        return checkElemInArray(tab_list, locationHash)
    }, [locationHash, tab_list])

    useEffect(() => {
        const isPathSensitive = !has_no_query
        const isBrowserMode = isBrowser()

        if (isPathSensitive) {
            if (locationHash) {
                if (hashExistInTabList) {
                    if (isBrowserMode && active_tab && locationHash !== active_tab) {
                        setLocationHash(active_tab)
                    } else {
                        setActiveTab(locationHash)
                        scrollTop()
                    }
                } else {
                    routeBack()
                }
            } else {
                if (isBrowserMode) {
                    setActiveTab(tab_list[starting_index])
                    setLocationHash(tab_list[starting_index])
                }
            }
        } else {
            if (!active_tab) {
                setActiveTab(tab_list[starting_index])
            }
        }
    }, [active_tab, locationHash, has_no_query, tab_list, hashExistInTabList, starting_index])

    return [active_tab, setActiveTab]
}
