import React from 'react'
import { WithIntl } from 'components/localization'
import HomePage from 'features/pages/home'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const Home = () => {
    return <HomePage />
}

export default WithIntl()(Home)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv_t_"
        description="_t_Deriv: an online trading platform available 24/7 with a wide selection of derivatives._t_"
        has_organization_schema
        pageContext={pageContext}
    />
)
