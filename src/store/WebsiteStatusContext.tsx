import React, { useEffect, createContext, Dispatch, ReactNode } from 'react'
import type { WebsiteStatus, ServerStatusResponse } from '@deriv/api-types'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
import { useDerivApi } from 'components/hooks/use-deriv-api'

type WebsiteStatusProviderProps = {
    children?: ReactNode
}

export type WebsiteStatusContextType = {
    setWebsiteStatus: Dispatch<WebsiteStatus | void>
    website_status_loading: boolean
    website_status: WebsiteStatus
}

export const WebsiteStatusContext = createContext<WebsiteStatusContextType>(null)

export const WebsiteStatusProvider = ({ children }: WebsiteStatusProviderProps) => {
    const deriv_api = useDerivApi()
    const [website_status, setWebsiteStatus, website_status_loading] = useWebsiteStatus()

    useEffect(() => {
        // Fetch website status from the API & save in the cookies
        const { send } = deriv_api

        send({ website_status: 1 }, (response: ServerStatusResponse) => {
            if (!response.error && !website_status) {
                const {
                    website_status: { clients_country, p2p_config },
                } = response

                setWebsiteStatus({ clients_country, p2p_config })
            }
        })
    }, [deriv_api, setWebsiteStatus, website_status])

    return (
        <WebsiteStatusContext.Provider
            value={{
                setWebsiteStatus,
                website_status_loading,
                website_status,
            }}
        >
            {children}
        </WebsiteStatusContext.Provider>
    )
}
