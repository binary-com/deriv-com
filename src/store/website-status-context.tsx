import React, { useEffect, createContext, Dispatch, ReactNode } from 'react'
import type { WebsiteStatus } from '@deriv/api-types'
import { useCookieState } from 'components/hooks/use-cookie-state'
import useWS from 'components/hooks/useWS'
import { useClientCountry } from 'components/hooks/use-client-country'
import { getDateFromToday } from 'common/utility'

type WebsiteStatusProviderProps = {
    children?: ReactNode
}

type WebsiteStatusContextType = {
    setWebsiteStatus: Dispatch<WebsiteStatus | void>
    website_status: WebsiteStatus
}

export const WebsiteStatusContext = createContext<WebsiteStatusContextType>(null)

export const WebsiteStatusProvider = ({ children }: WebsiteStatusProviderProps) => {
    const { clients_country } = useClientCountry()
    const { data, send } = useWS('website_status')
    const [website_status, setWebsiteStatus] = useCookieState('website_status', {
        expires: getDateFromToday(7),
    })

    useEffect(() => {
        send()
    }, [send])

    useEffect(() => {
        setWebsiteStatus((prev) => ({ ...prev, clients_country }))
    }, [clients_country, setWebsiteStatus])

    useEffect(() => {
        if (data) {
            const { p2p_config } = data
            setWebsiteStatus((prev) => ({ ...prev, p2p_config }))
        }
    }, [data, setWebsiteStatus])

    return (
        <WebsiteStatusContext.Provider
            value={{
                website_status,
                setWebsiteStatus,
            }}
        >
            {children}
        </WebsiteStatusContext.Provider>
    )
}
