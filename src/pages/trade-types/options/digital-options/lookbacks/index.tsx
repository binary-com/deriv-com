import React from 'react'
import { WithIntl } from 'components/localization'
import LookbacksDigitalOptionsPage from 'features/pages/options/digital/lookbacks'
import { faq_schema } from 'features/pages/options/digital/lookbacks/_faq-schema'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const LookBacksOptions = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<LookbacksDigitalOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(LookBacksOptions)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Lookbacks | Digital options contract | Deriv_t_"
        description="_t_Open a digital options contract with a Lookbacks trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
