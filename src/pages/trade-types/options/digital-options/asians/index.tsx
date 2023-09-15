import React from 'react'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { WithIntl } from 'components/localization'
import AsiansDigitalOptionsPage from 'features/pages/options/digital/asians'
import { faq_schema } from 'features/pages/options/digital/asians/_faq-schema'
import useRegion from 'components/hooks/use-region'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DigitalOptionsAsians = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<AsiansDigitalOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(DigitalOptionsAsians)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Asians | Digital options contract | Deriv_t_"
        description="_t_Open a digital options contract with an Asians trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
