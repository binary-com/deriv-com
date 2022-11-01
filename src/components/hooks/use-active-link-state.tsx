import { useState, useEffect, useCallback } from 'react'
import { getLocationPathname, getLanguage } from 'common/utility'

// Maps navigation main elements (keys) to root pages (values)
const getNavigationMap = (type) => {
    switch (type) {
        case 'main':
            return {
                trade: ['dtrader', 'dbot', 'dmt5', 'trade-types', 'derivx', 'deriv-go'],
                markets: ['markets'],
                about: [
                    'story',
                    'regulatory',
                    'why-choose-us',
                    'partners',
                    'contact_us',
                    'careers',
                    'who-we-are',
                ],
                resources: [
                    'help-centre',
                    'trader-tools',
                    'payment-methods',
                    'dmt5-trading-signals',
                    'academy',
                ],
            }
        case 'careers':
            return {
                home: ['careers'],
                locations: ['locations'],
                besquare: ['besquare'],
            }
        case 'partners':
            return {
                affiliate: ['affiliate-ib'],
                payment: ['payment-agent'],
            }
        case 'markets':
            return {
                derived: ['derived-fx', 'basket-indices', 'synthetic'],
                forex: ['forex'],
                stock: ['stock'],
                cryptocurrencies: ['cryptocurrencies'],
                commodities: ['commodities'],
            }
    }
}

export const useActiveLinkState = (type) => {
    const [currentPage, setCurrentPage] = useState('')

    const navigation_map = getNavigationMap(type)

    const updateCurrentPage = useCallback(
        (type) => {
            const current_root_page = getLocationPathname().match(/\/([a-zA-Z0-9-_]+)/g)
            if (!current_root_page || current_root_page.length === 0) return

            const current_lang = getLanguage()
            let level = 0
            if (current_lang == 'en') {
                // Only get the first level root page on main pages. Else take the second level.
                level = type === 'main' || current_root_page.length === 1 ? 0 : 1
            } else {
                level = current_root_page.length === 1 ? 0 : type === 'markets' ? 2 : 1
            }

            Object.keys(navigation_map).forEach((key) => {
                if (navigation_map[key].includes(current_root_page[level].replace('/', ''))) {
                    setCurrentPage(key)
                }
            })
        },
        [navigation_map],
    )

    useEffect(() => updateCurrentPage(type), [type, updateCurrentPage])

    return currentPage
}
