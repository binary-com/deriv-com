import React from 'react'
import { isBrowser } from 'common/utility'
import { WithIntl } from 'components/localization'
import UpAndDownDigitalOptionsPage from 'features/pages/options/digital/up-down'
import { faq_schema } from 'features/pages/options/digital/up-down/_faq-schema'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DigitalOptions = () => {
    const { is_row, is_region_loading } = useRegion()

    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<UpAndDownDigitalOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(DigitalOptions)

export const Head = ({ pageContext }: TGatsbyHead) => {
    const canonicalUrl = isBrowser()
        ? `${window.location.origin}/trade-types/options/digital-options/up-and-down`
        : ''

    return (
        <SEO
            title="_t_Up/Down | Digital options contract | Deriv_t_"
            description="_t_Open a digital options contract with an Up/Down trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
            pageContext={pageContext}
        >
            <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
            <link rel="canonical" href={canonicalUrl} />
        </SEO>
    )
}
