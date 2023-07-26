import React, { createContext, Dispatch, ReactNode, useEffect, useState } from 'react'
import type { WebsiteStatus } from '@deriv/api-types'
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
    const WEBSITE_STATUS_COUNTRY_KEY = 'website_status'
    const { data, send } = useWS(WEBSITE_STATUS_COUNTRY_KEY)
    const [days_from_today, setDaysFromToday] = useState(null)

    useEffect(() => {
        const data = new Date()
        setDaysFromToday(data.getDate() + 7)
    }, [])

    const [websiteCountryStatus, setWebsiteStatus] = useCookieState(WEBSITE_STATUS_COUNTRY_KEY, {
        expires: days_from_today,
    })

    useEffect(() => {
        send()
    }, [send])

    useEffect(() => {
        if (data) {
            const { clients_country, p2p_config } = data
            setWebsiteStatus((oldVal) => ({ clients_country, p2p_config, ...oldVal }))
        }
    }, [data, setWebsiteStatus])

    return (
        <WebsiteStatusContext.Provider
            value={{
                setWebsiteStatus,
                website_status: websiteCountryStatus,
            }}
        >
            {children}
        </WebsiteStatusContext.Provider>
    )
}
