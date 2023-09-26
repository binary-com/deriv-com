import React from 'react'
import AccumulatorsOptions from 'features/pages/options/accumulator'
import { faq_schema } from 'features/pages/options/accumulator/_faq-schema'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { SEO } from 'components/containers'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { TGatsbyHead } from 'features/types'

const AccumulatorsOptionsPage = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<AccumulatorsOptions />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(AccumulatorsOptionsPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Accumulator options | Trade options | Deriv_t_"
        description="_t_Grow your potential payout at every tick with accumulator options. Accumulator trading is available on volatility indices under derived indices._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
