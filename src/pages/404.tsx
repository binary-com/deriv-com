import React from 'react'
import { WithIntl } from 'components/localization'
import PageNotFound from 'features/pages/404'

const NotFound = () => {
    return <PageNotFound />
}

export default WithIntl()(NotFound)
