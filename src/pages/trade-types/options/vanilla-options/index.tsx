import React from 'react'
import VanillaOptions from 'features/pages/options/vanilla'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'
import VanillaSEO from 'features/pages/options/vanilla/seo'

const VanillaOptionsPage = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<VanillaOptions />}
            is_loading={is_region_loading}
            seo={<VanillaSEO />}
        />
    )
}

export default WithIntl()(VanillaOptionsPage)
