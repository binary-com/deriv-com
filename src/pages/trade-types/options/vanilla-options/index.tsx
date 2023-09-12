import React from 'react'
import VanillaOptions from 'features/pages/options/vanilla'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'

const VanillaOptionsPage = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<VanillaOptions />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(VanillaOptionsPage)
