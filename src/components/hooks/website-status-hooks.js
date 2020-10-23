import React from 'react'
import { CookieStorage } from 'common/storage'
import { BinarySocketBase } from 'common/websocket/socket_base'

const WEBSITE_STATUS_COUNTRY_KEY = 'website_status'
const website_status_country_cookie = new CookieStorage(WEBSITE_STATUS_COUNTRY_KEY)
let loaded = false

export const useWebsiteStatus = () => {
    const [website_status, setWebsiteStatus] = React.useState(null)

    React.useEffect(() => {
        if (!loaded) {
            loaded = true
            const binary_socket = BinarySocketBase.init()

            binary_socket.onopen = () => {
                binary_socket.send(JSON.stringify({ website_status: 1 }))
            }

            binary_socket.onmessage = (msg) => {
                const response = JSON.parse(msg.data)

                if (!response.error) {
                    setWebsiteStatus(response.website_status)
                    website_status_country_cookie.set(
                        WEBSITE_STATUS_COUNTRY_KEY,
                        response.website_status,
                    )
                }

                binary_socket.close()
            }
        }
    }, [])

    return [website_status]
}
