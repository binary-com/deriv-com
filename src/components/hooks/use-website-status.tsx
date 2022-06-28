import { useState, useLayoutEffect } from 'react'
import { useCookieState } from './use-cookie-state'
import { BinarySocketBase } from 'common/websocket/socket_base'
import { getDateFromToday } from 'common/utility'

const WEBSITE_STATUS_COUNTRY_KEY = 'website_status'
const COOKIE_EXPIRY_DAYS = 7

export const useWebsiteStatus = () => {
    const [website_status, setWebsiteStatus] = useCookieState(null, WEBSITE_STATUS_COUNTRY_KEY, {
        expires: getDateFromToday(COOKIE_EXPIRY_DAYS),
    })

    const [is_loading, setLoading] = useState(true)

    useLayoutEffect(() => {
        setLoading(true)
        if (!website_status) {
            const binary_socket = BinarySocketBase.init()
            binary_socket.onopen = () => {
                binary_socket.send(JSON.stringify({ website_status: 1 }))
            }

            binary_socket.onmessage = (msg) => {
                const response = JSON.parse(msg.data)

                if (!response.error) {
                    const { clients_country } = response.website_status

                    setWebsiteStatus({ clients_country })
                }
                setLoading(false)
                binary_socket.close()
            }
        } else {
            setLoading(false)
        }
    }, [setWebsiteStatus, website_status])

    return [website_status, setWebsiteStatus, is_loading]
}

export const useWebsiteStatusApi = () => {
    // For proper redirection process, this api call will give us the accurate clients's ip address
    // Due to the flexibility to change client's country code via endpoint, it's messing up the redirection flow
    // Therefore we need a direct call from the API
    const [website_status_api, setWebsiteStatusApi] = useState(null)

    useLayoutEffect(() => {
        const binary_socket = BinarySocketBase.init()
        binary_socket.onopen = () => {
            binary_socket.send(JSON.stringify({ website_status: 1 }))
        }

        binary_socket.onmessage = (msg) => {
            const response = JSON.parse(msg.data)

            if (!response.error) {
                const { clients_country } = response.website_status

                setWebsiteStatusApi({ clients_country })
            }
            binary_socket.close()
        }
    }, [website_status_api])

    return website_status_api
}
