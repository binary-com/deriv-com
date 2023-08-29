import React from 'react'
import { Helmet } from 'react-helmet'
import { isBrowser } from 'common/utility'
import { WithIntl } from 'components/localization'
import UpAndDownDigitalOptionsPage from 'features/pages/options/digital/up-down'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'
import UpDownSEO from 'features/pages/options/digital/up-down/seo'

const DigitalOptions = () => {
    const { is_row, is_region_loading } = useRegion()
    const canonicalUrl = isBrowser()
        ? `${window.location.origin}/trade-types/options/digital-options/up-and-down`
        : ''

    return (
        <>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <ProtectedRoute
                is_page_visible={is_row}
                component={<UpAndDownDigitalOptionsPage />}
                is_loading={is_region_loading}
                seo={<UpDownSEO />}
            />
        </>
    )
}

export default WithIntl()(DigitalOptions)
