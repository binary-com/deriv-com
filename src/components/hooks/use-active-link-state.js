import { useState, useEffect } from 'react'

// Maps navigation main elements (keys) to root pages (values)
const navigationMap = {
    trade: ['dtrader', 'dbot', 'dmt5', 'trade-types'],
    markets: ['markets'],
    about: ['about', 'regulatory', 'why-choose-us', 'partners', 'contact-us', 'careers'],
    resources: ['help-center', 'trader-tools', 'payment-methods', 'dmt5-trading-signals'],
}

export const useActiveLinkState = () => {
    const [currentPage, setCurrentPage] = useState('')

    useEffect(() => {
        let current_root_page = window.location.pathname.match('/([a-zA-Z0-9-]{0,})')
        if (!current_root_page) return
        Object.keys(navigationMap).forEach((key) => {
            if (navigationMap[key].includes(current_root_page[1])) {
                setCurrentPage(key)
            }
        })
    }, [window.location.pathname])

    return currentPage
}
