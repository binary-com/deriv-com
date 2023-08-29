import React from 'react'
import { WithIntl } from 'components/localization'
import PageNotFound from 'features/pages/404'
import { isBrowser } from 'common/utility'

const NotFound = () => {
    return isBrowser() && <PageNotFound />
}

export default WithIntl()(NotFound)
