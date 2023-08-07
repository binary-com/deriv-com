import React from 'react'
import { Helmet } from 'react-helmet'
import { WithIntl } from 'components/localization'
import UpAndDownDigitalOptionsPage from 'features/pages/options/digital/up-down'

const DigitalOptions = () => {
    const canonicalUrl = `${window.location.origin}/trade-types/options/digital-options/up-and-down`

    return (
        <>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <UpAndDownDigitalOptionsPage />
        </>
    )
}

export default WithIntl()(DigitalOptions)
