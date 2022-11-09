import React from 'react'
import { TAvailableMarketSmartContent } from './types'
import MobileAvailableMarkets from './components/available_markets.mobile'
import DesktopAvailableMarkets from './components/available_markets.desktop'
import useMediaQuery from 'components/hooks/use-media-query'
import { size } from 'themes/device'
import useVisibleContent from 'components/hooks/use-visible-content'
import { useCountryRule } from 'components/hooks/use-country-rule'

interface IAvailableMarketsProps<T> {
    items: T[]
}

const AvailableMarkets = <T extends TAvailableMarketSmartContent>({
    items,
}: IAvailableMarketsProps<T>) => {
    const rules = useCountryRule()

    const visible_data = useVisibleContent<T>({
        content: items,
        config: rules,
    })

    const is_mobile = useMediaQuery(`(max-width: ${size.bp680}px)`)

    return is_mobile ? (
        <MobileAvailableMarkets items={visible_data} />
    ) : (
        <DesktopAvailableMarkets items={visible_data} />
    )
}

export default AvailableMarkets
