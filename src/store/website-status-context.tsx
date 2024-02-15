import React, { createContext, Dispatch, ReactNode, useEffect, useState } from 'react'
import type { WebsiteStatus } from '@deriv/api-types'
import { useCookieState } from 'components/hooks/use-cookie-state'
import { setCookiesWithDomain } from 'common/utility'
import useWS from 'components/hooks/useWS'

type WebsiteStatusProviderProps = {
    children?: ReactNode
}

type WebsiteStatusContextType = {
    setWebsiteStatus: Dispatch<WebsiteStatus | void>
    website_status: WebsiteStatus
}

export const WebsiteStatusContext = createContext<WebsiteStatusContextType>(null)
let statusDataPromise = null
let statusDataPromiseResolve = null

export const WebsiteStatusProvider = ({ children }: WebsiteStatusProviderProps) => {
    const WEBSITE_STATUS_COUNTRY_KEY = 'website_status'
    const { data: wsData, send } = useWS(WEBSITE_STATUS_COUNTRY_KEY)
    const [data, setData] = useState(null)
    const [days_from_today, setDaysFromToday] = useState(null)

    useEffect(() => {
        const data = new Date()
        setDaysFromToday(data.getDate() + 7)
        console.log(statusDataPromise, 'www')
    }, [])

    const [websiteCountryStatus, setWebsiteStatus] = useCookieState(WEBSITE_STATUS_COUNTRY_KEY, {
        expires: days_from_today,
    })

    useEffect(() => {
        if (wsData) {
            console.log('>>> received data directly from ws, about to send it to promise')
            setData(wsData)

            statusDataPromiseResolve(wsData)
        } else if (!statusDataPromise) {
            statusDataPromise = new Promise((resolve) => {
                console.log('>>> setting promise')
                statusDataPromiseResolve = resolve
            })
            console.log('>>> sending request')
            send()
        } else if (statusDataPromise) {
            statusDataPromise.then((prData) => {
                console.log('>>> receiving data through promise')
                console.log(prData, 'www')
                setData(prData)
            })
        }
    }, [send, wsData])

    useEffect(() => {
        if (data) {
            const { clients_country, p2p_config } = data
            setCookiesWithDomain('clients_country', clients_country)
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
