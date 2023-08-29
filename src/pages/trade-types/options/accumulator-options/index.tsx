import React from 'react'
import AccumulatorsOptions from 'features/pages/options/accumulator'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'
import AccumulatorSEO from 'features/pages/options/accumulator/seo'

const AccumulatorsOptionsPage = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<AccumulatorsOptions />}
            is_loading={is_region_loading}
            seo={<AccumulatorSEO />}
        />
    )
}

export default WithIntl()(AccumulatorsOptionsPage)
