import React from 'react'
import { WithIntl } from 'components/localization'
import UpAndDownDigitalOptionsPage from 'features/pages/options/digital/up-down'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'

const DigitalOptions = () => {
    const { is_row, is_region_loading } = useRegion()

    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<UpAndDownDigitalOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(DigitalOptions)
