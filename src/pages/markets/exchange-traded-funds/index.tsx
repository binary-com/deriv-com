import React from 'react'
import { WithIntl } from 'components/localization'
import ETFMarket from 'features/pages/markets/etf'

const ETFMarketPage = () => {
    return <ETFMarket />
}

export default WithIntl()(ETFMarketPage)
