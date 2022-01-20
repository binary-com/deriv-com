import React, { useState, useEffect, createContext, Dispatch, ReactNode } from 'react'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
import { useLivechat } from 'components/hooks/use-livechat'
import { isEuCountry, isP2PAllowedCountry, isUK } from 'common/country-base'

type DerivProviderProps = {
    children?: ReactNode
}

type WebsiteStatusType = {
    clients_country: string
    crypto_config: any
}

type DerivStoreTypes = {
    setWebsiteStatus: Dispatch<any>
    is_p2p_allowed_country: boolean
    user_country: string
    is_eu_country: boolean
    is_uk_country: boolean
    is_livechat_interactive: boolean
    website_status_loading: boolean
    LC_API: any
    is_loading_lc: boolean
    crypto_config: any
    website_status: WebsiteStatusType
    setFirstLoadOpenLc: Dispatch<any>
}

export const DerivStore = createContext<DerivStoreTypes>(null)

export const DerivProvider = ({ children }: DerivProviderProps) => {
    const [website_status, setWebsiteStatus, website_status_loading] = useWebsiteStatus()
    const [is_eu_country, setEuCountry] = useState(null)
    const [is_uk_country, setUkCountry] = useState(null)
    const [is_p2p_allowed_country, setP2PAllowedCountry] = useState(false)
    const [crypto_config, setCryptoConfig] = useState(null)
    const [user_country, setUserCountry] = useState(null)
    const [is_livechat_interactive, LC_API, is_loading_lc, setFirstLoadOpenLc] = useLivechat()

    useEffect(() => {
        if (website_status) {
            setEuCountry(!!isEuCountry(website_status.clients_country))
            setUkCountry(!!isUK(website_status.clients_country))
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
                is_uk_country,
                is_p2p_allowed_country,
                crypto_config,
                website_status,
                website_status_loading,
                setWebsiteStatus,
                user_country,
                is_livechat_interactive,
                LC_API,
                is_loading_lc,
                setFirstLoadOpenLc,
            }}
        >
            {children}
        </DerivStore.Provider>
    )
}
