import React from 'react'
import { DerivStore } from 'store'
import { LocationProvider } from 'components/localization/locale-context'

export const MockProvider = ({ is_eu_country, children, locale }) => {
    return (
        <DerivStore.Provider
            value={{
                is_eu_country,
                is_p2p_allowed_country: true,
                crypto_config: {},
                website_status: {},
                website_status_loading: {},
                setWebsiteStatus: {},
            }}
        >
            <LocationProvider pageContext={{ locale }}>{children}</LocationProvider>
        </DerivStore.Provider>
    )
}
