import React, { useState, useEffect, createContext, Dispatch, ReactNode } from 'react'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
import { AcademyDataType, useAcademyData } from 'components/hooks/use-academy-data'
import { useWebsocket, useDerivSocketProps } from 'components/hooks/use-websocket'
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
    deriv_socket: useDerivSocketProps
    show_non_eu_popup: boolean
    setShowNonEuPopup: React.Dispatch<React.SetStateAction<boolean>>
}

export const DerivStore = createContext<DerivStoreType>(null)

export const DerivProvider = ({ children }: DerivProviderProps) => {
    const deriv_socket = useWebsocket()

    const [show_non_eu_popup, setShowNonEuPopup] = useState(false)
    const [website_status, setWebsiteStatus, website_status_loading] = useWebsiteStatus()
    const [academy_data] = useAcademyData()
    const [is_eu_country, setEuCountry] = useState(null)
    const [is_uk_country, setUkCountry] = useState(null)
    const [is_p2p_allowed_country, setP2PAllowedCountry] = useState(false)
    const [user_country, setUserCountry] = useState(null)

    // Fetch website status from the API & save in the cookies
    useEffect(() => {
        const { send } = deriv_socket

        send({
            data: { website_status: 1 },
            onmessage: {
                action: (response) => {
                    if (!response.error && !website_status) {
                        const {
                            website_status: { clients_country },
                        } = response

                        setWebsiteStatus({ clients_country })
                    }
                },
                dependencies: ['website_status'],
            },
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
                deriv_socket,
                show_non_eu_popup,
                setShowNonEuPopup,
            }}
        >
            {children}
        </DerivStore.Provider>
    )
}

export const useuseDerivSocket = () => {
    const {
        deriv_socket: { send, receive },
    } = React.useContext(DerivStore)

    return { send, receive }
}
