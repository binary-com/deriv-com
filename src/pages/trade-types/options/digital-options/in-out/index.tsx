import React from 'react'
import { WithIntl } from 'components/localization'
import InOutDigitalOptionsPage from 'features/pages/options/digital/in-out'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'
import InOutSEO from 'features/pages/options/digital/in-out/seo'

const DigitalOptionsInOut = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<InOutDigitalOptionsPage />}
            is_loading={is_region_loading}
            seo={<InOutSEO />}
        />
    )
}

export default WithIntl()(DigitalOptionsInOut)
