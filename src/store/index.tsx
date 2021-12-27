import React, { useState, useEffect } from 'react'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
import { isEuCountry, isP2PAllowedCountry } from 'common/country-base'

type DerivProviderProps = {
    children?: React.ReactNode
}

export const DerivStore = React.createContext()

export const DerivProvider = ({ children }: DerivProviderProps) => {
    const [website_status, setWebsiteStatus, website_status_loading] = useWebsiteStatus()
    const [is_eu_country, setEuCountry] = useState(null)
    const [is_p2p_allowed_country, setP2PAllowedCountry] = useState(false)
    const [crypto_config, setCryptoConfig] = useState(null)
    const [user_country, setUserCountry] = useState(null)

    useEffect(() => {
        if (website_status) {
            setEuCountry(!!isEuCountry(website_status.clients_country))
            setP2PAllowedCountry(isP2PAllowedCountry(website_status.clients_country))
            setUserCountry(website_status.clients_country)
            if (!crypto_config) {
                setCryptoConfig(website_status.crypto_config)
            }
        }
    }, [website_status])

    return (
        <DerivStore.Provider
            value={{
                is_eu_country,
                is_p2p_allowed_country,
                crypto_config,
                website_status,
                website_status_loading,
                setWebsiteStatus,
                user_country,
            }}
        >
            {children}
        </DerivStore.Provider>
    )
}
