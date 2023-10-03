import React from 'react'
import VanillaOptions from 'features/pages/options/vanilla'
import { faq_schema } from 'features/pages/options/vanilla/_faq-schema'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const VanillaOptionsPage = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<VanillaOptions />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(VanillaOptionsPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Vanilla options | Trade options | Deriv_t_"
        description="_t_Earn a potentially high payout by trading vanilla options on Deriv, if your market prediction is right within a limited timeframe._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
