import React from 'react'
import { WithIntl } from 'components/localization'
import DigitDigitalOptionsPage from 'features/pages/options/digital/digits'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'
import DigitsSEO from 'features/pages/options/digital/digits/seo'

const DigitDigitalOptions = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<DigitDigitalOptionsPage />}
            is_loading={is_region_loading}
            seo={<DigitsSEO />}
        />
    )
}

export default WithIntl()(DigitDigitalOptions)
