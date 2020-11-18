import { useState, useEffect } from 'react'
import { isBrowser, scrollTop } from 'common/utility'

const getHashValue = hash => hash ? hash.slice(1) : null
const checkTabList = (tab_list, tab) => tab_list.includes(tab)

export const useTabState = (tab_list) => {
    const [active_tab, setActiveTab] = useState(tab_list[0])

    useEffect(() => {
        const hash_val = getHashValue(location.hash)
        
        if (!location.hash || !checkTabList(tab_list, hash_val)) {
            location.hash = `#${active_tab}`
        } else {
            setActiveTab(hash_val)
            scrollTop()
        }
    }, [])

    useEffect(() => {
        const hash_val = getHashValue(location.hash)
        
        if (hash_val !== active_tab && isBrowser()) {
            location.hash = `#${active_tab}`
        }
    }, [active_tab])

    useEffect(() => {
        const hash_val = getHashValue(location.hash)
        
        if (hash_val !== active_tab && checkTabList(tab_list, hash_val)) {
            setActiveTab(hash_val)
            scrollTop()
        } else if (!checkTabList(tab_list, hash_val)) {
            window.history.back()
        }
    }, [location.hash])

    return [active_tab, setActiveTab]
}