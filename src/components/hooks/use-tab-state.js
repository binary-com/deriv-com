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
    const [active_tab, setActiveTab] = useState('')
    const handleHashChange = () => document.preventDefault()

    useEffect(() => {
        document.addEventListener('hashchange', handleHashChange)

        if (checkElemInArray(tab_list, getLocationHash())) {
            setActiveTab(getLocationHash())
            scrollTop()
        } else {
            setActiveTab(tab_list[0])
        }

        return () => {
            document.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    useEffect(() => {
        if (getLocationHash() !== active_tab && isBrowser()) {
            setLocationHash(active_tab)
        }
    }, [active_tab])

    useEffect(() => {
        if (getLocationHash() === active_tab) return
        if (checkElemInArray(tab_list, getLocationHash())) {
            setActiveTab(getLocationHash())
        } else {
            routeBack()
        }
    }, [getLocationHash()])

    return [active_tab, setActiveTab]
}
