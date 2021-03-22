import { useState, useEffect } from 'react'
import { getLocationPathname } from 'common/utility'

// Maps navigation main elements (keys) to root pages (values)
const getNavigationMap = (type) => {
    switch (type) {
        case 'main':
            return {
                trade: ['dtrader', 'dbot', 'dmt5', 'trade-types'],
                markets: ['markets'],
                about: [
                    'about',
                    'regulatory',
                    'why-choose-us',
                    'partners',
                    'contact_us',
                    'careers',
                ],
                resources: [
                    'help-centre',
                    'trader-tools',
                    'payment-methods',
                    'dmt5-trading-signals',
                ],
            }
        case 'careers':
            return {
                home: ['careers'],
                locations: ['locations'],
            }
        case 'partners':
            return {
                affiliate: ['affiliate-ib'],
                payment: ['payment-agent'],
            }
    }
}

export const useActiveLinkState = (type) => {
    const [currentPage, setCurrentPage] = useState('')

    const navigation_map = getNavigationMap(type)

    const updateCurrentPage = (type) => {
        const current_root_page = getLocationPathname().match(/\/([a-zA-Z0-9-_]+)/g)
        if (!current_root_page || current_root_page.length === 0) return

        // Only get the first level root page on main pages. Else take the second level.
        const level = type === 'main' || current_root_page.length === 1 ? 0 : 1

        Object.keys(navigation_map).forEach((key) => {
            if (navigation_map[key].includes(current_root_page[level].replace('/', ''))) {
                setCurrentPage(key)
            }
        })
    }

    useEffect(() => updateCurrentPage(type), [getLocationPathname()])

    return currentPage
}
