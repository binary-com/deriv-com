import React from 'react'
import { WithIntl } from 'components/localization'
import OnlyUpsOnlyDowns from 'features/pages/options/digital/only-ups-only-downs'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'

const OnlyUpsAndOnlyDowns = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<OnlyUpsOnlyDowns />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(OnlyUpsAndOnlyDowns)
