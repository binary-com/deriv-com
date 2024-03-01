import React from 'react'
import HighLowDigitalOptionsPage from 'features/pages/options/digital/high-low'
import { faq_schema } from 'features/pages/options/digital/high-low/_faq-schema'
import { WithIntl } from 'components/localization'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const HighLowDigitalOptions = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<HighLowDigitalOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(HighLowDigitalOptions)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_High/Low ticks | Digital options contract | Deriv_t_"
        description="_t_Open a digital options contract with a High/Low ticks trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
