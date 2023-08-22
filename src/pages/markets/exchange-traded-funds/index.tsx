import React from 'react'
import { WithIntl } from 'components/localization'
import ETFMarket from 'features/pages/markets/etf'
import useRegion from 'components/hooks/use-region'
import PageNotFound from 'features/pages/404'

const ETFMarketPage = () => {
    const { is_row } = useRegion()
    if (is_row) {
        return <ETFMarket />
    }

    return <PageNotFound />
}

export default WithIntl()(ETFMarketPage)
