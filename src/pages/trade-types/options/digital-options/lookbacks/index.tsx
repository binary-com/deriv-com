import React from 'react'
import { WithIntl } from 'components/localization'
import LookbacksDigitalOptionsPage from 'features/pages/options/digital/lookbacks'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'

const LookBacksOptions = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<LookbacksDigitalOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(LookBacksOptions)
