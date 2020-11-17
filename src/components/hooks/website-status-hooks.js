import React from 'react'
import { CookieStorage } from 'common/storage'
import { BinarySocketBase } from 'common/websocket/socket_base'

const WEBSITE_STATUS_COUNTRY_KEY = 'website_status'
const website_status_country_cookie = new CookieStorage(WEBSITE_STATUS_COUNTRY_KEY)

export const useWebsiteStatus = () => {
    const [website_status, setWebsiteStatus] = React.useState(
        JSON.parse(website_status_country_cookie.get(WEBSITE_STATUS_COUNTRY_KEY) || null),
    )

    React.useEffect(() => {
        if (!website_status) {
            const binary_socket = BinarySocketBase.init()

            binary_socket.onopen = () => {
                binary_socket.send(JSON.stringify({ website_status: 1 }))
            }

            binary_socket.onmessage = (msg) => {
                const response = JSON.parse(msg.data)

                if (!response.error) {
                    const today = new Date()
                    const next_week_date = new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate() + 7,
                    )
                    setWebsiteStatus(response.website_status)
                    const { clients_country, crypto_config } = response.website_status
                    website_status_country_cookie.set(
                        WEBSITE_STATUS_COUNTRY_KEY,
                        JSON.stringify({ clients_country, crypto_config }),
                        { expires: next_week_date },
                    )
                }

                binary_socket.close()
            }
        }
    }, [])

    return [website_status]
}
