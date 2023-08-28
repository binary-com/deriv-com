import React from 'react'
import { isBrowser } from 'common/utility'
import { WithIntl } from 'components/localization'
import UpAndDownDigitalOptionsPage from 'features/pages/options/digital/up-down'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'

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

export const Head = () => {
    const canonicalUrl = isBrowser()
        ? `${window.location.origin}/trade-types/options/digital-options/up-and-down`
        : ''

    return <link rel="canonical" href={canonicalUrl} />
}
