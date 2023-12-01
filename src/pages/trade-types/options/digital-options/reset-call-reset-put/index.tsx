import React from 'react'
import ResetCallOptionsPage from 'features/pages/options/digital/reset-call'
import { faq_schema } from 'features/pages/options/digital/reset-call/_faq-schema'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const ResetCallDigitalOptions = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<ResetCallOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(ResetCallDigitalOptions)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Reset call/reset put | Digital options contract | Deriv_t_"
        description="_t_Open a digital options contract with a Reset call/Reset put trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
