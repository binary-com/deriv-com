import React from 'react'
import { WithIntl } from 'components/localization'
import InOutDigitalOptionsPage from 'features/pages/options/digital/in-out'
import { faq_schema } from 'features/pages/options/digital/in-out/_faq-schema'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DigitalOptionsInOut = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<InOutDigitalOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(DigitalOptionsInOut)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_In/Out | Digital options contract | Deriv_t_"
        description="_t_Open a digital options contract with an In/Out trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
