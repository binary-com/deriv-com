import React, { useState, useEffect, createContext, Dispatch, ReactNode } from 'react'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
import { AcademyDataType, useAcademyData } from 'components/hooks/use-academy-data'
import { useDerivApi, DerivApiProps } from 'components/hooks/use-deriv-api'
import { isEuCountry, isP2PAllowedCountry, isUK } from 'common/country-base'

type DerivProviderProps = {
    children?: ReactNode
}

type WebsiteStatusType = {
    clients_country: string
}

export type DerivStoreType = {
    academy_data: AcademyDataType
    is_eu_country: boolean
    is_p2p_allowed_country: boolean
    is_uk_country: boolean
    setWebsiteStatus: Dispatch<WebsiteStatusType | void>
    user_country: string
    website_status_loading: boolean
    website_status: WebsiteStatusType
    deriv_api: DerivApiProps
    show_non_eu_popup: boolean
    setShowNonEuPopup: React.Dispatch<React.SetStateAction<boolean>>
}

export const DerivStore = createContext<DerivStoreType>(null)

export const DerivProvider = ({ children }: DerivProviderProps) => {
    const deriv_api = useDerivApi()

    const [show_non_eu_popup, setShowNonEuPopup] = useState(false)
    const [website_status, setWebsiteStatus, website_status_loading] = useWebsiteStatus()
    const [academy_data] = useAcademyData()
    const [is_eu_country, setEuCountry] = useState(null)
    const [is_uk_country, setUkCountry] = useState(null)
    const [is_p2p_allowed_country, setP2PAllowedCountry] = useState(false)
    const [user_country, setUserCountry] = useState(null)

    useEffect(() => {
        // Fetch website status from the API & save in the cookies
        const { send } = deriv_api

        send({ website_status: 1 }, (response) => {
            if (!response.error && !website_status) {
                const {
                    website_status: { clients_country },
                } = response

                setWebsiteStatus({ clients_country })
            }
        })
    }, [])

    useEffect(() => {
        if (website_status) {
            const { clients_country } = website_status
            setEuCountry(!!isEuCountry(clients_country))
            setUkCountry(!!isUK(clients_country))
            setP2PAllowedCountry(isP2PAllowedCountry(clients_country))
            setUserCountry(clients_country)
        }
    }, [website_status])

    return (
        <DerivStore.Provider
            value={{
                academy_data,
                is_eu_country,
                is_p2p_allowed_country,
                is_uk_country,
                setWebsiteStatus,
                user_country,
                website_status_loading,
                website_status,
                deriv_api,
                show_non_eu_popup,
                setShowNonEuPopup,
            }}
        >
            {children}
        </DerivStore.Provider>
    )
}

export const useDerivWS = () => {
    const {
        deriv_api: { send },
    } = React.useContext(DerivStore)

    return { send }
}
