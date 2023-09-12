import React from 'react'
import { WithIntl } from 'components/localization'
import PageNotFound from 'features/pages/404'
import { isBrowser } from 'common/utility'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const NotFound = () => {
    return isBrowser() && <PageNotFound />
}

export default WithIntl()(NotFound)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_404 - Page not found | Deriv_t_"
        description="_t_The page you are looking for does not exist._t_"
        pageContext={pageContext}
    />
)
