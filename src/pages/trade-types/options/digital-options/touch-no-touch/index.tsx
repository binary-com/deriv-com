import React from 'react'
import TouchNoTouchDigitalOptionsPage from 'features/pages/options/digital/touch-no-touch'
import { WithIntl } from 'components/localization'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'

const TouchNoTouchDigitalOptions = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<TouchNoTouchDigitalOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(TouchNoTouchDigitalOptions)
