import React, { useState, useEffect, createContext, Dispatch, ReactNode } from 'react'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
import { AcademyDataType, useAcademyData } from 'components/hooks/use-academy-data'
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
    academy_data: AcademyDataType
    crypto_config: any
    is_eu_country: boolean
    is_livechat_interactive: boolean
    is_loading_lc: boolean
    is_p2p_allowed_country: boolean
    is_uk_country: boolean
    LC_API: any
    setFirstLoadOpenLc: Dispatch<boolean>
    setWebsiteStatus: Dispatch<WebsiteStatusType>
    user_country: string
    website_status_loading: boolean
    website_status: WebsiteStatusType
}

export const DerivStore = createContext<DerivStoreTypes>(null)

export const DerivProvider = ({ children }: DerivProviderProps) => {
    const [website_status, setWebsiteStatus, website_status_loading] = useWebsiteStatus()
    const [academy_data] = useAcademyData()
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
                academy_data,
                crypto_config,
                is_eu_country,
                is_livechat_interactive,
                is_loading_lc,
                is_p2p_allowed_country,
                is_uk_country,
                LC_API,
                setFirstLoadOpenLc,
                setWebsiteStatus,
                user_country,
                website_status_loading,
                website_status,
            }}
        >
            {children}
        </DerivStore.Provider>
    )
}
