import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useWebsiteStatus } from 'components/hooks/website-status-hooks'
import { isEuCountry, isP2PAllowedCountry } from 'common/country-base'
import useIsLoggedIn from 'components/hooks/use-is-logged-in'

export const DerivStore = React.createContext()

export const DerivProvider = ({ children }) => {
    const [website_status] = useWebsiteStatus()
    const [is_logged_in] = useIsLoggedIn()
    const [is_eu_country, setEuCountry] = useState(null)
    const [is_p2p_allowed_country, setP2PAllowedCountry] = useState(false)
    const [crypto_config, setCryptoConfig] = useState(null)

    useEffect(() => {
        if (website_status) {
            setEuCountry(!!isEuCountry(website_status.clients_country))
            setP2PAllowedCountry(isP2PAllowedCountry(website_status.clients_country))
            if (!crypto_config) {
                setCryptoConfig(website_status.crypto_config)
            }
        }
    }, [website_status])

    return (
        <DerivStore.Provider
            value={{
                crypto_config,
                is_eu_country,
                is_logged_in,
                is_p2p_allowed_country,
            }}
        >
            {children}
        </DerivStore.Provider>
    )
}

DerivProvider.propTypes = {
    children: PropTypes.node,
}
