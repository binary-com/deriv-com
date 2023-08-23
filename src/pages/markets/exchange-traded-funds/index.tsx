import React from 'react'
import { WithIntl } from 'components/localization'
import ETFMarket from 'features/pages/markets/etf'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'

const ETFMarketPage = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<ETFMarket />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(ETFMarketPage)
