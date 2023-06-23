import React from 'react'
import PageNotFound from '../404'
import DerivCTrader from 'features/pages/deriv-ctrader'
import useRegion from 'components/hooks/use-region'
import { WithIntl } from 'components/localization'

const CTraderPage = () => {
    const { is_row } = useRegion()
    if (is_row) {
        return <DerivCTrader />
    }
    return <PageNotFound />
}

export default WithIntl()(CTraderPage)
