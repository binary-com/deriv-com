import React from 'react'
import PageNotFound from '../404'
import useRegion from 'components/hooks/use-region'
import { WithIntl } from 'components/localization'
import DeriCTrader from 'features/pages/deriv-ctrader'

const DeriCTraderPage = () => {
    const { is_row } = useRegion()
    if (is_row) {
        return <DeriCTrader />
    }

    return <PageNotFound />
}

export default WithIntl()(DeriCTraderPage)
