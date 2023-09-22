import React from 'react'
import useRegion from 'components/hooks/use-region'
import { WithIntl } from 'components/localization'
import DerivEZ from 'features/pages/deriv-ez'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DerivEZPage = () => {
    const { is_eu, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={!is_eu}
            component={<DerivEZ />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(DerivEZPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Deriv EZ – a CFD trading platform | Deriv_t_"
        description="_t_Deriv EZ is our intuitive CFD trading platform where you can trade forex, commodities, stocks & indices, cryptocurrencies, and derived indices._t_"
        pageContext={pageContext}
    />
)
