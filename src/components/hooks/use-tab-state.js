import { useState, useEffect } from 'react'
import {
    checkElemInArray,
    getLocationHash,
    isBrowser,
    routeBack,
    scrollTop,
    setLocationHash,
} from 'common/utility'

export const useTabState = (tab_list) => {
    const [active_tab, setActiveTab] = useState(
        getLocationHash() && checkElemInArray(tab_list, getLocationHash())
            ? getLocationHash()
            : tab_list[0],
    )

    useEffect(() => {
        if (!getLocationHash() || !checkElemInArray(tab_list, getLocationHash())) {
            setLocationHash(active_tab)
        } else {
            setActiveTab(getLocationHash())
            scrollTop()
        }
    }, [])

    useEffect(() => {
        if (getLocationHash() !== active_tab && isBrowser()) {
            setLocationHash(active_tab)
        }
    }, [active_tab])

    useEffect(() => {
        if (getLocationHash() !== active_tab && checkElemInArray(tab_list, getLocationHash())) {
            setActiveTab(getLocationHash())
            scrollTop()
        } else if (!checkElemInArray(tab_list, getLocationHash())) {
            routeBack()
        }
    }, [getLocationHash()])

    return [active_tab, setActiveTab]
}
