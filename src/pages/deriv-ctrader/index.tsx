import React from 'react'
import PageNotFound from '../404'
import useRegion from 'components/hooks/use-region'
import { WithIntl } from 'components/localization'
import DerivCTrader from 'features/pages/deriv-ctrader'

const DerivCTraderPage = () => {
    const { is_row } = useRegion()
    if (is_row) {
        return <DerivCTrader />
    }

    return <PageNotFound />
}

export default WithIntl()(DerivCTraderPage)
