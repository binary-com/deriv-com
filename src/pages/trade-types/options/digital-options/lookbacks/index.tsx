import React from 'react'
import { WithIntl } from 'components/localization'
import LookbacksDigitalOptionsPage from 'features/pages/options/digital/lookbacks'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'
import LookbacksSEO from 'features/pages/options/digital/lookbacks/seo'

const LookBacksOptions = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<LookbacksDigitalOptionsPage />}
            is_loading={is_region_loading}
            seo={<LookbacksSEO />}
        />
    )
}

export default WithIntl()(LookBacksOptions)
