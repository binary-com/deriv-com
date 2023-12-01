import React from 'react'
import Forex from 'features/pages/markets/forex'
import { WithIntl } from 'components/localization'

const ForexMarketPage = () => {
    return <Forex />
}
export default WithIntl()(ForexMarketPage)
