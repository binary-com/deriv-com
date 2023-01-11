import React, { useEffect, createContext, Dispatch, ReactNode } from 'react'
import type { WebsiteStatus, ServerStatusResponse } from '@deriv/api-types'
import { useCookieState } from 'components/hooks/use-cookie-state'
import useWS from 'components/hooks/useWS'

type WebsiteStatusProviderProps = {
    children?: ReactNode
}

type WebsiteStatusContextType = {
    setWebsiteStatus: Dispatch<WebsiteStatus | void>
    website_status: WebsiteStatus
}

export const WebsiteStatusContext = createContext<WebsiteStatusContextType>(null)

export const WebsiteStatusProvider = ({ children }: WebsiteStatusProviderProps) => {
    const { data, send } = useWS('website_status')

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
        send()
    }, [send])

    useEffect(() => {
        if (data) {
            const { clients_country, p2p_config } = data
            setWebsiteStatus({ clients_country, p2p_config })
        }
    }, [data])

    return (
        <WebsiteStatusContext.Provider
            value={{
                setWebsiteStatus,
                website_status: data,
            }}
        >
            {children}
        </WebsiteStatusContext.Provider>
    )
}
