import React from 'react'
import PageNotFound from '../404'
import CTrader from 'features/pages/deriv-ctrader'
import useRegion from 'components/hooks/use-region'

const CTraderPage = () => {
    const { is_row } = useRegion()
    if (is_row) {
        return <CTrader />
    }
    return <PageNotFound />
}

export default CTraderPage
