import React from 'react'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { WithIntl } from 'components/localization'
import AsiansDigitalOptionsPage from 'features/pages/options/digital/asians'
import useRegion from 'components/hooks/use-region'

const DigitalOptionsAsians = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<AsiansDigitalOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(DigitalOptionsAsians)
