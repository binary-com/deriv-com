import React from 'react'
import useRegion from 'components/hooks/use-region'
import { WithIntl } from 'components/localization'
import DerivEZ from 'features/pages/deriv-ez'
import ProtectedRoute from 'features/components/molecules/protected-route'

const DerivEZPage = () => {
    const { is_eu, is_region_loading } = useRegion()
    //dummy
    return (
        <ProtectedRoute
            is_page_visible={!is_eu}
            component={<DerivEZ />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(DerivEZPage)
