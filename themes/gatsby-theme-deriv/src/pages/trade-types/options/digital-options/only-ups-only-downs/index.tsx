import React from 'react'
import { WithIntl } from 'components/localization'
import OnlyUpsOnlyDowns from 'features/pages/options/digital/only-ups-only-downs'
import { faq_schema } from 'features/pages/options/digital/only-ups-only-downs/_faq-schema'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const OnlyUpsAndOnlyDowns = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<OnlyUpsOnlyDowns />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(OnlyUpsAndOnlyDowns)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Only ups/Only downs | Digital options contract | Deriv_t_"
        description="_t_Open a digital options contract with an Only ups/Only downs trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
