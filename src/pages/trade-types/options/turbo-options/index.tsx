import React from 'react'
import TurboOptions from 'features/pages/options/turbo'
import { faq_schema } from 'features/pages/options/turbo/_faq-schema'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const TurboOptionsPage = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<TurboOptions />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(TurboOptionsPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Turbo options | Trade options | Deriv_t_"
        description="_t_Start trading turbo options on Deriv Trader and earn a potentially high payout if your market predictions are correct._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
