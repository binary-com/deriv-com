import { useState, useEffect } from 'react'
import { getLocationPathname } from 'common/utility'

// Maps navigation main elements (keys) to root pages (values)
const navigation_map = {
    trade: ['dtrader', 'dbot', 'dmt5', 'trade-types'],
    markets: ['markets'],
    about: ['about', 'regulatory', 'why-choose-us', 'partners', 'contact-us', 'careers'],
    resources: ['help-center', 'trader-tools', 'payment-methods', 'dmt5-trading-signals'],
}

export const useActiveLinkState = () => {
    const [currentPage, setCurrentPage] = useState('')

    useEffect(() => {
        let current_root_page = getLocationPathname().match(/\/([a-zA-Z0-9-]*)/)
        if (!current_root_page) return
        Object.keys(navigation_map).forEach((key) => {
            if (navigation_map[key].includes(current_root_page[1])) {
                setCurrentPage(key)
            }
        })
    }, [getLocationPathname()])

    return currentPage
}
