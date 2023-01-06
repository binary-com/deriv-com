import React, { useEffect, createContext, Dispatch, ReactNode } from 'react'
import type { WebsiteStatus, ServerStatusResponse } from '@deriv/api-types'
import { useDerivApi } from 'components/hooks/use-deriv-api'
import { useCookieState } from 'components/hooks/use-cookie-state'

type WebsiteStatusProviderProps = {
    children?: ReactNode
}

export type WebsiteStatusContextType = {
    setWebsiteStatus: Dispatch<WebsiteStatus | void>
    website_status: WebsiteStatus
}

export const WebsiteStatusContext = createContext<WebsiteStatusContextType>(null)

export const WebsiteStatusProvider = ({ children }: WebsiteStatusProviderProps) => {
    const deriv_api = useDerivApi()

    const getDateFromToday = (num_of_days: number) => {
        const today = new Date()

        return new Date(today.getFullYear(), today.getMonth(), today.getDate() + num_of_days)
    }

    const WEBSITE_STATUS_COUNTRY_KEY = 'website_status'
    const COOKIE_EXPIRY_DAYS = 7

    const [website_status, setWebsiteStatus] = useCookieState(WEBSITE_STATUS_COUNTRY_KEY, {
        expires: getDateFromToday(COOKIE_EXPIRY_DAYS),
    })

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
                website_status,
            }}
        >
            {children}
        </WebsiteStatusContext.Provider>
    )
}
