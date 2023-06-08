import React from 'react'
import PageNotFound from '../404'
import useRegion from 'components/hooks/use-region'
import { WithIntl } from 'components/localization'
import DerivEZ from 'features/pages/deriv-ez'

const DerivEZPage = () => {
    const { is_row } = useRegion()
    if (is_row) {
        return <DerivEZ />
    }

    return <PageNotFound />
}

export default WithIntl()(DerivEZPage)
